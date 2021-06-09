<template>
<div class="app-gaming">
    <el-container>
        <el-aside>
            <div class="flex menu-head">
                <div class="tou-title">游戏</div>
                <div class="book-icon"> <i class="el-icon-s-tools"></i> </div>
            </div>
            <Menu :list="menu" ></Menu>
            <div class="menu-button">
                    <div class="book-icon2">
                        <i class="el-icon-video-camera-solid"></i>开始直播
                    </div>
                    <div class="book-icon2">
                        <i class="el-icon-trophy-1"></i>创建排位赛
                    </div>
            </div>
            <div class="menu-button">
                    <div class="book-title">近期观看</div>
                    <cart-list :list="last"></cart-list>
            </div>
            <div class="menu-button">
                    <div class="flex">
                        <div class="book-title">推荐</div>
                        <span class="link">查看全部 </span>
                    </div>
                    <cart-list :list="recommended">
                        <div slot="right" class="look"> <i class="el-icon-view"></i> <span>12</span> </div>
                    </cart-list>
            </div>
        </el-aside>
        <el-main>
                <router-view></router-view>
        </el-main>
    </el-container>
</div>
</template>

<script>
import Menu from '@/common/menu'
import cartList from '@/common/cart-list'
export default {
    components: {
        cartList,
        Menu
    },
    mounted(){
       
    },
    methods: { },
    data() {
        return {
            recommended:[ //推荐
                {
                    img:require("@/assets/me.jpg"),
                    title:"Thirdy Gaming",
                    text:"Mobile Legends"
                },
                {
                    img:require("@/assets/me.jpg"),
                    title:"Thirdy Gaming",
                    text:"Mobile Legends"
                },
                {
                    img:require("@/assets/me.jpg"),
                    title:"Thirdy Gaming",
                    text:"Mobile Legends"
                }
            ],
            last:[//最近
                {
                    img:require("@/assets/me.jpg"),
                    title:"Thirdy Gaming",
                    text:"Mobile Legends"
                }
            ],
            menu: [{
                    icon: "video-icon",
                    title: "视频",
                    active: -1,
                    down: true,
                    path:"/gaming/index",
                    children: [{
                            icon: "gaming-icon gz-icon",
                            path:"/gaming/following",
                            title: "已关注"
                        },
                        {
                            icon: "gaming-icon ll-icon",
                            path:"/gaming/browse",
                            title: "浏览"
                        },
                        {
                            icon: "gaming-icon gk-icon",
                            path:"/gaming/recent",
                            title: "近期观看"
                        },
                    ]
                },
                {
                    down: false,
                    active: -1,
                    icon: "gaming-icon icon1",
                    title: "玩游戏",
                    path:"/gaming/youxi",
                    children: [{
                        icon: "el-icon-data-line",
                        title: "网页游戏",
                        path:"/gaming/web"
                    }, ]
                },
                {
                    icon: "gaming-icon icon2",
                    title: "排位赛",
                    path:"/gaming/paiwei"
                }
            ]
        }
    },
}
</script>


<style scoped>
.app-gaming .swiper-pagination-bullet {
    background: #fff;
    
}
.app-gaming .swiper-pagination{
        bottom: -20px;
}
.live-item{
    margin-top: 20px;
}
.menu-button{
    margin-top: 10px;
    padding: 15px;
    border-top: 1px solid #ddd;
}
.menu-button>*{
    margin-bottom: 10px;
}
.menu-button>*:last-child{
    margin: 0;
}
.look{
    display: flex;
    align-items: center;
    color: #000;
    font-size: 15px;
}
.look>i{
    font-size: 18px;
    font-weight: bold;
}
.look>span{
    font-weight: normal;
    margin-left: 5px;
}
</style>