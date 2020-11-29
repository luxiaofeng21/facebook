<template>
<div id="app">
    <Header @getnav="getNav" :hactive="active" v-if="path"></Header>
    <router-view></router-view>
</div>
</template>

<script>
import md5 from 'js-md5';
import Header from '@/common/Header.vue'
export default {
    name: 'App',
    components: {
        Header
    },
    data() {
        return {
            path: true,
            active: 0,
        }
    },
    methods: {
        //语言
        transformLanguage(newLanguage) {
                // 获取所有dom元素中文
                let transformStr = '';
                // 获取所有dom元素
                function getChildDom(dom, type, data = {}) {
                    if(type == 'read') {
                        [...dom.children].forEach(v => {
                            // 判断中文
                            // /^[\u0391-\uFFE5]+$/
                            let re= /[\u4e00-\u9fa5]/g;
                            // 防止某些标签有内容并且有标签 ，或者有空格 
                            let vHtml = $(v).contents().filter(function (index, content) {return content.nodeType === 3}).text().trim();
                            // 跳过script标签
                            if (re.test(vHtml) && v.tagName != 'SCRIPT') {
                                transformStr += `${vHtml},`
                            }
                            // 递归获取元素
                            getChildDom(v, type, data);
                        })
                    }else {
                        let transOld = data.trans_result[0].src.split(',');
                        let transNew = data.trans_result[0].dst.split(',');
                        [...dom.children].forEach(v => {
                            // 判断中文
                            // /^[\u0391-\uFFE5]+$/
                            let re= /[\u4e00-\u9fa5]/g;
                            let vHtml = $(v).contents().filter(function (index, content) {return content.nodeType === 3}).text().trim();
                            // 跳过script标签
                            if (re.test(vHtml) && v.tagName != 'SCRIPT') {
                                // 防止标签里面还有标签，所以只替换里面的html,使用replace
                                $(v).html(
                                    $(v).html().replace(
                                    transOld[transOld.findIndex(arrList => arrList == vHtml)]
                                    ,
                                    transNew[transOld.findIndex(arrList => arrList == vHtml)]
                                    )
                                )
                            }
                            // 递归获取元素
                            getChildDom(v, type, data);
                        })
                    }
                }
                getChildDom(document,'read');
                getTranslateData();
                // 获取翻译
                function getTranslateData() {
                    let appid = '20201120000621336';   // 百度翻译API的appid
                    let key = 'pMdmtj4djcGj7M4EOAMv';   // 百度翻译API的key
                    let salt = (new Date).getTime();
                    let query = transformStr;
                    let from = 'zh';
                    let to = newLanguage;
                    let str1 = appid + query + salt + key;
                    let sign = $.md5(str1);
                    $.ajax({
                        url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
                        type: 'get',
                        dataType: 'jsonp',
                        data: {
                            q: query,
                            appid: appid,
                            salt: salt,
                            from: from,
                            to: to,
                            sign: sign
                        },
                        success: function(data) {
                            data.trans_result && getChildDom(document,'write',data);
                            console.log(data);
                        }
                    });
                }
        },

        getNav(i) {
            this.active = i
        },
        getactive() {
            var to = this.$route
            var reg = /login/ //是否包含login
            var test = reg.test(to.fullPath)
            if (test) {
                this.path = false
            } else {
                this.path = true
            }

            if (to.name == 'index') {
                this.active = 0
            } else if (to.name == 'friends') {
                this.active = 1
            } else if (to.name == 'watch') {
                this.active = 2
            } else if (to.name == 'groups') {
                this.active = 3
            } else if (to.name == 'gaming') {
                this.active = 4
            }
        }
    },
    watch: {
        $route(to, form) {
            console.log("$route -> to", to)
            this.getactive()
        }
    },
    created() {
        this.transformLanguage("en")
        this.getactive()
    }
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    font-size: 0.9rem;
}

* {
    margin: 0;
    padding: 0;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.flex {
    display: flex;
}

.flex>* {
    margin: 0 2px;
}

a {
    color: #385898;
    cursor: pointer;
    text-decoration: none;
}

.active {

    border-bottom: 3px solid #1877F2;
}

.active span {
    color: #1877F2
}

.book-icon,
.el-dialog__headerbtn,
.book-icon2 {
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--secondary-button-background);
    border-radius: 50%;

}
.book-icon.small{
    width: 25px;
    height: 25px;
}
.book-icon {
    margin-right: 15px;
}

.book-icon2 {
    width: auto;
    border-radius: 5px;
    padding: 0 15px;
}

.book-icon2>i {
    font-size: 20px;
}
.icon-primary{
    color: #fff;
    background-color: #1877F2;
}

.book-title{
    color: var(--primary-text);
    font-weight: 600;
    font-size: 1rem;
}
.book-title2{
    color: var(--primary-text);
    font-weight: 600;
    font-size: 1.25rem;
}
.book-card{
    background-color: #fff;
    box-shadow: 0 0 10px #eee;
    border-radius: 5px;
    padding: 10px;
    margin: 16px 0;
}
.book-text{
    color:  var(--secondary-text);
}
.book-null{
    text-align: center;
    display: block;
    font-size: 1.25rem;
    color: var(--placeholder-text);
}
.flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.el-title{
    font-size:1.0625rem ;
    font-weight: 600;
    color: var(--secondary-text);
}
.menu-title{
    padding: 16px;
    border-top: 1px solid #eee;
}

.el-aside{
    border-right: 1px solid #eee;
}
.el-aside,.el-main{
    background-color: #fff;
}

.tou-title{
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 10px;
}
/*布局*/
.book-container{
    display: flex;
    justify-content: space-between;
}
.book-container>.lf{
    width: 38%;
}
.book-container>.lf .share-list.vertical .share-item{
    width: 28%;
}
.book-container>.lf .share-list.vertical .share-item>.lf{
        height: 75px;
}
.book-container>.lf>.book-card{
    margin-top: 0;
}
.book-container>.rg{
    width: 60%;
}
</style>
