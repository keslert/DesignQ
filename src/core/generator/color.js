import _ from 'lodash';
import { safeIncrement, mode, copyTemplate, getItemFromFlyer } from '../utils/template-utils';
import { skiImages } from '../data/images/ski-trip';
import { solidColor, linear } from '../templates';
import chroma from 'chroma-js';
import get from 'lodash/get';
import { buildPaletteColor, getContrast, fixAlpha, PLACEHOLDER_IMAGE } from '../utils/color-utils';
import { resolveItemColors } from '../resolver';

export const basicStages = [
	{
		type: 'color',
		key: "color.background", 
		label: 'Background',
		satisfied: () => true,
		generate: generateBackground,
	},
	{
		type: 'color',
		key: "color.filters", 
		label: 'Background Filters',
		relevant: flyer => !!getProminantImageSurface(flyer),
		satisfied: () => true,
		generate: generateFilters,
	},
	{
		type: 'color',
		key: "color.palette", 
		label: 'Alternate Palettes',
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


function generateBackground(flyer, {templates, state}) {
	const images = state.lastImageSearch.images;
	const cache = state.imageCache;

	// If there was no image before, delete the overlay color.
	const flyer_ = copyTemplate(flyer);
	const prominantSurface = getProminantImageSurface(flyer_) || flyer_;
	if(!prominantSurface.background.img) {
		prominantSurface.background.img = {...PLACEHOLDER_IMAGE};
		delete prominantSurface.background.color;
	}

	const generated = [];

	// Images
	if(images.length) {
		generated.push(...images.map(img => {
			const copy = copyTemplate(flyer_);

			// Find the most likely image surface.
			const surface = getItemFromFlyer(prominantSurface, copy);

			surface.background = surface.background || {};
			surface.background.img = {
				src: img.src,
				meta: img.meta,
				// colors: img.colors,
				// crop: img.crop,
				zoom: 1,
				x: 0.5, // Math.round(img.crop.x) / 100,
				y: 0.5, // Math.round(img.crop.y) / 100,
				filters: {
					brightness: 0.9,
				},
			}

			if(cache[img.id]) {
				const { colors } = cache[img.id].value;
				surface.background.img.colors = colors;
				copy.palette = buildPalette(colors);
				flyer_.background.color = flyer_.background.color || buildPaletteColor('dark', copy.palette, 0.33);
				mimicBackgroundColors(copy, flyer_);
				mimicForegroundColors(copy, flyer_);
			}
			else {
				copy.pending = [
					{type: 'image', cacheKey: img.id, resolve: (pTemplate, {colors}) => {
						const pSurface = getItemFromFlyer(surface, pTemplate);
						pSurface.background.img.colors = colors;
						pTemplate.palette = buildPalette(colors);
						mimicBackgroundColors(pTemplate, flyer_);
						mimicForegroundColors(pTemplate, flyer_);
					}}
				]
			}

			return copy;
		}))
	}

	// Colored
	if(!images.length) {
	// if(false && prominantSurface === flyer_) {
		const uniqBgs = _.uniqBy(_.filter(templates, t => t.background.color), t => t.background.color.color)
		generated.push(...uniqBgs.map(t => {
			const copy = copyTemplate(flyer_);
			copy.background.color = t.background.color;
			copy.palette = t.palette;
			delete copy.background.img;
			mimicBackgroundColors(copy, flyer_);
			mimicForegroundColors(copy, flyer_);
			return copy;
		}))
	}
	
	return generated;
}

function getProminantImageSurface(flyer) {
	return _.find(flyer._containers, s => s.background && s.background.img)
		|| _.find(flyer._elements, el => el.type === 'image')
		|| (get(flyer, ['decor', 'background', 'img']) ? flyer.decor: null)
}

function generateFilters(flyer, {templates}) {
	// if we have an image
	// multi color backgrounds
	const prominantImageSurface = getProminantImageSurface(flyer);
	const flyers = [];
	if(prominantImageSurface) {
		// const black = '#000000';
		// const palette = flyer.palette;
		const filters = _.flatMap(flyer.palette, (color, paletteKey) => ([
			{color: {...solidColor(color, .3), paletteKey}},
			{color: {...solidColor(color, .5), paletteKey}},
			{color: {...solidColor(color, .7), paletteKey}},
			{color: {...solidColor(color, .85), paletteKey}},
			// {color: linear(0, solidColor(color, 0.1), solidColor(color, .4))},
			// {color: linear(45, solidColor(color, 0.1), solidColor(color, .4))},
			// {color: linear(135, solidColor(color, 0.1), solidColor(color, .4))},
			// {color: linear(180, solidColor(color, 0.1), solidColor(color, .4))},
			// {color: linear(0, solidColor(color, 0.2), solidColor(color, .5))},
			// {color: linear(45, solidColor(color, 0.2), solidColor(color, .5))},
			// {color: linear(135, solidColor(color, 0.2), solidColor(color, .5))},
			// {color: linear(180, solidColor(color, 0.2), solidColor(color, .5))},
		]))


		// Try other colors in the image?
		flyers.push(...filters.map(filter => {
			const copy = copyTemplate(flyer);
			const surface = getProminantImageSurface(copy);
			surface.background.backgroundBlendMode = filter.blendMode;
			surface.background.color = filter.color;
			surface.background.img.filters = filter.filters;
			resolveItemColors(copy);
			return copy;
		}))

		// const filters = instagramFilters;
		// flyers.push(...filters.map(filter => {
		// 	const copy = copyTemplate(flyer);
		// 	const surface = getProminantImageSurface(copy);
		// 	// Object.assign(surface.background, filter);
		// 	surface.background.img.filters = filter.filters;
		// 	surface.background.color = filter.color || surface.background.color;
		// 	surface.background.backgroundBlendMode = filter.backgroundBlendMode;
		// 	return copy;
		// }))

	}
	
	return flyers;


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
	return solidColor(template.palette.dark);
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







export function transferColors(flyer, template, extraImages=[]) {
	
	/* Step #1 Transfer images */
	// TODO: Maybe sort this differently since we are giving highest priority to flyer.
	const images = [
		..._.filter(flyer._containers, s => s.background && s.background.img).map(s => s.background.img),
		...extraImages,
	]

	let imageIndex = 0;
	flyer._containers.forEach((fSurface, i) => {
		const tSurface = template._containers[i];
		if(tSurface && tSurface.background && tSurface.background.img) {
			const img = images[imageIndex++] || {...PLACEHOLDER_IMAGE};

			// fSurface.background = _.defaults(fSurface.background, tSurface.background);
			fSurface.background = fSurface.background || {};
			fSurface.background.img = img;
			fixAlpha(fSurface.background.color);
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
			delete image.background.color;
		}
		else if(flyer.decor && flyer.decor.background) {
			flyer.decor.background.img = images[0];
			fixAlpha(flyer.decor.background.color);
		}
		else {
			flyer.background = {...template.background, img: images[0]}
			fixAlpha(flyer.background.color)
		}
	}

	mimicBackgroundColors(flyer, template)
	mimicForegroundColors(flyer, template);
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
	flyer._containers.forEach((fSurface, i) => {
		const tSurface = template._containers[i] || {};
		['_self', 'decor', 'border'].forEach(prop => {
			if(tSurface[prop]) {
				mimicBackgroundColor(fSurface[prop], tSurface[prop], flyer, template, preference)
			}
		})
	})

	flyer._elements.forEach(el => {
		if(el.background && el.background.color) {
			el.background.color = getOptimalBackgroundColor(el, flyer.palette, [
				el.background.color.paletteKey,
				preference,
			])
		}
	})
}


const DECOR_PROPS = ['t','b','l','r','tOffset','bOffset','lOffset','rOffset', 'background'];
function mimicDecor(fSurface, tSurface, flyer, template, preference) {
	if(tSurface.decor) {
		Object.assign(fSurface.decor, _.pick(tSurface.decor, DECOR_PROPS));
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
	if(tSurface.background && tSurface.background.color) {
		fSurface.background = fSurface.background || {};
		fSurface.background.color = getOptimalBackgroundColor(fSurface, flyer.palette, _.filter([
			// get(fSurface, ['background', 'color', 'paletteKey']),
			get(tSurface.background, ['color', 'paletteKey']),
			fSurface.background.img && 'dark',
			preference,
		]))
		fSurface.background.color.alpha = tSurface.background.color.alpha;
	}
	else if(fSurface.background) {
		delete fSurface.background.color;
	}
}

function mimicForegroundColors(flyer, template, preference='light') {
	flyer._elements.forEach(el => {
		el.color = getOptimalForegroundColor(el, flyer.palette);
		// TODO: This is not always true.
		if(el.divider) {
			el.divider.color = el.color;
		}
	})
}

// The background of the closest ancestor
function getBackdropPaletteKey(item) {
	let current = item;
	while(current = current._parent) {
		const color = get(current, ['background', 'color']);
		if(color && color.type !== 'transparent') {
			return color.paletteKey;
		}
		if(get(current, ['background', 'img'])) {
			return 'dark'
		}
	}
	return 'light'
}

export function getOptimalBackgroundColor(surface, palette, preferences=[]) {
	const paletteKey = getBackdropPaletteKey(surface);

	if(preferences[0] === 'transparent') {
		return {type: 'transparent', color: 'rgba(0,0,0,0)', paletteKey: 'transparent'}
	} else if(surface.background && surface.background.img) {
		return buildPaletteColor('dark', palette, get(surface, ['background', 'color', 'alpha']));
	}

	let key = _.find(preferences, pref => {
		return palette[pref] && paletteKey !== pref;
	})

	if(!key) {
		key = _.find(getBackgroundColorSurfaceKindPreference(surface), pref => {
			return palette[pref] && paletteKey !== pref;
		})
	}

	return {type: 'solid', color: palette[key], paletteKey: key};
}

export function getOptimalForegroundColor(item, palette, preferences=[]) {
	const key = getBackdropPaletteKey({_parent: item});
	const backdropColor = palette[key];

	const keys = _.uniq([...preferences, 'dark', 'light']);
	const validKey = _.find(keys, k => getContrast(backdropColor, palette[k]) > 4.5);
	return buildPaletteColor(validKey, palette) 
	
	// if(preferences.length) {
	// if(valid.length) {
	// 	// TODO: add alpha
	// }
	// }	

	// const contrastKey = key === 'light' ? 'dark' : 'light';
	// return buildPaletteColor(contrastKey, palette)
}

// TODO: Use stats for this.
function getBackgroundColorSurfaceKindPreference(surface) {
	switch(surface.kind) {
		case 'template': return ['dark', 'light']
		case 'content': return ['dark', 'light']
		case 'group': return ['light', 'primary', 'dark']
		case 'element': return ['primary', 'secondary', 'light', 'dark']
		default: return ['light', 'dark']
	}
}


function getBackgroundPaletteKey(background) {
	if(background.color) {
		return background.paletteKey;
	}
	else if(background.img) {
		return 'dark'
	}
}


export function buildTemplatePalette(template) {

	// 
	// text = Highest contrast
	// dominant/heading = [colors w/ minimum contrast]
	// surface bg's don't require a minimum contrast



	// const dominant = t._dominant.color.color;
	const textColors = template._textElements.map(el => el.color);

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
	], c => c && c.type === 'solid').map(c => c.color));

	const palette = buildPalette(colors);

	return palette;
}

const WHITE = '#ffffff';
const BLACK = '#000000';
export function buildPalette(_colors) {
	const colors = _colors.map(color => {
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

	const accent = colors[0];
	const accent2 = colors[1];

	const palette = {
		light: lightest.color,
		dark: darkest.color,
	}

	if(accent) palette.accent = accent.color;
	if(accent2) palette.accent2 = accent2.color;

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