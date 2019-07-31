const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src/App.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    mode : 'development',
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.css?$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    devServer: {
        historyApiFallback: {index: 'dist/index.html'}
    }
};