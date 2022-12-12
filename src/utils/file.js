/**
 * @description 去除文件名扩展后缀，获取文件名
 * @param {String} str 原始文件名
 * @returns {String}
 */
export function getFileName(str) {
  if (!str.includes(".")) return str;
  return str.substring(0, str.lastIndexOf("."));
}
