import _ from 'lodash';
import get from 'lodash/get';
import { mode, copyTemplate, getItemFromTemplate, cloneCrude } from '../utils/template-utils';
import {
	paletteColor,
	getContrast,
	fixAlpha,
	basicColor,
	linearColor,
	PLACEHOLDER_IMAGE,
	generatePlausiblePalettes,
	getBackdropPaletteKey,
	generatePalette,
} from '../utils/color-utils';
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
		label: 'Background Overlay',
		relevant: flyer => !!getProminantImageSurface(flyer),
		satisfied: () => true,
		generate: generateBackgroundFilters,
	},
	{
		type: 'color',
		key: "color.palette", 
		label: 'Palette',
		satisfied: () => true,
		generate: generateAlternatePalettes,
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
	const generated = [];
	const images = state.lastImageSearch.images;
	const cache = state.imageCache;

	const flyer_ = copyTemplate(flyer);
	const prominantSurface = getProminantImageSurface(flyer_) || flyer_;
	if(!prominantSurface.background.img) {
		prominantSurface.background.img = {...PLACEHOLDER_IMAGE};	
		if(prominantSurface.background.color) {
			fixAlpha(prominantSurface.background.color, .33)
		}
		else {
			prominantSurface.background.color = paletteColor('dark', 0.33);
		}
	}

	// Images
	if(images.length) {
		generated.push(...images.map(img => {
			const copy = copyTemplate(flyer_);
			const surface = getItemFromTemplate(prominantSurface, copy);

			surface.background = surface.background || {};
			surface.background.img = {
				src: img.src,
				meta: img.meta,
				zoom: 1,
				x: 0.5,
				y: 0.5,
			}

			if(cache[img.id]) {
				const { colors } = cache[img.id].value;
				surface.background.img.colors = colors;
				copy.palette = generatePalette(colors);
				mimicBackgroundColors(copy, flyer_);
				mimicForegroundColors(copy, flyer_);
			}
			else {
				copy.pending = [
					{type: 'image', cacheKey: img.id, resolve: (pTemplate, {colors}) => {
						const pSurface = getItemFromTemplate(surface, pTemplate);
						pSurface.background.img.colors = colors;
						pTemplate.palette = generatePalette(colors);
						mimicBackgroundColors(pTemplate, flyer_);
						mimicForegroundColors(pTemplate, flyer_);
					}}
				]
			}

			return copy;
		}))
	}

	// Colored
	if(images.length < 10 && prominantSurface.kind === 'template') {
		const uniqPalettes = _.uniqBy(templates, t => t.palette.dark)
		generated.push(...uniqPalettes.map(t => {
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

function generateBackgroundFilters(flyer, {templates, state}) {
	// if we have an image
	// multi color backgrounds
	const prominantImageSurface = getProminantImageSurface(flyer);
	const flyers = [];
	if(prominantImageSurface) {
		const filters = _.flatMap(flyer.palette, (color, paletteKey) => ([
			{color: paletteColor(paletteKey, .3)},
			{color: paletteColor(paletteKey, .5)},
			{color: paletteColor(paletteKey, .7)},
			{color: paletteColor(paletteKey, .85)},
			// {color: linearColor(0, paletteColor(paletteKey, 0.1), paletteColor(paletteKey, 0.4))},
			// {color: linearColor(90, paletteColor(paletteKey, 0.1), paletteColor(paletteKey, 0.4))},
			// {color: linearColor(180, paletteColor(paletteKey, 0.1), paletteColor(paletteKey, 0.4))},
			// {color: linearColor(270, paletteColor(paletteKey, 0.1), paletteColor(paletteKey, 0.4))},
			{color: linearColor(0, paletteColor(paletteKey, 0.3), paletteColor(paletteKey, 0.7))},
			{color: linearColor(90, paletteColor(paletteKey, 0.3), paletteColor(paletteKey, 0.7))},
			{color: linearColor(180, paletteColor(paletteKey, 0.3), paletteColor(paletteKey, 0.7))},
			{color: linearColor(270, paletteColor(paletteKey, 0.3), paletteColor(paletteKey, 0.7))},
		]))

		flyers.push(...filters.map(filter => {
			const copy = copyTemplate(flyer);
			const surface = getProminantImageSurface(copy);
			surface.background.backgroundBlendMode = filter.blendMode;
			surface.background.color = filter.color;
			surface.background.img.filters = filter.filters;
			resolveItemColors({_root: copy, _parent: copy}, {}, state);
			return copy;
		}))
	}
	return flyers;
}

function generateAlternatePalettes(flyer, {state}) {
	// complements
	// tertiary
	// monochrome
	// square
	// colormind
	// search amongst saved palettes
	const generated = [];


	const colors = Object.values(flyer.palette);
	if(colors.length > 4) {
		const palettes = generatePlausiblePalettes(colors);

		generated.push(..._.flatMap(palettes.map(palette => {
			const color = flyer.background.color || {};
			const keys = [
				'dark', 
				'light', 
				'accent', 
				'accent2'
			].filter(k => palette[k] && k !== color.paletteKey)

			const alpha = color.alpha || (flyer.background.img ? .5 : undefined)

			return keys.map(key => {
				const copy = copyTemplate(flyer);
				copy.palette = palette;
				copy.background.color = paletteColor(key, alpha);
				resolveItemColors(copy, {}, state);
				return copy;
			})
		})))
	}

	return generated;
}

function getProminantImageSurface(template) {
	return _.find(template._all, item => item.background && item.background.img)
}

// Search for elements with my same background color
export function getElementColor(template, group, elementType) {
	// const bg = group.background || group.__background || '#bogus';

	// Find an element in my group with the same background
	// const element = _.find(group.elements, el => el.lines && el.__background === bg);
	// if(element) {
	// 	return element.color;
	// }

	// // Search for any element with my 
	// const elements = _.filter(template._elements, el => el.__background === bg);
	// if(elements.length) {
	// 	const possibleColors = _.uniq(elements.map(el => el.color));
	// 	// TODO: Choose the best based on colorStats;
	// 	// contrast(bg, color[0])
	// 	return possibleColors[0];
	// }

	// // TODO: Choose the best color from the color palette
	// // return {color: '#000000'};
	return paletteColor('dark');
}

function mimicBackgroundColors(flyer, template, preference) {
	flyer._all.forEach(fItem => {
		const tItem = getItemFromTemplate(fItem, template);
		if(tItem && (!fItem.background || !fItem.background._locked)) {
			mimicBackgroundColor(fItem, tItem, preference)
		}
	})
}

function mimicBackgroundColor(fItem, tItem, preference) {
	if(tItem.background && tItem.background.color) {
		fItem.background = fItem.background || {};

		const preferences = _.filter([
			tItem.background.color.paletteKey,
			fItem.background.img && 'dark',
			preference,
		])

		fItem.background.color = getOptimalBackgroundColor(
			fItem, 
			fItem._root.palette, 
			preferences,
			tItem.background.color.alpha,
		)
	}
	else if(fItem.background) {
		delete fItem.background.color;
	}
}

function mimicForegroundColors(flyer, template, preference='light') {
	flyer._elements.forEach(el => {
		el.color = getOptimalForegroundColor(el, flyer.palette);
		// TODO: This is not always true.
		if(el.divider) {
			el.divider.color = _.cloneDeep(el.color);
		}
	})
}

export function getOptimalBackgroundColor(surface, palette, preferences=[], alpha) {
	const backdropKey = getBackdropPaletteKey(surface);

	if(surface.background && surface.background.img) {
		return paletteColor('dark', alpha || get(surface, ['background', 'color', 'alpha']));
	}

	let key = _.find(preferences, key => palette[key] && backdropKey !== key)

	if(!key) {
		key = _.find(getBackgroundColorSurfaceKindPreference(surface), pref => {
			return palette[pref] && backdropKey !== pref;
		})
	}

	console.assert(key, 'Should have key!');
	return paletteColor(key, alpha);
}

export function getOptimalForegroundColor(item, palette, preferences=[], alpha) {
	const backdropKey = getBackdropPaletteKey({_parent: item});
	const backdropColor = palette[backdropKey];

	const keys = _.uniq([...preferences, 'dark', 'light', ...Object.keys(palette)]);
	const validKeys = _.filter(keys, k => palette[k]);
	let key = _.find(validKeys, k => getContrast(backdropColor, palette[k]) > 2.5);

	if(!key) {
		key = _.maxBy(validKeys, k => getContrast(backdropColor, palette[k]));
	}
	
	// console.assert(key, 'Palette key missing');
	return paletteColor(key, alpha);
}

// TODO: Use stats for this.
function getBackgroundColorSurfaceKindPreference(surface) {
	switch(surface.kind) {
		case 'template': return ['dark', 'light']
		case 'content': return ['dark', 'light']
		case 'group': return ['light', 'accent', 'dark']
		case 'element': return ['accent', 'accent2', 'light', 'dark']
		default: return ['light', 'dark']
	}
}



export function transferColors(flyer, template, bgsWithImages) {
	
	/* Step #1 Transfer images */
	// TODO: Maybe sort this differently since we are giving highest priority to flyer.
	let imageIndex = 0;
	// const images = [
	// 	// ..._.map(flyer._all, s => s.background && s.background.img).filter(i => i),
	// 	...extraImages,
	// ]

	flyer._all.forEach(fItem => {
		const tItem = getItemFromTemplate(fItem, template);
		if(tItem && tItem.background && tItem.background.img) {
			const bg = bgsWithImages[imageIndex++] || {img: {...PLACEHOLDER_IMAGE}};

			// It may be true that all backgrounds with images are locked during this, so
			// instead of locking, maybe we just check that instead?
			bg._locked = true;
			fItem.background = bg;

			// fItem.background.img = img;
			// fixAlpha(fItem.background.color);
		} 
		else if(fItem.background && fItem.kind !== 'element') {
			delete fItem.background.img;
		}
	})
	// We had images to use and we didn't use any.
	if(bgsWithImages.length && !imageIndex) {
		flyer.background = bgsWithImages[0];// {...template.background, img: images[0]}
		flyer.background._locked = true;
		// fixAlpha(flyer.background.color)
		// Any images that should take it over?
		// const image = _.find(flyer._elements, el => el.type === 'image');
		// if(image) {
		// 	image.background.img = images[0];
		// 	delete image.background.color;
		// }
		// else if(flyer.decor && flyer.decor.background) {
		// 	flyer.decor.background.img = images[0];
		// 	fixAlpha(flyer.decor.background.color);
		// }
		// else {
		// 	flyer.background = {...template.background, img: images[0]}
		// 	fixAlpha(flyer.background.color)
		// }
	}

	mimicBackgroundColors(flyer, template)
	mimicForegroundColors(flyer, template);
}

export function transferSurface(fSurface, tSurface, preference) {
	// mimicBackgroundColor(fSurface, tSurface, preference);
	transferDecor(fSurface, tSurface);
	transferBorder(fSurface, tSurface);
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

const DECOR_PROPS = ['t','b','l','r','tOffset','bOffset','lOffset','rOffset'];
function transferDecor(fSurface, tSurface) {
	if(tSurface.decor) {
		fSurface.decor = fSurface.decor || {};
		Object.assign(fSurface.decor, _.pick(tSurface.decor, DECOR_PROPS));
	}
	else {
		delete fSurface.decor;
	}
}

function transferBorder(fSurface, tSurface) {
	if(tSurface.border) {
		fSurface.border = fSurface.border || {};
		Object.assign(fSurface.border, _.pick(tSurface.border, DECOR_PROPS));
	}
	else {
		delete fSurface.border;
	}
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
	// _.map(templates, t => {
	// 	const background = t.background.img ? 'image' : t.background.color;

	// 	const dominantColor = t._dominant.color.color;
	// 	const colors = t._textElements.map(el => el.color.color);
	// 	const color = mode(colors)

	// 	return background;
	// })
}

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