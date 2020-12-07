<template>
    <div>
        <div class="book-tou katn9ffz">
                <div class="tou-bg" :style="me_ul.bg_img?`background:url(${me_ul.bg_img}) 100%;`:''"> 
                    <div class="tou-img"> 
                        <img :src="me_ul.me_img" alt="" > 
                        <el-upload
                        v-if="type=='me'"
                        class="upload-img"
                        :action="$url+'/uploadImg'"
                        accept="image/*"
                        :on-success="handlePreview" >
                            <span class="book-icon"> <i class="el-icon-camera-solid"></i></span> 
                        </el-upload>
                        
                    </div>
                    <el-upload
                        v-if="type=='me'"
                        class="upload-img"
                        :action="$url+'/uploadImg'"
                        accept="image/*"
                        :on-success="handlePreview2" >
                          <div class="book-icon2" v-if="type=='me'"><i class="el-icon-camera-solid"></i> 添加封面照片</div>
                       </el-upload>
                  
                </div>
                <div class="tou-title">{{me_ul.user_name}}</div>
                <div class="tou-text">{{me_ul.text}}</div>
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
                            <div class="book-icon2 " v-if="type=='me'">
                                <i class="el-icon-edit"></i> 编辑个人主页
                            </div>
                            <div class="book-icon2 icon-success" v-else>
                                <i class="el-icon-s-custom"></i> 加为好友
                            </div>
                            <div class="book-icon2">
                                <i class="friend-icon msg-icon"></i>
                            </div>
                            <div class="book-icon2" @click="dialogVisible=true">
                                <i class="friend-icon search-icon"></i>
                            </div>
                            <el-popover placement="bottom" width="250" trigger="click">
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
                        <el-input prefix-icon="el-icon-search" class="search" :placeholder="`搜索${me_ul.user_name}的个人主页`" v-model="search"></el-input>
                    </div>
                    <div class="search_con" v-if="search==''">
                        <img :src="me_ul.me_img" alt="">
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
        <div class="about">
            <div class="katn9ffz">
                <div class="book-container">
                    <div class="lf">
                            <div class="book-card">
                                    <div class="book-title2">个人资料</div>
                                    <ul class="me-ul">
                                        <li v-for="(item,index) in me_ul.user" :key="index">
                                            <img :src="item.img" alt="">
                                            <span class="me-label">{{item.label}}</span>
                                            <span class="me-title">{{item.title}}</span>
                                        </li>
                                    </ul>
                            </div>
                            <div class="book-card">
                                    <div class="flex">
                                        <div class="book-title2">照片</div>
                                        <div class="link">所有照片</div>
                                    </div>
                                    <share-list :list="me_ul.imgAll" :type="'vertical'"></share-list>
                            </div>
                            <div class="book-card">
                                    <div class="flex">
                                        <div class="book-title2">好友</div>
                                        <div class="link">全部好友</div>
                                    </div>
                                    <share-list :list="me_ul.friend" :type="'vertical'"></share-list>
                            </div>
                    </div>
                    <div class="rg">
                            <post-list :list="me_ul.list"></post-list>
                    </div>
                </div>
                <div class="sjgh65i0">
                    <div class="j83agx80 l9j0dhe7 k4urcfbm">
                        <div style="border-radius: max(0px, min(8px, -999900% - 39996px + 999900vw)) / 8px;" class="rq0escxv l9j0dhe7 du4w35lb hybvsw6c ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi ni8dbmo4 stjgntxs k4urcfbm sbcfpzgs">
                            <div class="j83agx80">
                                <div class="ls2amcm3 pcp91wgn ihqw7lf3 p8fzw8mz discj3wi pfnyh3mw rq0escxv maa8sdkg">
                                    <div class="aahdfvyu gu00c43d o3lre8g0 sej5wr8e">
                                        <h2 class="oo9gr5id o3w64lxj hnhda86s lzcic4wl oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j muag1w35 ew0dbk1b b2s5l15y" dir="auto" tabindex="-1">
                                            <a class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 gpro0wi8 hnhda86s" href="/lucinara.rodrigues.35/about" role="link" tabindex="0">
                                                简介
                                            </a>
                                        </h2>
                                    </div>
                                    <div class="bi6gxh9e" v-for="(item,index) in menu" :key="index" @click="getmenu(index)">
                                        <a :class="mactive==index?'oo1teu6h q66pz984':''" class="oajrlxb2  qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 a8c37x1j p7hjln8o kvgmc6g5 cxmmr5t8 tvmbv18p hcukyx3x pybr56ya rv4hoivh f10w8fjw h4z51re5 i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss">
                                            <span class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j muag1w35 ew0dbk1b jq4qci2q a3bd9o3v lrazzd5p  ni8dbmo4 stjgntxs ltmttdrg g0qnabr5" dir="auto">
                                                {{item}}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div class="about-list rq0escxv l9j0dhe7 du4w35lb j83agx80 i1fnvgqd gs1a9yip owycx6da btwxx1t3 hv4rvrfc dati1w0a discj3wi b5q2rw42 lq239pai mysgfdmx hddg9phg">
                                <ul class="about-ul">
                                        <li v-for="(item,index) in me_ul.user" :key="index">
                                            <div v-if="!item.down" class="about-title" @click="item.down=!item.down">
                                                <i class="el-icon-circle-plus-outline"></i>
                                                <span class="link">{{item.text}}</span> 
                                            </div>
                                            <div v-else class="eidt-input">
                                                <book-input v-for="(item,index) in item.offect" :key="index" :book="item"></book-input>
                                            <div  v-if="item.now_title">
                                                    <div class="book-title">时间段</div>
                                                        <p>
                                                                <el-checkbox v-model="item.now">{{item.now_title}}</el-checkbox>
                                                        </p>
                                                        <p >
                                                                <el-date-picker
                                                                    v-model="item.date"
                                                                    type="daterange"
                                                                    range-separator="至"
                                                                    start-placeholder="开始日期"
                                                                    end-placeholder="结束日期">
                                                                </el-date-picker>
                                                        </p>
                                            </div>
                                            
                                            <hr>
                                                <div class="book-footer">
                                                    <div class="book-icon2"> <i class="intimi-icon"></i> 公开</div>
                                                    <div class="rg">
                                                        <div class="book-icon2" @click="item.down=false">取消</div>
                                                        <div class="book-icon2 icon-primary">保存</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="book-card">
                        <div class="book-title2">好友</div>
                        <el-tabs v-model="tabs[0]">
                            <el-tab-pane label="粉丝" name="1"></el-tab-pane>
                            <el-tab-pane label="粉已关注" name="2"></el-tab-pane>
                        </el-tabs>
                        <share-list :list="me_ul.friend" :type="'friend'"></share-list>
                        <el-button type="info">查看全部</el-button>
                </div>
            
                <div class="book-card">
                        <div class="book-title2">相册</div>
                        <el-tabs v-model="tabs[1]">
                            <el-tab-pane :label="me_ul.user_name+'的相册'" name="1"></el-tab-pane>
                            <el-tab-pane label="相册" name="2"></el-tab-pane>
                        </el-tabs>
                        <share-list :list="me_ul.imgAll" :type="'vertical'"></share-list>
                        <el-button type="info">查看全部</el-button>
                </div>
                <div class="book-card">
                        <div class="book-title2">视频</div>
                        <el-tabs v-model="tabs[2]">
                            <el-tab-pane :label="me_ul.user_name+'的视频'" name="1"></el-tab-pane>
                        </el-tabs>
                        <share-list :list="me_ul.video" :type="'vertical'"></share-list>
                        <el-button type="info">查看全部</el-button>
                </div>
                <div class="book-card">
                        <div class="book-title2">运动</div>
                        <el-tabs v-model="tabs[3]">
                            <el-tab-pane label="运动队" name="1"></el-tab-pane>
                            <el-tab-pane label="运动员" name="2"></el-tab-pane>
                        </el-tabs>
                        <share-list :list="me_ul.sports" :type="'vertical'"></share-list>
                        <el-button type="info">查看全部</el-button>
                </div>
                <div class="book-card">
                        <div class="book-title2">音乐</div>
                        <share-list :list="me_ul.music"></share-list>
                </div>
                <div class="book-card">
                        <div class="book-title2">电影</div>
                        <share-list :list="me_ul.movies"></share-list>
                </div>
                <div class="book-card">
                        <div class="book-title2">电视节目</div>
                    <share-list :list="me_ul.Tv"></share-list>
                </div>
                <div class="book-card">
                        <div class="book-title2">书籍</div>
                    <share-list :list="me_ul.books"></share-list>
                </div>
                <div class="book-card">
                        <div class="book-title2">赞</div>
                        <el-tabs v-model="tabs[4]">
                            <el-tab-pane label="全部" name="1"></el-tab-pane>
                            <el-tab-pane label="电影" name="2"></el-tab-pane>
                            <el-tab-pane label="电视" name="3"></el-tab-pane>
                            <el-tab-pane label="歌手" name="4"></el-tab-pane>
                            <el-tab-pane label="书籍" name="5"></el-tab-pane>
                            <el-tab-pane label="运动队" name="6"></el-tab-pane>
                            <el-tab-pane label="运动员" name="7"></el-tab-pane>
                            <el-tab-pane label="餐馆" name="8"></el-tab-pane>
                        </el-tabs>
                    <share-list :list="me_ul.books" :type="'vertical'"></share-list>
                </div>
                <div class="book-card">
                        <div class="book-title2">签到</div>
                        <el-tabs value="1">
                            <el-tab-pane label="最近去过" name="1"></el-tab-pane>
                        </el-tabs>
                    <share-list :list="me_ul.lasts"></share-list>
                </div>
            </div>
        </div>
    </div>
    
    
</template>
<script>
import shareList from '@/common/share-list'
import bookInput from '@/common/book-input'
import postList from '@/common/post-list'
export default {
    components:{
        postList,
        shareList,
        bookInput
    },
    props:["me_ul","type"],
    data(){
        return{
            tabs:["1","1","1","1","1"],
            mactive:0,
            menu:["概览","工作与学历","居住地","联系方式和基本信息","家庭成员与感情状况","你的详细资料","生活纪事"],
            activeName:"",
            search:"",
            dialogVisible:false
        }
    },
    methods: {
        getmenu(i){
            this.mactive=i
        },
        getfile(file,state){
            var user_info=JSON.parse(localStorage.getItem("user_info"))
            var info={id:user_info.id}
            var name=file.data.name;
           if(state==1){
                user_info.me_img=this.$imgUrl+name
                info.me_img=name
                this.me_ul.me_img=user_info.me_img
           }else{
                user_info.bg_img=this.$imgUrl+name
                info.bg_img=name
                this.me_ul.bg_img=user_info.bg_img
           }
            this.$store.commit("edit",user_info)
            this.$axios.post(this.$url+"/setUser",info).then(res=>{
                this.$message.success(res.data.msg)
            })
        }, 
        handlePreview(file) {
           this.getfile(file,1)
        },
        handlePreview2(file){
           this.getfile(file,2)
        }
    },
}
</script>
<style>
   body{
       background-color: #fff;
   }
  /*导航*/
    .el-tabs__header{
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
    .el-tabs__item{
        height: 45px;
    }
    .el-upload-list{
        display: none;
    }
</style>
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
.tou-bg .book-icon2{
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
    object-fit: cover;
    background: #fff;
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


    /*个人资料 */
    .me-ul{
        margin-top: 10px;
    }
    .me-ul li {
        display: flex;
        margin-bottom: 10px;
    }

    .me-ul li img {
        filter: var(--filter-placeholder-icon);
        margin-right: 10px;
    }
    .me-rg{
        position: absolute;
        right: 0;
        display: flex;
    }

    .about{
        background-color: #eee;
    }
    a{
        color: #333;
    }
    .intimi-icon{
        width: 15px;
        height: 15px;
        background-image: url('../assets/xVr-bSpqpnp.png');
        background-position: 2px -720px;
    }
    .about-list{
        width: 100%;
    }
    .about-ul{
        width: 95%;
    }
    .about-ul .book-input{
        margin-bottom: 10px;
    }
    .book-input-content{
        width: 100%;
    }
    .about-ul>li{
        width: 100%;
        margin-bottom: 24px;
    }
    .about-ul>li>.about-title{
        display: flex;
        align-items: center;
        color: #0084ff;
        font-size: 16px;
        margin: 10px 0;
    }
    .about-ul>li i{
        font-size: 30px;
        margin-right: 10px;
    }
    .book-input{
        width: 100%;
    }
    .book-footer{
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
    }
    .book-footer>.rg{
        display: flex;
    }
    .book-footer>.rg>div:last-child{
        margin-left: 10px;
    }
    .book-card .el-button{
        width: 100%;
        font-size: 16px;
        font-weight:bold;
    }
</style>