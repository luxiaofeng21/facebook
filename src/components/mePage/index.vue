<template>
       <div>
            <book-friend :uid="user.id" type="me"></book-friend>
       </div>
</template>

<script>
import bookFriend from '@/common/book-firend'
export default {
    components:{
        bookFriend
    },
    data() {
        return {
            user:{}
        };
    },
    created() {
       var user_info=JSON.parse(localStorage.getItem("user_info"))
       this.user=user_info
    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped >

</style>
