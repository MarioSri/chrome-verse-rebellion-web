import * as React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Globe, Check } from "lucide-react";
import {
  localeData,
  detectUserRegion,
  getCountryByCode,
  getRegionByCode,
  type RegionData,
  type CountryData,
  type LanguageOption,
} from "@/data/locale-data";

interface LocaleSelectorModalProps {
  children?: React.ReactNode;
  onLocaleChange?: (locale: string, country: string) => void;
  triggerClassName?: string;
}

interface UserSelection {
  region: string;
  country: string;
  language: string;
}

export function LocaleSelectorModal({
  children,
  onLocaleChange,
  triggerClassName,
}: LocaleSelectorModalProps) {
  const { setLocale, locale } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [userSelection, setUserSelection] = useState<UserSelection | null>(null);
  const [detectedRegion, setDetectedRegion] = useState<string>("");

  useEffect(() => {
    const savedSelection = localStorage.getItem("userLocaleSelection");
    if (savedSelection) {
      try {
        const parsed = JSON.parse(savedSelection);
        setUserSelection(parsed);
      } catch (error) {
        console.error("Failed to parse saved locale selection:", error);
      }
    }
    setDetectedRegion(detectUserRegion());
  }, []);

  const isCurrent = (regionCode: string, countryCode: string, langCode: string) => {
    if (!userSelection) return false;
    return (
      userSelection.region === regionCode &&
      userSelection.country === countryCode &&
      userSelection.language === langCode
    );
  };

  const handleLanguageSelect = (
    regionCode: string,
    countryCode: string,
    langCode: string
  ) => {
    const selection: UserSelection = {
      region: regionCode,
      country: countryCode,
      language: langCode,
    };
    localStorage.setItem("userLocaleSelection", JSON.stringify(selection));
    setUserSelection(selection);
    setLocale(langCode as any);
    if (onLocaleChange) {
      onLocaleChange(langCode, countryCode);
    }
    setIsOpen(false);
  };

  const getCurrentSelectionDisplay = () => {
    if (!userSelection) return null;
    const region = getRegionByCode(userSelection.region);
    const country = getCountryByCode(userSelection.country);
    const language = country?.languages.find((l) => l.code === userSelection.language);
    if (!region || !country || !language) return null;
    return (
      <div className="flex items-center gap-2 text-sm text-white/70">
        <Globe className="w-4 h-4" />
        <span>{country.name}</span>
        <span>•</span>
        <span>{language.name}</span>
      </div>
    );
  };

  // Tesla-style grid: region columns, country rows, inline languages
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button
            variant="ghost"
            size="sm"
            className={`flex items-center gap-2 text-white/70 hover:text-white ${triggerClassName || ""}`}
          >
            <Globe className="w-4 h-4" />
            {getCurrentSelectionDisplay() || "Select Region"}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] w-full max-h-[90vh] bg-white text-black p-10 overflow-x-auto overflow-y-auto rounded-lg shadow-xl border border-gray-200">
        <DialogHeader className="mb-8">
          <DialogTitle className="text-2xl font-light flex items-center gap-2 text-black">
            <Globe className="w-6 h-6 text-gray-700" />
            Select Your Region
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-16 gap-y-0 w-full">
          {localeData.map((region) => (
            <div key={region.code} className="min-w-[220px]">
              <h3 className="text-xl font-semibold mb-6 text-black">
                {region.region}
                {region.code === detectedRegion && (
                  <span className="ml-2 text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">Suggested</span>
                )}
              </h3>
              <div className="flex flex-col gap-2">
                {region.countries.map((country) => (
                  <div key={country.code} className="mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{country.flag}</span>
                      <span className="font-bold text-black">{country.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1 ml-7">
                      {country.languages.map((lang) => {
                        const selected = isCurrent(region.code, country.code, lang.code);
                        return (
                          <button
                            key={lang.code}
                            onClick={() => handleLanguageSelect(region.code, country.code, lang.code)}
                            className={`inline-flex items-center px-2 py-0.5 rounded text-sm border-none bg-transparent hover:underline focus:underline focus:outline-none transition
                              ${selected ? "bg-gray-200 text-black font-semibold" : "text-gray-700 hover:text-black"}
                            `}
                            style={{ minWidth: 60 }}
                          >
                            {lang.name}
                            {selected && <Check className="w-4 h-4 ml-1 text-green-600" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
} 