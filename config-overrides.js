const { override, fixBabelImports, addLessLoader, addWebpackModuleRule, addWebpackPlugin } = require('customize-cra');
const AntdScssThemePlugin = require('antd-scss-theme-plugin');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    // addLessLoader({
    //     javascriptEnabled: true,
    //     // modifyVars: { '@primary-color': '#1DA57A' },
    //     // 'hack': `true; @import "your-less-file-path.less";`, // Override with less file
    // }),
    addWebpackModuleRule({
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
            },
            {
                loader: 'sass-loader',
            }
        ],
    }),
    addWebpackModuleRule({
        test: /\.less$/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
            },
            AntdScssThemePlugin.themify({
                loader: 'less-loader',
                options: {
                    javascriptEnabled: true,
                },
            }),
        ],
    }),
    addWebpackPlugin(
        new AntdScssThemePlugin("./src/style/theme.scss")
    )
);