/**
 * @description 导出通用配置
 */

module.exports = {
  // 标题，此项修改后需要重启项目！！！ (包括初次加载雪花屏的标题 页面的标题 浏览器的标题)
  title: "Vue Common Template",
  // 是否开启logo，不显示时设置false，请填写src/icon路径下的图标名称
  logo: "vuejs-fill",
  // 路由模式，可选值为 history 或 hash
  routerMode: "history",
  // 是否开启logo，不显示时设置false，请填写src/icon路径下的图标名称
  // 如需使用内置RemixIcon图标，请自行去logo组件切换注释代码(内置svg雪碧图较大，对性能有一定影响)
  logo: "vuejs-fill",
  // 是否传统登录模式: 起始页为登录页
  loginMode: false,
  // 布局时是否只保持一个子菜单的展开
  uniqueOpened: false,
  // 分栏布局和综合布局时，是否点击一级菜单默认开启二级菜单(默认第一个，可通过redirect自定义)
  openFirstMenu: true,
};
