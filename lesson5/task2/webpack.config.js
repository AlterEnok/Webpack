const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        profile: './src/profile/index.js',
        dashboard: './src/dashboard/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    mode: 'production',
    devtool: 'eval-source-map',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    watchOptions: {
        ignored: /node_modules/
    }
};