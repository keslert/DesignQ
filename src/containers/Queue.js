import React, { useReducer, useMemo, useCallback } from 'react';
import Canvas from '../components/Canvas';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import Timeline from './Timeline';
import * as starters from '../core/data/starters';
import { computeFlyer } from '../core/producer';
import { Flex, Box } from 'rebass';
import { generateFlyers, precompute } from '../core/generator';
import { useWindowSize } from '../core/lib/hooks';
import { copyTemplate } from '../core/utils/template-utils';

export const DispatchContext = React.createContext();
export const SelectionContext = React.createContext();
let flyerId = 3;

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
          <NavBar stage={stage} />
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
                  stage={stage}
                  generationStage={state.generationStage}
                  primary={state.primary}
                  secondary={state.secondary}
                  generation={state.generation}
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

// const secondary = generateFlyers(startFlyer)[0];
// secondary.id = 2;
// computeFlyer(secondary);

const reducer = (state, action) => {
  console.log("REDUCER: ", state, action);
  switch(action.type) {
    case 'STEP':
    case 'NEXT':
      return step(state, action)
    // case 'PREV':
    //   return prevDesign(state);
    case 'SET_STAGE':
      return step({...state, stage: action.stage}, action)
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

// Grid Mode Sets secondary
// At some point grid mode will show the advance button 
// which will direct the user to move to the next stage.
// Closing out of grid mode will also trigger this check.

// A step in our hero's journey.
function step(state, action, update={}) {
  _updatePrimary(state, action, update);
  _updateHistory(state, action, update);
  _updateList(state, action, update);
  _updateStage(state, action, update);
  _updateSecondary(state, action, update);

  return {...state, ...update}
}

function setSecondary(state, action, update={}) {
  _updateHistory(state, action, update);
  _updateList(state, action, update);
  _updateSecondary(state, action, update);

  return {...state, ...update};
}

function setList(state, action, update={}) {
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
}

function _updateList(state, action, update) {
  if(!action.preserveList) {
    update.list = null;
  }
}

function _updateStage(state, action, update) {
  const stage = action.stage || state.stage;
  const { type, focus } = state.generationStage;
  const primary = update.primary || state.primary;
  // Stage is set, but not in sync with generationStage;

  const stageInSync = !stage || (stage.type === type && (!stage.focus || stage.focus === focus))
  if(action.forceGeneration || !stageInSync || !type) {
    _updateGeneration(state, {...action, stage}, update);
  }
  
  update.stageProgress = getStageProgress(state, stage || update.generationStage || state.generationStage);

  // System in control of the journey and ready to advance.
  const stageExhausted = update.stageProgress === stageProgress.EXHAUSTED
  if(action.forceAdvanceStage || (!stage && stageExhausted && state.viewMode === 'comparison')) {
    // TODO: Increase our confidence numbers to pass tests if necessary.
    _updateGeneration(state, action, update);
    update.stageProgress = stageProgress.UNEXPLORED;
  }
}

function _updateGeneration(state, action, update) {
  const primary = update.primary || state.primary;
  update.generation = generateFlyers(primary, action);
  update.generation.forEach(f => {
    computeFlyer(f);
    f.id = flyerId++;
  });
  update.generationIndex = 0;
  update.generationStage = update.generation[0]._stage;

  if(update.generation.length > 1) {
    const history = update.history || state.history;
    update.history = [...history, update.generation];
  }
}


function _updateSecondary(state, action, update) {
  if(action.secondary) {
    update.secondary = action.secondary;
    return;
  }

  const index = update.generationIndex !== undefined 
    ? update.generationIndex 
    : state.generationIndex
  const generation = update.generation || state.generation;
  const generated = generation[index];
  if(generated) {
    update.generationIndex = index + 1;
    update.secondary = generated;
    return;
  }

  // We've got nothing for secondary...
  // Should probably set it to null and show something in the UI.

}





export const stageProgress = {
  EXHAUSTED: Symbol(), // We've run out of generated ideas
  EXPLORED: Symbol(),  // We've met our confidence goals
  UNEXPLORED: Symbol(),
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
  generationStage: {},
  generation: [],
  generationIndex: 0,
  history: [],
  viewMode: 'comparison',
  showSidebar: false,
  selection: null,
  // selection: startFlyer.content.body.elements[1],
  stage: null,
}, {});

function getStageProgress(state, stage) {
  return stageProgress.STAGE_UNEXPLORED;
}

function prevDesign(state) {
  const index = state.history.indexOf(state.secondary)
  const exists = index !== -1;

  return {
    ...state,
    secondary: state.history[exists ? index : state.history.length - 1],
    history: exists ? state.history : [...state.history, state.secondary],
  }
}

function nextDesign(state, action) {
  const index = state.history.indexOf(state.secondary)
  const historical = state.history[index + 1]

  if(typeof historical !== 'object') {
    return step(state, action);
  }
  return {
    ...state,
    secondary: historical,
  }
}

function copyFlyer(flyer) {
  const copy = copyTemplate(flyer);
  copy.id = flyerId++;
  delete copy._inHistory;
  computeFlyer(copy);
  return copy;
}