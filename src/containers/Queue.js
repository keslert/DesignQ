import React, { useReducer, useMemo, useState, useLayoutEffect } from 'react';
import Canvas from '../components/Canvas';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import Timeline from './Timeline';
import * as starters from '../core/data/starters';
import { produceFlyer } from '../core/producer';
import { Flex, Box } from 'rebass';
import { precompute } from '../core/generator';
import { useWindowSize } from '../core/lib/hooks';
import queryString from 'query-string';
import { 
  copyFlyer,
  getInitialJourney,
  _updateJourney,
} from '../core/journey';
import { linkTemplate, copyTemplate, getItemFromFlyer } from '../core/utils/template-utils';
import set from 'lodash/set';

export const DispatchContext = React.createContext();
export const SelectionContext = React.createContext();
const loadStyle = {
  height: '100vh',
  fontSize: '24px',
  fontWeight: 700,
}

function Queue(props) {
  const windowSize = useWindowSize();
  const [loaded, setLoaded] = useState(false);
  const [state, dispatch] = useReducer(reducer, {});
  const showSidebar = state.showSidebar || state.selection;
  const canvasSize = useMemo(() => ({
    width: windowSize.width - (showSidebar ? 280 : 0),
    height: windowSize.height - 91 - 21, // - navbar - timeline
  }), [windowSize, showSidebar]);

  // Do initial loading
  useLayoutEffect(() => {
    getInititialState(props).then(state => {
      dispatch({type: 'INIT', state})
      setLoaded(true);
    });
    return;
  }, [])

  if(!loaded) {
    return <Flex style={loadStyle} alignItems="center" justifyContent="center">Loading Fonts...</Flex>
  }


  return (
    <DispatchContext.Provider value={dispatch}>
      <SelectionContext.Provider value={state.selection}>
        <Flex bg="white" flexDirection="column" style={{height: '100%'}}>
          <NavBar 
            stage={state.journey.stage}
            recommendedStage={state.journey.recommendedStage}
          />
          <Flex flex={1}>
            {showSidebar && 
              <Sidebar 
                selection={state.selection}
              />
            }
            <Flex flex={1} flexDirection="column">
              <Box flex={1}>
                <Canvas
                  size={canvasSize}
                  stage={state.journey.stage}
                  primary={state.primary}
                  secondary={state.secondary}
                  list={state.list}
                  viewMode={state.viewMode}
                />
              </Box>

              <Timeline
                width={canvasSize.width}
                selected={state.secondary}
                items={state.history}
              />
            </Flex>
          </Flex>
          <style>{`
            body { 
              overflow: hidden; 
              height: 100vh; 
            } 
            #root { 
              height: 100%; 
            }
          `}</style>
        </Flex>
      </SelectionContext.Provider>
    </DispatchContext.Provider>
  );
}

export default Queue;

const reducer = (state, action) => {
  switch(action.type) {
    case 'INIT':
      return action.state;
    case 'STEP':
      return step(state, {...action, nextDesign: true})

    case 'NEXT':
      return next(state, {...action, nextDesign: true});
    case 'PREV':
      return prev(state, {...action})
    case 'SET_STAGE':
      return step(state, action)
    case 'ADVANCE_STAGE':
      return step(state, {...action, advanceStage: true})
    case 'ON_GRID_SCROLL':
      return updateJourney(state, action);

    case 'SET_SECONDARY':
      return setSecondary(state, action);
    case 'SET_INDEX':
      return {...state, secondary: state.history[action.index], index: action.index}
    case 'SET_VIEW_MODE':
      return {...state, viewMode: action.viewMode}
    case 'SET_LIST':
      return setList(state, action);
    case 'VIEW_FAVORITES':
      return viewFavorites(state)
    case 'TOGGLE_FAVORITE':
      return toggleFavorite(state, action.flyer)
    case 'SELECT':
      return {...state, selection: action.selection};
    case 'UPDATE_SELECTED':
      return updateSelected(state, action);
    default:
      return state;
  }
}

async function getInititialState(props) {
  return new Promise(async (resolve, reject) => {
    await precompute();
    const query = queryString.parse(props.location.search);
    
    const startFlyer = starters[query.starter] || (
      process.env.NODE_ENV === 'production'  ? starters.empty : starters.simpleBody
    )
    linkTemplate(startFlyer);
    produceFlyer(startFlyer);
    startFlyer.id = 1;
    startFlyer.stage = {type: 'content', focus: 'text'};

    const stage = (query.stage && query.focus)
      ? {type: query.stage, focus: query.focus}
      : process.env.NODE_ENV === 'production' ? {type: 'content', focus: 'text' } : {type: 'layout', focus: 'structure'}
    const state = step({
      primary: startFlyer,
      secondary: null,
      list: [],
      journey: getInitialJourney('basic'),
      history: [],
      viewMode: 'comparison',
      showSidebar: false,
      // selection: null,
      selection: startFlyer,
      // selection: startFlyer.content.body.elements[1],
      stage: {type: 'content', focus: 'text'},
    }, {stage});
    
    resolve(state);
  })
}

function viewFavorites(state) {
  const favorites = Object.values(state.favorites)
  return {
    ...state,
    ephemeral: favorites,
    list: 'ephemeral',
  }
}

function toggleFavorite(state, flyer) {
  const favorites = {...state.favorites};
  if(favorites[flyer.id]) {
    delete favorites[flyer.id];
  } 
  else {
    favorites[flyer.id] = flyer;
  }

  return {
    ...state,
    favorites,
  }
}

function updateJourney(state, action, update={}) {
  _updateJourney(state, action, update);
  return {...state, ...update}
}

function next(state, action) {
  let index = state.history.indexOf(state.secondary) + 1;
  if(index === 0 || index >= state.history.length) {
    return step(state, action);
  }
  return setSecondary(state, {secondary: state.history[index]})
}

function prev(state, action) {
  let index = state.history.indexOf(state.secondary);
  if(index === -1) {
    index = state.history.length;
  }
  index = Math.max(0, index - 1);
  const secondary = state.history[index];
  return secondary ? setSecondary(state, {secondary}) : state;
}

// A step in our hero's journey.
function step(state, action, update={}) {
  _updatePrimary(state, action, update);
  _updateList(state, action, update);
  _updateJourney(state, action, update);
  _updateHistory(state, action, update);
  _updateSecondary(state, action, update);

  return {...state, ...update}
}

function setSecondary(state, action, update={}) {
  _updateHistory(state, action, update);
  _updateList(state, action, update);
  _updateSecondary(state, action, update);

  return {...state, ...update};
}

function setList(state, action) {
  if(action.list === state.generation) {
    return {
      ...state,
      list: [],
      viewMode: 'grid',
    }
  }

  return {
    ...state,
    list: action.list,
    history: action.skipHistory ? state.history : [...state.history, action.list],
  }
}

function _updatePrimary(state, action, update) {
  if(action.upgrade) {
    const secondary = state.secondary._inHistory
      ? copyFlyer(state.secondary) 
      : state.secondary;
    state.primary._upgradeTo = secondary.id
    update.primary = secondary;
  }
}

function _updateHistory(state, action, update) {
  const history = update.history || state.history;
  if(action.upgrade) {
    state.primary._inHistory = true;
    update.history = [...history, state.primary];
  }
  else if(state.secondary && !state.secondary._inHistory && !action.skipHistory) {
    state.secondary._inHistory = true;
    update.history = [...history, state.secondary];
  }

  // TODO: If current generation not in history
  // if(update.journey.step.currentGeneration.length > 1) {
  //   update.history = [
  //     ...(update.history || state.history), 
  //     update.journey.step.currentGeneration,
  //   ];
  // }
}

function _updateList(state, action, update) {
  if(!action.preserveList) {
    update.list = null;
  }
}

function _updateSecondary(state, action, update) {
  if(action.secondary) {
    update.secondary = action.secondary;
    return;
  }

  if(!update.secondary) {
    const stage = update.journey.stage || state.journey.stage;
    update.secondary = stage.currentGeneration[stage.currentGenerationIndex];
  }
}

function updateSelected(state, action, update={}) {
  const selected = state.selection;
  const flyer = selected._root;
  
  const copy = copyTemplate(flyer);
  copy.id = flyer.id; // I'm not sure the implications of this id switch...
  flyer.id = window.__flyerId++;

  const copySelected = getItemFromFlyer(selected, copy);
  Object.entries(action.update).forEach(([path, value]) => {
    set(copySelected, path, value);
  })

  const key = flyer === state.primary ? 'primary' : 'secondary';
  update[key] = copy
  update.selection = copySelected;
  produceFlyer(copy);

  // Update history
  const lastFlyer = state.history[state.history.length - 1] || {};
  if(copy.editId === undefined || lastFlyer.id !== copy.editId) {
    copy.editId = flyer.id;
    update.history = [...state.history, flyer];
  }

  // TODO: Push all edits of the same type to an editHistory so we can undo/redo easily.

  return {...state, ...update};
}