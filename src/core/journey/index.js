import { generateFlyers, STAGES } from '../generator';
import { basicStages as basicContentStages } from '../generator/content';
import { basicStages as basicLayoutStages } from '../generator/layout';
import { basicStages as basicTypographyStages } from '../generator/typography';
import { basicStages as basicColorStages } from '../generator/color';
import { computeFlyer } from '../producer';
import { copyTemplate } from '../utils/template-utils';
import _ from 'lodash';

let flyerId = 3;

const JOURNEYS = {
  basic: [
    ...basicContentStages,
    ...basicLayoutStages,
    ...basicTypographyStages,
    ...basicColorStages,
  ].map(stage => ({type: stage.type, focus: stage.focus}))
}

export function getInitialJourney(type='basic') {
  const journey = JOURNEYS[type];
  const stages = [
    ...STAGES.content,
    ...STAGES.layout,
    ...STAGES.typography,
    ...STAGES.color,
  ].map(stage => ({
    type: stage.type, 
    focus: stage.focus,
    satisfied: stage.satisfied,
    progress: ProgressTypes.UNEXPLORED, // updated using designsViewed and confidence
    highestViewedIndex: 0,
    currentGeneration: [],
    currentGenerationIndex: 0,
    currentGenerationMasterDesign: null,
    generationIterations: 0,
    exhausted: false, // currentGenerationIndex >= currentGeneration.length
    inJourney: _.some(journey, s => (
      stage.type === s.type && stage.focus === s.focus
    )),
  }))

  return {
    stages,
    stage: stages[0],
    recommendedStage: stages[0],
  }
}

// Update current stage metrics
// on step
// on scroll
// on select

export function _updateJourney(state, action, update) {
  const stage = !action.stage 
    ? state.journey.stage
    : getStage(state.journey.stages, action.stage) 
  const primary = update.primary || state.primary;
  const updatedStage = getUpdatedStage(stage, primary, action);
  const stages = mapReplace(state.journey.stages, stage, updatedStage);
  const recommended = getRecommendedStage(stages, primary);
  update.journey = {
    ...state.journey,
    stages,
    stage: updatedStage,
    recommendedStage: recommended,
  };

  // The user clicked on the recommended stage
  if(action.stage && stage === recommended) {
    updatedStage.progress = getMaxProgress(updatedStage.progress, ProgressTypes.USER_SKIPPED);
  }


  if(action.advanceStage || (updatedStage.exhausted && canAutomaticallyProceed(state))) {
    updatedStage.progress = getMaxProgress(updatedStage.progress, ProgressTypes.USER_SKIPPED);
    const nextRecommended = getRecommendedStage(stages, primary); // Necessary when recommended is the same as updatedStage

    const updatedRecommended = getUpdatedStage(nextRecommended, primary, {stage: nextRecommended});
    update.journey.stage = updatedRecommended;
    update.journey.stages = mapReplace(stages, nextRecommended, updatedRecommended);
    update.journey.recommendedStage = updatedRecommended;
  }
}

function getUpdatedStage(stage, primary, action) {
  const isMasterDesign = stage.currentGenerationMasterDesign === primary;
  const isFromStage = primary._stage.type === stage.type && primary._stage.focus === stage.focus;
  const isFromGeneration = isFromStage && primary._stage.currentGenerationIndex === stage.currentGenerationIndex;

  if(action.forceGeneration || (!isMasterDesign && !isFromGeneration)) {
    const flyers = generateFlyers(primary, stage, action);
    flyers.forEach(f => {
      computeFlyer(f)
      f.id = flyerId++;
      f._stage = stage
    })
    return {
      ...stage,
      currentGeneration: flyers,
      currentGenerationIndex: 0,
      currentGenerationMasterDesign: primary,
      generationIterations: stage.generationIterations + 1,
      exhausted: false,
    }
  }
  else if(stage.exhausted && action.stage) {
    return {
      ...stage,
      currentGenerationIndex: 0,
    }
  }
  else if(action.nextDesign) {
    const index = stage.currentGenerationIndex + 1;
    const highest = Math.max(stage.highestViewedIndex, index);
    return {
      ...stage,
      currentGenerationIndex: index,
      highestViewedIndex: highest,
      exhausted: index >= stage.currentGeneration.length,
      progress: getProgress(stage, highest),
    }
  }
  else if(action.scrolledToIndex) {
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
    index > 150 || (index > 20 && percentage > .8)
      ? ProgressTypes.THOROUGHLY_EXPLORED
      : index > 20 || (percentage > .4)
        ? ProgressTypes.EXPLORED
        : ProgressTypes.UNEXPLORED

  return getMaxProgress(stage.progress, progress);
}

function getMaxProgress(p1, p2) {
  return progressLevels[Math.max(
    progressLevels.indexOf(p1),
    progressLevels.indexOf(p2),
  )]
}

function getRecommendedStage(stages, primary) {
  const stage = _.find(stages, stage => {
    // Confidence
    // Progress
    // Satisfied
    return (
      stage.inJourney
      && (
        !stage.satisfied(primary)
        || (stage.progress === ProgressTypes.UNEXPLORED && stage.type !== 'content')
      )
    )
  })
  return stage;
}

function getStage(stages, {type, focus}) {
  return _.find(stages, s => s.type === type && s.focus === focus);
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
  copy.id = flyerId++;
  delete copy._inHistory;
  computeFlyer(copy);
  return copy;
}