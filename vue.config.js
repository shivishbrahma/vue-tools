const { defineConfig } = require("@vue/cli-service");
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: (process.env.NODE_ENV === "production") ? "/vue-tools/" : "/",
    // chainWebpack: config=>{
    //     config.plugin("polyfills").use(NodePolyfillPlugin)
    // }
});
