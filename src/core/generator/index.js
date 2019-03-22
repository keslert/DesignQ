import _ from 'lodash';
import { generateLayout } from './layout';
import WebFontLoader from 'webfontloader';
import { WebFontConfig } from './web-fonts';

import { 
  stages as layoutStages,
} from './layout';
import {
  stages as contentStages,
  computeContentStats,
} from './content';
import { 
  stages as colorStages,
  computeColorStats,
} from './color';
import { 
  stages as typographyStages,
  computeTypographyStats,
} from './typography';

import { templates } from '../templates';
import { computeFlyer } from '../producer';
import { normalizeTemplate } from '../utils/template-utils';


export async function precompute() {
  await new Promise((resolve, reject) => {
    WebFontLoader.load({...WebFontConfig, 
      active: function () {
        resolve();
      }
    });
  });
  _.forEach(templates, t => (computeFlyer(t), normalizeTemplate(t)))
  computeContentStats(templates);
  // computeLayoutStats(templates);
  computeColorStats(templates);
  computeTypographyStats(templates);
}

export function generateFlyers(flyer, stage, options={}) {
  normalizeTemplate(flyer);
  options.templates = templates;

  const _stage = _.find(STAGES[stage.type], s => s.focus === stage.focus)
  const generated = _stage.generate(flyer, options);
  return generated;
}

// TODO: Update to use all stages.
export const STAGES = {
  content: contentStages,
  layout: layoutStages,
  typography: typographyStages,
  color: colorStages,
}

// function generateStage(flyer, history, stage) {
//   switch(stage.type) {
//     case 'content': 
//       return generateContent(flyer, history, stage)
//     case 'layout': 
//       return generateLayout(flyer, history, stage)
//     default:
//       return;
//   }
// }


// The user upgrading boosts confidence


// If the user clicks to advance to the next stage that should raise our confidence for the current stage.
// This is especially true if the user has already seen a number of variations.


// 1. Type of flyer
// 2. Important Information (text content)
// 3. Layout
  // Line breaks (element shape)
  // Group assignment
    // Content types
    // Lines
    // Max characters


// 4. Color
  // Establishing a base color
    // Image? Provided or searching unsplash in the background for ideas.
    // Mood?

  // Palette
  
  // Background
    // Images
    // Color Filtered Images
    // Basic patterns?
  // Foreground

  
// 5. Typography
  // Primary
  // Secondary
  // Relative sizes

// 6. Decoration
  // Pattern refinement
  // Text decals
  // Bars
  // Borders

// 7. Polish
  // Sizing
  // Color Harmony
  // Overlays
    // Filters