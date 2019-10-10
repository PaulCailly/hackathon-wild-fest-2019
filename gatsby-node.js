/* eslint-disable @typescript-eslint/no-var-requires */
var path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@app': path.resolve(__dirname, 'src/app'),
                '@components': path.resolve(__dirname, 'src/components'),
                '@data': path.resolve(__dirname, 'src/data'),
                '@models': path.resolve(__dirname, 'src/models'),
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@utils': path.resolve(__dirname, 'src/utils'),
            },
        },
    });
};
