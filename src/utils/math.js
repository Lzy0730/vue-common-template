/**
 * @description 保留n位小数（不补零）
 * @param {number | string} value 数值
 * @param {number} fractionDigits 数值
 */
export function numberFixed(value = 0, fractionDigits = 2) {
  // return Math.round(value * Math.pow(10, fractionDigits)) / Math.pow(10, fractionDigits)
  return ((value * 10 ** fractionDigits) << 0) / 10 ** fractionDigits;
}
