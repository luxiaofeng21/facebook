<template>
<div class="bp9cbjyn j83agx80 cbu4d94t d2edcug0">
    <div class="d2edcug0 h3gjbzrl ihqw7lf3 discj3wi katn9ffz qv66sw1b">
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
                <el-tabs v-model="tabs">
                    <el-tab-pane label="粉丝" name="1"></el-tab-pane>
                    <el-tab-pane label="粉已关注" name="2"></el-tab-pane>
                </el-tabs>
                <share-list :list="me_ul.friend" :type="'friend'"></share-list>
                <el-button type="info">查看全部</el-button>
        </div>
     
        <div class="book-card">
                <div class="book-title2">相册</div>
                <el-tabs v-model="tabs2">
                    <el-tab-pane :label="me_ul.name+'的相册'" name="1"></el-tab-pane>
                    <el-tab-pane label="相册" name="2"></el-tab-pane>
                </el-tabs>
                <share-list :list="me_ul.imgAll" :type="'vertical'"></share-list>
                <el-button type="info">查看全部</el-button>
        </div>
        <div class="book-card">
                <div class="book-title2">视频</div>
                 <el-tabs v-model="tabs3">
                    <el-tab-pane :label="me_ul.name+'的视频'" name="1"></el-tab-pane>
                </el-tabs>
                <share-list :list="me_ul.video" :type="'vertical'"></share-list>
                <el-button type="info">查看全部</el-button>
        </div>
        <div class="book-card">
                <div class="book-title2">运动</div>
                <el-tabs v-model="tabs4">
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
                 <el-tabs v-model="tabs5">
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
</template>

<script>
import shareList from '@/common/share-list'
import bookInput from '@/common/book-input'
export default {
    props:["me_ul"],
    components:{
        shareList,
        bookInput
    },
    data() {
        return {
            tabs5:"1",
            tabs4:"1",
            tabs:"1",
            tabs2:"1",
            tabs3:"1",
            mactive:0,
            menu:["概览","工作与学历","居住地","联系方式和基本信息","家庭成员与感情状况","你的详细资料","生活纪事"],
        }
    },
    methods:{
        getmenu(i){
            this.mactive=i
        }
    }
}
</script>



<style>
    a{
        color: #333;
    }
    .intimi-icon{
        width: 15px;
        height: 15px;
        background-image: url('../../assets/xVr-bSpqpnp.png');
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