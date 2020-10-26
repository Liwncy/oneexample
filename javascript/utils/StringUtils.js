
/**
 * 字符串前面空格去除与替换
 * @param str
 * @returns {*}
 */
const trimStart = str => str.replace(new RegExp('^([\\s]*)(.*)$'), '$2')
console.log(trimStart(' abc ')) // abc
console.log(trimStart('123 ')) // 123

/**
 * 字符串后面空格去除与替换
 * @param str
 * @returns {*}
 */
const trimEnd = str => str.replace(new RegExp('^(.*?)([\\s]*)$'), '$1')
console.log(trimEnd(' abc ')) //   abc
console.log(trimEnd('123 ')) // 123
/**
 * 去除字符串中的html代码
 * @param str
 * @returns {string}
 */
const removehtml = (str = '') => str.replace(/<[\/\!]*[^<>]*>/ig, '')
console.log(removehtml('<h1>哈哈哈哈<呵呵呵</h1>')) // 哈哈哈哈<呵呵呵
