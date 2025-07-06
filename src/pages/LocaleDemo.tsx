import React from 'react';
import { LocaleSelectorModal } from '@/components/locale-selector-modal';
import { ChromeButton } from '@/components/ui/chrome-button';
import { ChromeCard } from '@/components/ui/chrome-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, MapPin, Settings, User } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

export function LocaleDemo() {
  const { t, locale } = useTranslation();
  const [lastSelection, setLastSelection] = React.useState<{ locale: string; country: string } | null>(null);

  const handleLocaleChange = (locale: string, country: string) => {
    setLastSelection({ locale, country });
    console.log('Locale changed:', { locale, country });
  };

  return (
    <div className="min-h-screen bg-dark text-white p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gradient-gold mb-4">
            Locale Selector Demo
          </h1>
          <p className="text-xl text-white/70">
            Experience the Tesla-style language and country selector
          </p>
        </div>

        {/* Current Selection Display */}
        <ChromeCard variant="glass" className="mb-8 backdrop-blur-lg bg-white/5 border-white/10">
          <div className="p-6">
            <h2 className="text-2xl font-light text-gold mb-4">Current Selection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gold" />
                <div>
                  <p className="text-sm text-white/60">Current Locale</p>
                  <p className="text-lg font-medium text-white">{locale}</p>
                </div>
              </div>
              {lastSelection && (
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gold" />
                  <div>
                    <p className="text-sm text-white/60">Last Selection</p>
                    <p className="text-lg font-medium text-white">
                      {lastSelection.locale} • {lastSelection.country}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ChromeCard>

        {/* Trigger Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Default Trigger */}
          <ChromeCard variant="glass" className="backdrop-blur-lg bg-white/5 border-white/10">
            <div className="p-6 text-center">
              <h3 className="text-lg font-medium text-gold mb-3">Default Trigger</h3>
              <p className="text-sm text-white/60 mb-4">
                Simple globe icon with default styling
              </p>
              <LocaleSelectorModal onLocaleChange={handleLocaleChange}>
                <Button variant="outline" className="w-full">
                  <Globe className="w-4 h-4 mr-2" />
                  Select Region
                </Button>
              </LocaleSelectorModal>
            </div>
          </ChromeCard>

          {/* Custom Trigger */}
          <ChromeCard variant="glass" className="backdrop-blur-lg bg-white/5 border-white/10">
            <div className="p-6 text-center">
              <h3 className="text-lg font-medium text-gold mb-3">Custom Trigger</h3>
              <p className="text-sm text-white/60 mb-4">
                Chrome button with custom styling
              </p>
              <LocaleSelectorModal onLocaleChange={handleLocaleChange}>
                <ChromeButton variant="gold" className="w-full">
                  <Globe className="w-4 h-4 mr-2" />
                  Choose Language
                </ChromeButton>
              </LocaleSelectorModal>
            </div>
          </ChromeCard>

          {/* Icon Only Trigger */}
          <ChromeCard variant="glass" className="backdrop-blur-lg bg-white/5 border-white/10">
            <div className="p-6 text-center">
              <h3 className="text-lg font-medium text-gold mb-3">Icon Only</h3>
              <p className="text-sm text-white/60 mb-4">
                Minimal icon button for compact spaces
              </p>
              <LocaleSelectorModal onLocaleChange={handleLocaleChange}>
                <button 
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  title="Select language and region"
                  aria-label="Select language and region"
                >
                  <Globe className="w-5 h-5 text-gold" />
                </button>
              </LocaleSelectorModal>
            </div>
          </ChromeCard>

          {/* Settings Style Trigger */}
          <ChromeCard variant="glass" className="backdrop-blur-lg bg-white/5 border-white/10">
            <div className="p-6 text-center">
              <h3 className="text-lg font-medium text-gold mb-3">Settings Style</h3>
              <p className="text-sm text-white/60 mb-4">
                Settings-like button with icon and text
              </p>
              <LocaleSelectorModal onLocaleChange={handleLocaleChange}>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Language & Region
                </Button>
              </LocaleSelectorModal>
            </div>
          </ChromeCard>

          {/* User Profile Style */}
          <ChromeCard variant="glass" className="backdrop-blur-lg bg-white/5 border-white/10">
            <div className="p-6 text-center">
              <h3 className="text-lg font-medium text-gold mb-3">Profile Style</h3>
              <p className="text-sm text-white/60 mb-4">
                User profile style with avatar
              </p>
              <LocaleSelectorModal onLocaleChange={handleLocaleChange}>
                <Button variant="ghost" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  My Preferences
                </Button>
              </LocaleSelectorModal>
            </div>
          </ChromeCard>

          {/* Badge Style Trigger */}
          <ChromeCard variant="glass" className="backdrop-blur-lg bg-white/5 border-white/10">
            <div className="p-6 text-center">
              <h3 className="text-lg font-medium text-gold mb-3">Badge Style</h3>
              <p className="text-sm text-white/60 mb-4">
                Badge with current selection display
              </p>
              <LocaleSelectorModal onLocaleChange={handleLocaleChange}>
                <Badge variant="secondary" className="cursor-pointer hover:bg-white/20">
                  <Globe className="w-3 h-3 mr-1" />
                  {locale.toUpperCase()}
                </Badge>
              </LocaleSelectorModal>
            </div>
          </ChromeCard>
        </div>

        {/* Features Showcase */}
        <ChromeCard variant="glass" className="backdrop-blur-lg bg-white/5 border-white/10">
          <div className="p-6">
            <h2 className="text-2xl font-light text-gold mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-white">Region Detection</h4>
                    <p className="text-sm text-white/60">
                      Automatically detects user's region based on timezone
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-white">Search Functionality</h4>
                    <p className="text-sm text-white/60">
                      Search through regions, countries, and languages
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-white">Local Storage</h4>
                    <p className="text-sm text-white/60">
                      Remembers user's selection across sessions
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-white">Multi-step Flow</h4>
                    <p className="text-sm text-white/60">
                      Intuitive region → country → language selection
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-white">Callback Support</h4>
                    <p className="text-sm text-white/60">
                      Custom event handlers for locale changes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-white">Tesla-style Design</h4>
                    <p className="text-sm text-white/60">
                      Modern, glass-morphism UI with smooth animations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ChromeCard>

        {/* Usage Instructions */}
        <ChromeCard variant="glass" className="backdrop-blur-lg bg-white/5 border-white/10 mt-8">
          <div className="p-6">
            <h2 className="text-2xl font-light text-gold mb-4">Usage</h2>
            <div className="bg-black/20 rounded-lg p-4 font-mono text-sm">
              <pre className="text-white/80">
{`import { LocaleSelectorModal } from '@/components/locale-selector-modal';

// Basic usage
<LocaleSelectorModal>
  <Button>Select Region</Button>
</LocaleSelectorModal>

// With callback
<LocaleSelectorModal onLocaleChange={(locale, country) => {
  console.log('Selected:', locale, country);
}}>
  <Button>Select Region</Button>
</LocaleSelectorModal>

// Custom styling
<LocaleSelectorModal triggerClassName="custom-class">
  <Button>Select Region</Button>
</LocaleSelectorModal>`}
              </pre>
            </div>
          </div>
        </ChromeCard>
      </div>
    </div>
  );
} 