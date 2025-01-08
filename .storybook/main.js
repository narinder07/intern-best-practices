// .storybook/main.js
import { createProxyMiddleware } from "http-proxy-middleware";

export const stories = ["../src/**/*.stories.@(js|jsx|ts|tsx)"];
export const addons = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@chromatic-com/storybook",
];
export const framework = {
  name: "@storybook/react-vite",
  options: {},
};
export const docs = {};
export const typescript = {
  reactDocgen: "react-docgen-typescript",
};

export async function viteFinal(config) {
  // Add proxy configuration
  config.server = {
    ...config.server,
    proxy: {
      "/api": {
        target: "https://dpxcode-travel-c1f8664525c9.herokuapp.com",
        secure: false,
        changeOrigin: true,
      },
    },
  };

  return config;
}
