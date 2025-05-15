
import * as React from "react";
import { toast } from "@/components/ui/use-toast";

interface LanguageOption {
  name: string;
  code: string;
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
          { name: "English (US)", code: "en-us", localName: "English" },
          { name: "Spanish (US)", code: "es-us", localName: "Español" },
        ],
      },
      {
        name: "Canada",
        languages: [
          { name: "English (Canada)", code: "en-ca", localName: "English" },
          { name: "French (Canada)", code: "fr-ca", localName: "Français" },
        ],
      },
      {
        name: "Mexico",
        languages: [
          { name: "Spanish (Mexico)", code: "es-mx", localName: "Español" },
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
          { name: "Portuguese (Brazil)", code: "pt-br", localName: "Português" },
        ],
      },
      {
        name: "Argentina",
        languages: [
          { name: "Spanish (Argentina)", code: "es-ar", localName: "Español" },
        ],
      },
      {
        name: "Colombia",
        languages: [
          { name: "Spanish (Colombia)", code: "es-co", localName: "Español" },
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
          { name: "English (UK)", code: "en-gb", localName: "English" },
        ],
      },
      {
        name: "Germany",
        languages: [
          { name: "German", code: "de", localName: "Deutsch" },
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
          { name: "Italian", code: "it", localName: "Italiano" },
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
          { name: "Chinese (Simplified)", code: "zh-cn", localName: "简体中文" },
          { name: "Chinese (Traditional)", code: "zh-tw", localName: "繁體中文" },
        ],
      },
      {
        name: "Japan",
        languages: [
          { name: "Japanese", code: "ja", localName: "日本語" },
        ],
      },
      {
        name: "South Korea",
        languages: [
          { name: "Korean", code: "ko", localName: "한국어" },
        ],
      },
      {
        name: "India",
        languages: [
          { name: "Hindi", code: "hi", localName: "हिन्दी" },
          { name: "English (India)", code: "en-in", localName: "English" },
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
          { name: "Arabic", code: "ar-ae", localName: "العربية" },
          { name: "English (UAE)", code: "en-ae", localName: "English" },
        ],
      },
      {
        name: "Saudi Arabia",
        languages: [
          { name: "Arabic", code: "ar-sa", localName: "العربية" },
        ],
      },
      {
        name: "Israel",
        languages: [
          { name: "Hebrew", code: "he", localName: "עִבְרִית" },
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
          { name: "English (South Africa)", code: "en-za", localName: "English" },
          { name: "Afrikaans", code: "af", localName: "Afrikaans" },
        ],
      },
      {
        name: "Nigeria",
        languages: [
          { name: "English (Nigeria)", code: "en-ng", localName: "English" },
        ],
      },
      {
        name: "Egypt",
        languages: [
          { name: "Arabic (Egypt)", code: "ar-eg", localName: "العربية" },
        ],
      },
    ],
  },
];

export function LanguageSelector() {
  const handleLanguageChange = (code: string) => {
    // In a real implementation, this would change the language
    // For now, we'll just show a toast notification
    toast({
      title: "Language Changed",
      description: `Selected language: ${code}`,
    });
    
    // In a production environment, you might:
    // 1. Change the language in i18n context/config
    // 2. Store the preference in localStorage
    // 3. Redirect to language-specific URL, e.g., `/fr/current-path`
    // 4. Or trigger a page refresh with updated content
  };

  return (
    <div className="language-selector">
      <h2 className="text-2xl font-light text-gray-900 mb-6 text-center">Select Your Language</h2>
      
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
