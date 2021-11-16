const webpack = require('webpack');

module.loaders: [
	{ test: /\.svg$/, loaders: ['babel?presets[]=react', 'svg-jsx'] }
]