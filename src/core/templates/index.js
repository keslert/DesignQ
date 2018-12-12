// https://www.smashingmagazine.com/2015/02/design-principles-dominance-dominant-points-hierarchy/

// https://en.wikipedia.org/wiki/Bar_form: Flyers are like western music
// smalls and bridges should avoid being wider than the big.
// stanzas and aftersongs

// short paragraph tails are bad... 
// a date should not be broken up
// avoid splitting adjective and noun (hallow harvest)

export function solidColor(color) {
  return { type: 'solid', color }
}

export function unitValue(value, unit) {
  return { value, unit }
}


export { default as ArtTalk } from './art-talk';
export { default as BakeSale } from './bake-sale';
export { default as Barrys } from './barrys';
export { default as CleanAndGreen } from './clean-n-green';
export { default as CoconutResurgance } from './coconut-resurgance';
export { default as HallowHarvest } from './hallow-harvest';
export { default as ValentinesDayMixer } from './valentines-day-mixer';