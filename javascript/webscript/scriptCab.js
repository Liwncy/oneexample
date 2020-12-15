// ==UserScript==
// @name         微信,简书文章转md
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @icon         https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico
// @author       Liwncy
// @match        https://mp.weixin.qq.com/s*
// @match        https://www.jianshu.com/p/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    let urlArr = window.location.host.split(".");
    let atType = urlArr[1];

    // Your code here...
    // 判断文章类型
    const trimMd = () => {
        let articleElement;
        if (atType === "weixin") {
            articleElement = document.querySelector("#js_article");
        } else if (atType === "jianshu") {
            articleElement = document.querySelector("#__next > div._21bLU4._3kbg6I > div > div._gp-ck");
        }
        console.clear();
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
            // 标题
            if (child.tagName.length === 2 && child.tagName.charAt(0) === 'H' && !isNaN(+child.tagName.charAt(1)) && !isNothing(child.innerText)) {
                str += "###########".slice(0, +child.tagName.charAt(1)) + " " + child.innerText + "\n";
            }
            // 文字
            else if (child.tagName === 'P' || child.tagName === 'SPAN' && !isNothing(child.innerText)) {
                str += child.innerText + "\n";
                if (child.firstElementChild && child.firstElementChild.tagName === 'IMG') {
                    str += exEm(child);
                }
            }
            // 图片
            else if (child.tagName === 'IMG') {
                // 简书文章中的图片
                let imgUrl = "";
                if (atType === "weixin") {
                    imgUrl = !isNothing(child.src) && child.src.slice(0, 1) === 'h' ? child.src : child.dataset.src;
                } else if (atType === "jianshu") {
                    imgUrl = !isNothing(child.src) ? child.src : "https:" + child.dataset.originalSrc;
                }
                str += "![image.png](" + imgUrl + " \"image\")\n";
            }
            // 列表
            else if (child.tagName === 'LI' && !isNothing(child.innerText)) {
                str += "* " + child.innerText + "\n";
            }
            // 代码块
            else if (child.tagName === 'PRE' && !isNothing(child.innerText)) {
                str += "```" + "\n"
                    + child.innerText + "\n"
                    + "```" + "\n";
            }
            else {
                str += exEm(child);
            }
            child = child.nextElementSibling;
        }
        return str;
    }

    // 没有内容
    const isNothing = str => {
        if (str == null) return true;
        //[]内输入你要过滤的字符
        const regExp = new RegExp("[`~%!@#^=''?~！@#￥……&——‘”“'？*()（），,。.、\r\n]");
        //去除
        str = str.replace(regExp, "");
        return str.length === 0;
    }
    // 延时执行
    setTimeout(trimMd, 3000);
})();
