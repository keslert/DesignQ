import React, { useReducer, useMemo, useCallback } from 'react';
import Canvas from '../components/Canvas';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import Timeline from './Timeline';
import * as starters from '../core/data/starters';
import { computeFlyer } from '../core/producer';
import { Flex, Box } from 'rebass';
import { precompute } from '../core/generator';
import { useWindowSize } from '../core/lib/hooks';
import { 
  copyFlyer,
  getInitialJourney,
  _updateJourney,
} from '../core/journey';

export const DispatchContext = React.createContext();
export const SelectionContext = React.createContext();

function Queue() {
  
  const windowSize = useWindowSize();
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const stage = state.stage || state.generationStage;
  const showSidebar = state.showSidebar || state.selection;

  const canvasSize = useMemo(() => ({
    width: windowSize.width - (showSidebar ? 280 : 0),
    height: windowSize.height - 91 - 21, // navbar + timeline
  }), [windowSize, showSidebar])

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
    case 'STEP':
    case 'NEXT':
      return step(state, {...action, nextDesign: true})
    case 'SET_STAGE':
      return step(state, action)
    case 'ADVANCE_STAGE':
      return step(state, {...action, advanceStage: true})

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
    default:
      return state;
  }
}

const startFlyer = starters.simpleBody
computeFlyer(startFlyer);
startFlyer.id = 1;
startFlyer._stage = {type: 'content'};
precompute();

const initialState = step({
  primary: startFlyer,
  secondary: null,
  list: [],
  journey: getInitialJourney('basic'),
  history: [],
  viewMode: 'comparison',
  showSidebar: false,
  selection: null,
  // selection: startFlyer.content.body.elements[1],
}, {advanceStage: true});

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

  const stage = update.journey.stage || state.journey.stage;
  update.secondary = stage.currentGeneration[stage.currentGenerationIndex];
}

// function prevDesign(state) {
//   const index = state.history.indexOf(state.secondary)
//   const exists = index !== -1;

//   return {
//     ...state,
//     secondary: state.history[exists ? index : state.history.length - 1],
//     history: exists ? state.history : [...state.history, state.secondary],
//   }
// }

// function nextDesign(state, action) {
//   const index = state.history.indexOf(state.secondary)
//   const historical = state.history[index + 1]

//   if(typeof historical !== 'object') {
//     return step(state, action);
//   }
//   return {
//     ...state,
//     secondary: historical,
//   }
// }