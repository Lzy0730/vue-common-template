import Vue from "vue";

// 加载雪碧图
import "@/icons";

// 加载element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 加载全局样式样式
import "./styles/vct.scss";

// 加载VctIcon
import VctIcon from "vct-icons";
import "vct-icons/lib/vct-icons.css";
Vue.use(VctIcon);

// 加载插件
const Plugins = require.context("./plugins", true, /\.js$/);
Plugins.keys().map(Plugins);

// 加载组件
const Components = require.context(".", true, /\.vue$/);
Components.keys()
  .map(Components)
  .forEach((item) => {
    if (item.default.name && item.default.name !== "Layouts")
      Vue.component(item.default.name, item.default);
  });
