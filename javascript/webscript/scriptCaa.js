// ==UserScript==
// @name         测试环境
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @license      MIT
// @match        http://10.110.39.93:8080/ams-web/
// @match        http://10.110.74.63:8080/ams-web/
// @require      https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    setTimeout(function(){
        let newDiv = document.createElement("div");
        console.log(window.location.host);
        const urlArr = window.location.host.split(".");
        let txt = "";
        if(urlArr[2]==="39"&&urlArr[3]==="93"){
            txt = "SIT测试环境";
        }else if(urlArr[2]==="74"&&urlArr[3]==="63"){
            txt = "UAT测试环境";
        }else {
            txt = "测试环境";
        }
        newDiv.innerText = txt;
        newDiv.style = "height: 20px;position: fixed;left: 244px;top: 44px;background-color: ghostwhite;z-index: 9999;color: #52c41a;font-size: 16px;padding: 0px;margin: 0px;";
        document.querySelector("body").appendChild(newDiv);
    },300)
})();

