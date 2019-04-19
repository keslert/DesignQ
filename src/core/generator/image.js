import _ from 'lodash';
import { copyTemplate, getItemFromTemplate } from '../utils/template-utils';
import {
	paletteColor,
	fixAlpha,
	linearColor,
	PLACEHOLDER_IMAGE,
	generatePalette,
} from '../utils/color-utils';
import { mimicBackgroundColors, mimicForegroundColors } from './color';
import { resolveItemColors } from '../resolver';

export const basicStages = [
	{
		type: 'image',
		key: "image.image", 
		label: 'Image',
		satisfied: () => true,
		generate: generateImage,
	},
	{
		type: 'image',
		key: "image.overlay", 
		label: 'Image Overlay',
		relevant: flyer => !!getProminantImageSurface(flyer),
		satisfied: () => true,
		generate: generateImageOverlay,
	},
];

export const advancedStages = [];
export const optionalStages = [];
export const stages = [
  ...basicStages,
  ...advancedStages,
  ...optionalStages,
]

function generateImage(flyer, {templates, state}) {
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

function generateImageOverlay(flyer, {templates, state}) {
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

function getProminantImageSurface(template) {
	return _.find(template._all, item => item.background && item.background.img)
}