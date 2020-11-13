/**
 * 将日期转为指定字符串
 * @param time
 * @param format
 * @returns {*}
 */
const dateFormat = (time, format) => {
    let t = new Date(time);
    const tf = function (i) {
        return (i < 10 ? '0' : '') + i
    };
    const approach = {
        yyyy: tf(t.getFullYear()),
        MM: tf(t.getMonth() + 1),
        mm: tf(t.getMinutes()),
        dd: tf(t.getDate()),
        HH: tf(t.getHours()),
        ss: tf(t.getSeconds())
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, a => approach[a])
};
console.log(dateFormat(new Date(),'yyyy-MM-dd')) // 2020-10-21
/**
 * 将指定格式的字符串解析为日期字符串
 * @param str
 * @param format
 * @returns {Date}
 */
const dataPattern = (str, format = '-') => {
    if (!str) {
        return new Date()
    }
    const dateReg = new RegExp(`^(\\d{2})${format}(\\d{2})${format}(\\d{4})$`)
    const [, month, day, year] = dateReg.exec(str)
    return new Date(`${month}, ${day} ${year}`)
}

console.log(dataPattern('12-25-1995')) // Mon Dec 25 1995 00:00:00 GMT+0800 (中国标准时间)


