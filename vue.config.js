const path = require('path');

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
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@services': path.resolve(__dirname, 'src/services'),
        // Add other aliases if needed
      },
    },
  },
};
