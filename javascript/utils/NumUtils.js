/**
 * 格式化数字(正则)
 * @param num
 * @returns {string}
 */
function toThousands(num) {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
