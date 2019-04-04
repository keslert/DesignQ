import _ from 'lodash';
import { copyTemplate } from '../utils/template-utils';
import { mimicTemplateLayout } from './content';
import { withGroups } from '../producer';

export const basicStages = [
  {
    type: 'layout', 
    focus: 'structure',
    label: 'Structure',
    generate: generateStructure,
    satisfied: () => true,
  },
  {
    type: 'layout', 
    focus: 'order', 
    label: 'Elements',
    generate: generateOrder,
    satisfied: () => true,
  },
  // {
  //   type: 'layout', 
  //   focus: 'line-breaks', 
  //   label: 'Line Breaks',
  //   generate: generateOrder,
  //   satisfied: f => {
  //     return false;
  //   },
  // },
]

export const advancedStages = [];
export const optionalStages = []
export const stages = [
  ...basicStages,
  ...advancedStages,
  ...optionalStages,
]

function generateStructure(flyer, {history, templates, multiple}) {
  const flyers = _.map(templates, template => {
    const copy = copyTemplate(flyer);
    mimicTemplateLayout(copy, template);
    copy.genId = flyer.id;
    return copy;
  })
  
  if(process.env.NODE_ENV === 'production') {
    flyers.sort((a, b) => a._score < b._score ? 1 : -1);
  }

  return flyers;
}

function generateOrder(flyer, {templates}) {

  const templatesWithSameGroups = _.filter(templates, t => {
    return !t.body === !flyer.body
      && !t.header === !flyer.header
      && !t.footer === !flyer.footer
  })

  const validTemplates = templatesWithSameGroups.map(t => {
    const copy = copyTemplate(flyer);
    mimicTemplateLayout(copy, t);
    
    const fGroupTypes = withGroups(flyer, (g, groupType) => groupType);
    const cGroupTypes = withGroups(copy, (g, groupType) => groupType);
    const sameGroups = _.isEqual(fGroupTypes, cGroupTypes)
    const fElementsTypes = _.flatMap(fGroupTypes, type => flyer.content[type].elements).map(el => el.type);
    const cElementsTypes = _.flatMap(cGroupTypes, type => copy.content[type].elements).map(el => el.type);
    const sameElements = _.difference(fElementsTypes, cElementsTypes).length === 0;
    
    return (sameGroups && sameElements) ? copy : null
  }).filter(i => i);

  const flyers = validTemplates.map(t => {
    const copy = copyTemplate(flyer);
    withGroups(t, g => {
      copy.content[g.type].elements = g.elements;
    })
    return copy;
  })

  return flyers;
}


// Maybe 25 common layouts?
// Half of those can be removed based on the content provided.
// Favor those designs which include more of the content.
// Content should have an inclusion priority.



// Layout is highly dependent on the # of elements and their types.
// Element type is dependent on content
// Element # is dependent on content
// Text Element line breaks


// When should you put items in lists?
// When should you insert bars?

// Increasing/decreasing the spacing between elements can be used to associate/seperate data.
// - Doubling the data under the dominant if the structure is small, dominant, bridge, small

// In the beginning, there are some questions that need to be answered and there are some assumptions that will later turn into questions.


// Maybe use a part of speech tagger for the dominant to know how/if to split it
// - https://github.com/dariusk/pos-js

// paragraphs
// - if two lines, split somewhat evenly
// - estimate proper length and manually wordwrap
// - it's possible that you could do a prelimary step to find out how wide the dominant will be and then use that to break.


// Assume we will use all data provided.

// STEP #1: Should we split the dominant?
// - If yes: we know we need a small dominant, or dominant small.
// STEP #2: What things can be combined?
// - Line combinations first. Where should we line break?


// When does it make sense to assign line breaks?
// - If the width changes... we should rethink line breaks...


// When optimizing for layout, we might need to run through the producer first. Not true for most other generators.




// const content = {
//   eventType: 'Christmas Party', // Used to suggest content, images, icons, colors, and starting flyers
//   eventName: 'Santa Claus is coming to town', // Dominant, or the start or end of this is the dominant.
//   descriptive: [ // Anything
//     'He’s got a list and he’s checking it twice.',
//     'Pictures with Santa',
//     'Live Music',
//   ],
//   location: '1 North Pole', // Often last. Often with TIME and DATE. Can list.
//   date: 'Dec 23rd', // Often last. Often with TIME and LOCATION. Can list.
//   time: '12-4pm', // Often last. Often in a list and with DATE.
//   cost: '$15',
//   socialMedia: { // Always footer?
//     twitter: '@northpole',
//   },
//   website: 'www.northpole.com', // Always footer?
//   email: 'santa@northpole.com', // Always footer?
//   logo: { // Used to determine color palette. Header 80% or Footer 20%
//     url: '',
//     size: { w, h },
//     palette: [],
//   },
//   images: [ // Used to determine color palettes
//     {url: '', size: { w, h }, palette: []},
//   ],
//   // mood: 'bright', // Influences color palette
// }
