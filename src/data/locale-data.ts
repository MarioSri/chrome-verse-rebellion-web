export interface LanguageOption {
  name: string;
  code: string;
}

export interface CountryData {
  name: string;
  code: string;
  flag: string;
  languages: LanguageOption[];
}

export interface RegionData {
  region: string;
  code: string;
  countries: CountryData[];
}

export const localeData: RegionData[] = [
  {
    region: "North America",
    code: "na",
    countries: [
      { name: "United States", code: "US", flag: "🇺🇸", languages: [ { name: "English", code: "en" } ] },
      { name: "Canada", code: "CA", flag: "🇨🇦", languages: [ { name: "English", code: "en" }, { name: "Français", code: "fr" } ] },
      { name: "México", code: "MX", flag: "🇲🇽", languages: [ { name: "Español", code: "es" } ] },
      { name: "Puerto Rico", code: "PR", flag: "🇵🇷", languages: [ { name: "English", code: "en" }, { name: "Español", code: "es" } ] },
    ],
  },
  {
    region: "South America",
    code: "sa",
    countries: [
      { name: "Chile", code: "CL", flag: "🇨🇱", languages: [ { name: "Español", code: "es" } ] },
    ],
  },
  {
    region: "Middle-East",
    code: "me",
    countries: [
      { name: "ישראל", code: "IL", flag: "🇮🇱", languages: [ { name: "עברית", code: "he" } ] },
      { name: "UAE", code: "AE", flag: "🇦🇪", languages: [ { name: "English", code: "en" }, { name: "العربية", code: "ar" } ] },
      { name: "Jordan", code: "JO", flag: "🇯🇴", languages: [ { name: "English", code: "en" } ] },
      { name: "Qatar", code: "QA", flag: "🇶🇦", languages: [ { name: "English", code: "en" }, { name: "العربية", code: "ar" } ] },
      { name: "Saudi Arabia", code: "SA", flag: "🇸🇦", languages: [ { name: "English", code: "en" }, { name: "العربية", code: "ar" } ] },
    ],
  },
  {
    region: "Asia Pacific",
    code: "ap",
    countries: [
      { name: "中国大陆", code: "CN", flag: "🇨🇳", languages: [ { name: "简体中文", code: "zh" } ] },
      { name: "Hong Kong", code: "HK", flag: "🇭🇰", languages: [ { name: "繁體中文", code: "zh-Hant" }, { name: "English", code: "en" } ] },
      { name: "Macau", code: "MO", flag: "🇲🇴", languages: [ { name: "繁體中文", code: "zh-Hant" }, { name: "English", code: "en" } ] },
      { name: "台湾", code: "TW", flag: "🇹🇼", languages: [ { name: "繁體中文", code: "zh-Hant" } ] },
      { name: "日本", code: "JP", flag: "🇯🇵", languages: [ { name: "日本語", code: "ja" } ] },
      { name: "Malaysia", code: "MY", flag: "🇲🇾", languages: [ { name: "English", code: "en" } ] },
      { name: "Singapore", code: "SG", flag: "🇸🇬", languages: [ { name: "English", code: "en" } ] },
      { name: "India", code: "IN", flag: "🇮🇳", languages: [ { name: "हिन्दी", code: "hi" } ] },
      { name: "Thailand", code: "TH", flag: "🇹🇭", languages: [ { name: "ภาษาไทย", code: "th" }, { name: "English", code: "en" } ] },
      { name: "대한민국", code: "KR", flag: "🇰🇷", languages: [ { name: "한국어", code: "ko" } ] },
      { name: "Australia", code: "AU", flag: "🇦🇺", languages: [ { name: "English", code: "en" } ] },
      { name: "New Zealand", code: "NZ", flag: "🇳🇿", languages: [ { name: "English", code: "en" } ] },
      { name: "Philippines", code: "PH", flag: "🇵🇭", languages: [ { name: "English", code: "en" } ] },
    ],
  },
  {
    region: "Europe",
    code: "eu",
    countries: [
      { name: "Belgium", code: "BE", flag: "🇧🇪", languages: [ { name: "Nederlands", code: "nl" }, { name: "Français", code: "fr" } ] },
      { name: "Česká republika", code: "CZ", flag: "🇨🇿", languages: [ { name: "Čeština", code: "cs" } ] },
      { name: "Danmark", code: "DK", flag: "🇩🇰", languages: [ { name: "Dansk", code: "da" } ] },
      { name: "Deutschland", code: "DE", flag: "🇩🇪", languages: [ { name: "Deutsch", code: "de" } ] },
      { name: "Ελλάδα", code: "GR", flag: "🇬🇷", languages: [ { name: "Ελληνικά", code: "el" } ] },
      { name: "España", code: "ES", flag: "🇪🇸", languages: [ { name: "Español", code: "es" } ] },
      { name: "France", code: "FR", flag: "🇫🇷", languages: [ { name: "Français", code: "fr" } ] },
      { name: "Hrvatska", code: "HR", flag: "🇭🇷", languages: [ { name: "Hrvatski", code: "hr" } ] },
      { name: "Ísland", code: "IS", flag: "🇮🇸", languages: [ { name: "Íslenska", code: "is" } ] },
      { name: "Italia", code: "IT", flag: "🇮🇹", languages: [ { name: "Italiano", code: "it" } ] },
      { name: "Lietuva", code: "LT", flag: "🇱🇹", languages: [ { name: "Lietuvių", code: "lt" } ] },
      { name: "Luxembourg", code: "LU", flag: "🇱🇺", languages: [ { name: "Français", code: "fr" }, { name: "Deutsch", code: "de" } ] },
      { name: "Magyarország", code: "HU", flag: "🇭🇺", languages: [ { name: "Magyar", code: "hu" } ] },
      { name: "Nederland", code: "NL", flag: "🇳🇱", languages: [ { name: "Nederlands", code: "nl" } ] },
      { name: "Norge", code: "NO", flag: "🇳🇴", languages: [ { name: "Norsk", code: "no" } ] },
      { name: "Österreich", code: "AT", flag: "🇦🇹", languages: [ { name: "Deutsch", code: "de" } ] },
      { name: "Polska", code: "PL", flag: "🇵🇱", languages: [ { name: "Polski", code: "pl" } ] },
      { name: "Portugal", code: "PT", flag: "🇵🇹", languages: [ { name: "Português", code: "pt" } ] },
      { name: "România", code: "RO", flag: "🇷🇴", languages: [ { name: "Română", code: "ro" } ] },
      { name: "Slovenija", code: "SI", flag: "🇸🇮", languages: [ { name: "Slovenščina", code: "sl" } ] },
      { name: "Switzerland", code: "CH", flag: "🇨🇭", languages: [ { name: "Français", code: "fr" }, { name: "Deutsch", code: "de" }, { name: "Italiano", code: "it" } ] },
      { name: "Sverige", code: "SE", flag: "🇸🇪", languages: [ { name: "Svenska", code: "sv" } ] },
      { name: "Suomi", code: "FI", flag: "🇫🇮", languages: [ { name: "Suomi", code: "fi" } ] },
      { name: "Türkiye", code: "TR", flag: "🇹🇷", languages: [ { name: "Türkçe", code: "tr" } ] },
      { name: "United Kingdom", code: "GB", flag: "🇬🇧", languages: [ { name: "English", code: "en" } ] },
      { name: "Other Europe", code: "EU-OTH", flag: "🇪🇺", languages: [ { name: "English", code: "en" } ] },
    ],
  },
];

// Helper function to get country by code
export const getCountryByCode = (countryCode: string): CountryData | undefined => {
  for (const region of localeData) {
    const country = region.countries.find(c => c.code === countryCode);
    if (country) return country;
  }
  return undefined;
};

// Helper function to get region by code
export const getRegionByCode = (regionCode: string): RegionData | undefined => {
  return localeData.find(r => r.code === regionCode);
};

// Helper function to detect user's region based on timezone
export const detectUserRegion = (): string => {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    if (timezone.includes('America/')) {
      if (timezone.includes('US') || timezone.includes('Canada')) return 'na';
      return 'sa';
    }
    if (timezone.includes('Europe/')) return 'eu';
    if (timezone.includes('Asia/') || timezone.includes('Australia/')) return 'ap';
    if (timezone.includes('Africa/')) return 'af';
    if (timezone.includes('Asia/Dubai') || timezone.includes('Asia/Riyadh') || timezone.includes('Asia/Jerusalem')) return 'me';
    
    return 'na'; // Default to North America
  } catch {
    return 'na';
  }
};

// Helper function to get all supported locale codes
export const getAllSupportedLocales = (): string[] => {
  const locales: string[] = [];
  localeData.forEach(region => {
    region.countries.forEach(country => {
      country.languages.forEach(lang => {
        if (!locales.includes(lang.code)) {
          locales.push(lang.code);
        }
      });
    });
  });
  return locales;
}; 