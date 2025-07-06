import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const languages = [
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'nl', name: 'Dutch' },
  { code: 'it', name: 'Italian' },
  { code: 'sv', name: 'Swedish' },
  { code: 'pl', name: 'Polish' },
  { code: 'cs', name: 'Czech' },
  { code: 'da', name: 'Danish' },
  { code: 'el', name: 'Greek' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'lt', name: 'Lithuanian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ro', name: 'Romanian' },
  { code: 'sl', name: 'Slovenian' },
  { code: 'fi', name: 'Finnish' },
  { code: 'tr', name: 'Turkish' },
  { code: 'zh', name: 'Chinese' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hr', name: 'Croatian' },
  { code: 'th', name: 'Thai' },
  { code: 'hi', name: 'Hindi' },
  { code: 'es', name: 'Spanish' }
];

async function translateText(text, target) {
  if (!text) return '';
  const res = await fetch('https://libretranslate.com/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      q: text,
      source: 'en',
      target,
      format: 'text'
    })
  });
  const data = await res.json();
  return data.translatedText || text;
}

async function translateObject(obj, target) {
  const result = {};
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      result[key] = await translateText(obj[key], target);
    } else if (typeof obj[key] === 'object') {
      result[key] = await translateObject(obj[key], target);
    }
  }
  return result;
}

(async () => {
  const en = JSON.parse(fs.readFileSync(path.resolve('src', 'translations', 'en.json'), 'utf8'));
  for (const lang of languages) {
    console.log(`Translating to ${lang.name} (${lang.code})...`);
    const translated = await translateObject(en, lang.code);
    const fileContent = `export const ${lang.code} = ${JSON.stringify(translated, null, 2)};\n`;
    fs.writeFileSync(path.join(path.resolve(), 'src', 'translations', `${lang.code}.ts`), fileContent, 'utf8');
    console.log(`Created src/translations/${lang.code}.ts`);
    // To avoid rate limits
    await new Promise(r => setTimeout(r, 1500));
  }
  console.log('Done!');
})();
