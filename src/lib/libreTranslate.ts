export async function libreTranslate(text: string, target: string, source: string = 'en'): Promise<string> {
  const res = await fetch('https://libretranslate.com/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      q: text,
      source,
      target,
      format: 'text',
    }),
  });
  const data = await res.json();
  return data.translatedText || text;
}
