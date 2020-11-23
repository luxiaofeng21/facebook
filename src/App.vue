<template>
<div id="app">
    <Header @getnav="getNav" :hactive="active" v-if="path"></Header>
    <router-view></router-view>
</div>
</template>

<script>
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
.book-null{
    text-align: center;
    display: block;
    font-size: 1.25rem;
    color: var(--placeholder-text);
}
</style>
