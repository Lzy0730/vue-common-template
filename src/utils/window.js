// 原生浏览器窗户是否被激活方法
export function monitorWindowStatus(showCb = null, hideCb = null) {
  // 不同浏览器 hidden 名称
  let hiddenProperty =
    "hidden" in document
      ? "hidden"
      : "webkitHidden" in document
      ? "webkitHidden"
      : "mozHidden" in document
      ? "mozHidden"
      : null;
  // 不同浏览器的事件名
  let visibilityChangeEvent = hiddenProperty.replace(
    /hidden/i,
    "visibilitychange"
  );
  let onVisibilityChange = function () {
    if (!document[hiddenProperty]) {
      showCb && showCb();
      document.removeEventListener(visibilityChangeEvent, onVisibilityChange); // 移除元素事件句柄
    } else {
      hideCb && hideCb();
    }
  };
  document.addEventListener(visibilityChangeEvent, onVisibilityChange); // 添加元素事件句柄
}
