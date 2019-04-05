import _ from 'lodash';
import { safeIncrement, mode, copyTemplate } from '../utils/template-utils';

export const basicStages = [
	{ 
		type: "decoration", 
		key: 'decoration',
		label: 'Decoration',
		satisfied: () => true,
		generate: flyer => [copyTemplate(flyer)],
	},
];

export const advancedStages = [];
export const optionalStages = []
export const stages = [
  ...basicStages,
  ...advancedStages,
  ...optionalStages,
]