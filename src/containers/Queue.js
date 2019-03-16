import React, { useReducer, useContext, useEffect, useCallback } from 'react';
import Canvas from '../components/Canvas';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import Timeline from './Timeline';
import * as starters from '../core/data/starters';
import { computeFlyer } from '../core/producer';
import { Flex, Box } from 'rebass';
import { generateFlyer, precompute } from '../core/generator';
import { useKeyDown, useWindowSize } from '../core/lib/hooks';

const startFlyer = starters.simpleBody
computeFlyer(startFlyer);
startFlyer.id = 1;
startFlyer._stage = {type: 'content'};
precompute();

export const DispatchContext = React.createContext();
export const SelectionContext = React.createContext();

function Queue({flyerSize}) {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const windowSize = useWindowSize();
  const stage = state.stage || state.secondary._stage;

  const handleKeyPress = useCallback(makeHandleKeyPress(dispatch), []);
  useKeyDown(handleKeyPress);

  const showSidebar = state.showSidebar || state.selection;

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
                  stage={state.stage}
                  primary={state.primary}
                  secondary={state.secondary}
                />
              </Box>

              <Timeline
                width={windowSize.width - (showSidebar ? 280 : 0)}
                selectedIndex={state.index}
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


const initialState = step({
  primary: startFlyer,
  secondary: null,
  history: [],
  showSidebar: false,
  selection: null,
  stage: null,
  index: 0,
}, {skipHistory: true});
initialState.secondary.id = 2;

const reducer = (state, action) => {
  switch(action.type) {
    case 'STEP':
      return step(state, action)
    case 'SET_STAGE':
      return step({...state, stage: action.stage}, action)
    case 'NEXT':
      return nextDesign(state);
    case 'PREV':
      return prevDesign(state);

    case 'SELECT':
      return {...state, selection: action.selection};
    case 'TOGGLE_FAVORITE_PRIMARY_DESIGN':
    default:
      return state;
  }
}

function step(state, options={}) {
  const updates = {};

  if(options.upgrade) {
    if(!options.skipHistory) {
      state.secondary.upgradeFrom = state.primary.id;
      state.primary.upgradeTo = state.secondary.id;
      updates.history = [...state.history, state.primary];
    }
    updates.primary = state.secondary;
  } else if(!options.skipHistory) {
    updates.history = [...state.history, state.secondary];
  }
  updates.index = state.history.length + (options.upgrade ? 2 : 1);

  const baseFlyer = options.upgrade ? state.secondary : state.primary;
  options.stage = options.stage || state.stage;
  updates.secondary = generateFlyer(baseFlyer, options);
  updates.secondary.id = state.history.length + 3;
  computeFlyer(updates.secondary);

  return {...state, ...updates};
}

function prevDesign(state) {
  const index = Math.max(0, state.index - 1);
  return {
    ...state,
    index,
    secondary: state.history[index]
  }
}

function nextDesign(state) {
  const index = state.index + 1;
  if(index >= state.history.length) {
    return step(state);
  }
  return {
    ...state,
    index,
    secondary: state.history[index],
  }
}

const makeHandleKeyPress = dispatch => e => {
  if(e.target.hasOwnProperty('value')) return;

  if(e.code === 'ArrowRight') { 
    const type = e.shiftKey ? 'STEP' : 'NEXT';
    dispatch({type});
  } 
  else if(e.code === 'ArrowLeft') {
    dispatch({type: 'PREV'})
  }
  else if(e.code === 'Space') { // spacebar
    dispatch({type: 'STEP', upgrade: true});
  }
}