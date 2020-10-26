/**
 * 分割指定长度的元素数组
 * @param list
 * @param size
 * @param cacheList
 * @returns {*[]}
 */
var listChunk = (list, size = 1, cacheList = []) => {
    const tmp = [...list]
    if (size <= 0) {
        return cacheList
    }
    while (tmp.length) {
        cacheList.push(tmp.splice(0, size))
    }
    return cacheList
}
console.log(listChunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

/**
 * 获取数组交集
 * @param list
 * @param args
 * @returns {*}
 */
const intersection = (list, ...args) => list.filter(item => args.every(list => list.includes(item)))

console.log(intersection([2, 1], [2, 3], [4,1])) // [2]
console.log(intersection([1, 2], [3, 4])) // []

/**
 * 函数柯里化
 * @param fn
 * @returns {function(...[*]): *}
 */
const curring = fn => {
    const { length } = fn
    const curried = (...args) => {
        return (args.length >= length
            ? fn(...args)
            : (...args2) => curried(...args.concat(args2)))
    }
    return curried
}
const listMerge = (a, b, c) => [a, b, c]
const curried = curring(listMerge)

console.log(curried(1)(2)(3)) // [1, 2, 3]
console.log(curried(1, 2)(3)) // [1, 2, 3]
console.log(curried(1, 2, 3)) // [1, 2, 3]
