const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module:{
    	loaders:[{
    		test: /\.js$/,
    		loaders:['babel'],
    		exclude: /node_modules/,
    	},{
    		test: /\.css$/,
    		loaders: ['style','css'],
    		exclude: /node_modules/,
    	}],
    },
};


