const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'eval-source-map',
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    ecma: 5,
                },
            }),
        ],
    },
};