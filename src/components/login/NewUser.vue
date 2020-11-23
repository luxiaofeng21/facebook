<template>
<div class="app">

    <Head></Head>
    <div class="ConTent">
        <login></login>
    </div>
    <Foor></Foor>

</div>
</template>

<script>
import Head from '@/common/Lhead.vue'
import Foor from '@/common/Lfoor.vue'
import login from './login'
export default {
    components: {
        login,
        Head,
        Foor
    },
    data() {
        return {
         
        }
    },
    methods: {
       
    },
}
</script>

<style scoped>
.ConTent {
    background: #e9ebee;
    padding: 4rem 0;
}

</style>
