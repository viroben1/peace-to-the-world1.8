// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          // Your PostCSS plugins and options go here
          plugins: [
            // Example: require('autoprefixer'),
          ],
        },
      },
    },
  },
};
