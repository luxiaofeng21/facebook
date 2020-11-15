<template>
<div id="app">
    <Header></Header>
    <router-view></router-view>
</div>
</template>

<script>
import Header from '@/common/Header.vue'
export default {
    name: 'App',
    components: {
        Header
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
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--secondary-button-background);
    border-radius: 50%;

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
</style>
