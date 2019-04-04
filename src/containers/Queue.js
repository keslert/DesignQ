import React, { useReducer, useMemo, useState, useLayoutEffect, useEffect } from 'react';
import Canvas from '../components/Canvas';
import Export from './Export';
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
import { resolveItem } from '../core/resolver';
import set from 'lodash/set';
import some from 'lodash/some';
import difference from 'lodash/difference';
import debounce from 'lodash/debounce';
import { getKeyword } from '../core/utils/content-utils';
import { fetchImageSearch } from '../core/fetch';
import { processImage } from '../core/utils/color-utils';
import loadState from '../core/data/load-states/ski'

export const DispatchContext = React.createContext();
export const SelectionContext = React.createContext();
export const ImageContext = React.createContext();

const loadStyle = {
  height: '100vh',
  fontSize: '24px',
  fontWeight: 700,
}

function Queue(props) {
  const windowSize = useWindowSize();
  const [state, dispatch] = useReducer(reducer, {loading: true});

  const showExport = state.journey && state.journey.stage.type === 'export';
  const showSidebar = !showExport && state.selection;
  const canvasSize = useMemo(() => ({
    width: windowSize.width - (showSidebar ? 280 : 0),
    height: windowSize.height - 91 - 21, // - navbar - timeline
  }), [windowSize, showSidebar]);

  // Do initial loading
  useLayoutEffect(() => {
    getInitialState(props, dispatch).then(state => {
      dispatch({type: 'INIT', state})
    });
    return;
  }, [])

  useEffect(() => {
    if(state.primary) {
      checkImageSearch(state, dispatch);
    }
  }, [state.primary])

  useEffect(() => {
    if(state.imageCache) {
      patchImageFlyers(state, dispatch)
    }
  }, [state.imageCache]);

  const imageContextValue = useMemo(() => ({
    cache: state.imageCache,
    lastSearch: state.lastImageSearch,
  }), [state.imageCache, state.lastImageSearch]);


  if(state.loading) {
    return <Flex style={loadStyle} alignItems="center" justifyContent="center">Loading Fonts...</Flex>
  }

  return (
    <DispatchContext.Provider value={dispatch}>
    <SelectionContext.Provider value={state.selection}>
    <ImageContext.Provider value={imageContextValue}>
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
              {showExport
                ? <Export
                    primary={state.primary}
                  />
                : <Canvas
                    size={canvasSize}
                    stage={state.journey.stage}
                    primary={state.primary}
                    secondary={state.secondary}
                    list={state.list}
                    viewMode={state.viewMode}
                  />
              }
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
    </ImageContext.Provider>
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
    case 'SET_HISTORY':
      return {...state, history: action.history}
    case 'UPDATE_JOURNEY_STAGE':
      return updateJourneyStage(state, action);
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
    case 'INIT_IMAGE_SEARCH':
      return initImageSearch(state, action);
    case 'SET_IMAGE_CACHE_KEY':
      return {...state, imageCache: {...state.imageCache,
        [action.key]: {
          timestamp: Date.now(),
          value: action.value,
        }
      }}
    case 'SET_LAST_IMAGE_SEARCH':
      return {...state, lastImageSearch: action.search}
    
    default:
      return state;
  }
}

async function getInitialState(props, dispatch) {
  return new Promise(async (resolve, reject) => {
    await precompute(props.flyerSize);
    const query = queryString.parse(props.location.search);
    
    const startFlyer = starters[query.starter] || (
      process.env.NODE_ENV === 'production'  ? starters.empty : starters.empty
    )
    linkTemplate(startFlyer);
    startFlyer.size = props.flyerSize;
    produceFlyer(startFlyer);
    startFlyer.id = 1;
    startFlyer.stage = {type: 'content', focus: 'text'};

    const stage = (query.stage && query.focus)
      ? {type: query.stage, focus: query.focus}
      : process.env.NODE_ENV === 'production' ? {type: 'content', focus: 'text' } : {type: 'content', focus: 'text'}
    const state = step({
      primary: startFlyer,
      secondary: null,
      list: [],
      history: [],
      viewMode: 'comparison',
      journey: getInitialJourney('basic'),
      imageCache: {},
      lastImageSearch: {
        text: '',
        query: '',
        images: [],
      },
      // selection: startFlyer,
      // selection: startFlyer.content.body.elements[1],
      // stage: {type: 'content', focus: 'text'},
      ...(loadState || {}),
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
    const secondary = stage.currentGeneration[stage.currentGenerationIndex];
    if(secondary) {
      update.secondary = secondary;
    } 
    else {
      // TODO: What to do?
      console.log('NO MORE SECONDARY!')
    }
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

  resolveItem(copySelected, selected, action.update);

  // TODO: Push all edits of the same type to an editHistory so we can undo/redo easily.

  return {...state, ...update};
}

const patchImageFlyers = debounce((state, dispatch) => {
  const cache = state.imageCache;
  
  if(state.secondary.pending) {
    const secondary = patchFlyer(state.secondary, 'image', cache);
    dispatch({type: 'SET_SECONDARY', secondary});
  }

  const stage = state.journey.stages.find(s => s.type === 'color' && s.focus === 'background');
  const stageUpdate = {
    type: 'color',
    focus: 'background',
    currentGeneration: stage.currentGeneration.map(flyer => patchFlyer(flyer, 'image', cache)),
  }

  dispatch({type: 'UPDATE_JOURNEY_STAGE', stage: stageUpdate});

  if(some(state.history, f => f.pending)) {
    const history = state.history.map(flyer => patchFlyer(flyer, 'image', cache));
    dispatch({type: 'SET_HISTORY', history});
  }
}, 300, {maxWait: 1000})

function patchFlyer(flyer, type, cache) {
  if(!flyer.pending) return flyer;

  const resolved = flyer.pending.filter(p => p.type === type && cache[p.cacheKey]);
  if(resolved.length) {
    const copy = copyTemplate(flyer);
    resolved.forEach(p => p.resolve(copy, cache[p.cacheKey].value))
    copy.pending = difference(flyer.pending, resolved);
    if(!copy.pending.length) {
      delete copy.pending;
      produceFlyer(copy);
    }
    return copy;
  }

  return flyer;
}

function checkImageSearch(state, dispatch) {
  const search = state.lastImageSearch;
  const text = state.primary.keywords;
  if(!search.userProvided && text && text !== search.text) {
    const query = text; // getKeyword(text);
    if(query !== search.query) {
      initImageSearch(state, {query, userProvided: false, dispatch});
    }
  }
} 

function initImageSearch(state, {query, userProvided, dispatch}) {
  fetchImageSearch(query).then(res => {
    const photos = res.data.photos;
    photos.forEach(photo => {
      if(!state.imageCache[photo.id]) {
        processImage(photo.src.large, ({palette}) => {
          dispatch({type: 'SET_IMAGE_CACHE_KEY', key: photo.id, value: {colors: palette}})
        })
      }
    })

    const search = {
      query,
      fetching: false,
      userProvided,
      images: photos.map(photo => ({
        id: photo.id,
        src: photo.src.large,
        meta: {
          w: photo.width,
          h: photo.height,
          photographer: photo.photographer,
          photographer_url: photo.photographer_url,
        },
        width: photo.width,
        height: photo.height,
      })),
    }

    dispatch({type: 'SET_LAST_IMAGE_SEARCH', search})

    // Update stage: color.background
    const update = {};
    const stage = state.journey.stages.find(s => s.type === 'color' && s.focus === 'background');
    _updateJourney({...state, lastImageSearch: search}, {stage, forceGeneration: true}, update)

    const stageUpdate = {
      type: 'color',
      focus: 'background',
      currentGeneration: update.journey.stage.currentGeneration, 
      currentGenerationIndex: 0,
    }
    dispatch({type: 'UPDATE_JOURNEY_STAGE', stage: stageUpdate});

    // Update secondary if part of previous stage
    if(
      state.secondary.stage.type === 'color' &&
      state.secondary.stage.focus === 'background'
    ) {
      dispatch({type: 'SET_SECONDARY', secondary: update.journey.stage.currentGeneration[0]});
    }

  })

  return {...state, imageSearch: {
    query,
    fetching: true,
    userProvided,
    images: [],
  }}
}

function updateJourneyStage(state, action) {
  const stages = state.journey.stages.map(s => {
    if(s.type === action.stage.type && s.focus === action.stage.focus) {
      return {...s, ...action.stage}
    }
    return s;
  })

  return {...state, journey: {
    ...state.journey,
    stages,
    stage: stages.find(s => s.type === state.journey.stage.type && s.focus === state.journey.stage.focus),
  }}
}