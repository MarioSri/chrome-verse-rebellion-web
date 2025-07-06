import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations, TranslationKeys, SupportedLocale } from '@/translations';
import { toast } from "@/components/ui/use-toast";
import { libreTranslate } from '@/lib/libreTranslate';

type TranslationContextType = {
  locale: string; // Allow any string for dynamic locales
  t: any; // Allow dynamic translation objects
  setLocale: (locale: string) => void;
  translate: (text: string, target: string, source?: string) => Promise<string>;
};

const defaultLocale: string = 'en';

const TranslationContext = createContext<TranslationContextType>({
  locale: defaultLocale,
  t: translations[defaultLocale],
  setLocale: () => {},
  translate: async (text: string, target: string, source?: string) => text,
});

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to get the saved locale from localStorage, fallback to browser locale or default
  const getSavedLocale = (): SupportedLocale => {
    if (typeof window === 'undefined') return defaultLocale;
    
    const savedLocale = localStorage.getItem('locale') as SupportedLocale;
    if (savedLocale && translations[savedLocale]) return savedLocale;
    
    const browserLocale = navigator.language.toLowerCase();
    const supportedLocale = Object.keys(translations).find(
      locale => browserLocale === locale || browserLocale.startsWith(locale + '-')
    ) as SupportedLocale;
    
    return supportedLocale || defaultLocale;
  };

  const [locale, setLocaleState] = useState<string>(defaultLocale);
  const [t, setT] = useState<any>(translations[defaultLocale]);
  const [dynamicT, setDynamicT] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initialLocale = getSavedLocale();
    setLocaleState(initialLocale);
    setT(translations[initialLocale] || translations[defaultLocale]);
  }, []);

  // Map region codes to base language codes for LibreTranslate
  const getBaseLangCode = (code: string) => {
    // Only keep the part before the dash, e.g. 'hi-IN' -> 'hi'
    return code.split('-')[0].split('_')[0];
  };

  const setLocale = async (newLocale: string) => {
    setLocaleState(newLocale);
    setLoading(true);
    const baseLang = getBaseLangCode(newLocale);
    if (translations[newLocale as SupportedLocale]) {
      setT(translations[newLocale as SupportedLocale]);
      setDynamicT(null);
      setLoading(false);
    } else {
      // Fallback: translate all keys in 'en' using LibreTranslate
      const translateAll = async (obj: any, target: string): Promise<any> => {
        const result: any = Array.isArray(obj) ? [] : {};
        for (const key in obj) {
          if (typeof obj[key] === 'string') {
            result[key] = await libreTranslate(obj[key], baseLang);
          } else if (typeof obj[key] === 'object') {
            result[key] = await translateAll(obj[key], baseLang);
          } else {
            result[key] = obj[key];
          }
        }
        return result;
      };
      setT(translations[defaultLocale]); // fallback to English while loading
      setDynamicT(await translateAll(translations[defaultLocale], baseLang));
      setLoading(false);
    }
    localStorage.setItem('locale', newLocale);
    toast({
      title: "Language Changed",
      description: `Selected language: ${newLocale}`,
    });
  };

  const contextValue = {
    locale,
    t: dynamicT || t,
    setLocale,
    translate: async (text: string, target: string, source: string = 'en') => libreTranslate(text, target, source),
    loading,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {loading && (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100vw', background: '#222', color: '#fff', zIndex: 9999, textAlign: 'center', padding: 8}}>
          Translating... Please wait
        </div>
      )}
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
