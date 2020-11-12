/*
    js操作数组
 */

/**
 * 数组去重
 * var x = [...new Set(years)]//es6数组去重
 */
export function deduplication() {
    const allArr = [{id: 1, name: "s"}, {id: 2, name: "ds"}, {id: 3, name: "gg"}];

    // const finalArr = allArr.map(x => {
    //     return x.id
    // });
    console.log(finalArr);
    // 最终结果
    // finalArr = [1,2,3];
}
/**
 * arr.map()
 * 处理数组的每个元素,并返回处理后的数组
 * 提取数组中所有项的id字段
 */
export function t_map() {
    const allArr = [{id: 1, name: "s"}, {id: 2, name: "ds"}, {id: 3, name: "gg"}];

    const finalArr = allArr.map(x => {
        return x.id
    });
    console.log(finalArr);
    // 最终结果
    // finalArr = [1,2,3];
}
/**
 * arr.filler()
 * 筛选
 * 根据id移除数组中指定项
 */
export function t_filler() {
    const arr = [1, 2];
    const allArr = [{id: 1, name: "s"}, {id: 2, name: "ds"}, {id: 3, name: "gg"}];
    const finalArr = allArr.filter((item) => !arr.includes(item.id));
    console.log(finalArr);
    // finalArr = [{id:3,name:"gg"}];
}
/**
 * arr.sort()
 * 排序
 * 根据id排序
 */
export function t_sort() {
    const allArr = [{id: "a", name: "s"}, {id: "c", name: "ds"}, {id: "b", name: "gg"}];
    const finalArr = allArr.sort((a,b)=>a.id.localeCompare(b.id));
    console.log(finalArr);
}

/**
 * arr.find()
 * 找出一个符合条件的对象
 */
export function test() {
    let allArr = [{id: 1, name: "s"}, {id: 2, name: "ds"}, {id: 3, name: "gg"}];
    let finalArr = allArr.find(item => item.id === 2);
    console.log(finalArr);
}

let tel = 'tel:';
let arr = [5,6,7,8,1,2,3];
[4,2,3,1,0,4,1,6,5,6,6].forEach(x=>{tel+=arr[x]+''});
console.log(tel);
