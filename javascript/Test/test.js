const dataPattern = (str, format = '-') => {
    if (!str) {
        return new Date()
    }
    const dateReg = new RegExp(`^(\\d{2})${format}(\\d{2})${format}(\\d{4})$`)
    console.log(dateReg);
    const [, month, day, year] = dateReg.exec(str)
    console.log([, month, day, year])
    return new Date(`${month}, ${day} ${year}`)
}

console.log(dataPattern('12-25-1995')) // Mon Dec 25 1995 00:00:00 GMT+0800 (中国标准时间)
