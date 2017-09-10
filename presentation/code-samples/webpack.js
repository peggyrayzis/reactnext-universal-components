const webpack = {
  alias: `
    module: {
      resolve: {
        alias: {
          'react-native': path.join(
            __dirname,
            'node_modules',
            'react-native-web',
          ),
        },
        extensions: ['.web.js', '.js']
      }
    }`,
  babel: `
  {
    "presets": ["react-native"],
    "plugins": [
      ["module-resolver", {
        "alias": {
          "react-native": "react-vr",
        }
      }]
    ]
  }
  `,
  babelLoader: `
  module: {
    rules: [
      {
        exclude: /node_modules\/(?!react-native-vector-icons)/,
        loader: 'babel-loader',
        test: /\.js$/,
      }
    ]
  }
  `,
  moduleAliasing: `
    module: {
      resolve: {
        alias: {
          'victory-chart/src': path.join(
            __dirname,
            'node_modules',
            'victory-chart',
            'lib'
          ),
        }
      }
    }
  `,
  flow: `
  [options]
  module.name_mapper='\(react-native\)' -> 'react-native-web'
  `,
  jest: `
  "jest": {
    "moduleNameMapper": {
      "react-native": "<rootDir>/node_modules/react-native-web"
    }
  }
  `,
};

export default webpack;
