module.exports = {
  "stories": [
    "../**/*.stories.mdx",
    "../**/*.stories.@(js|jsx|ts|tsx)"
  ],
  staticDirs: ['../public'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss')
        },
        cssLoaderOptions: {
          modules: {
            auto: true,
          },
        }
      },
    }
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  "typescript": { "reactDocgen": false },
}