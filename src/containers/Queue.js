import React, { useReducer, useMemo, useLayoutEffect, useEffect } from 'react';
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
import { linkTemplate, copyTemplate, getItemFromTemplate } from '../core/utils/template-utils';
import { resolveItem } from '../core/resolver';
import set from 'lodash/set';
import some from 'lodash/some';
import difference from 'lodash/difference';
import debounce from 'lodash/debounce';
import { fetchImageSearch } from '../core/fetch';
import { processImage } from '../core/utils/color-utils';
import loadState from '../core/data/load-states/celebrate'
import Onboarding from '../components/Onboarding';

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
    if(state.primary && props.location.search.includes('backup')) {
      const copied = copyTemplate(state.primary, true);
      localStorage.setItem('savedPrimary', JSON.stringify(copied));
      localStorage.setItem('savedHistory', JSON.stringify(state.history.slice(-50).map(f => copyTemplate(f, true))));
    }
  }, [state.primary])

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
          {showSidebar && 
            <Sidebar 
              selection={state.selection}
            />
          }
        </Flex>
        {process.env.NODE_ENV === 'production' &&
          <Onboarding state={state} />
        }
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
    case 'REORDER':
      return reorder(state, action);
    
    default:
      return state;
  }
}

async function getInitialState(props, dispatch) {

  return new Promise(async (resolve, reject) => {
    await precompute(props.flyerSize);
    const query = queryString.parse(props.location.search);
    
    const startFlyer = starters[query.starter] || (
      process.env.NODE_ENV === 'production'  
        ? starters.empty 
        // : starters.imageBackground
        : starters.simpleBody
        // : starters.empty
    )
    linkTemplate(startFlyer);
    startFlyer.size = props.flyerSize;
    produceFlyer(startFlyer);
    startFlyer.id = 1;
    startFlyer.stage = {type: 'content', key: 'content.text'};

    const stage = query.stage
      ? {type: query.stage.split('.')[0], key: query.stage}
      : process.env.NODE_ENV === 'production' 
        ? {type: 'content', key: 'content.text' } 
        // : {type: 'content', key: 'content.text' } 
        // : {type: 'color', key: 'color.background'}
        : {type: 'layout', key: 'layout.structure'}
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
      ...(loadState || {}),
    }, {stage});


    if(query.backup && localStorage.getItem('savedPrimary')) {
      state.primary = JSON.parse(localStorage.getItem('savedPrimary'));
      state.history = JSON.parse(localStorage.getItem('savedHistory'));
      [state.primary, ...state.history].forEach(f => {
        linkTemplate(f);
        produceFlyer(f);
      })
    }

    
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
  _updateSelection(state, action, update);

  return {...state, ...update}
}

function setSecondary(state, action, update={}) {
  if(!action.secondary) return state;

  _updateHistory(state, action, update);
  _updateList(state, action, update);
  _updateSecondary(state, action, update);
  _updateSelection(state, action, update);

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
    state.primary.upgradeTo = secondary.id
    secondary.upgradeFrom = state.primary.id;
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
    update.secondary = secondary;
  }
}

function _updateSelection(state, action, update) {
  if(!state.selection) return;

  const selectedFlyer = state.selection._root;
  if(update.primary) {
    update.selection = getItemFromTemplate(state.selection, update.primary);
  }
  else if(update.secondary && selectedFlyer === state.secondary) {
    update.selection = getItemFromTemplate(state.selection, update.secondary);
  }

}

function updateSelected(state, action, update={}) {
  const selected = state.selection;
  const flyer = selected._root;
  
  const copy = copyTemplate(flyer);
  copy.id = flyer.id; // I'm not sure the implications of this id switch...
  flyer.id = window.__flyerId++;

  const copySelected = getItemFromTemplate(selected, copy);
  Object.entries(action.update).forEach(([path, value]) => {
    if(path.includes('_root')) {
      // HACK: This feels so wrong, but... edit panels don't have full control of the path.
      const _path = path.split('_root.')[1];
      set(copy, _path, value);
    }
    else {
      set(copySelected, path, value);
    }
  })

  resolveItem(copySelected, selected, action.update);
  delete copy.stage.generationRound;
  produceFlyer(copy);

  update.secondary = copy;
  update.selection = copySelected;
  
  if(!copy.editId || copy.editId !== state.primary.id) {
    copy.editId = state.primary.id;
    _updateHistory(state, {}, update);
  }

  if(false) {
    update.list = [copy, copy];
  }
  update.viewMode = 'comparison';

  // TODO: Push all edits of the same type to an editHistory so we can undo/redo easily.

  return {...state, ...update};
}

const patchImageFlyers = debounce((state, dispatch) => {
  const cache = state.imageCache;
  
  if(state.secondary && state.secondary.pending) {
    const secondary = patchFlyer(state.secondary, 'image', cache);
    dispatch({type: 'SET_SECONDARY', secondary});
  }

  const stage = state.journey.stages.find(s => s.key === 'color.background');
  const stageUpdate = {
    key: 'color.background',
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
    if(photos.length === 0) {
      alert("The image search didn't return any results. Try a different keyword");
    }

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

    // Update stage: color.background
    const update = {};
    const stage = state.journey.stages.find(s => s.key === 'color.background');
    _updateJourney({...state, lastImageSearch: search}, {stage, forceGeneration: true}, update)

    const stageUpdate = {
      key: 'color.background',
      currentGeneration: update.journey.stage.currentGeneration, 
      currentGenerationIndex: 0,
    }
    dispatch({type: 'UPDATE_JOURNEY_STAGE', stage: stageUpdate});

    // Update secondary if part of previous stage
    if(!state.secondary || state.secondary.stage.key === 'color.background') {
      dispatch({type: 'SET_SECONDARY', secondary: update.journey.stage.currentGeneration[0]});
    }

    dispatch({type: 'SET_LAST_IMAGE_SEARCH', search})

    photos.forEach(photo => {
      if(!state.imageCache[photo.id]) {
        processImage(photo.src.large, ({palette}) => {
          dispatch({type: 'SET_IMAGE_CACHE_KEY', key: photo.id, value: {colors: palette}})
        })
      }
    })

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
    if(s.key === action.stage.key) {
      return {...s, ...action.stage}
    }
    return s;
  })

  return {...state, journey: {
    ...state.journey,
    stages,
    stage: stages.find(s => s.key === state.journey.stage.key),
  }}
}

function reorder(state, {source, target, isAfter}) {
  const update = {};
  const key = state.primary === target._root ? 'primary' : 'secondary';
  const flyer = state[key];
  const copy = copyTemplate(flyer);
  copy.id = window.__flyerId++;
  const element = getItemFromTemplate(source, copy);
  
  if(state.selection) {
    update.selection = state.selection === source 
      ? element 
      : getItemFromTemplate(state.selection, copy)
  }

  const sourceGroupKey = source._parent._key;
  const sourceIndex = source._computed.index;
  copy.content[sourceGroupKey].elements.splice(sourceIndex, 1);

  const targetGroupKey = target._parent._key;
  const targetIndex = target._computed.index
    + (isAfter ? 1 : 0)
    + ((sourceGroupKey === targetGroupKey && sourceIndex <= target._computed.index) ? -1 : 0)
  copy.content[targetGroupKey].elements.splice(targetIndex, 0, element);

  // TODO: What to do if group is now empty..
  if(!source._parent.elements.length) {
    delete source._root.content[sourceGroupKey];
  }

  linkTemplate(copy);
  resolveItem(element._parent, source._parent);
  produceFlyer(copy);

  
  _updateHistory(state, {}, update);


  return {...state, ...update, [key]: copy};
}