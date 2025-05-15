import * as React from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import { SupportedLocale } from "@/translations";

interface LanguageOption {
  name: string;
  code: SupportedLocale;
  localName?: string;
}

interface RegionLanguages {
  region: string;
  countries: {
    name: string;
    languages: LanguageOption[];
  }[];
}

const languageData: RegionLanguages[] = [
  {
    region: "North America",
    countries: [
      {
        name: "United States",
        languages: [
          { name: "English (US)", code: "en", localName: "English" },
          { name: "Spanish (US)", code: "es", localName: "Español" },
        ],
      },
      {
        name: "Canada",
        languages: [
          { name: "English (Canada)", code: "en", localName: "English" },
          { name: "French (Canada)", code: "fr", localName: "Français" },
        ],
      },
      {
        name: "Mexico",
        languages: [
          { name: "Spanish (Mexico)", code: "es", localName: "Español" },
        ],
      },
    ],
  },
  {
    region: "South America",
    countries: [
      {
        name: "Brazil",
        languages: [
          { name: "Portuguese (Brazil)", code: "en", localName: "Português" },
        ],
      },
      {
        name: "Argentina",
        languages: [
          { name: "Spanish (Argentina)", code: "es", localName: "Español" },
        ],
      },
      {
        name: "Colombia",
        languages: [
          { name: "Spanish (Colombia)", code: "es", localName: "Español" },
        ],
      },
    ],
  },
  {
    region: "Europe",
    countries: [
      {
        name: "United Kingdom",
        languages: [
          { name: "English (UK)", code: "en", localName: "English" },
        ],
      },
      {
        name: "Germany",
        languages: [
          { name: "German", code: "en", localName: "Deutsch" },
        ],
      },
      {
        name: "France",
        languages: [
          { name: "French", code: "fr", localName: "Français" },
        ],
      },
      {
        name: "Spain",
        languages: [
          { name: "Spanish", code: "es", localName: "Español" },
        ],
      },
      {
        name: "Italy",
        languages: [
          { name: "Italian", code: "en", localName: "Italiano" },
        ],
      },
    ],
  },
  {
    region: "Asia Pacific",
    countries: [
      {
        name: "China",
        languages: [
          { name: "Chinese (Simplified)", code: "en", localName: "简体中文" },
          { name: "Chinese (Traditional)", code: "en", localName: "繁體中文" },
        ],
      },
      {
        name: "Japan",
        languages: [
          { name: "Japanese", code: "en", localName: "日本語" },
        ],
      },
      {
        name: "South Korea",
        languages: [
          { name: "Korean", code: "en", localName: "한국어" },
        ],
      },
      {
        name: "India",
        languages: [
          { name: "Hindi", code: "en", localName: "हिन्दी" },
          { name: "English (India)", code: "en", localName: "English" },
        ],
      },
    ],
  },
  {
    region: "Middle East",
    countries: [
      {
        name: "United Arab Emirates",
        languages: [
          { name: "Arabic", code: "en", localName: "العربية" },
          { name: "English (UAE)", code: "en", localName: "English" },
        ],
      },
      {
        name: "Saudi Arabia",
        languages: [
          { name: "Arabic", code: "en", localName: "العربية" },
        ],
      },
      {
        name: "Israel",
        languages: [
          { name: "Hebrew", code: "en", localName: "עִבְרִית" },
        ],
      },
    ],
  },
  {
    region: "Africa",
    countries: [
      {
        name: "South Africa",
        languages: [
          { name: "English (South Africa)", code: "en", localName: "English" },
          { name: "Afrikaans", code: "en", localName: "Afrikaans" },
        ],
      },
      {
        name: "Nigeria",
        languages: [
          { name: "English (Nigeria)", code: "en", localName: "English" },
        ],
      },
      {
        name: "Egypt",
        languages: [
          { name: "Arabic (Egypt)", code: "en", localName: "العربية" },
        ],
      },
    ],
  },
];

export function LanguageSelector() {
  const { setLocale, t } = useTranslation();
  
  const handleLanguageChange = (code: SupportedLocale) => {
    setLocale(code);
    
    // The TranslationContext will handle:
    // 1. Changing the language in i18n context/config
    // 2. Storing the preference in localStorage
    // 3. Displaying a toast notification
    // 4. Optionally redirect to language-specific URL (commented out in the context)
  };

  return (
    <div className="language-selector">
      <h2 className="text-2xl font-light text-gray-900 mb-6 text-center">{t.languageSelector.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {languageData.map((region) => (
          <div key={region.region} className="mb-4">
            <h3 className="text-lg font-medium text-gray-800 mb-3 pb-1 border-b border-gray-200">
              {region.region}
            </h3>
            
            <div className="space-y-4">
              {region.countries.map((country) => (
                <div key={country.name} className="pl-2">
                  <h4 className="text-sm font-medium text-gray-700 mb-1">{country.name}</h4>
                  <ul className="space-y-1 pl-3">
                    {country.languages.map((lang) => (
                      <li key={lang.code}>
                        <button
                          onClick={() => handleLanguageChange(lang.code)}
                          className="flex items-center text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded px-2 py-1 w-full text-left transition-colors"
                        >
                          <span>{lang.name}</span>
                          {lang.localName && lang.localName !== lang.name && (
                            <span className="ml-1 text-gray-500 text-xs">{lang.localName}</span>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
