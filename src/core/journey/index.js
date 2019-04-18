import { generateFlyers, STAGES } from '../generator';
import { basicStages as basicContentStages } from '../generator/content';
import { basicStages as basicLayoutStages } from '../generator/layout';
import { basicStages as basicTypographyStages } from '../generator/typography';
import { basicStages as basicColorStages } from '../generator/color';
import { basicStages as basicDecorationStages } from '../generator/decoration';
import { basicStages as basicPolishStages } from '../generator/polish';
import { basicStages as basicExportStages } from '../generator/export';
import { produceFlyer } from '../producer';
import { copyTemplate } from '../utils/template-utils';
import _ from 'lodash';

window.__flyerId = 3; // eslint-disable-line no-restricted-globals

const JOURNEYS = {
  basic: [
    ...basicContentStages,
    ...basicLayoutStages,
    ...basicColorStages,
    ...basicTypographyStages,
    // ...basicDecorationStages,
    // ...basicPolishStages,
    ...basicExportStages,
  ].map(stage => ({type: stage.type, key: stage.key}))
}

export function getInitialJourney(type='basic') {
  const journey = JOURNEYS[type];
  const stages = [
    ...STAGES.content,
    ...STAGES.layout,
    ...STAGES.color,
    ...STAGES.typography,
    // ...STAGES.decoration,
    // ...STAGES.polish,
    ...STAGES.export,
  ].map((stage, i) => ({
    type: stage.type, 
    key: stage.key,
    satisfied: stage.satisfied,
    progress: ProgressTypes.UNEXPLORED, // updated using designsViewed and confidence
    highestViewedIndex: 0,
    currentGeneration: [],
    currentGenerationIndex: 0,
    currentGenerationMasterDesign: null,
    currentGenerationRound: 0,
    exhausted: false, // currentGenerationIndex >= currentGeneration.length
    index: i,
    inJourney: _.some(journey, s => stage.key === s.key),
  }))

  return {
    stages,
    stage: stages[0],
    stageTypes: _.uniq(_.map(stages, 'type')),
    recommendedStage: stages[0],
  }
}

export function _updateJourney(state, action, update) {
  const stage = !action.stage 
    ? state.journey.stage
    : getStage(state.journey.stages, action.stage)
  const primary = update.primary || state.primary;
  update.journey = {
    ...state.journey,
    stage: getUpdatedStage(stage, primary, action, state),
  };
  const j = update.journey;
  j.stages = mapReplace(state.journey.stages, stage, j.stage)
  j.recommendedStage = getRecommendedStage(j.stage, j.stages, primary);

  // The user clicked ahead. Skip any stages of the current type before this new stage
  if(action.stage && stage.index > state.journey.stage.index) {
    j.stages = j.stages.map(s => (
      s.index < stage.index
        && s.index >= state.journey.stage.index
        && s.type === state.journey.stage.type
      ? {...s, progress: getMaxProgress(s.progress, ProgressTypes.USER_SKIPPED)}
      : s
    ))
  }

  // Turned off automatic stage proceeding for now...
  if(action.advanceStage || (false && j.stage.exhausted && canAutomaticallyProceed(state))) {
    j.stage.progress = getMaxProgress(j.stage.progress, ProgressTypes.USER_SKIPPED);
    const nextRecommended = getRecommendedStage(j.stage, j.stages, primary); // Necessary when recommended is the same as updatedStage

    if(nextRecommended) {
      const updatedRecommended = getUpdatedStage(nextRecommended, primary, {stage: nextRecommended}, state);
      j.stage = updatedRecommended;
      j.stages = mapReplace(j.stages, nextRecommended, updatedRecommended);
      j.recommendedStage = updatedRecommended;
    }
  }
}

function getUpdatedStage(stage, primary, action, state) {
  const isMasterDesign = stage.currentGenerationMasterDesign === primary;
  const isFromStage = primary.stage.key === stage.key;
  const isFromGeneration = isFromStage && primary.stage.generationRound === stage.currentGenerationRound;
  const isContentStage = stage.type === 'content';

  if(action.forceGeneration || isContentStage || (!isMasterDesign && !isFromGeneration)) {
    const flyers = generateFlyers(primary, stage, {...action, state});
    flyers.forEach(f => {
      if(!f.pending) {
        produceFlyer(f)
      }
      f.id = window.__flyerId++; // eslint-disable-line no-restricted-globals
      f.stage = {
        type: stage.type,
        key: stage.key,
        generationRound: stage.currentGenerationRound + 1,
      }
    })
    return {
      ...stage,
      currentGeneration: flyers,
      currentGenerationIndex: 0,
      currentGenerationMasterDesign: primary,
      currentGenerationRound: stage.currentGenerationRound + 1,
      exhausted: false,
    }
  }
  
  if(stage.exhausted && action.stage) {
    return {
      ...stage,
      currentGenerationIndex: 0,
      exhausted: false,
    }
  }
  
  if(action.nextDesign || action.stage) {
    const index = stage.currentGenerationIndex + 1;
    const highest = Math.max(stage.highestViewedIndex, index);
    return {
      ...stage,
      currentGenerationIndex: Math.min(stage.currentGeneration.length, index),
      highestViewedIndex: highest,
      exhausted: index >= stage.currentGeneration.length,
      progress: getProgress(stage, highest),
    }
  }
  
  if(action.scrolledToIndex) {
    const highest = Math.max(stage.highestViewedIndex, action.scrolledToIndex);
    return {
      ...stage,
      highestViewedIndex: highest,
      progress: getProgress(stage, highest),
    }
  }
  
  return stage;
}

function getProgress(stage, index) {
  const percentage = index / stage.currentGeneration.length;
  const progress = 
    index > 50 || (index > 20 && percentage > .8)
      ? ProgressTypes.THOROUGHLY_EXPLORED
      : (index > 0 // || (percentage > .10)
        ? ProgressTypes.EXPLORED
        : ProgressTypes.UNEXPLORED)

  return getMaxProgress(stage.progress, progress);
}

function getMaxProgress(p1, p2) {
  return progressLevels[Math.max(
    progressLevels.indexOf(p1),
    progressLevels.indexOf(p2),
  )]
}

function getRecommendedStage(currentStage, stages, primary) {



  const stage = _.find(stages, stage => {
    // Confidence
    // Progress
    // Satisfied
    return (
      stage.inJourney
      && stage.index >  currentStage.index
      && (
        !stage.satisfied(primary)
        || stage.type !== 'content'
      )
      // && (
      //   !stage.satisfied(primary)
      //   || (stage.progress === ProgressTypes.UNEXPLORED && stage.type !== 'content')
      // )
    )
  })
  return stage;
}

function getStage(stages, {key}) {
  return _.find(stages, s => s.key === key);
}

function canAutomaticallyProceed(state) {
  return !state.selection 
    && state.viewMode === 'comparison'
    && state.journey.stage.type !== 'content'
}

function mapReplace(items, oldItem, item) {
  return items.map(i => i !== oldItem ? i : item);
}

export const ProgressTypes = {
  UNEXPLORED: Symbol('Unexplored'),
  USER_SKIPPED: Symbol('User Skipped'),
  EXPLORED: Symbol('Explored'),
  THOROUGHLY_EXPLORED: Symbol('Thoroughly Explored'),
}

const progressLevels = [
  ProgressTypes.UNEXPLORED,
  ProgressTypes.USER_SKIPPED,
  ProgressTypes.EXPLORED,
  ProgressTypes.THOROUGHLY_EXPLORED,
]

export function copyFlyer(flyer) {
  const copy = copyTemplate(flyer);
  copy.id = window.__flyerId++; // eslint-disable-line no-restricted-globals
  produceFlyer(copy);
  return copy;
}