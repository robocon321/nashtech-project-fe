const path = require('path');
module.exports = {
	webpack: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@contexts': path.resolve(__dirname, 'src/contexts'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@providers': path.resolve(__dirname, 'src/providers'),
			'@pages': path.resolve(__dirname, 'src/pages'),
            '@locales': path.resolve(__dirname, 'src/locales')
		},
	},
};
