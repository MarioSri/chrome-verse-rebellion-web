import * as React from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import { SupportedLocale } from "@/translations";
import { ChromeCard } from "./ui/chrome-card";
import { Globe } from "lucide-react";

interface LanguageOption {
  name: string;
  code: SupportedLocale;
  localName?: string;
  flag?: string;
}

interface RegionLanguages {
  region: string;
  countries: {
    name: string;
    flag?: string;
    languages: LanguageOption[];
  }[];
}

const languageData: RegionLanguages[] = [
  {
    region: "North America",
    countries: [
      {
        name: "United States",
        flag: "🇺🇸",
        languages: [
          { name: "English (US)", code: "en-us", localName: "English", flag: "🇺🇸" },
          { name: "Spanish (US)", code: "es-us", localName: "Español", flag: "🇺🇸" },
        ],
      },
      {
        name: "Canada",
        flag: "🇨🇦",
        languages: [
          { name: "English (Canada)", code: "en-ca", localName: "English", flag: "🇨🇦" },
          { name: "French (Canada)", code: "en", localName: "Français", flag: "🇨🇦" },
        ],
      },
      {
        name: "Mexico",
        flag: "🇲🇽",
        languages: [
          { name: "Spanish (Mexico)", code: "es-mx", localName: "Español", flag: "🇲🇽" },
        ],
      },
    ],
  },
  {
    region: "South America",
    countries: [
      {
        name: "Brazil",
        flag: "🇧🇷",
        languages: [
          { name: "Portuguese (Brazil)", code: "en", localName: "Português", flag: "🇧🇷" },
        ],
      },
      {
        name: "Argentina",
        flag: "🇦🇷",
        languages: [
          { name: "Spanish (Argentina)", code: "es-ar", localName: "Español", flag: "🇦🇷" },
        ],
      },
      {
        name: "Colombia",
        flag: "🇨🇴",
        languages: [
          { name: "Spanish (Colombia)", code: "es-co", localName: "Español", flag: "🇨🇴" },
        ],
      },
    ],
  },
  {
    region: "Europe",
    countries: [
      {
        name: "United Kingdom",
        flag: "🇬🇧",
        languages: [
          { name: "English (UK)", code: "en-gb", localName: "English", flag: "🇬🇧" },
        ],
      },
      {
        name: "Germany",
        flag: "🇩🇪",
        languages: [
          { name: "German", code: "en", localName: "Deutsch", flag: "🇩🇪" },
        ],
      },
      {
        name: "France",
        flag: "🇫🇷",
        languages: [
          { name: "French", code: "en", localName: "Français", flag: "🇫🇷" },
        ],
      },
      {
        name: "Spain",
        flag: "🇪🇸",
        languages: [
          { name: "Spanish", code: "es", localName: "Español", flag: "🇪🇸" },
        ],
      },
      {
        name: "Italy",
        flag: "🇮🇹",
        languages: [
          { name: "Italian", code: "en", localName: "Italiano", flag: "🇮🇹" },
        ],
      },
    ],
  },
  {
    region: "Asia Pacific",
    countries: [
      {
        name: "China",
        flag: "🇨🇳",
        languages: [
          { name: "Chinese (Simplified)", code: "en", localName: "简体中文", flag: "🇨🇳" },
          { name: "Chinese (Traditional)", code: "en", localName: "繁體中文", flag: "🇨🇳" },
        ],
      },
      {
        name: "Japan",
        flag: "🇯🇵",
        languages: [
          { name: "Japanese", code: "en", localName: "日本語", flag: "🇯🇵" },
        ],
      },
      {
        name: "South Korea",
        flag: "🇰🇷",
        languages: [
          { name: "Korean", code: "en", localName: "한국어", flag: "🇰🇷" },
        ],
      },
      {
        name: "India",
        flag: "🇮🇳",
        languages: [
          { name: "Hindi", code: "en", localName: "हिन्दी", flag: "🇮🇳" },
          { name: "English (India)", code: "en-in", localName: "English", flag: "🇮🇳" },
        ],
      },
    ],
  },
  {
    region: "Middle East",
    countries: [
      {
        name: "United Arab Emirates",
        flag: "🇦🇪",
        languages: [
          { name: "Arabic", code: "en", localName: "العربية", flag: "🇦🇪" },
          { name: "English (UAE)", code: "en-ae", localName: "English", flag: "🇦🇪" },
        ],
      },
      {
        name: "Saudi Arabia",
        flag: "🇸🇦",
        languages: [
          { name: "Arabic", code: "en", localName: "العربية", flag: "🇸🇦" },
        ],
      },
      {
        name: "Israel",
        flag: "🇮🇱",
        languages: [
          { name: "Hebrew", code: "en", localName: "עִבְרִית", flag: "🇮🇱" },
        ],
      },
    ],
  },
  {
    region: "Africa",
    countries: [
      {
        name: "South Africa",
        flag: "🇿🇦",
        languages: [
          { name: "English (South Africa)", code: "en-za", localName: "English", flag: "🇿🇦" },
          { name: "Afrikaans", code: "en", localName: "Afrikaans", flag: "🇿🇦" },
        ],
      },
      {
        name: "Nigeria",
        flag: "🇳🇬",
        languages: [
          { name: "English (Nigeria)", code: "en-ng", localName: "English", flag: "🇳🇬" },
        ],
      },
      {
        name: "Egypt",
        flag: "🇪🇬",
        languages: [
          { name: "Arabic (Egypt)", code: "en", localName: "العربية", flag: "🇪🇬" },
        ],
      },
    ],
  },
];

export function LanguageSelector() {
  const { setLocale, t } = useTranslation();
  
  const handleLanguageChange = (code: SupportedLocale) => {
    setLocale(code);
  };

  return (
    <div className="language-selector">
      <div className="flex items-center justify-center gap-2 mb-8">
        <Globe className="w-6 h-6 text-gold" />
        <h2 className="text-2xl font-light">{t.languageSelector.title}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {languageData.map((region) => (
          <ChromeCard 
            key={region.region} 
            variant="glass" 
            className="backdrop-blur-lg bg-white/5 border-white/10"
          >
            <div className="p-4">
              <h3 className="text-lg font-medium mb-4 text-gold">
                {region.region}
              </h3>
              
              <div className="space-y-4">
                {region.countries.map((country) => (
                  <div key={country.name}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{country.flag}</span>
                      <h4 className="text-sm font-medium text-white/80">{country.name}</h4>
                    </div>
                    <div className="space-y-1">
                      {country.languages.map((lang) => (
                        <button
                          key={`${lang.code}-${lang.name}`}
                          onClick={() => handleLanguageChange(lang.code)}
                          className="flex items-center w-full gap-2 px-3 py-2 text-sm text-white/60 hover:bg-white/10 rounded-md transition-colors"
                        >
                          <span className="text-base">{lang.flag}</span>
                          <span>{lang.name}</span>
                          {lang.localName && lang.localName !== lang.name && (
                            <span className="ml-auto text-white/40">{lang.localName}</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ChromeCard>
        ))}
      </div>
    </div>
  );
}