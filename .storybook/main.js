// .storybook/main.js

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // other addons
  ],
  viteFinal: async (config) => {
    // Modify or add to the existing Vite config
    return config;
  },
};