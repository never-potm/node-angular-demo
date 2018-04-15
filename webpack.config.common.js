var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './assets/app/main.ts'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                // loaders: [
                //     'awesome-typescript-loader', 
                //     'angular2-template-loader', 
                //     'angular-router-loader'
                // ]
            },
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.css$/,
                use: [{ loader: 'raw-loader' }]
            }
        ],
        exprContextCritical: false
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            // {\\|\/} part accounts for path separators in unix and windows
            /angular{\\|\/}core{\\|\/}{esm{\\|\/}src|src}{\\|\/}linker/,
            './src' // location of src
        )
    ]

};