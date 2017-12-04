let defaultConfig = {
    externals: {
    },
    entry: {
      index: './main.js',
    },
    output: {
      filename: './dist/n-validator.js',
      library: 'nValidator',
      libraryTarget: 'umd',
    },
    module: {
      loaders: [
          {
              test: /\.js$/,
              loader: [
                'babel-loader',
              ],
          },
      ]
    },
    plugins: [
    ],
    resolve: {
      alias: {
        'base': __dirname + '/src',
      },
    },
  };

  module.exports = defaultConfig;