
import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations, TranslationKeys, SupportedLocale } from '@/translations';
import { toast } from "@/components/ui/use-toast";

type TranslationContextType = {
  locale: SupportedLocale;
  t: TranslationKeys;
  setLocale: (locale: SupportedLocale) => void;
};

const defaultLocale: SupportedLocale = 'en';

const TranslationContext = createContext<TranslationContextType>({
  locale: defaultLocale,
  t: translations[defaultLocale],
  setLocale: () => {},
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

  const [locale, setLocaleState] = useState<SupportedLocale>(defaultLocale);
  const [t, setT] = useState<TranslationKeys>(translations[defaultLocale]);

  useEffect(() => {
    // Set the initial locale when the component mounts
    const initialLocale = getSavedLocale();
    setLocaleState(initialLocale);
    setT(translations[initialLocale]);
  }, []);

  const setLocale = (newLocale: SupportedLocale) => {
    if (translations[newLocale]) {
      setLocaleState(newLocale);
      setT(translations[newLocale]);
      localStorage.setItem('locale', newLocale);
      
      // Display a toast notification
      toast({
        title: "Language Changed",
        description: `Selected language: ${newLocale}`,
      });
      
      // You could also update the URL path to reflect the language
      // window.history.pushState({}, '', `/${newLocale}${window.location.pathname}`);
    }
  };

  return (
    <TranslationContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
