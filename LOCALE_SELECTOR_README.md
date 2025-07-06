# Tesla-Style Language & Country Selector Modal

A fully functional, Tesla-inspired language and country selector modal for the Aesthetics Rebellion: The Metaverse website.

## Features

### 🌍 **Multi-Region Support**
- **North America**: US, Canada, Mexico
- **South America**: Brazil, Argentina, Colombia
- **Europe**: UK, Germany, France, Spain, Italy, Netherlands, Sweden
- **Asia Pacific**: China, Japan, South Korea, India, Australia, Singapore
- **Middle East**: UAE, Saudi Arabia, Israel
- **Africa**: South Africa, Nigeria, Egypt

### 🎯 **Smart Detection**
- Automatically detects user's region based on browser timezone
- Falls back to "Global" if detection fails
- Preloads the most likely region for better UX

### 🔍 **Advanced Search**
- Search through regions, countries, and languages
- Real-time filtering with instant results
- Supports both English and native language names

### 💾 **Persistence**
- Saves user selection to localStorage
- Remembers preferences across browser sessions
- Seamless experience on return visits

### 🎨 **Tesla-Style Design**
- Glass-morphism UI with backdrop blur effects
- Smooth animations and transitions
- Consistent with existing website aesthetics
- Responsive design for all screen sizes

## Implementation

### Core Components

#### 1. **Locale Data Structure** (`src/data/locale-data.ts`)
```typescript
interface LanguageOption {
  name: string;
  code: string;
  localName?: string;
  flag?: string;
  rtl?: boolean;
}

interface CountryData {
  name: string;
  code: string;
  flag: string;
  languages: LanguageOption[];
  timezone?: string;
  currency?: string;
}

interface RegionData {
  region: string;
  code: string;
  countries: CountryData[];
}
```

#### 2. **Main Modal Component** (`src/components/locale-selector-modal.tsx`)
- Three-step selection flow: Region → Country → Language
- Search functionality at each step
- Callback support for locale changes
- Customizable trigger elements

#### 3. **Integration** (`src/components/navigation-bar.tsx`)
- Replaces the old language selector
- Maintains existing styling and behavior
- Accessible button with proper ARIA labels

### Usage Examples

#### Basic Implementation
```tsx
import { LocaleSelectorModal } from '@/components/locale-selector-modal';

<LocaleSelectorModal>
  <Button>Select Region</Button>
</LocaleSelectorModal>
```

#### With Callback Handler
```tsx
<LocaleSelectorModal onLocaleChange={(locale, country) => {
  console.log('Selected:', locale, country);
  // Handle locale change (e.g., redirect, load content)
}}>
  <Button>Select Region</Button>
</LocaleSelectorModal>
```

#### Custom Trigger Styling
```tsx
<LocaleSelectorModal triggerClassName="custom-class">
  <ChromeButton variant="gold">
    <Globe className="w-4 h-4 mr-2" />
    Choose Language
  </ChromeButton>
</LocaleSelectorModal>
```

#### Icon-Only Trigger
```tsx
<LocaleSelectorModal>
  <button 
    className="p-2 rounded-full hover:bg-white/5"
    title="Select language and region"
    aria-label="Select language and region"
  >
    <Globe className="w-5 h-5 text-gold" />
  </button>
</LocaleSelectorModal>
```

## User Experience Flow

### 1. **Initial Load**
- Modal detects user's region based on timezone
- Pre-selects the detected region
- Shows "Select Your Region" step

### 2. **Region Selection**
- Displays all available regions
- Shows country count for each region
- Search functionality to filter regions/countries
- Click to proceed to country selection

### 3. **Country Selection**
- Lists all countries in the selected region
- Shows available languages for each country
- Search functionality to filter countries/languages
- Click to proceed to language selection

### 4. **Language Selection**
- Displays all languages available in the selected country
- Shows both English and native language names
- Visual confirmation with checkmark
- Click to finalize selection

### 5. **Completion**
- Saves selection to localStorage
- Updates translation context
- Calls optional callback function
- Closes modal and updates UI

## Technical Details

### State Management
- Uses React hooks for local state
- Integrates with existing TranslationContext
- Persists data in localStorage

### Accessibility
- Proper ARIA labels and titles
- Keyboard navigation support
- Screen reader friendly
- Focus management

### Performance
- Lazy loading of region data
- Efficient search filtering
- Minimal re-renders with useCallback
- Optimized animations

### Browser Compatibility
- Modern browsers with ES6+ support
- Fallback for older browsers
- Graceful degradation for unsupported features

## Demo

Visit `/locale-demo` to see the locale selector in action with various trigger styles and examples.

## Configuration

### Adding New Regions/Countries/Languages

1. **Update locale data** in `src/data/locale-data.ts`:
```typescript
{
  region: "New Region",
  code: "nr",
  countries: [
    {
      name: "New Country",
      code: "NC",
      flag: "🏳️",
      languages: [
        { name: "New Language", code: "nl", localName: "Native Name" }
      ]
    }
  ]
}
```

2. **Add translations** in `src/translations/index.ts`:
```typescript
export const translations = {
  // ... existing translations
  'nl': en, // or create new translation file
};
```

3. **Create translation file** (if needed) in `src/translations/`:
```typescript
export const nl = {
  // ... translation keys
};
```

### Customizing the Modal

#### Styling
- Modify CSS classes in the component
- Use existing design tokens (gold, white, etc.)
- Maintain glass-morphism theme

#### Behavior
- Adjust detection logic in `detectUserRegion()`
- Modify persistence strategy
- Customize callback handling

## Integration with Existing Code

### Translation Context
The modal integrates seamlessly with the existing `TranslationContext`:
- Updates locale when selection is made
- Maintains existing translation functionality
- Preserves current language switching behavior

### Navigation Bar
Replaces the old language selector while maintaining:
- Same visual position and styling
- Consistent user experience
- All existing functionality

### Routing
No changes required to existing routes. The modal works independently and doesn't affect navigation.

## Future Enhancements

### Potential Improvements
1. **IP-based detection** for more accurate region detection
2. **Currency formatting** based on selected country
3. **Date/time formatting** based on selected locale
4. **RTL language support** for Arabic and Hebrew
5. **Analytics integration** to track locale preferences
6. **A/B testing** for different UI variations

### API Integration
- Fetch region data from external API
- Real-time currency conversion
- Dynamic language availability
- User preference synchronization

## Troubleshooting

### Common Issues

1. **Modal not opening**
   - Check if Dialog component is properly imported
   - Verify trigger element is wrapped correctly

2. **Selection not persisting**
   - Check localStorage availability
   - Verify JSON parsing/stringifying

3. **Region detection not working**
   - Check browser timezone support
   - Verify fallback logic

4. **Styling issues**
   - Ensure Tailwind classes are available
   - Check for CSS conflicts

### Debug Mode
Enable console logging by adding debug prop:
```tsx
<LocaleSelectorModal debug={true}>
  <Button>Select Region</Button>
</LocaleSelectorModal>
```

## Contributing

When contributing to the locale selector:

1. **Follow existing patterns** for data structure
2. **Maintain accessibility** standards
3. **Test across browsers** and devices
4. **Update documentation** for new features
5. **Add appropriate tests** for new functionality

## License

This implementation is part of the Aesthetics Rebellion: The Metaverse project and follows the same licensing terms. 