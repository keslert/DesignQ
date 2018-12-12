import { default as ArtTalk } from './art-talk';
import { default as BakeSale } from './bake-sale';
import { default as Barrys } from './barrys';
import { default as CleanAndGreen } from './clean-n-green';
import { default as CoconutResurgance } from './coconut-resurgance';
import { default as HallowHarvest } from './hallow-harvest';
import { default as ValentinesDayMixer } from './valentines-day-mixer';
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

export const templates = {
  ArtTalk,
  BakeSale,
  Barrys,
  CleanAndGreen,
  CoconutResurgance,
  HallowHarvest,
  ValentinesDayMixer,
}