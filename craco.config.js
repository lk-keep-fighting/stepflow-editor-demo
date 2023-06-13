/* craco.config.js */
const MonacoPlugin = require('monaco-editor-webpack-plugin')
module.exports = {
    webpack: {
        plugins: [
            new MonacoPlugin({
                languages: ['typescript', 'json']
            }),
        ],
        presets: [
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic', // 加上这行配置
                },
            ],
        ]
    }
};