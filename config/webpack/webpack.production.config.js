const { merge } = require('webpack-merge')
const common = require('./webpack.common.config')

const publicURL = process.env.PUBLIC_URL

const config = {
  mode: 'production',
  output: {
    publicPath: `${publicURL}/`,
  },
}

module.exports = merge(common, config)
