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
		key: "color.palette", 
		label: 'Palette',
		satisfied: () => true,
		generate: generateAlternatePalettes,
	}
];

export const advancedStages = [];
export const optionalStages = [];
export const stages = [
  ...basicStages,
  ...advancedStages,
  ...optionalStages,
]

function generateAlternatePalettes(flyer, {state, templates}) {
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

	const uniqPalettes = _.uniqBy(Object.values(templates), t => t.palette.dark)
	const alpha = _.get(flyer, ['background', 'color', 'alpha'], .5);
	generated.push(...uniqPalettes.map(t => {
		const copy = copyTemplate(flyer);
		copy.background.color = t.background.color;
		if(copy.background.img) {
			fixAlpha(copy.background.color, alpha);
		}
		copy.palette = t.palette;
		mimicBackgroundColors(copy, flyer);
		mimicForegroundColors(copy, flyer);
		return copy;
	}))


	return generated;
}


// Search for elements with my same background color
export function getElementColor(template, group, elementType) {
	return paletteColor('dark');
}

export function mimicBackgroundColors(flyer, template, preference) {
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

export function mimicForegroundColors(flyer, template, preference='light') {
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
	
}