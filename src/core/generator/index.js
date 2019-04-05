import _ from 'lodash';
import WebFontLoader from 'webfontloader';
import { WebFontConfig } from './web-fonts';

import { stages as contentStages, computeContentStats } from './content';
import { stages as layoutStages } from './layout';
import { stages as typographyStages, computeTypographyStats } from './typography';
import { stages as colorStages, computeColorStats, buildTemplatePalette } from './color';
import { stages as decorationStages } from './decoration';
import { stages as polishStages } from './polish';
import { stages as exportStages } from './export';

import { templates } from '../templates';
import { produceFlyer } from '../producer';
import { linkTemplate } from '../utils/template-utils';

const placeholderImage = { src: '/placeholder.png', meta: {w: 500, h: 500}}

export async function precompute(flyerSize) {
  if(process.env.NODE_ENV === 'production') {
    await new Promise((resolve, reject) => {
      WebFontLoader.load({...WebFontConfig, 
        active: function () {
          resolve();
        },
      });
    });
  }
  _.forEach(templates, t => {
    t.size = flyerSize;
    linkTemplate(t);
    produceFlyer(t); 
    t.palette = buildTemplatePalette(t);
    // replace images
    // const defaultImageColor = {type: 'solid', color: t.palette.dark, paletteKey: 'dark'};
    t._all.forEach(item => {
      const img = _.get(item, ['background', 'img'])
      if(img) {
        item.background.img = placeholderImage;

        if(item.background.color) {
          const color = item.background.color;
          if(color.type === 'solid' && !color.alpha) {
            color.alpha = 0.5;
          } else if(color.type === 'linear') {
            color.color.alpha = 0.5;
            color.colorB.alpha = 0.5;
          }

          // item.background.color = item.background.color || defaultImageColor;
        }
      }
    })
    
    // connect colors to palette
    t._all.forEach(item => {
      const colors = _.filter([
        _.get(item, ['background', 'color']),
        _.get(item, ['decor', 'background', 'color']),
        item.color,
      ])
      colors.forEach(color => {
        color.paletteKey = color.type !== 'transparent'
          ? _.findKey(t.palette, c => c === color.color)
          : 'transparent'
      })
    })
  })
  computeContentStats(templates);
  // computeLayoutStats(templates);
  computeColorStats(templates);
  computeTypographyStats(templates);
}

export function generateFlyers(flyer, stage, options={}) {
  linkTemplate(flyer);
  options.templates = templates;

  const _stage = _.find(STAGES[stage.type], s => s.key === stage.key)
  const generated = _stage.generate(flyer, options);
  return generated;
}

// TODO: Update to use all stages.
export const STAGES = {
  content: contentStages,
  layout: layoutStages,
  typography: typographyStages,
  color: colorStages,
  decoration: decorationStages,
  polish: polishStages,
  export: exportStages,
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