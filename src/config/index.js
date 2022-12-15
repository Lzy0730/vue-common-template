/**
 * @description 子配置，主题配置
 */
const cli = require("./cli.config");
const theme = require("./theme.config.js");
const setting = require("./setting.config.js");

module.exports = {
  ...cli,
  ...theme,
  ...setting,
};
