import _ from 'lodash';
import { safeIncrement, mode, copyTemplate, withSurfaces } from '../utils/template-utils';
import { skiImages } from '../data/images/ski-trip'
import { withGroups } from '../producer';
import chroma from 'chroma-js';
import get from 'lodash/get';

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

	const images = skiImages;

	const flyers = images.map(img => {
		const copy = copyTemplate(flyer);

		// Find the most likely image surface.
		const surface = _.find(copy._surfaces, s => s.background && s.background.img)
			|| _.find(copy._elements, el => el.type === 'image')
			|| copy;

		surface.background = surface.background || {};
		surface.background.img = {
			src: img.src,
			meta: img.meta,
			zoom: 1,
			x: img.crop.x / 100,
			y: img.crop.y / 100,
			filters: {
				brightness: 0.9,
			}
		}
		copy.palette = buildPalette(img.palette);

		return copy;
	})
	
	return flyers;


	const colors = [];
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
	computeBackgroundStats(templates);
}


let _backgroundStats;
function getBackgroundStats() {
	return _backgroundStats;
}

function computeBackgroundStats(templates) {
	_.map(templates, t => {
		const background = t.background.img ? 'image' : t.background.color;

		const dominantColor = t._dominant.color.color;
		const colors = t._textElements.map(el => el.color.color);
		const color = mode(colors)

		return background;
	})
}

export function buildTemplatePalette(template) {

	// 
	// text = Highest contrast
	// dominant/heading = [colors w/ minimum contrast]
	// surface bg's don't require a minimum contrast



	// const dominant = t._dominant.color.color;
	const textColors = template._textElements.map(el => el.color.color);

	const surfaces = [
		template,
		template.content,
		...template._groups,
		...template._elements,
	]
	const surfaceColors = surfaces.map(s => s.background 
		? s.background.img
			? `
				repeating-linear-gradient(45deg, transparent, transparent 6px, #000 6px, #000 10px),
				repeating-linear-gradient(135deg, transparent, transparent 6px, #505050 6px, #505050 10px), 
				#ffffff`
			: s.background.color
		: null
	);

	const colors = _.uniq(_.filter([
		...textColors,
		...surfaceColors,
	], c => c && c.startsWith('#')));

	const palette = buildPalette(colors);

	return palette;
}

const WHITE = '#ffffff';
const BLACK = '#000000';
function buildPalette(_colors) {
	const colors = _colors.map(color => {
		const c = chroma(color);
		const fromWhite = chroma.distance(WHITE, color);
		const fromBlack = chroma.distance(BLACK, color);
		return {
			color,
			fromWhite,
			fromBlack,
		}
	});

	colors.sort((a, b) => a.fromWhite < b.fromWhite ? -1 : 1);
	const lightest = _.filter(colors, c => c.fromWhite < 30)[0] || {color: WHITE};
	_.remove(colors, lightest);

	colors.sort((a, b) => a.fromBlack < b.fromBlack ? -1 : 1);
	const darkest = colors[0] || {color: BLACK};
	_.remove(colors, darkest);

	const primary = colors[0];
	const secondary = colors[1];

	const palette = {
		light: lightest.color,
		dark: darkest.color,
	}

	if(primary) palette.primary = primary.color;
	if(secondary) palette.secondary = secondary.color;

	return palette;
}



const placeholderImage = { src: '/placeholder.png', meta: {h: 1444, w: 1444}}

export function mimicColors(flyer, template, additionalImages=[]) {
	// Step #0: Prep & Cleanup
	const surfaces = [
		[flyer, template],
		[flyer.content, template.content],
		...withGroups(flyer, (g, type) => (
			[flyer.content[type], template.content[type]]
		)),
	]
	
	// surfaces.forEach(([fSurface]) => {
	// 	fSurface._background = fSurface.background;
	// 	delete fSurface.background;
	// })
	
	/* Step #1 Assign images */
	// TODO: Maybe sort this differently since we are giving highest priority to flyer.
	const images = [
		..._.filter(surfaces, ([f]) => f.background && f.background.img).map(([f]) => f.background.img),
		...additionalImages
	]

	let imageIndex = 0;
	surfaces.forEach(([fSurface, tSurface]) => {
		if(tSurface.background && tSurface.background.img) {
			const img = images[imageIndex++] || placeholderImage;
			fSurface.background = _.cloneDeep(tSurface.background);
			fSurface.background.img = img;
			fSurface.backgroundBlendMode = get(fSurface, ['background', 'backgroundBlendMode']) || tSurface.background.backgroundBlendMode;
			fSurface.filters = get(fSurface, ['background', 'filters']) || tSurface.background.filters;
		} 
		else if(fSurface.background) {
			delete fSurface.background.img;
		}
	})
	// We had images to use and we didn't use any.
	if(images.length && !imageIndex) {
		// Any images that should take it over?
		const image = _.find(flyer._elements, el => el.type === 'image');
		if(image && image.background) {
			image.background.img = images[0];
		}
		else {
			flyer.background = {...template.background, img: images[0]}
		}
	}

	/* Step #2 Assign background colors */
	surfaces.forEach(([fSurface, tSurface]) => {
		if(tSurface.background) {
			fSurface.background = fSurface.background || {};
			fSurface.background.color = tSurface.background.color !== 'transparent' 
				? getOptimalBackgroundColor(fSurface, flyer.palette, _.filter([
						getColorType(get(fSurface, ['_background', 'color']), flyer.palette),
						getColorType(tSurface.background.color, template.palette) || 'dark',
					]))
				: 'transparent'
		}
		else {
			delete fSurface.background;
		}
	})

	withGroups(flyer, g => g.elements.forEach(el => {
		el.color = getOptimalForegroundColor(el, flyer.palette);
	}))


	/* Step #3 Assign foregrounds */
	// fSurface.

}

function getColorType(color, palette) {
	return _.findKey(palette, c => c === color);
}


// The background of the closest ancestor
function getBackdrop(item) {
	let current = item;
	while(current = current._parent) {
		if(current.background && current.background.color !== 'transparent') {
			return current.background;
		}
	}
}

function getOptimalBackgroundColor(surface, palette, preferences) {
	const backdrop = surface.background || getBackdrop(surface);

	if(preferences[0] === 'transparent') return 'transparent';

	const colorPreferences = preferences.map(pref => palette[pref]);

	const color = _.find(colorPreferences, color => {
		return color && backdrop.color !== color;
	}) || getOptimalBackgroundColorForSurfaceType(surface, palette, backdrop);

	return color;
}

function getOptimalForegroundColor(item, palette) {
	const backdrop = item.background || getBackdrop(item);

	const type = getColorType(backdrop.color, palette);
	return {
		color: type === 'light' ? palette.dark : palette.light
	}
}

// TODO: Use stats for this.
function getOptimalBackgroundColorForSurfaceType(surface, palette, backdropColor) {
	let colors;
	switch(surface.kind) {
		case 'template':
			colors = [palette.light, palette.dark]
			break;
		case 'content':
			colors = [palette.light, palette.dark]
			break;
		case 'group':
			colors = [palette.light, palette.primary, palette.dark]
			break;
		case 'element':
			colors = [palette.primary, palette.secondary, palette.light, palette.dark]
			break;
	}

	return _.find(colors, color => color && color !== backdropColor);
}


export function mimicSurface(surfaceA, surfaceB, templateA, templateB, preference) {
	// surfaceA.background = mimicBackground(surfaceA, surfaceB, templateA, templateB, preference);
	// surfaceA.decor = mimicDecor(surfaceA, surfaceB, templateA, templateB);
	// surfaceA.border = mimicBorder(surfaceA, surfaceB, templateA, templateB);
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

function mimicBackgroundColor(surfaceA, surfaceB, templateA, templateB, preference) {
	const bgA = surfaceA.background || {};
	const bgB = surfaceB.background || {};
	if(!bgB) return false

	const bg = {...bgB}
	// if(bgB.img) {
	// 	bg.img = bgA.img || ((templateB._isTemplate || !bgB.img)
	// 		? 
	// 		: bgB.img
	// 	)
	// }
	// if(bgB.color) {
	// 	bg.color = bgA.color || mimicColor(bgB.color, templateA, templateB, preference)
	// }
	// bg.backgroundBlendMode = bgA.backgroundBlendMode;

	return bg;
}

function mimicDecor(surface, templateA, templateB) {
	const decor = surface.decor;
	if(!decor) return false

	// TOOD: 
	// return {
	// 	...decor,
	// 	background: mimicBackground(decor, templateA, templateB, 'gray'),
	// }
}

function mimicBorder(surface, templateA, templateB) {
	const border = surface.border;
	if(!border) return false

	// TOOD: 
	// return {
	// 	...border,
	// 	background: mimicBackground(border, templateA, templateB, 'gray'),
	// };
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
