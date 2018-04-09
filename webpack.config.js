const path = require('path');
const WebPackConfig = require('terra-dev-site/src/config/webpack.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

WebPackConfig.entry.mainFile = path.resolve(path.join(__dirname, 'src', 'Index'));
WebPackConfig.plugins[0] = new ExtractTextPlugin('[name].css');

module.exports = WebPackConfig;
