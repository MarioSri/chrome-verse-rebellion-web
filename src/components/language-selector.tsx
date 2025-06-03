import * as React from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import { SupportedLocale } from "@/translations";
import { Button } from "@/components/ui/button";

export function LanguageSelector() {
  const { setLocale, t } = useTranslation();
  
  const languages = [
    { name: "English (US)", code: "en-us" },
    { name: "English (UK)", code: "en-gb" },
    { name: "Spanish", code: "es" },
    { name: "Spanish (MX)", code: "es-mx" }
  ];

  const handleLanguageChange = (code: SupportedLocale) => {
    setLocale(code);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-medium mb-4">{t.languageSelector.title}</h2>
      <div className="space-y-2">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant="outline"
            className="w-full justify-start"
            onClick={() => handleLanguageChange(lang.code)}
          >
            {lang.name}
          </Button>
        ))}
      </div>
    </div>
  );
}