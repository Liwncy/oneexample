/**
 * 将日期转为指定字符串
 * @param time
 * @param format
 * @returns {*}
 */
var dateFormat = (time, format) => {
    var t = new Date(time);
    var tf = function (i) {
        return (i < 10 ? '0' : '') + i
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
        switch (a) {
            case 'yyyy':
                return tf(t.getFullYear());
                break;
            case 'MM':
                return tf(t.getMonth() + 1);
                break;
            case 'mm':
                return tf(t.getMinutes());
                break;
            case 'dd':
                return tf(t.getDate());
                break;
            case 'HH':
                return tf(t.getHours());
                break;
            case 'ss':
                return tf(t.getSeconds());
                break;
        }
    })
}
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


