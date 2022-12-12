// 缓存相关
import { isJson, isString } from '@/utils/validate'

/**
 * @copyright
 * @description 存储
 * @param data
 * @returns {void|*}
 */
export function setItem(name, data) {
  if (!isString(data)) data = JSON.stringify(data)
  return localStorage.setItem(name, data)
}

/**
 * @copyright
 * @description 获取
 * @returns {string|ActiveX.IXMLDOMNode|Promise<any>|any|IDBRequest<any>|MediaKeyStatus|FormDataEntryValue|Function|Promise<Credential | null>}
 */
export function getItem(name) {
  const data = localStorage.getItem(name)
  if (!data) return ''
  return isJson(data) ? JSON.parse(data) : data
}

/**
 * @copyright
 * @description 移除
 * @returns {void|Promise<void>}
 */
export function removeItem(name) {
  return localStorage.removeItem(name)
}
