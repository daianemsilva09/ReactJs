const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolver(_dirname, 'dist'),
        filename: 'bundle.js'
    }
};