import _ from 'lodash';
import { safeIncrement, mode, copyTemplate } from '../utils/template-utils';

// https://gist.github.com/malyw/b4e8284e42fdaeceab9a67a9b0263743

export const basicStages = [
	{ 
		type: "export", 
		focus: "export", 
		label: 'Export',
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