import _ from 'lodash';
import { safeIncrement, mode, copyTemplate } from '../utils/template-utils';

export const basicStages = [
	{ 
		type: "color", 
		focus: "background", 
		label: 'Background',
		satisfied: () => true,
		generate: generateBackground,
	},
	{ 
		type: "color", 
		focus: "foreground", 
		label: 'Foreground',
		satisfied: () => true,
		generate: generateForeground,
	}
];

export const advancedStages = [];
export const optionalStages = []
export const stages = [
  ...basicStages,
  ...advancedStages,
  ...optionalStages,
]


function generateBackground(flyer, options) {

	// Templates with similar surfaces
		// Flyer
		// Content
		// Groups
	// Decoration
		// Decoration can just be an image, or it can be a pattern

	// how many tiers of surfaces?
	
	const flyerSurface = true;
	const contentSurface = flyer.content.background || flyer.content.border;

	// Step #1 is all about finding the dominant image or background color
	// - The foreground colors are simply optimal based on the color palette.
	// How to find the dominant color or image?

	// We can start sourcing images as soon as we have text.

	// Double clicking a surface with an image allows you to edit zoom and position.


	// Where to expose these options?
	// Consider images
	// Consider solid/gradient backgrounds
	// Consider colorized images
	// Consider patterns
	// Words used to search
	// Favor those options that are more similar to what the user currently has. 
	

	// How many colors? Typically 3? 4? Does it depend on the number of surfaces? The number of surface tiers?
	// How often are group surfaces the same?
	// When to use a background image?

	// Is it too early to apply 

	const palette = {
		dark: '',
		white: '',
		primary: '',
		secondary: '',
	}
	// Image is light (acts as the light or dark background)
	// Image is dark (but a surface on top of it doesn't have to have a suitable contrast ratio)




	return _.range(0, 2).map(f => {
    return copyTemplate(flyer);
  })
}

function generateForeground(flyer, options) {
	// complements
	// tertiary
	// monochrome
	// square
	// colormind
	// search amongst saved palettes


	return _.range(0, 2).map(f => {
    return copyTemplate(flyer);
  })
}


// Search for elements in my group
// Search for elements with my same background color

export function getElementColor(template, group, elementType) {
	const bg = group.background || group.__background || '#bogus';

	// Find an element in my group with the same background
	const element = _.find(group.elements, el => el.lines && el.__background === bg);
	if(element) {
		return element.color;
	}

	// Search for any element with my 
	const elements = _.filter(template._elements, el => el.__background === bg);
	if(elements.length) {
		const possibleColors = _.uniq(elements.map(el => el.color));
		// TODO: Choose the best based on colorStats;
		// contrast(bg, color[0])
		return possibleColors[0];
	}

	// TODO: Choose the best color from the color palette
	// return {color: '#000000'};
	return { color: template.palette.dark };
}



// Which elements are usually the same color?
// Average contrast?
export function computeColorStats(templates) {

}


export function mimicSurface(surfaceA, surfaceB, templateA, templateB, preference) {
	surfaceA.background = mimicBackground(surfaceB, templateA, templateB, preference);
	surfaceA.decor = mimicDecor(surfaceB, templateA, templateB);
	surfaceA.border = mimicBorder(surfaceB, templateA, templateB);
	surfaceA.bleed = surfaceB.bleed;
	surfaceA.h = surfaceB.h;
	surfaceA.w = surfaceB.w;
	surfaceA.alignX = surfaceB.alignX;
	surfaceA.alignY = surfaceB.alignY;
	surfaceA.itemsAlignX = surfaceB.itemsAlignX;
	surfaceA.itemsAlignY = surfaceB.itemsAlignY;
	surfaceA.textAlign = surfaceB.textAlign;
	surfaceA.pl = surfaceB.pl;
	surfaceA.pr = surfaceB.pr;
	surfaceA.pt = surfaceB.pt;
	surfaceA.pb = surfaceB.pb;
	surfaceA.ml = surfaceB.ml;
	surfaceA.mr = surfaceB.mr;
	surfaceA.mt = surfaceB.mt;
	surfaceA.mb = surfaceB.mb;
}

function mimicBackground(surface, templateA, templateB, preference) {
	const bg = surface.background;
	if(!bg) return false

	return {
		...bg,
		...(bg.img ? { img: { src: '/placeholder.png', meta: {h: 1444, w: 1444}}} : {}),
		...(bg.color ? { color: mimicColor(bg.color, templateA, templateB, preference)} : {}),
		backgroundBlendMode: null,
	}
}

function mimicDecor(surface, templateA, templateB) {
	const decor = surface.decor;
	if(!decor) return false

	// TOOD: 
	return {
		...decor,
		background: mimicBackground(decor, templateA, templateB, 'gray'),
	}
}

function mimicBorder(surface, templateA, templateB) {
	const border = surface.border;
	if(!border) return false

	// TOOD: 
	return {
		...border,
		background: mimicBackground(border, templateA, templateB, 'gray'),
	};
}

function mimicColor(color, templateA, templateB, preference='light') {
	if(color === 'transparent') return color;

	return templateA.palette[preference];
}



/*
# How to estimate proper colors
- eventName
- mood
- 



# What are the color strategies we see
- Solid background
- Image background
- Grayscale
- Darkened
- Colorized
- Solid
- Gradient

# How many colors (1-3)
- Neutral
- Neutral + Highlight (1-2)
- Highlight (2-3)

Foreground colors are based on the background colors
- light scheme
- dark scheme
- hues



// Complementary
// Monochrome
// Supplementary
// White
// Grays
*/

/* 
Image Meta Data
- w, h
- color-palette
- smart-crop
*/
