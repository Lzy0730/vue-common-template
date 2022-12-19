/**
 * @description 所有全局配置的状态管理，如无必要请勿修改
 */
import { isJson } from "@/utils/validate";
import {
  collapse as _collapse,
  columnStyle,
  fixedHeader,
  layout,
  logo,
  title,
  showTabs,
} from "@/config";

const defaultTheme = {
  columnStyle,
  fixedHeader,
  layout,
  logo,
  title,
  showTabs,
};

const getLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  if (isJson(value)) {
    return JSON.parse(value);
  } else {
    return false;
  }
};

const { collapse } = getLocalStorage("collapse");

const state = () => ({
  logo,
  title,
  collapse: collapse || _collapse,
  theme: getLocalStorage("theme") || { ...defaultTheme },
  extra: { first: "" },
});

const getters = {
  logo: (state) => state.logo,
  title: (state) => state.title,
  theme: (state) => state.theme,
  collapse: (state) => state.collapse,
  extra: (state) => state.extra,
};

const mutations = {
  // 折叠导航SideBar
  openSideBar(state) {
    state.collapse = false;
  },
  foldSideBar(state) {
    state.collapse = true;
  },
  toggleCollapse(state) {
    state.collapse = !state.collapse;
    localStorage.setItem("collapse", `{"collapse":${state.collapse}}`);
  },
  resetTheme(state) {
    state.theme = { ...defaultTheme };
    localStorage.removeItem("theme");
  },
};

const actions = {
  openSideBar({ commit }) {
    commit("openSideBar");
  },
  foldSideBar({ commit }) {
    commit("foldSideBar");
  },
  toggleCollapse({ commit }) {
    commit("toggleCollapse");
  },
  resetTheme({ commit }) {
    commit("resetTheme");
  },
};
export default { state, getters, mutations, actions };
