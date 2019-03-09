import _ from 'lodash';

// font family & text transform
// font sizes [0-2]
// font weight [400, 700]

export const basicStages = [
  {type: 'typography', focus: 'primary', effort: 10, confidence: 10},
  {type: 'typography', focus: 'secondary', effort: 5, confidence: 5},
]

export function generateTypography(flyer, ) {

}


export function getElementFont(template, group, elementType) {
  // TODO: Use typography stats

  return {
    family: 'Open Sans',
    // family: elementType === 'dominant' ? template.fonts.heading : template.fonts.regular,
    weight: 400,
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  }
}

export function computeTypographyStats(templates) {
	
}

// Exploration is 90% about the font family
// Default sizes should get us really far