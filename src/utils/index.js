import Vue from "vue";

/**
 * @description addEventListener
 * @type {function(...[*]=)}
 */
export const on = (function () {
  return function (element, event, handler, useCapture = false) {
    if (element && event && handler) {
      element.addEventListener(event, handler, useCapture);
    }
  };
})();

/**
 * @description removeEventListener
 * @type {function(...[*]=)}
 */
export const off = (function () {
  return function (element, event, handler, useCapture = false) {
    if (element && event) {
      element.removeEventListener(event, handler, useCapture);
    }
  };
})();

/**
 * @description 延时nextTick
 * @param {function} func 回调函数
 * @param {number} timeout 延迟时间
 */
export function nextTick(func, timeout = 0) {
  setTimeout(() => {
    this.$nextTick(() => {
      func && func();
    });
  }, timeout);
}
Vue.prototype.$next = nextTick;
