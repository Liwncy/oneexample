console.log("test");


const trimMd = str => {
    //获取标题
    let titleElement = document.querySelector("#activity-name");
    //获取文章
    let contentElement = document.querySelector("#js_content");

    let articleElement = document.querySelector("#js_article");

    console.log(exEm(articleElement));
}

// 处理元素
const exEm = elem => {
    // debugger
    if (!elem) {
        return "";
    }
    let str = "";
    let child = elem.firstElementChild;
    while (child) {
        // 如果没内容,直接去下一孩子
        if(!child.innerText){
            child = child.nextElementSibling;
            continue;
        }
        // 标题
        if (child.tagName.length === 2 && child.tagName.charAt(0) === 'H' && !isNaN(parseInt(child.tagName.charAt(1)))) {
            str += "###########".slice(0,parseInt(child.tagName.charAt(1))) + child.innerText + "\n";
        }
        // 文字
        else if (child.tagName === 'P' || child.tagName === 'SPAN') {
            str += child.innerText + "\n";
        }
        // 列表
        else if (child.tagName === 'LI') {
            str += "* " + child.innerText + "\n";
        }
        // 代码块
        else if (child.tagName === 'PRE') {
            str += "```" + "\n"
                + child.innerText + "\n"
                + "```" + "\n";
        }
        // 非代码块
        else {
            str += exEm(child);
        }
        child = child.nextElementSibling;
    }
    return str;
}

// 延时执行
setTimeout(trimMd, 300);

