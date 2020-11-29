<template>
    <div class="book-tou katn9ffz">
            <div class="tou-bg"> 
                <div class="tou-img"> 
                    <img :src="user.img" alt="" > 
                    <el-upload
                    class="upload-img"
                    :action="$url+'/uploadImg'"
                    accept="image/*"
                    :on-change="handlePreview">
                        <span class="book-icon"> <i class="el-icon-camera-solid"></i></span> 
                    </el-upload>
                    
                </div>
                <div class="book-icon2"><i class="el-icon-camera-solid"></i> 添加封面照片</div>
            </div>
            <div class="tou-title">{{user.name}}</div>
            <div class="tou-text">{{user.text}}</div>
            <div class="flex tou-nav">
                <div class="lf">
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="帖子" name="0"></el-tab-pane>
                        <el-tab-pane label="简介" name="1"></el-tab-pane>
                        <el-tab-pane label="好友" name="2"> </el-tab-pane>
                        <el-tab-pane label="照片" name="3"> </el-tab-pane>
                        <el-tab-pane label="视频" name="4"></el-tab-pane>
                        <el-tab-pane label="签到" name="5"> </el-tab-pane>
                    </el-tabs>
                    <el-popover>
                        <ul class="popver-ul">
                            <li>运动</li>
                            <li>音乐</li>
                            <li>电影</li>
                            <li>电视节目</li>
                            <li>书籍</li>
                            <li>应用和游戏</li>
                            <li>赞</li>
                            <li>活动</li>
                            <li>问题</li>
                            <li>点评</li>
                        </ul>
                        <el-button size="medium" slot="reference" class="book-down">展开 <i class="el-icon-caret-bottom"></i> </el-button>
                    </el-popover>
                </div>
                <div class="rg">
                        <div class="book-icon2 icon-success">
                            <i class="el-icon-s-custom"></i> 加为好友
                        </div>
                        <div class="book-icon2">
                            <i class="friend-icon msg-icon"></i>
                        </div>
                        <div class="book-icon2" @click="dialogVisible=true">
                            <i class="friend-icon search-icon"></i>
                        </div>
                        <el-popover placement="bottom" width="200" trigger="click">
                            <ul class="popver-ul">
                                <li>
                                    <i class="el-icon-warning-outline"></i>
                                    <span>寻求帮助或举报个人主页</span>
                                </li>
                                <li>
                                    <i class="el-icon-s-check"></i>
                                    <span>拉黑</span>
                                </li>
                            </ul>
                            <div class="book-icon2" slot="reference">
                                <i class="friend-icon arrow-icon"></i>
                            </div>
                        </el-popover>
                </div>
            </div>
            <el-dialog :visible.sync="dialogVisible" width="500px">
                <div class="dialog-title2" style="width:80%">
                    <el-input prefix-icon="el-icon-search" class="search" placeholder="搜索枫果果的个人主页" v-model="search"></el-input>
                </div>
                <div class="search_con" v-if="search==''">
                    <img :src="user.img" alt="">
                    <div class="search_title">想找啥？搜搜吧！</div>
                    <div class="search_text">搜索DA Cellphone Cases的个人主页，查找帖子、照片和其他可见动态。</div>
                </div>
                <div v-else>
                    <div class="search-li">
                        <div class="book-icon"> <i class="el-icon-search"></i> </div>
                        <span>{{search}}</span>
                    </div>
                </div>
                <span v-if="search!=''" slot="footer">
                    <div class="search-li">
                        <div class="book-icon icon-checked"> <i class="el-icon-search"></i> </div>
                        <span>在这个个人主页里搜索{{search}}</span>
                    </div>
                </span>
            </el-dialog>
    </div>
</template>
<script>
export default {
    props:["user"],
    data(){
        return{
            activeName:"",
            search:"",
            dialogVisible:false
        }
    },
    methods: {
         handlePreview(file) {
            console.log(file);
        }
    },
}
</script>

<style scoped>
.book-tou{
    text-align: center;
}
/*头部 */
.tou-bg{
    background-image: var(--always-dark-gradient);
    height: 350px;
    position: relative;
    border-radius: 10px;
}
.tou-bg>.book-icon2{
    position: absolute;
    bottom: 5%;
    right: 5%;
}
.tou-img{
    width: 176px;
    height: 176px;
    position: absolute;
    left: 50%;
    margin-left: -88px;
    margin-bottom: -40px;
    bottom: 0;
    border: 3px solid #fff;
    border-radius: 50%;
}
.tou-img .upload-img{
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 25px;
}
.tou-img>img{
    width: 100%;
    height: 100%;
    border-radius:50%;
}
.tou-title{
    margin-top: 45px;
}
.el-tabs{
    margin-right: 10px;
}
/*icon */
.tou-nav>div{
    display: flex;
}
.tou-nav .book-icon2{
    margin-left: 10px;
}
.tou-nav .book-down {
    border: 0;
    margin: 2px 0;
    font-size:15px;
}
.friend-icon {
    background-image: url(../assets/_AgLJqLL0tL.png);
    width: 20px;
    height: 20px;
    display: inline-block;
}

.msg-icon {
    background-position: 0 -255px;
}

.search-icon {
    background-position: 0 -1115px;
}

.arrow-icon {
    height: 15px;
    background-position: 0 -1735px;
}

.icon-success {
    background: #E7F3FF;
    color: #056FE7;
}
/*搜索 */
.search_con {
    text-align: center;
}

.search_con img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

.search_con>.search_title {
    font-size: 16px;
    margin-bottom: 10px;
    color: #333;
}
.el-upload-list{
    display: none;
}
</style>