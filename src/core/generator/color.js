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
		focus: "filters", 
		label: 'Filters',
		satisfied: () => true,
		generate: f => ([copyTemplate(f), copyTemplate(f)]),
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


function generateBackground(flyer, {templates}) {

	const images = skiImages;

	const imageFlyers = images.map(img => {
		const copy = copyTemplate(flyer);

		// Find the most likely image surface.
		const surface = _.find(copy._surfaces, s => s.background && s.background.img)
			|| _.find(copy._elements, el => el.type === 'image')
			|| (get(copy, ['decor', 'background', 'img']) ? copy.decor: null)
			|| copy;

		surface.background = surface.background || {};
		surface.background.img = {
			src: img.src,
			meta: img.meta,
			colors: img.colors,
			zoom: 1,
			x: img.crop.x / 100,
			y: img.crop.y / 100,
			filters: {
				brightness: 0.9,
			},
		}
		copy.palette = buildPalette(img.colors);

		mimicBackgroundColors(copy, flyer);
		mimicForegroundColors(copy, flyer);

		return copy;
	})

	const uniqBgs = _.uniqBy(_.filter(templates, t => t.background.color), t => t.background.color)
	const colorFlyers = uniqBgs.map(t => {
		const copy = copyTemplate(flyer);
		const surface = _.find(copy._surfaces, s => s.background && s.background.img)
			|| _.find(copy._elements, el => el.type === 'image')
			|| copy;
		delete surface.background.img;
		copy.palette = t.palette;
		mimicBackgroundColors(copy, flyer);
		mimicForegroundColors(copy, flyer);

		return copy;
	})
	
	return [
		...imageFlyers,
		...colorFlyers,
	];

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





const placeholderImage = { src: '/placeholder.png', meta: {h: 500, w: 500}}

export function transferColors(flyer, template, extraImages=[]) {
	
	/* Step #1 Transfer images */
	// TODO: Maybe sort this differently since we are giving highest priority to flyer.
	const images = [
		..._.filter(flyer._surfaces, s => s.background && s.background.img).map(s => s.background.img),
		...extraImages,
	]

	let imageIndex = 0;
	flyer._surfaces.forEach((fSurface, i) => {
		const tSurface = template._surfaces[i];
		if(tSurface.background && tSurface.background.img) {
			const img = images[imageIndex++] || placeholderImage;

			// fSurface.background = _.defaults(fSurface.background, tSurface.background);
			fSurface.background = fSurface.background || {};
			fSurface.background.img = img;
		} 
		else if(fSurface.background) {
			delete fSurface.background.img;
		}
	})
	// We had images to use and we didn't use any.
	if(images.length && !imageIndex) {
		// Any images that should take it over?
		const image = _.find(flyer._elements, el => el.type === 'image');
		if(image) {
			image.background.img = images[0];
		}
		else if(flyer.decor && flyer.decor.background) {
			flyer.decor.background.img = images[0];
		}
		else {
			flyer.background = {...template.background, img: images[0]}
		}
	}

	mimicBackgroundColors(flyer, template)
	mimicForegroundColors(flyer, template);
}

function getColorType(color, palette) {
	return _.findKey(palette, c => c === color) || color;
}


// The background of the closest ancestor
function getBackdrop(item) {
	let current = item;
	while(current = current._parent) {
		if(current.background && current.background.color !== 'transparent') {
			return current.background;
		}
	}
	if(item.kind === 'template') {
		return item.background;
	}
}

function getOptimalBackgroundColor(surface, palette, preferences) {
	if(preferences[0] === 'transparent') {
		return 'transparent';
	}
	
	const backdrop = getBackdrop(surface);
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
			colors = [palette.dark, palette.light]
			break;
		case 'content':
			colors = [palette.dark, palette.light]
			break;
		case 'group':
			colors = [palette.light, palette.primary, palette.dark]
			break;
		case 'element':
			colors = [palette.primary, palette.secondary, palette.light, palette.dark]
			break;
		default:
			colors = [palette.light, palette.dark]
	}

	return _.find(colors, color => color && color !== backdropColor);
}


export function transferSurface(fSurface, tSurface, flyer, template, preference) {
	mimicBackgroundColor(fSurface, tSurface, flyer, template, preference);
	mimicDecor(fSurface, tSurface, flyer, template);
	mimicBorder(fSurface, tSurface, flyer, template);
	fSurface.bleed = tSurface.bleed;
	fSurface.h = tSurface.h;
	fSurface.w = tSurface.w;
	fSurface.alignX = tSurface.alignX;
	fSurface.alignY = tSurface.alignY;
	fSurface.itemsAlignX = tSurface.itemsAlignX;
	fSurface.itemsAlignY = tSurface.itemsAlignY;
	fSurface.textAlign = tSurface.textAlign;
	fSurface.pl = tSurface.pl;
	fSurface.pr = tSurface.pr;
	fSurface.pt = tSurface.pt;
	fSurface.pb = tSurface.pb;
	fSurface.ml = tSurface.ml;
	fSurface.mr = tSurface.mr;
	fSurface.mt = tSurface.mt;
	fSurface.mb = tSurface.mb;
}

function mimicBackgroundColors(flyer, template, preference='dark') {
	flyer._surfaces.forEach((fSurface, i) => {
		const tSurface = template._surfaces[i];
		mimicBackgroundColor(fSurface, tSurface, flyer, template, preference);
		
		['decor', 'border'].forEach(prop => {
			if(tSurface[prop]) {
				mimicBackgroundColor(fSurface[prop], tSurface[prop], flyer, template, preference)
			}
		})
	})

	flyer._elements.forEach(el => {
		if(el.background) {
			el.background.color = getOptimalBackgroundColor(el, flyer.palette, [
				getColorType(el.background.color, flyer.palette),
				preference,
			])
		}
	})
}

function mimicDecor(fSurface, tSurface, flyer, template, preference) {
	if(tSurface.decor) {
		fSurface.decor = {...tSurface.decor};
		mimicBackgroundColor(fSurface.decor, tSurface.decor, flyer, template, preference);
	}
	else {
		delete fSurface.decor;
	}
}

function mimicBorder(fSurface, tSurface, flyer, template, preference) {
	if(tSurface.border) {
		fSurface.border = {...tSurface.border};
		mimicBackgroundColor(fSurface.border, tSurface.border, flyer, template, preference);
	}
	else {
		delete fSurface.border;
	}
}

function mimicBackgroundColor(fSurface, tSurface, flyer, template, preference) {
	if(tSurface.background) {
		fSurface.background = fSurface.background || {};
		fSurface.background.color = getOptimalBackgroundColor(fSurface, flyer.palette, _.filter([
			// getColorType(get(fSurface, ['background', 'color']), flyer.palette),
			getColorType(tSurface.background.color, template.palette),
			fSurface.background.img && 'dark',
			preference,
		]))
	}
	else {
		delete fSurface.background;
	}
}

function mimicForegroundColors(flyer, template, preference='light') {
	flyer._elements.forEach(el => {
		el.color = getOptimalForegroundColor(el, flyer.palette);
		if(el.divider) {
			// TODO: This is not always true.
			el.divider.color = el.color;
		}
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




// Templates with similar surfaces
	// Flyer
	// Content
	// Groups
// Decoration
	// Decoration can just be an image, or it can be a pattern

// how many tiers of surfaces?

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

// Image is light (acts as the light or dark background)
// Image is dark (but a surface on top of it doesn't have to have a suitable contrast ratio)