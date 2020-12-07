<template>
       <div>
            <book-friend :me_ul="me_ul" type="me"></book-friend>
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
             me_ul: {
                text:"",
                img:require("@/assets/me.jpg"),
                name:"枫果果",
                highlight: [],
                list:[],
                //简介
                user: [{
                        text:"添加工作地点",
                        now:false,
                        date:"",
                        now_title:"目前在职",
                        down:false,
                        offect:[
                            {
                                title:"公司",
                                text:""
                            },
                            {
                                title:"职位",
                                text:""
                            },{
                                title:"市/县",
                                text:""
                            },{
                                title:"说明",
                                text:""
                            }
                        ],
                        label: "目前就职：",
                        title: "Facebook App",
                        img: require("@/assets/friend/zhi.png")
                    },
                    {
                        date:"",
                         offect:[
                            {
                                title:"学校",
                                text:""
                            }
                        ],
                        now:false,
                        now_title:"已毕业",
                        text:"添加大学",
                        down:false,
                        label: "曾经就职：",
                        title: "Université de belgaid",
                        img: require("@/assets/friend/studied.png")
                    },
                    {
                        offect:[
                            {
                                title:"所在地",
                                text:""
                            }
                        ],
                        text:"添加所在地",
                        down:false,
                        label: "所在地：",
                        title: "瓦赫兰",
                        img: require("@/assets/friend/home.png")
                    },
                    {
                        offect:[
                            {
                                title:"家乡",
                                text:""
                            }
                        ],
                        text:"添加添加家乡",
                        down:false,
                        label: "来自：",
                        title: "瓦赫兰",
                        img: require("@/assets/friend/city.png")
                    },
                    {
                        offect:[
                            {
                                title:"感情情况",
                                text:""
                            }
                        ],
                        text:"添加感情情况",
                        down:false,
                        label: "感情状况：",
                        title: "",
                        img: require("@/assets/friend/date.png")
                    },
                ],
                //好友
                friend:[
                    {
                        img: require("@/assets/me.jpg"),
                        title:"小黄人1",
                        text:"1 位共同好友"
                    },
                    {
                        img: require("@/assets/me.jpg"),
                        title:"小黄人2",
                        text:"1 位共同好友"
                    },
                    {
                        img: require("@/assets/me.jpg"),
                        title:"小黄人3",
                        text:"1 位共同好友"
                    }
                ],
                //照片
                imgAll:[
                    {
                        img:require("@/assets/me.jpg")
                    },
                    {
                        img:require("@/assets/me.jpg")
                    },
                ],
                //音乐
                music:[
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Popza de small",
                        text:"歌手/乐队"
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Popza de small",
                        text:"歌手/乐队"
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Popza de small",
                        text:"歌手/乐队"
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Popza de small",
                        text:"歌手/乐队"
                    },
                ],
                //电影
                movies:[
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Ghost Babe The Movie",
                        text:"电影 "
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Ghost Babe The Movie",
                        text:"电影 "
                    },{
                        img:require("@/assets/me.jpg"),
                        title:"Ghost Babe The Movie",
                        text:"电影 "
                    },{
                        img:require("@/assets/me.jpg"),
                        title:"Ghost Babe The Movie",
                        text:"电影 "
                    },
                    
                ],
                //电视节目
                Tv:[

                    {
                        img:require("@/assets/me.jpg"),
                        title:"Tastemade Brasil",
                        text:"传媒公司 "
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Tastemade Brasil",
                        text:"传媒公司 "
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Tastemade Brasil",
                        text:"传媒公司 "
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Tastemade Brasil",
                        text:"传媒公司 "
                    },
                ],
                //书籍
                books:[
                    {
                        img:require("@/assets/bg.jpg"),
                        title:"Livro Cerveja Artesanal: Processos e Produção",
                        text:"书籍"
                    },
                     {
                        img:require("@/assets/bg.jpg"),
                        title:"Livro Cerveja Artesanal: Processos e Produção",
                        text:"书籍"
                    },
                ],
                //运动
                sports:[
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Mestre Marcelo Figueiredo Taekwondo Tradicional",
                        text:"运动队 "
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Mestre Marcelo Figueiredo Taekwondo Tradicional",
                        text:"运动队 "
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Mestre Marcelo Figueiredo Taekwondo Tradicional",
                        text:"运动队 "
                    },
                    {
                        img:require("@/assets/me.jpg"),
                        title:"Mestre Marcelo Figueiredo Taekwondo Tradicional",
                        text:"运动队 "
                    },
                ],
                //视频
                video:[
                    {
                        img:require("@/assets/me.jpg")
                    }
                ],
                //签到
                lasts:[
                    {
                        img:require("@/assets/bg.jpg"),
                        title:"Jakarta Aquarium",
                        text:"雅加达",
                        date:"2020年11月2日去过"
                    },
                     {
                         img:require("@/assets/bg.jpg"),
                        title:"Jakarta Aquarium",
                        text:"雅加达",
                        date:"2020年11月2日去过"
                    },
                     {
                         img:require("@/assets/bg.jpg"),
                        title:"Jakarta Aquarium",
                        text:"雅加达",
                        date:"2020年11月2日去过"
                    },
                     {
                         img:require("@/assets/bg.jpg"),
                        title:"Jakarta Aquarium",
                        text:"雅加达",
                        date:"2020年11月2日去过"
                    },
                ]
            },
        };
    },
    created() {
       var user_info=JSON.parse(localStorage.getItem("user_info"))
       this.me_ul=user_info
    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped >

</style>
