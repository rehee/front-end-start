var path = require('path')
var webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared')
  ],
  entry: {
    "ng-test": "./script-code/ng/ng-app.ts",
    "jasmine.spec":"./script-code/ng/controllers/home2/home.spec.ts",
    "jasmine-calcu.spec":"./script-code/ng/controllers/calculator/calculator.spec.ts"
  },
  output: {
    path: path.resolve(__dirname, './dist/package'),
    publicPath: '/dist/package',
    filename: '[name].js',
    jsonpFunction:'generalapp'
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.tsx', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
   loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
       { test: /\.tsx$/, loader: "awesome-typescript-loader" },

      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.less$/,
        loader: 'less-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|ttf)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  // devtool: '#eval-source-map',
  devtool: "source-map",
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new ClosureCompilerPlugin({
      compiler: {
        language_in: 'ECMASCRIPT6',
        language_out: 'ECMASCRIPT5',
        compilation_level: 'SIMPLE'/*,
        create_source_map: true*/
      },
      concurrency: 3
    })
  ])
}
