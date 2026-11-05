import '../src/index.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f8fafc' },
        { name: 'white', value: '#ffffff' },
        { name: 'dark', value: '#0f172a' },
      ],
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
        ],
      },
    },
    viewport: {
      viewports: {
        mobileSmall: {
          name: 'Mobile Small (iPhone SE)',
          styles: { width: '375px', height: '667px' },
        },
        mobileLarge: {
          name: 'Mobile Large (iPhone 14/15)',
          styles: { width: '390px', height: '844px' },
        },
        tablet: {
          name: 'Tablet (iPad Mini)',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop (1080p)',
          styles: { width: '1280px', height: '800px' },
        },
      },
    },
  },
};

export default preview;
