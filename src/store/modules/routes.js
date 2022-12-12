/**
 * @description 路由拦截状态管理
 */
import Vue from "vue";
import { asyncRoutes, constantRoutes, resetRouter } from "@/router";
const state = () => ({
  routes: [],
  activeName: "",
});

const getters = {
  routes: (state) => state.routes,
  activeName: (state) => state.activeName,
};

const mutations = {
  /**
   * @description 多模式设置路由
   * @param {*} state
   * @param {*} routes
   */
  setRoutes(state, routes) {
    state.routes = routes;
  },
};

const actions = {
  /**
   * @description 多模式设置路由
   * @param {*} { commit }
   * @param mode
   * @returns
   */
  async setRoutes({ commit }, mode = false) {
    // 默认前端路由
    let routes = [...asyncRoutes];
    const accessRoutes = [...constantRoutes, ...routes];
    commit("setRoutes", JSON.parse(JSON.stringify(accessRoutes)));
    // 根据可访问路由重置Vue Router
    resetRouter(accessRoutes);
  },
};

export default { state, getters, mutations, actions };
