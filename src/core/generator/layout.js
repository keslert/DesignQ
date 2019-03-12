import _ from 'lodash';
import { Lexer, Tagger } from 'pos';
import { copyTemplate, normalizeTemplate } from '../utils/template-utils';
import { mimicTemplateLayout } from './content';

const tagger = new Tagger();

export const basicStages = [
  {
    type: 'layout', 
    focus: 'elements',
    label: 'Elements',
    generate: generateElements,
    satisfied: f => {
      // Is all text assigned to an object?
      // Are there other assignments that make sense?
      
      // Do we have proper line-breaking?

      // element line break confidence
      // element element confidence

      return false;
    },
  },
  {
    type: 'layout', 
    focus: 'elements-to-groups', 
    label: 'Layout',
    satisfied: f => {
      // confidence

      return false;
    }
  },
]


function generateElements(flyer, {history, templates}) {

  const flyers = _.map(templates, template => {
    const copy = copyTemplate(flyer);
    mimicTemplateLayout(copy, template);
    return copy;
  })

  return flyers;

  // const makeUniq = text => {
  //   return _.chain(text)
  //     .groupBy('type')
  //     // make each descriptive unique. "descriptive0"
  //     .flatMap(items => items.map((item, i) => item.type + i))
  //     .value();
  // }

  // const textTypes = makeUniq(flyer._user.text);

  // const results = _.map(templates, t => {
  //   const _textTypes = makeUniq(t._text);
  //   const unmatched =  _.difference(textTypes, _textTypes).map(t => t.slice(0, -1));
  //   const excessive = _.difference(_textTypes, textTypes).map(t => t.slice(0, -1));
  //   const remainingDescriptive = _.filter(excessive, t => t === 'descriptive').length;

  //   // lower score is better.
  //   let score = unmatched.length * 100 + excessive.length * 25;
  //   score -= Math.min(unmatched.length, remainingDescriptive) * 10;

  //   return { template: t, score }
  // })

  // const sorted = _.sortBy(results, 'score');


  // make the easy matches and see what elements are leftover.
  // match the remaining based on matching character lengths

  
  // let the matching begin.

  // sorted by type match

  // TODO: This should use the same process as templates for getting text from the elements
  // and only use the user text as a backup.
  const flyerText = flyer._user.text;

  const flyerTypes = getGroupedTypes(flyerText);

  _.forEach(templates, t => {
    const templateTypes = getGroupedTypes(t._text);
    
    matchTypes(flyerTypes, templateTypes);
    scoreTemplateMatchTypes(t);
  })

  const sorted = _.sortBy(templates, '_score');

  const validTemplates = _.filter(sorted, t => true);

  const builds = validTemplates.map(t => transferElements(flyer, t));


  console.log(sorted);
  
}

function transferElements(flyer, template) {

  const copy = makeFlyerCopy(flyer);

  template._groups.forEach(g => {
    const groupProps = flyer.content[g.groupType] || defaultGroupProps;
    flyer.content[g.groupType] = {...groupProps};
    
    const elements = g.elements.map(el => {
      const match = el._match;
      // const text = match ? match.text : el.


    })
    flyer.content[g.groupType].elements = elements;


  })

}

function makeFlyerCopy(flyer) {
  // TODO: Only copy the relevant properties
  return _.cloneDeep(flyer);
}

function matchTypes(f, t) {
  f.specifics.forEach(s => s._matched = false);

  // First pass: find specific matches
  for(let i = 0; i < t.specifics.length; i++) {
    const tText = t.specifics[i];
    tText._match = _.find(f.specifics, ({type}) => type === tText.type);
    if(tText._match) {
      tText._match._matched = true;
    }
  }

  const f_unmatchedSpecifics = _.filter(f.specifics, s => !s._matched);
  const t_unmatchedSpecifics = _.filter(t.specifics, s => !s._match);

  const f_unmatched = _.sortBy([...f_unmatchedSpecifics, ...f.generics], t => t.text.length);
  const t_unmatched = _.sortBy([...t_unmatchedSpecifics, ...t.generics], t => t.text.length);

  for(let i = 0; i < f_unmatched.length; i++) {
    const fText = f_unmatched[i];
    const tText = t_unmatched[i];
    if(tText) {
      tText._match = fText;
      fText._matched = true;
    }
  }
}

function scoreTemplateMatchTypes(template) {
  const scores = template._text.map(t => {
    if(!t._match) return 1000;

    const typeScore = t.type === t._match.type ? 0 : 100;
    const characterScore = Math.abs(t.text.length - t._match.text.length);
    return typeScore + characterScore;
  })

  template._score = _.sum(scores);
}


function getLineBreaks(text, options) {
  const words = new Lexer().lex(text);
  const tagged = tagger.tag(words)
  // const tagged = [];

  return tagged.reduce((res, [word, tag], i) => {
    console.log(word, tag);
    return res;
  }, [''])
}

function subtract(a, b) {
  const res = [];
  for(let i = 0; i < a.length; i++) {
    const index = _.findIndex(b, a[0]);
    if(index === -1) {
      res.push(a[0]);
    } else {
      b.splice(index, 1);
    }
  }
  return res;
}


function getGroupedTypes(text) {
  return {
    specifics: _.filter(text, t => t.type !== 'descriptive'),
    generics: _.filter(text, t => t.type === 'descriptive'),
  }
}

// var taggedWords = tagger.tag(words);
// for (i in taggedWords) {
//     var taggedWord = taggedWords[i];
//     var word = taggedWord[0];
//     var tag = taggedWord[1];
//     console.log(word + " /" + tag);
// }

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




const defaultElementProps = {
  color: { hex: '#000000' },
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
    weight: 400,
  }
}

const defaultGroupProps = {
  
}