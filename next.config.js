const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const optimizedImagesCSSFix = (nextConfig = {}) => ({
  ...nextConfig,
  webpack(config, options) {
    if (config.module.rules) {
      config.module.rules.forEach((rule) => {
        if (rule.oneOf) {
          rule.oneOf.forEach((subRule) => {
            if (subRule.type && subRule.type === 'asset/resource' && subRule.exclude) {
              subRule.exclude.push(/\.(jpg|jpeg|png|svg|webp|gif|ico)$/);
            } else if (
              subRule.issuer
              && !subRule.test
              && !subRule.include
              && subRule.exclude
              && subRule.use
              && subRule.use.options
              && subRule.use?.options?.name
            ) {
              if (
                String(subRule.issuer).includes('/\\.(css|scss|sass)(\\.webpack\\[javascript\\/auto\\])?$/')
                && subRule.use.options.name.startsWith('static/media/')
              ) {
                subRule.exclude.push(/\.(jpg|jpeg|png|svg|webp|gif|ico)$/);
              }
            }
          });
        }
      });
    }
    if (typeof nextConfig.webpack === 'function') return nextConfig.webpack(config, options);
    return config;
  },
});

module.exports = withPlugins(
  [[optimizedImages, {
    inlineImageLimit: 8192,
    handleImages: ['jpeg', 'png', 'jpg', 'svg'],
    optimizeImagesInDev: true,
    optimizeImages: true,
    imagesName: '[name].[hash].[ext]',
    mozjpeg: {
      quality: 70,
    },
    optipng: {
      optimizationLevel: 5,
    },
    images: {
      disableStaticImages: true,
    },
    responsive: {
      adapter: require('responsive-loader/jimp'),
    },
    defaultImageLoader: 'img-loader',
  }], [optimizedImagesCSSFix, {}]],
  {
    pageExtensions: ['mdx', 'jsx', 'js'],
    images: {
      disableStaticImages: true,
    },
    devIndicators: {
      autoPrerender: false,
    },
    compress: false, // NOTE: enable this when doing SSR
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
