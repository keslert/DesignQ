import _ from 'lodash';
import { safeIncrement, mode, copyTemplate } from '../utils/template-utils';
import { getFromCache, getDesiredNumberOfFlyers, validCache } from '.';

// font family & text transform
// font sizes [0-2]
// font weight [400, 700]

export const basicStages = [
  {
    type: 'typography', 
    focus: 'primary', 
    label: 'Primary Font',
    satisfied: () => true, 
    generate: generatePrimary,
  },
  {
    type: 'typography', 
    focus: 'secondary', 
    label: 'Secondary Font',
    satisfied: () => true,
    generate: generateSecondary,
  },
  {
    type: 'typography', 
    focus: 'size',
    label: 'Font Sizes',
    satisfied: () => true,
    generate: generateSecondary,
  },
]

export const advancedStages = [];
export const optionalStages = []
export const stages = [
  ...basicStages,
  ...advancedStages,
  ...optionalStages,
]

const primaryCache = {};
export function generatePrimary(flyer, {templates, multiple}) {
  // if(validCache(flyer, primaryCache)) {
  //   return getFromCache(primaryCache, multiple);
  // }

  const uniqTemplates = _.uniqBy(Object.values(templates), t => t._dominant.font.family);

  const flyers = _.map(uniqTemplates, template => {
    const copy = copyTemplate(flyer);
    const textElements = _.filter(template._elements, el => el.lines);
    const secondaryTextElements = _.filter(textElements, el => el.type !== 'dominant');
    const dominantFamily = template._dominant.font.family;
    const secondaryFamily = mode(secondaryTextElements.map(el => el.font.family))[0];

    copy._elements.forEach(el => {
      if(el.lines) {
        const templateEl = _.find(textElements, ({type}) => type === el.type);
        el.font = templateEl ? templateEl.font : getDefaultFontProps(dominantFamily, el.type, secondaryFamily);
      }
    })
    copy.genId = flyer.id;
    return copy;
  })
  flyers.sort((a, b) => a._score <= b._score ? -1 : 1);

  return flyers;
}

export function generateSecondary(flyer, options) {
  
  const fontStats = getFontStats();
  const secondaryTextElements = _.filter(flyer._elements, el => el.lines && el.type !== 'dominant');
  const dominantFamily = flyer._dominant.font.family;

  let secondaryFamilies = _.uniq(_.flatMap(secondaryTextElements, el => {
    const families = Object.keys(fontStats[el.type].families)
    return _.filter(families, family => fontStats[el.type].families[family].dominantPairing[dominantFamily])
  }))

  if(secondaryFamilies.length <= 1) {
    const families = _.uniq(Object.values(fontStats.small.dominantPairing))
    secondaryFamilies = families;
  }



  const flyers = secondaryFamilies.map(family => {
    const copy = copyTemplate(flyer);
    copy._elements.forEach(el => {
      if(!el.lines || el.type === 'dominant') return;
      el.font = getDefaultFontProps(dominantFamily, el.type, family);
    })

    return copy;
  })

  return flyers;
}


const LETTERCASE = ['uppercase', 'normal', 'lowercase'];
export function getElementFont(template, group, elementType) {
  const fontStats = getFontStats();
  const dominantFamily = template._dominant ? template._dominant.font.family : template.fonts.dominant;
  const family = fontStats[elementType].dominantPairing[dominantFamily];

  return getDefaultFontProps(dominantFamily, elementType, family)
}

function getDefaultFontProps(dominantFamily, elementType, family) {
  const fontStats = getFontStats();
  const typeStats = fontStats[elementType];
  const familyStats = typeStats.families[family] || typeStats.families[typeStats.dominantPairing[dominantFamily]]
  const lettercase = _.maxBy(LETTERCASE, l => familyStats.lettercase[l]);

  return {
    family,
    weight: familyStats.weight[`${lettercase}Mode`] || 400,
    letterSpacing: familyStats.letterSpacing[`${lettercase}Mode`] || 0,
    lineHeight: familyStats.lineHeight[`${lettercase}Mode`] || 1.4,
    style: familyStats.style[`${lettercase}Mode`] || 'normal',
    transform: lettercase,
    size: 1,
  }
}



export function computeTypographyStats(templates) {
  
  computeFontStats(templates);
}

let _fontStats;
function getFontStats() {
  return _fontStats;
}

const defaultFontStat = {
  count: 0,
  dominantPairing: {},
  lettercase: {uppercase: 0, normal: 0, lowercase: 0},
  letterSpacing: {uppercase: [], normal: [], lowercase: []},
  lineHeight: {uppercase: [], normal: [], lowercase: []},
  weight: {uppercase: [], normal: [], lowercase: []},
  style: {uppercase: [], normal: [], lowercase: []},
}

function computeFontStats(templates) {
  _fontStats = {};
  
  
  _.forEach(templates, template => {
    const dominant = _.find(template._elements, el => el.type === 'dominant');
    template._elements.forEach(el => {
      if(!el.lines) return;

      const type = el.type;
      const family = el.font.family;
      const lettercase = el.font.transform;
      
      _fontStats[type] = _fontStats[type] || {families: {}};
      _fontStats[type].families[family] = _fontStats[type].families[family] || _.cloneDeep(defaultFontStat);
      const o = _fontStats[type].families[family];

      o.count++;
      o.lettercase[lettercase]++;
      o.letterSpacing[lettercase].push(el.font.letterSpacing);
      o.lineHeight[lettercase].push(el.font.lineHeight);
      o.weight[lettercase].push(el.font.weight);
      o.style[lettercase].push(el.font.style);
      safeIncrement(o.dominantPairing, dominant.font.family)
    })
  })


  const dominantFamilies = _.keys(_fontStats.dominant.families);
  _.forEach(_fontStats, (typeStats, type) => {

    _.forEach(typeStats.families, (familyStats, family) => {
      ['letterSpacing', 'lineHeight', 'weight', 'style'].forEach(key => {
        _.forEach(familyStats[key], (items, lettercase) => {
          familyStats[key][`${lettercase}Mode`] = mode(items)[0];
          if(_.isNumber(items[0])) {
            familyStats[key][`${lettercase}Mean`] = _.mean(items);
          }
        })
      })
      _.forEach(familyStats.lettercase, (_count, lettercase) => {
        familyStats.lettercase[lettercase] /= familyStats.count;
      })

      _.forEach(familyStats.dominantPairing, (_count, family) => {
        familyStats.dominantPairing[family] /= familyStats.count;
      })
    })

    const typeFamilies = Object.keys(typeStats.families);
    typeStats.dominantPairing = _.zipObject(dominantFamilies, dominantFamilies.map(dominantFamily => (
      _.maxBy(typeFamilies, typeFamily => typeStats.families[typeFamily].dominantPairing[dominantFamily])
    )))
  })
}