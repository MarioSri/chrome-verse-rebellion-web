
import { en } from './en';
import { es } from './es';
import { fr } from './fr';
import { de } from './de';
import { nl } from './nl';
import { it } from './it';
import { sv } from './sv';
import { pl } from './pl';
import { cs } from './cs';
import { da } from './da';
import { el } from './el';
import { hu } from './hu';
import { is as isl } from './is';
import { lt } from './lt';
import { no } from './no';
import { pt } from './pt';
import { ro } from './ro';
import { sl } from './sl';
import { fi } from './fi';
import { tr } from './tr';
import { zh } from './zh';
import { zhHant } from './zh-Hant';
import { ja } from './ja';
import { ko } from './ko';
import { ar } from './ar';
import { he } from './he';
import { hr } from './hr';
import { th } from './th';
import { hi } from './hi';

export type TranslationKeys = typeof en;

export const translations = {
  en,
  es,
  fr,
  de,
  nl,
  it,
  sv,
  pl,
  cs,
  da,
  el,
  hu,
  is: isl,
  lt,
  no,
  pt,
  ro,
  sl,
  fi,
  tr,
  zh,
  'zh-Hant': zhHant,
  ja,
  ko,
  ar,
  he,
  hr,
  th,
  hi,
};

export type SupportedLocale = keyof typeof translations;
