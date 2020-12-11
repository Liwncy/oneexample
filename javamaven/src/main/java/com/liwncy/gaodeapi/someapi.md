##各类好玩免费API推荐，强烈建议收藏
##啥是API/接口？
API，英文全称Application Programming Interface，翻译为“应用程序编程接口”。是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，或理解内部工作机制的细节。——百度百科
说人话API就是用来喝饮料的吸管，别人帮你写好了一个功能，封装成类或是函数，这就叫API，你自己写了个类，这也可以是API
网上已经有很多公开免费好玩的API，即使自己没时间去造轮子，但是利用这些API可以快速实现功能，所以行哥这里给大家分享一些好玩的API
##使用方法
首先得介绍一下使用方法，一般接口都是直接调用 requrest模块发送 http的post请求，请求里面并带相关文件文件即可使用。具体的参数都会在每个接口相关文档里提供，
例如这个图灵机器人案例，9行代码可以实现使用接口
```
# 公众号：一行数据
import requests
def reply(talk):
    # 1。构建网址
    url = "http://www.tuling123.com/openapi/api?key=【设置自己的token】&info="
    url = url+talk
    # 2.发送请求
    r = requests.get(url,timeout = 20)
    print(r.text)

for i in range(10):
    talk = input("请输入一句话：")
    reply(talk)


```
##API平台
* 阿里云：
https://market.aliyun.com/data
* 百度人工智能开放平台：
https://ai.baidu.com/
* 聚合数据：
https://www.juhe.cn/docs
* API-免费API数据接口平台-京东万象
https://wx.jdcloud.com/api
* 小白开放平台
http://api.yesapi.cn/docs.php
* 进制数据
https://www.binstd.com/api/
* APIShop
https://www.apishop.net/#/
* iDataAPI
https://www.idataapi.cn/
##聚合的免费API接⼝数据
* ⼿机号码归属地API接⼝：juhe.cn/docs/api/id/11
* 历史上的今天API接⼝：juhe.cn/docs/api/id/63
* 股票数据API接⼝：juhe.cn/docs/api/id/21
* 全国WIFI接⼝：juhe.cn/docs/api/id/18
* 星座运势接⼝：juhe.cn/docs/api/id/58
* ⻩⾦数据接⼝：juhe.cn/docs/api/id/29
* 语⾳识别接⼝：juhe.cn/docs/api/id/134
* 周公解梦接⼝：juhe.cn/docs/api/id/64
* 天⽓预报API接⼝：juhe.cn/docs/api/id/73
* 身份证查询API接⼝：juhe.cn/docs/api/id/38
* 笑话⼤全API接⼝：juhe.cn/docs/api/id/95
* 邮编查询接⼝：juhe.cn/docs/api/id/66
* ⽼⻩历接⼝：juhe.cn/docs/api/id/65
* ⽹站安全检测接⼝：juhe.cn/docs/api/id/19
* ⼿机固话来电显示接⼝：juhe.cn/docs/api/id/72
* 基⾦财务数据接⼝：juhe.cn/docs/api/id/28
* 成语词典接⼝：juhe.cn/docs/api/id/157
* 新闻头条接⼝：juhe.cn/docs/api/id/235
* IP地址接⼝：juhe.cn/docs/api/id/1
* 问答机器⼈接⼝：juhe.cn/docs/api/id/112
* 汇率API接⼝：juhe.cn/docs/api/id/80
* 电影票房接⼝：juhe.cn/docs/api/id/44
* 万年历API接⼝：juhe.cn/docs/api/id/177
* NBA赛事接⼝：juhe.cn/docs/api/id/92
##一些好玩的api
###地图接口
* 高德地图 https://lbs.amap.com/
* 百度地图 http://lbsyun.baidu.com/
* 腾讯地图 https://lbs.qq.com/
###天气查询接口
* 免费天气查询 https://www.kancloud.cn/ccjin/yingq/603579
###快递查询接口
* 圆通快递查询
https://api.66mz8.com/document/yto.php
* 中通快递查询
https://api.66mz8.com/document/zto.php
* 快递100
https://api.kuaidi100.com/register/diff
* 快递网
http://www.kuaidi.com/openapi.html
* TrackingMore
https://www.51tracking.com/api-index-cn
###笔记接口
* 有道云笔记
http://note.youdao.com/open/
* 印象笔记
https://dev.yinxiang.com/
* 为知笔记
https://www.wiz.cn/manual/plugin/
###其它接口
* 网易云音乐
https://binaryify.github.io/NeteaseCloudMusicApi/#/
* 知乎专栏
https://github.com/TonnyL/Zhihu_Zhuanlan_APIs/wiki
* 百度音乐
https://my.oschina.net/skiden/blog/102025
* 干货集中营
https://gank.io/api
* 二十四节气查询
https://www.apishop.net/#/api/detail/?productID=88
* 笑话大全
https://www.apishop.net/#/api/detail/?productID=122
* 炉石传说卡牌
https://www.apishop.net/#/api/detail/?productID=203
* 考拉FM
https://github.com/kaolafm/api
* 蜻蜓FM
https://open.qingting.fm/
* 淘宝开放平台
http://open.taobao.com/?spm=a219a.7395905.1.1.YdFDV6
* 图灵语⾳
http://tuling123.com/help/h_ce
* 讯⻜语⾳
http://xfyun.cn/robots/solutio
* 微信开放平台（对应的还有腾讯开放平台）
http://open.weixin.qq.com/
##小结
有些接口非常有意思，但是如果从调用API升级到开始编写API的地步，那么这就是突破小白瓶颈的节点咯
