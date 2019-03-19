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
import shortid from 'shortid';

export const DispatchContext = React.createContext();
export const SelectionContext = React.createContext();

function Queue() {
  
  const windowSize = useWindowSize();
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const stage = state.stage || state.generationStage;
  const showSidebar = state.showSidebar || state.selection;

  const canvasSize = useMemo(() => ({
    width: windowSize.width - (showSidebar ? 280 : 0),
    height: windowSize.height - 51 - 21, // navbar + timeline
  }), [windowSize, showSidebar])

  return (
    <DispatchContext.Provider value={dispatch}>
      <SelectionContext.Provider value={state.selection}>
        <Flex bg="white" flexDirection="column" style={{height: '100%'}}>
          <NavBar stage={stage.type} />
          <Flex flex={1}>
            {showSidebar && <Sidebar flyer={state.primary} />}
            <Flex flex={1} flexDirection="column">
              <Box flex={1}>
                <Canvas
                  size={canvasSize}
                  stage={state.stage}
                  primary={state.primary}
                  secondary={state.secondary}
                  list={state[state.list]}
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
      return step(state, action)
    case 'SET_STAGE':
      return step({...state, stage: action.stage}, action)
    case 'NEXT':
      return nextDesign(state, action);
    case 'PREV':
      return prevDesign(state);
    case 'SET_INDEX':
      return {...state, secondary: state.history[action.index], index: action.index}
    case 'SET_VIEW_MODE':
      return {...state, viewMode: action.viewMode}

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
  const favorites = state.history.filter(f => f._favorite);
  return {
    ...state,
    ephemeral: favorites,
    list: 'ephemeral',
  }
}

// Favoriting adds an item to the history.
function toggleFavorite(state, flyer) {
  const inHistory = flyer._historyIndex !== undefined;

  flyer._favorite = !flyer._favorite;
  flyer._historyIndex = inHistory ? flyer._historyIndex : state.history.length; 
  return {
    ...state,
    history: inHistory ? state.history : [...state.history, flyer]
  }
}


// Grid Mode Sets secondary
// At some point grid mode will show the advance button 
// which will direct the user to move to the next stage.
// Closing out of grid mode will also trigger this check.

// A step in our hero's journey.
function step(state, action, update={}) {
  updatePrimaryAndHistory(state, action, update);
  // updateConfidence(state, action, update);
  updateStage(state, action, update);
  updateSecondary(state, action, update);

  return {...state, ...update}
}

function updatePrimaryAndHistory(state, action, update) {
  const secondaryInHistory = state.secondary && state.secondary._historyIndex !== undefined;

  if(action.upgrade) {
    let secondary = state.secondary;
    // If this item is already in the history, make a copy of it.
    if(secondaryInHistory) {
      secondary = copyTemplate(state.secondary);
      secondary.id = shortid.generate();
      computeFlyer(secondary);
    }

    update.primary = secondary;
    state.primary._historyIndex = state.history.length;
    update.history = [...state.history, state.primary];
    return;
  }
  
  if(!secondaryInHistory && !action.skipHistory && state.secondary) {
    state.secondary._historyIndex = state.history.length;
    update.history = [...state.history, state.secondary];
    return;
  }
}

function updateStage(state, action, update) {
  const stage = action.stage || state.stage;
  const { type, focus } = state.generationStage;
  const primary = update.primary || state.primary;
  // Stage is set, but not in sync with generationStage;

  const stageInSync = !stage || (stage.type === type && (!stage.focus || stage.focus === focus))
  if(action.forceGeneration || !stageInSync || !type) {
    update.generation = generateFlyers(primary, {...action, stage});
    update.generation.forEach(f => computeFlyer(f));
    update.generation.forEach(f => f.id = shortid.generate())
    update.generationStage = update.generation[0]._stage;
  }
  
  update.stageProgress = getStageProgress(state, stage || update.generationStage || state.generationStage);

  // System in control of the journey and ready to advance.
  const stageExhausted = update.stageProgress === stageProgress.EXHAUSTED
  if(action.forceAdvanceStage || (!stage && stageExhausted && state.viewMode === 'comparison')) {
    // TODO: Increase our confidence numbers to pass tests if necessary.
    update.generation = generateFlyers(primary);
    update.generation.forEach(f => computeFlyer(f));
    update.generationStage = update.generation[0]._stage;
    update.stageProgress = getStageProgress(state, update.generationStage);
  }
}

function updateSecondary(state, action, update) {
  if(action.secondary) {
    update.secondary = action.secondary;
    return;
  }

  const generation = update.generation || state.generation;
  const generated = generation[0];
  if(generated) {
    update.generation = generation.slice(1);
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
  generationStage: {},
  generation: [],
  history: [],
  ephemeral: [], // Favorites, Merges, Exporations
  list: 'generation',
  viewMode: 'grid',
  showSidebar: false,
  selection: null,
  stage: null,
}, {});

function getStageProgress(state, stage) {
  return stageProgress.STAGE_UNEXPLORED;
}

function prevDesign(state) {
  const index = state.secondary._historyIndex !== undefined
    ? Math.max(state.secondary._historyIndex - 1, 0)
    : state.history.length - 1

  return {
    ...state,
    secondary: state.history[index],
  }
}

function nextDesign(state, action) {
  const historical = state.history[state.secondary._historyIndex + 1]

  if(!historical) {
    return step(state, action);
  }
  return {
    ...state,
    secondary: historical,
  }
}