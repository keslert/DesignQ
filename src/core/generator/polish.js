import _ from 'lodash';
import { safeIncrement, mode, copyTemplate } from '../utils/template-utils';


// http://camanjs.com/examples/
// https://una.im/CSSgram/

export const basicStages = [
	{ 
		type: 'polish',
		key: "polish.overlay", 
		label: 'Overlay',
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