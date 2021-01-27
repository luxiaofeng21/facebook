<template >
<div id="root">
    <Header @getnav="getNav" :hactive="active" v-if="path"></Header>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view  v-if="!$route.meta.keepAlive"></router-view>
</div>
</template>

<script>

import Header from '@/common/Header.vue'
export default {
    name: 'facebook',
    components: {
        Header
    },
    data() {
        return {
            loading:true,
            load:null,
            path: true,
            active: 0,
        }
    },
    methods: {
        getNav(i) {
            this.active = i
        },
        getactive() {
            var to = this.$route
            var reg = /login|help|advertising/ //是否包含login
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
            // getlang()
            this.getactive()
        }
    },
    created() {
       localStorage.setItem("tui",true)
    },
    mounted() {
        this.getactive()
    },
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
    justify-content: center;
    align-items: center;
    line-height: 40px;
    background-color: var(--secondary-button-background);
    border-radius: 50%;
}
.book-icon.small{
    width: 25px;
    height: 25px;
}
.book-icon.small>img{
    width: 20px;
    height: 20px;
}
.book-icon.small>i{
    font-size: 20px;
}
.book-icon {
    font-size: 25px;
    margin-right: 15px;
}

.book-icon>img{
    width: 25px;
}

.book-icon2 {
    /* display: inline-block; */
    width: auto;
    border-radius: 5px;
    padding: 0 15px;
    text-align: center;
}

.book-icon2>i {
    font-size: 20px;
    /* margin: 0 5px; */
}

.book-icon2>img{
    width: 20px;
    margin-right: 5px;
}
.icon-primary{
    color: #fff;
    background-color: #1877F2;
    
}
.icon-primary img{
    filter: var(--filter-always-white);
}
.icon-primary2{
    background-color: #E7F3FF;
    color: #1877F2;
}
.icon-primary2 i{
    margin: 0 5px;
    fill: var(--primary-button-background);
    font-weight: bold;
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
    /* box-shadow: 0 0 10px #eee; */
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
    width: 100%;
    color: var(--placeholder-text);
}
.book-null>img{
    width:160px ;
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
    background-color: #fff;
    position: relative;
}
.aside-footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 300px;
    border-top: 1px solid #ddd;
}
.aside-icon>.lf{
    display: flex;
    align-items: center;
}
.aside-icon >*>*{
    font-size: 24px;
    padding: 5px 10px;
}
.aside-icon >*>*:hover{
    background-color: #ddd;
    cursor: pointer;
}
.tou-title{
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 10px;
}
.tou-text{
    font-size: 18px;
}
.tou-title2{
    font-weight: bold;
    font-size: 1.25rem;
    padding: 10px 0;
    text-align: center;
    border-bottom: 1px solid #eee;
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

.menu-head{
    padding: 10px;
    border-bottom: 1px solid #eee;
}
.menu-head>*{
    margin: 0;
}



.el-tabs__nav-wrap::after {
    height: 0;
}

.el-tabs__active-bar {
    height: 4px;
    border-radius: 10px;
    background-color: var(--accent);
}

.el-tabs__item {
    font-size: 16px;
}

.du4w35lb .el-tabs__item {
    height: 60px;
    line-height: 60px;
}

.el-tabs__header {
    margin: 0;
}
.el-block{
    display: block;
    width: 100% !important;
}

.el-flex{
    display: flex;
}
.el-flex>.rg{
    margin-left: 10px;
}
.el-button>span{
    display: inline-flex;
    align-items: center;
}
.el-button img{
    width: 20px;
    height: 20px;
    margin-right: 5px;
}

.el-bottom{
    margin-bottom: 16px;
}
.el-margin{
    margin: 15px 0;
}

.book-inline{
    display: inline-block;
    width: auto;
}

.book-main{
    width: 900px;
    margin: auto;
    padding: 20px;
}


.el-success{
    display: inline-block;
    color: #1877F2;
    font-weight: bold;
    padding: 10px 15px;
    cursor: pointer;
}
.el-success:hover{
    background-color: #f5f5f5;
}

.el-padding{
    padding:  10px;
}



.facebook-tou{
    display: flex;
}
.el-dialog{
    border-radius: 10px;
}

.el-card{
    border-radius: 10px;
}
.el-checkbox__inner{
    width: 20px;
    height: 20px;
}
.el-checkbox__inner::after{
    border: 2px solid #fff;
    height: 10px;
    width: 4px;
    left: 6px;
    top: 2px;
    border-top: 0;
    border-left: 0;
}
</style>
