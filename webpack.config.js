var webpack = require('webpack')
HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = () => {
    return {
        entry: {
            'main': './src/index',
            'vendor': './src/vendor'
        },
        target: 'web',
        output: {
            path: __dirname + '/dist',
            publicPath: '/',
            filename: '[name].[hash].js'
        },
        resolve: {
            extensions: ['.js', '.css']
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        presets: ['es2015', 'react']
                    }
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                },
                {
                    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                    loader: 'file-loader?name=assets/[name].[hash].[ext]'
                },
            ]
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: 'src/index.html',
            })
        ],
        devServer: {
            port: 8080,
        }
    }
}