const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置scss文件全局变量
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/vct/styles/variables/variables.scss";`,
      },
    },
  },
  chainWebpack: (config) => {
    const dir = path.resolve(__dirname, "src/icons");
    config.module
      .rule("svg-sprite")
      .test(/\.svg$/)
      .include.add(dir)
      .end() // 包含 icons 目录
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ extract: false })
      .end();
    // 下文会解决一个 svg 填充问题，也就是下面被注释掉的代码
    config
      .plugin("svg-sprite")
      .use(require("svg-sprite-loader/plugin"), [{ plainSprite: true }]);
    config.module.rule("svg").exclude.add(dir); // 其他 svg loader 排除 icons 目录
  },
});
