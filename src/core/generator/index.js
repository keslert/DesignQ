import { measureTextWidth } from "./text";
import _ from 'lodash';


// Intentions object
  // abstract description of flyer
  // can have many instantiations.
// Instantiation of intentions object
  // detailed description of flyer



// dominant
// bridge
// smalls

// a template must always have a section that has flex: 1; (NOT true, see "Art Talk"). This is typically true when there is an image acting as somewhat of a background image.

const MIN_FONT_SIZE = 14;
const MAX_FONT_SIZE = 140;

// Line breaks have already been determined at this point.
export function computeFlyer(structure, size={w: 612, h:792}) {

  const paddedSize = {
    w: size.w - structure.px * 2,
    h: size.h - structure.py * 2,
  }

  const dominant = _.find(structure.content.elements, el => el.type === 'dominant');
  const bridge = _.find(structure.content.elements, el => el.type === 'bridge');
  const image = _.find(structure.content.elements, el => el.type === 'image');
  const smalls = _.filter(structure.content.elements, el => el.type === 'small');
  
  // TODO: Do we want this to be max size?
  computeDominateMaxSize(dominant, structure, paddedSize);
  const dominantSize = {
    h: dominant._computed.h,
    // only slightly bigger than the dominant size,
    w: Math.min(paddedSize.w, dominant._computed.w * 1.1),
  }

  computeSmallsMaxSize(smalls, dominant, structure, dominantSize);
  computeBridgeMaxSize(bridge, smalls[0], structure, dominantSize);


  const lastIndex = structure.content.elements.length - 1;
  structure.content.elements.forEach((el, i) => {
    el._computed = el._computed || {};
    el._computed.marginBottom = i !== lastIndex ? structure.py : 0;
    el._computed.px = structure.px;
  })



  return structure;
}

const HEIGHT_WEIGHT = {
  bar: .07,
  small: .07,
  bridge: .07,
  image: .3,
  dominant: 0, // ignore this
  footer: .1,
  header: .1,
}


function computeDominateMaxSize(dominant, structure, size) {
  const {width, height} = measureText(dominant);

  const heightUsage = _.sumBy(structure.content.elements, el => HEIGHT_WEIGHT[el.type]) // TODO: this maybe should include number of lines?
    + structure.header ? .1 : 0
    + structure.footer ? .1 : 0

  const maxHeight = size.h * (1 - heightUsage);
  const fontSize = Math.min(
    size.w / width * dominant.font.size,
    maxHeight / height * dominant.font.size,
    MAX_FONT_SIZE,
  )

  dominant._computed = {
    fontSize,
    w: width * (fontSize / dominant.font.size),
    h: height * (fontSize / dominant.font.size), // NOT SURE IF THIS IS CORRECT.
  }
}


function computeSmallsMaxSize(smalls, dominant, structure, size) {
  const {width, height} = _.maxBy(smalls.map(measureText), s => s.width)

  const fontSize = Math.min(
    size.w / width * smalls[0].font.size,
    dominant._computed.fontSize / 4, // TODO: Why 4?
  )
  smalls.forEach(small => small._computed = { 
    fontSize,
    maxFontSize: fontSize,
    minFontSize: MIN_FONT_SIZE,
  })
}

// Bridge can't be the same size as small?
function computeBridgeMaxSize(bridge, small, structure, size) {
  if(!bridge) return;

  const {width, height} = measureText(bridge);
  const fontSize = Math.min(
    size.w / width * bridge.font.size,
    small._computed.fontSize * 1.2, // TODO: Why 1.2 larger than small?
  )
  
  bridge._computed = {
    fontSize,
    maxFontSize: fontSize,
    minFontSize: Math.max(MIN_FONT_SIZE, small._computed.fontSize * 0.8)
  }
}


// Calculating width and height: https://github.com/rougier/freetype-gl/issues/177
// https://support.microsoft.com/en-us/help/200262/how-to-fit-text-in-a-rectangle
// https://stackoverflow.com/questions/5833017/java-is-there-a-linear-correlation-between-a-fonts-point-size-and-its-rendered
// These suggest that fonts don't scale perfectly linearly, but maybe close enough?
function measureText(textObj) {
  // TODO: Text flourishes can change the ratio.

  const maxWidth = _.max(textObj.lines.map(line => measureTextWidth(
    line, // TODO: doesn't handle multiple items per line
    textObj.font.family,
    `${textObj.font.size}px`,
    textObj.font.weight,
    textObj.font.style,
  )));

  const lineCount = textObj.lines.length;
  const height = 
    (textObj.font.size * textObj.font.lineHeight * lineCount - 1) 
    + textObj.font.size // don't include the lineHeight on the last line

  return {
    width: maxWidth,
    height: height,
  }
}


// Intentions Steps
  // Assign content to elements (lists formed)
  // Analyze elements to see if more lists should be formed
    // Analyze flyers to find patterns for when to break things into lists.



// Properties that effect size
  // [x] line breaks
  // [x] font size
  // [x] font family
  // [x] (font weight, font style)
  // padding & margins

  // base size
    // padding

  // line height is based on text size


// The algorithm doesn't know when to break rules. That requires an expert?