
import { en } from './en';
import { es } from './es';

export type TranslationKeys = typeof en;

export const translations = {
  'en': en,
  'en-us': en,
  'en-gb': en,
  'en-ca': en,
  'en-in': en,
  'en-za': en,
  'en-ng': en,
  'en-ae': en,
  'es': es,
  'es-us': es,
  'es-mx': es,
  'es-ar': es,
  'es-co': es
};

export type SupportedLocale = keyof typeof translations;
