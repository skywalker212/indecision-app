const path = require('path');

module.exports = (env) => {
    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, 'build', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }]
        },
        devtool: 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'build'),
            publicPath: './dist/'
        }
    }
};