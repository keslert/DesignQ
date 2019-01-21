// https://www.canva.com/templates/flyers/event/

import { default as AnnualGrise25th } from './25th-annual-grise';
import { default as AnnualBeachTownFoodFest } from './annual-beechtown-food-fest';
import { default as AnnualHealthFair } from './annual-health-fair';
import { default as ArtTalk } from './art-talk';
import { default as BakeSale } from './bake-sale';
import { default as Barrys } from './barrys';
import { default as BawresFallFestival } from './bawres-fall-festival';
import { default as BikeAroundTheCity } from './bike-around-the-city';
import { default as CleanAndGreen } from './clean-n-green';
import { default as CoconutResurgance } from './coconut-resurgance';
import { default as ClothingYardSale } from './clothing-yard-sale';
import { default as DessertDash } from './dessert-dash';
import { default as DustysHandymanServices } from './dustys-handyman-services'
import { default as FallFestival } from './fall-festival';
import { default as GarnishDelightBakery } from './garnish-delight-bakery';
import { default as HallowHarvest } from './hallow-harvest';
import { default as HalloweenLanternFest } from './halloween-lantern-fest';
import { default as HappyHour } from './happy-hour';
import { default as ILoveYouSo } from './i-love-you-so';
import { default as ILoveYouMoreThan } from './i-love-you-more-than';
import { default as InhaleExhale } from './inhale-exhale';
import { default as JakesBirthdayParty } from './jakes-birthday-party';
import { default as JobFair2019 } from './job-fair-2019';
import { default as LearnHowToBrewYourBestCoffee } from './learn-to-brew-your-best-coffee';
import { default as MonroeYardSale } from './monroe-yard-sale';
import { default as NeonYardSale } from './neon-yard-sale';
import { default as NewtonDoughnuts } from './newton-doughnuts';
import { default as PizzaPartyCause } from './pizza-party-cause';
import { default as SchoolSupplyDrive } from './school-supply-drive';
import { default as SummerInBlackAndWhite } from './summer-in-black-and-white';
import { default as SupportSandiosFoodDrive } from './support-sandios-food-drive';
import { default as TheHealthIsWealthFair } from './the-health-is-wealth-fair';
import { default as TheRunwayLife } from './the-runway-life';
import { default as TraditionalGrace } from './traditional-grace';
import { default as TurnFatIntoFit } from './turn-fat-into-fit';
import { default as ValentinesDayMixer } from './valentines-day-mixer';
import { default as ValentinesSale } from './valentines-sale';
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
  return `repeating-linear-gradient(${deg}deg, ${colorA}, ${colorA} ${widthA}px, ${colorB} ${widthA}px, ${colorB} ${widthA + widthB}px)`
}

export function linear(deg, colorA, colorB) {
  return `linear-gradient(${deg}deg, ${colorA}, ${colorB})`;
}

export function splitColor(deg, colorA, colorB) {
  return `linear-gradient(${deg}deg, ${colorA}, ${colorA} 50%, ${colorB} 50%)`;
}

export const templates = {
  SupportSandiosFoodDrive,
  TheRunwayLife,
  GarnishDelightBakery,
  LearnHowToBrewYourBestCoffee,
  BakeSale,
  PizzaPartyCause,
  SummerInBlackAndWhite,
  NeonYardSale,
  BikeAroundTheCity,
  ValentinesSale,
  AnnualGrise25th,
  TheHealthIsWealthFair,
  TurnFatIntoFit,
  HalloweenLanternFest,
  DessertDash,
  AnnualBeachTownFoodFest,
  ILoveYouMoreThan,
  ILoveYouSo,
  WeAreLovely,
  NewtonDoughnuts,
  Urbana,
  ArtTalk,
  FallFestival,
  TraditionalGrace,
  JakesBirthdayParty,
  HappyHour,
  MonroeYardSale,
  YardSale,
  Barrys,
  InhaleExhale,
  CoconutResurgance,
  ValentinesDayMixer,
  BawresFallFestival,
  AnnualHealthFair,
  CleanAndGreen,
  HallowHarvest,
  SchoolSupplyDrive,
  ClothingYardSale,
  DustysHandymanServices,
  JobFair2019,
}