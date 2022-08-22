const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins(
  [optimizedImages, {
    inlineImageLimit: -1,
    optimizeImagesInDev: true,
  }],
  {
    pageExtensions: ['mdx', 'jsx', 'js'],
    webpack: (config, { dev }) => {
      if (dev) {
        config.module.rules.push({
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            // eslint options (if necessary)
          },
        });
      }
      return config;
    },
  },
);
