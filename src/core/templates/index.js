import { default as AnnualHealthFair } from './annual-health-fair';
import { default as ArtTalk } from './art-talk';
import { default as BakeSale } from './bake-sale';
import { default as Barrys } from './barrys';
import { default as BawresFallFestival } from './bawres-fall-festival';
import { default as CleanAndGreen } from './clean-n-green';
import { default as CoconutResurgance } from './coconut-resurgance';
import { default as FallFestival } from './fall-festival';
import { default as HallowHarvest } from './hallow-harvest';
import { default as HappyHour } from './happy-hour';
import { default as ILoveYouSo } from './i-love-you-so';
import { default as ILoveYouMoreThan } from './i-love-you-more-than';
import { default as InhaleExhale } from './inhale-exhale';
import { default as JakesBirthdayParty } from './jakes-birthday-party';
import { default as MonroeYardSale } from './monroe-yard-sale';
import { default as NewtonDoughnuts } from './newton-doughnuts';
import { default as PizzaPartyCause } from './pizza-party-cause';
import { default as TraditionalGrace } from './traditional-grace';
import { default as ValentinesDayMixer } from './valentines-day-mixer';
import { default as Urbana } from './urbana';
import { default as WeAreLovely } from './we-are-lovely';
import { default as YardSale } from './yard-sale';
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

export function striped(deg, colorA, widthA, colorB, widthB) {
  return {
    type: 'solid', 
    color: `repeating-linear-gradient(${deg}deg, ${colorA}, ${colorA} ${widthA}px, ${colorB} ${widthA}px, ${colorB} ${widthA + widthB}px)`
  }
}

export const templates = {
  ILoveYouMoreThan,
  ILoveYouSo,
  WeAreLovely,
  NewtonDoughnuts,
  PizzaPartyCause,
  Urbana,
  ArtTalk,
  FallFestival,
  TraditionalGrace,
  JakesBirthdayParty,
  HappyHour,
  MonroeYardSale,
  BakeSale,
  YardSale,
  Barrys,
  InhaleExhale,
  CoconutResurgance,
  ValentinesDayMixer,
  BawresFallFestival,
  CleanAndGreen,
  AnnualHealthFair,
  HallowHarvest,
}