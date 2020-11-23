<template>
<div class="app">
    <div class="rq0escxv l9j0dhe7 du4w35lb">
        <div class="du4w35lb l9j0dhe7 cbu4d94t j83agx80">
            <div class="j83agx80 cbu4d94t jgljxmt5 l9j0dhe7 be9z9djy">
                <div class="j83agx80 cbu4d94t d6urw2fd dp1hu0rb l9j0dhe7 du4w35lb" data-pagelet="page">
                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 rj1gh0hx buofh1pr g5gj957u ka73uehy jifvfom9 gs1a9yip owycx6da btwxx1t3 dp1hu0rb">
                        <div aria-label="好友" role="navigation" class="rq0escxv l9j0dhe7 tkr6xdv7 j83agx80 cbu4d94t d2edcug0 pfnyh3mw dp1hu0rb rek2kq2y o36gj0jk">
                            <div class="hybvsw6c cjfnh4rs j83agx80 cbu4d94t dp1hu0rb l9j0dhe7 be9z9djy iyyx5f41 jyyn76af aip8ia32 so2p5rfc hxa2dpaq">
                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 i1fnvgqd bp9cbjyn owycx6da btwxx1t3 pfnyh3mw jei6r52m wkznzc2l n851cfcs dhix69tm">
                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 rj1gh0hx buofh1pr g5gj957u hpfvmrgz">
                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 i1fnvgqd bp9cbjyn owycx6da btwxx1t3">
                                            <div class="rq0escxv l9j0dhe7 du4w35lb d2edcug0 kud993qy buofh1pr g5gj957u hpfvmrgz">
                                                <div class="j83agx80 cbu4d94t q9se6cdp p984guvr">
                                                    <div class="px9k8yfb hk9dxy2p">
                                                        <span class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j irj2b8pg mysgfdmx o0t2es00 f530mmz5 hnhda86s oo9gr5id hzawbc8m" dir="auto">
                                                            <h1 class="gmql0nx0 l94mrbxd p1ri9a11 lzcic4wl" dir="auto" tabindex="-1">
                                                                好友
                                                            </h1>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="s1tcr66n wkznzc2l dhix69tm">
                                </div>
                                <div class="q5bimw55 rpm2j7zs k7i0oixp gvuykj2m j83agx80 cbu4d94t ni8dbmo4 eg9m0zos l9j0dhe7 du4w35lb ofs802cu pohlnb88 dkue75c7 mb9wzai9 d8ncny3e buofh1pr tgvbjcpo l56l04vs r57mb794 kh7kg01d c3g1iek1 k4xni2cv">
                                    <div class="j83agx80 cbu4d94t buofh1pr">
                                        <div class="ay7djpcl b5wmifdl hzruof5a rfua0xdk pmk7jnqg kr520xx4">
                                        </div>
                                        <div class="aov4n071">
                                            <div class="sxpk6l6v">
                                                <div class="tr9rh885 dhix69tm wkznzc2l qzhwtbm6">
                                                    <span class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j s89635nw ew0dbk1b a5q79mjw g1cxx5fr lrazzd5p oo9gr5id" dir="auto">
                                                        加好友请求
                                                    </span>
                                                </div>
                                                <div class="n1l5q3vz dhix69tm wkznzc2l n851cfcs">
                                                    <div class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l" role="button" tabindex="0">
                                                        <span class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j hop8lmos enqfppq2 e9vueds3 j5wam9gi knj5qynh q66pz984" dir="auto">
                                                            查看已发送请求
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="oqcyycmt swg4t2nn sej5wr8e" v-if="reqFriend.length<=0">
                                                        <span class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j hop8lmos enqfppq2 e9vueds3 j5wam9gi knj5qynh m9osqain" dir="auto">
                                                            没有新请求
                                                        </span>
                                                    </div>
                                                     <ul class="friend-ul" v-else>
                                                        <li v-for="(item,index) in reqFriend" :key="index">
                                                            <div class="friend-lf">
                                                                <img :src="item.img" alt="">
                                                            </div>
                                                            <div class="friend-rg">
                                                                <div class="friend-title">{{item.title}}</div>
                                                                <div class="friend-text">
                                                                    <span class="friend-text-img" v-for="(items,indexs) in item.common" :key="indexs"> <img :src="items.img" alt=""></span>
                                                                    <span>{{item.common.length}}位共同好友</span>
                                                                </div>
                                                                <div class="friend-button" v-if="!item.req">
                                                                    <el-button size="small" type="primary" >确认</el-button>
                                                                    <el-button size="small" type="info" @click="reqFriend.splice(index,1)">删除</el-button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="dhix69tm n851cfcs wkznzc2l n1l5q3vz s1tcr66n" role="separator">
                                                </div>
                                                <div class="tr9rh885 dhix69tm wkznzc2l qzhwtbm6">
                                                    <span class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j s89635nw ew0dbk1b a5q79mjw g1cxx5fr lrazzd5p oo9gr5id" dir="auto">
                                                        可能认识
                                                    </span>
                                                </div>
                                                <ul class="friend-ul">
                                                    <li v-for="(item,index) in friend" :key="index">
                                                        <div class="friend-lf">
                                                            <img :src="item.img" alt="">
                                                        </div>
                                                        <div class="friend-rg">
                                                            <div class="friend-title">{{item.title}}</div>
                                                            <div class="friend-text">
                                                                <span class="friend-text-img" v-for="(items,indexs) in item.common" :key="indexs"> <img :src="items.img" alt=""></span>
                                                                <span>{{item.common.length}}位共同好友</span>
                                                            </div>
                                                            <div class="friend-button" v-if="!item.req">
                                                                <el-button size="small" type="primary" @click="gethabdle(1,item)">加为好友</el-button>
                                                                <el-button size="small" type="info" @click="gethabdle(2,item,index)">移除</el-button>
                                                            </div>
                                                            <div class="friend-button" v-else>
                                                                <span>请求已发送</span>
                                                                <el-button size="small" type="info" @click="gethabdle(3,item)">取消请求</el-button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pwoa4pd7 mkhogb32 datstx6m b5wmifdl pmk7jnqg kwrap0ej kr520xx4 qgmjvhk0 art1omkt nw2je8n7 hhz5lgdu pyaxyem1" data-visualcompletion="ignore" data-thumb="1" style="display: block; right: 0px; height: 3596px;">
                                    </div>
                                    <div class="rq0escxv mkhogb32 b5wmifdl jb3vyjys ph5uu5jm qt6c0cv9 b3onmgus hzruof5a pmk7jnqg kwrap0ej kr520xx4 enuw37q7 dpja2al7 art1omkt nw2je8n7 hhz5lgdu" data-visualcompletion="ignore" data-thumb="1" style="display: block; right: 0px; height: 66.7686px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1) scale(7.33878) translateZ(-6.33878px) translateZ(-2px);">
                                        <div class="oj68ptkr jk6sbkaj kdgqqoy6 ihh4hy1g qttc61fc datstx6m k4urcfbm">
                                        </div>
                                    </div>
                                </div>
                                <div class="kd0sc8dh sl8jk4me ie5zihkj i09qtzwb rm3jng1j hzruof5a pmk7jnqg kr520xx4 c0wkt4kp">
                                </div>
                            </div>
                        </div>
                        <div aria-label="好友" role="main" class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 rj1gh0hx buofh1pr g5gj957u hpfvmrgz dp1hu0rb">
                            <div class="j83agx80 cbu4d94t buofh1pr dp1hu0rb hpfvmrgz l9j0dhe7 du4w35lb">
                                <div class="dp1hu0rb cbu4d94t j83agx80">
                                    <div class="hpfvmrgz dp1hu0rb buofh1pr cbu4d94t j83agx80">
                                        <div class="l9j0dhe7 dp1hu0rb cbu4d94t j83agx80" role="main">
                                            <div class="">
                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 taijpn5t gs1a9yip owycx6da btwxx1t3 cddn0xzi">
                                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 rj1gh0hx buofh1pr g5gj957u hpfvmrgz">
                                                        <div class="k4urcfbm l9j0dhe7 datstx6m">
                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 taijpn5t gs1a9yip owycx6da btwxx1t3">
                                                                <div class="i09qtzwb rq0escxv n7fi1qx3 pmk7jnqg j9ispegn kr520xx4 ni8dbmo4 stjgntxs">
                                                                    <div class="do00u71z l9j0dhe7 k4urcfbm" style="left: 50%; position: absolute; top: 0px; transform: translateX(-50%); padding-top: 66.6667%;">
                                                                        <div class="gs1a9yip ow4ym5g4 auili1gw j83agx80 cbu4d94t buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 tgvbjcpo hpfvmrgz qt6c0cv9 rz4wbd8a a8nywdso jb3vyjys du4w35lb i09qtzwb rq0escxv n7fi1qx3 pmk7jnqg j9ispegn kr520xx4">
                                                                            <img alt="" class="i09qtzwb rq0escxv n7fi1qx3 pmk7jnqg j9ispegn kr520xx4 datstx6m k4urcfbm" src="../../assets/bg2.jpg">
                                                                        </div>
                                                                    </div>
                                                                    <div class="i09qtzwb rq0escxv n7fi1qx3 pmk7jnqg j9ispegn kr520xx4 jge66auo">
                                                                    </div>
                                                                </div>
                                                                <div class="rq0escxv l9j0dhe7 du4w35lb o4feeg3o rj1gh0hx buofh1pr g5gj957u hpfvmrgz j83agx80 taijpn5t">
                                                                    <div class="ni8dbmo4 stjgntxs l9j0dhe7 k4urcfbm uo3d90p7 l82x9zwi kipmrytf bti8j40k" style="border-radius: 0px 0px max(0px, min(8px, -999900% - 39996px + 999900vw)) max(0px, min(8px, -999900% - 39996px + 999900vw)) / 0px 0px 8px 8px;">
                                                                        <a aria-label="Link to open profile cover photo" class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 a8c37x1j p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l" href="/photo/?fbid=456898591443147&amp;set=a.212501042549571" role="link" tabindex="0">
                                                                            <div class="do00u71z l9j0dhe7 k4urcfbm ni8dbmo4 stjgntxs" style="padding-top: 37.037%;">
                                                                                <div class="gs1a9yip ow4ym5g4 auili1gw j83agx80 cbu4d94t buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 tgvbjcpo hpfvmrgz qt6c0cv9 rz4wbd8a a8nywdso jb3vyjys du4w35lb i09qtzwb rq0escxv n7fi1qx3 pmk7jnqg j9ispegn kr520xx4">
                                                                                    <div class="do00u71z l9j0dhe7 k4urcfbm ni8dbmo4 stjgntxs" style="left: 50%; position: absolute; top: 55.4674%; transform: translate(-50%, -55.4674%); padding-top: 66.6667%;">
                                                                                        <div class="gs1a9yip ow4ym5g4 auili1gw j83agx80 cbu4d94t buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 tgvbjcpo hpfvmrgz qt6c0cv9 rz4wbd8a a8nywdso jb3vyjys du4w35lb i09qtzwb rq0escxv n7fi1qx3 pmk7jnqg j9ispegn kr520xx4">
                                                                                            <img data-imgperflogname="profileCoverPhoto" alt="" class="i09qtzwb rq0escxv n7fi1qx3 pmk7jnqg j9ispegn kr520xx4 datstx6m k4urcfbm" src="../../assets/bg.jpg">
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 taijpn5t gs1a9yip owycx6da btwxx1t3 ihqw7lf3 cddn0xzi">
                                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t marjyy4e rj1gh0hx buofh1pr g5gj957u hpfvmrgz hv4rvrfc dati1w0a">
                                                        <div class="cbu4d94t j83agx80">
                                                            <div class="aovydwv3 o8rfisnq j83agx80 do00u71z tr9rh885">
                                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 i1fnvgqd gs1a9yip owycx6da btwxx1t3 d1544ag0 tw6a2znq discj3wi b5q2rw42 lq239pai mysgfdmx hddg9phg">
                                                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 p8fzw8mz pcp91wgn iuny7tx3 ipjc6fyt">
                                                                        <div class="b3onmgus e5nlhep0 ph5uu5jm ecm0bbzt spb7xbtv bkmhp75w emlxlaya s45kfl79 cwj9ozl2" style="overflow:hidden;padding-bottom:0">
                                                                            <a aria-label="Pia Avrianie" class="oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 q9uorilb mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l oo9gr5id" href="/photo/?fbid=359657297833944&amp;set=a.124030814729928&amp;__tn__=%3C" role="link" tabindex="0">
                                                                                <div class="q9uorilb l9j0dhe7 pzggbiyp du4w35lb">
                                                                                    <img src="../../assets/me.jpg" style="width:160px;height:160px;border-radius:50%" alt="">
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 taijpn5t gs1a9yip owycx6da btwxx1t3 d1544ag0 tw6a2znq discj3wi b5q2rw42 lq239pai mysgfdmx hddg9phg">
                                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 p8fzw8mz pcp91wgn iuny7tx3 ipjc6fyt">
                                                                    <div class="bp9cbjyn j83agx80 cbu4d94t">
                                                                        <div class="ihqw7lf3">
                                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 taijpn5t gs1a9yip owycx6da btwxx1t3 jb3vyjys b5q2rw42 lq239pai mysgfdmx hddg9phg">
                                                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 p8fzw8mz pcp91wgn iuny7tx3 ipjc6fyt">
                                                                                    <div class="j83agx80 cbu4d94t obtkqiv7 sv5sfqaa">
                                                                                        <div class="bi6gxh9e aov4n071">
                                                                                            <span class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j p984guvr obtkqiv7 mhxlubs3 p5u9llcw hnhda86s oo9gr5id oqcyycmt" dir="auto">
                                                                                                <h1 class="gmql0nx0 l94mrbxd p1ri9a11 lzcic4wl bp9cbjyn j83agx80" dir="auto" tabindex="-1">
                                                                                                    Pia Avrianie
                                                                                                </h1>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="j83agx80 cbu4d94t obtkqiv7 sv5sfqaa">
                                                                            <div class="bi6gxh9e aov4n071">
                                                                                <span class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j s89635nw ew0dbk1b a5q79mjw g1cxx5fr knj5qynh m9osqain oqcyycmt" dir="auto">
                                                                                    <span>
                                                                                        Professional Mermaid | U.W model | Diver 🇮🇩
                                                                                    </span>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 taijpn5t gs1a9yip owycx6da btwxx1t3 cddn0xzi">
                                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t marjyy4e rj1gh0hx buofh1pr g5gj957u hpfvmrgz hv4rvrfc dati1w0a">
                                                        <div class="l6v480f0">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style="top: 60px;" class="rq0escxv lpgh02oy du4w35lb rek2kq2y">
                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 taijpn5t gs1a9yip owycx6da btwxx1t3 cddn0xzi dsne8k7f pfnyh3mw">
                                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t marjyy4e rj1gh0hx buofh1pr g5gj957u hpfvmrgz hv4rvrfc dati1w0a">
                                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 i1fnvgqd bp9cbjyn owycx6da btwxx1t3">
                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 rj1gh0hx buofh1pr g5gj957u hpfvmrgz">
                                                                <div class="rq0escxv l9j0dhe7 du4w35lb ni8dbmo4 stjgntxs">
                                                                    <div class="rq0escxv l9j0dhe7 du4w35lb jav28p83 ijkhr0an flx89l3n nna1d5md">
                                                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 i1fnvgqd gs1a9yip owycx6da btwxx1t3 pxsmfnpt pedkr2u6 n1dktuyu dvqrsczn l23jz15m d4752i1f">
                                                                            <div class="book-flex items">
                                                                                <el-tabs v-model="activeName">
                                                                                    <el-tab-pane label="时间线" name="0"></el-tab-pane>
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
                                                                                    <el-button slot="reference" class="book-down">展开 <i class="el-icon-caret-bottom"></i> </el-button>
                                                                                </el-popover>
                                                                            </div>
                                                                        </div>
                                                                        <div class="rq0escxv pmk7jnqg du4w35lb j83agx80 i1fnvgqd gs1a9yip owycx6da btwxx1t3 datstx6m b5wmifdl i42f9fw1 kr9hpln1 k4urcfbm c0paw9va l23jz15m d4752i1f">
                                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 o8rfisnq">
                                                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 jifvfom9 gs1a9yip owycx6da btwxx1t3">
                                                                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0">
                                                                                        <div data-visualcompletion="ignore-dynamic" style="padding-left: 8px; padding-right: 8px;">
                                                                                            <a class="oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 a8c37x1j mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi" href="/profile.php?id=100013690299496" role="link" tabindex="0">
                                                                                                <div class="ow4ym5g4 auili1gw rq0escxv j83agx80 buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 nnctdnn4 hpfvmrgz qt6c0cv9 jb3vyjys l9j0dhe7 du4w35lb bp9cbjyn btwxx1t3 dflh9lhu scb9dxdr">
                                                                                                    <div class="o8rfisnq j83agx80 cbu4d94t bi6gxh9e tvfksri0 aov4n071 l9j0dhe7">
                                                                                                        <div class="q9uorilb l9j0dhe7 pzggbiyp du4w35lb">
                                                                                                            <svg class="pzggbiyp" data-visualcompletion="ignore-dynamic" role="none" style="height: 40px; width: 40px;">
                                                                                                                <mask id="jsc_c_2p">
                                                                                                                    <circle cx="20" cy="20" fill="white" r="20">
                                                                                                                    </circle>
                                                                                                                </mask>
                                                                                                                <g mask="url(#jsc_c_2p)">
                                                                                                                    <image style="height: 40px; width: 40px;" x="0" y="0" height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xlink:href="/v/t31.0-1/cp0/p40x40/26114559_359657297833944_4870051696186794738_o.jpg?_nc_cat=100&amp;_nc_sid=7206a8&amp;_nc_ohc=L2wPsxHRP-QAX-Qb9cX&amp;_nc_ht=scontent-nrt1-1.xx&amp;oh=58b9d00b2ae0d2e428f5ee92c77144a5&amp;oe=5F50C4EF">
                                                                                                                    </image>
                                                                                                                    <circle class="mlqo0dh0 georvekb s6kb5r3f" cx="20" cy="20" r="20">
                                                                                                                    </circle>
                                                                                                                </g>
                                                                                                            </svg>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="ow4ym5g4 auili1gw rq0escxv j83agx80 buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 tgvbjcpo hpfvmrgz qt6c0cv9 rz4wbd8a a8nywdso jb3vyjys du4w35lb bp9cbjyn btwxx1t3 l9j0dhe7">
                                                                                                        <div class="gs1a9yip ow4ym5g4 auili1gw rq0escxv j83agx80 cbu4d94t buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 tgvbjcpo hpfvmrgz rz4wbd8a a8nywdso l9j0dhe7 du4w35lb rj1gh0hx f10w8fjw pybr56ya">
                                                                                                            <div class="">
                                                                                                                <div class="j83agx80 cbu4d94t ew0dbk1b irj2b8pg">
                                                                                                                    <div class="qzhwtbm6 knvmm38d">
                                                                                                                        <span class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j s89635nw ew0dbk1b a5q79mjw g1cxx5fr ekzkrbhg oo9gr5id hzawbc8m ni8dbmo4 stjgntxs ltmttdrg g0qnabr5" dir="auto">
                                                                                                                            Pia Avrianie
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="n00je7tq arfg74bv qs9ysxi8 k77z8yql i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s" data-visualcompletion="ignore">
                                                                                                </div>
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 o8rfisnq">
                                                                <div class="q3mryazl">
                                                                    <div class="bp9cbjyn j83agx80 fop5sh7t g2wf7z4h f10w8fjw pybr56ya bkfpd7mw">
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-if="activeName==0" class="bp9cbjyn j83agx80 cbu4d94t d2edcug0">
                                                <div class="rq0escxv d2edcug0 ecyo15nh hv4rvrfc dati1w0a">
                                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 taijpn5t gs1a9yip lhclo0ds btwxx1t3 sv5sfqaa o22cckgh obtkqiv7 fop5sh7t">
                                                        <div class="rq0escxv l9j0dhe7 du4w35lb gderk4og dxtxif39 buofh1pr g5gj957u hpfvmrgz aov4n071 oi9244e8 bi6gxh9e h676nmdw aghb5jc5">
                                                            <div class="tr9rh885">
                                                                <div class="j83agx80 l9j0dhe7 k4urcfbm">
                                                                    <div style="border-radius: max(0px, min(8px, -999900% - 39996px + 999900vw)) / 8px;" class="rq0escxv l9j0dhe7 du4w35lb hybvsw6c ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi ni8dbmo4 stjgntxs k4urcfbm sbcfpzgs">
                                                                        <div class="ihqw7lf3">
                                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 i1fnvgqd gs1a9yip owycx6da btwxx1t3 hv4rvrfc dati1w0a discj3wi o22cckgh fop5sh7t mysgfdmx hddg9phg">
                                                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 rj1gh0hx buofh1pr g5gj957u hpfvmrgz dflh9lhu scb9dxdr iuny7tx3 ipjc6fyt">
                                                                                    <div class="j83agx80 cbu4d94t mysgfdmx hddg9phg">
                                                                                        <div class="w0hvl6rk qjjbsfad">
                                                                                            <span class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j muag1w35 ew0dbk1b o3w64lxj b2s5l15y hnhda86s oo9gr5id hzawbc8m" dir="auto">
                                                                                                你认识 Pia Avrianie 吗？
                                                                                            </span>
                                                                                        </div>
                                                                                        <div class="w0hvl6rk qjjbsfad">
                                                                                            <span class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j s89635nw ew0dbk1b a5q79mjw g1cxx5fr knj5qynh m9osqain hzawbc8m" dir="auto">
                                                                                                如需查看她与好友分享的内容，请给她发送加好友请求。
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 o8rfisnq dflh9lhu scb9dxdr iuny7tx3 ipjc6fyt">
                                                                                    <el-button type="primary">
                                                                                        <i class="el-icon-s-custom"></i> 加为好友
                                                                                    </el-button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="rq0escxv d2edcug0 ecyo15nh hv4rvrfc dati1w0a tr9rh885">
                                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 taijpn5t gs1a9yip lhclo0ds btwxx1t3 sv5sfqaa o22cckgh obtkqiv7 fop5sh7t">
                                                        <div class="rq0escxv l9j0dhe7 du4w35lb d2edcug0 o387gat7 buofh1pr g5gj957u hpfvmrgz aov4n071 oi9244e8 bi6gxh9e h676nmdw aghb5jc5 rek2kq2y">
                                                            <div style="height: 0px;">
                                                            </div>
                                                            <div class="lpgh02oy" style="bottom: -1190px;">
                                                                <div>
                                                                    <div>
                                                                        <div class="sjgh65i0">
                                                                            <div class="j83agx80 l9j0dhe7 k4urcfbm">
                                                                                <div style="border-radius: max(0px, min(8px, -999900% - 39996px + 999900vw)) / 8px;" class="rq0escxv l9j0dhe7 du4w35lb hybvsw6c ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi ni8dbmo4 stjgntxs k4urcfbm sbcfpzgs">
                                                                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t e5nlhep0 aodizinl">
                                                                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t buofh1pr tgvbjcpo">
                                                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 hv4rvrfc dati1w0a">
                                                                                                <div class="j83agx80 cbu4d94t mysgfdmx hddg9phg">
                                                                                                    <div class="w0hvl6rk qjjbsfad">
                                                                                                        <h2 class="oo9gr5id o3w64lxj hnhda86s lzcic4wl oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j muag1w35 ew0dbk1b b2s5l15y hzawbc8m" dir="auto">
                                                                                                            <div class="l9j0dhe7 stjgntxs ni8dbmo4" style="-moz-box-orient: vertical; -webkit-line-clamp: 2; display: -webkit-box;">
                                                                                                                简介
                                                                                                            </div>
                                                                                                        </h2>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="sej5wr8e">
                                                                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 i1fnvgqd gs1a9yip owycx6da btwxx1t3 hv4rvrfc dati1w0a discj3wi b5q2rw42 lq239pai mysgfdmx hddg9phg">
                                                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 rj1gh0hx buofh1pr g5gj957u hpfvmrgz p8fzw8mz pcp91wgn iuny7tx3 ipjc6fyt">
                                                                                                <ul class="me-ul">
                                                                                                    <li v-for="(item,index) in me_ul.user" :key="index">
                                                                                                        <img :src="item.img" alt="">
                                                                                                        <span class="me-label">{{item.label}}</span>
                                                                                                        <span class="me-title">{{item.title}}</span>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 i1fnvgqd gs1a9yip owycx6da btwxx1t3 hv4rvrfc dati1w0a discj3wi b5q2rw42 lq239pai mysgfdmx hddg9phg">
                                                                                            <ul class="highlight-ul">
                                                                                                <li v-for="(item,index) in me_ul.highlight" :key="index">
                                                                                                    <img :src="item" alt="">
                                                                                                </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div class="sjgh65i0">
                                                                            <div class="j83agx80 l9j0dhe7 k4urcfbm">
                                                                                <div style="border-radius: max(0px, min(8px, -999900% - 39996px + 999900vw)) / 8px;" class="rq0escxv l9j0dhe7 du4w35lb hybvsw6c ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi ni8dbmo4 stjgntxs k4urcfbm sbcfpzgs">
                                                                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t e5nlhep0 aodizinl">
                                                                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t buofh1pr tgvbjcpo">
                                                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 hv4rvrfc dati1w0a">
                                                                                                <div class="j83agx80 cbu4d94t mysgfdmx hddg9phg">
                                                                                                    <div class="w0hvl6rk qjjbsfad">
                                                                                                        <h2 class="oo9gr5id o3w64lxj hnhda86s lzcic4wl oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j muag1w35 ew0dbk1b b2s5l15y" dir="auto">
                                                                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 i1fnvgqd bp9cbjyn owycx6da btwxx1t3 jeutjz8y">
                                                                                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 rj1gh0hx buofh1pr g5gj957u hpfvmrgz">
                                                                                                                    <span class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql o3w64lxj b2s5l15y hnhda86s oo9gr5id">
                                                                                                                        <div class="l9j0dhe7 stjgntxs ni8dbmo4" style="-moz-box-orient: vertical; -webkit-line-clamp: 2; display: -webkit-box;">
                                                                                                                            <a class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 gpro0wi8 hnhda86s" href="/profile.php?id=100013690299496&amp;sk=photos" role="link" tabindex="0">
                                                                                                                                照片
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                    </span>
                                                                                                                </div>
                                                                                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 nqmvxvec taijpn5t h676nmdw">
                                                                                                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 i1fnvgqd bp9cbjyn owycx6da btwxx1t3">
                                                                                                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 kr9hpln1 ttbfdpzt">
                                                                                                                            &nbsp;
                                                                                                                        </div>
                                                                                                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0">
                                                                                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 i1fnvgqd gs1a9yip owycx6da btwxx1t3">
                                                                                                                                <a class="oajrlxb2 gs1a9yip b0kwm4yp mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 q9uorilb mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h owjl8umy f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l py34i1dx gcieejh5 bn081pho humdl8nn izx4hr6d jk6sbkaj kdgqqoy6 ihh4hy1g qttc61fc pzggbiyp actionChildElement" href="/profile.php?id=100013690299496&amp;sk=photos" role="link" tabindex="0">
                                                                                                                                    <span class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a5q79mjw g1cxx5fr knj5qynh q66pz984 a8c37x1j ni8dbmo4 stjgntxs ltmttdrg g0qnabr5">
                                                                                                                                        查看全部
                                                                                                                                    </span>
                                                                                                                                    <div class="n00je7tq arfg74bv qs9ysxi8 k77z8yql i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s" data-visualcompletion="ignore" style="border-radius: 4px; inset: -8px;">
                                                                                                                                    </div>
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </h2>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="sej5wr8e">
                                                                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 i1fnvgqd gs1a9yip owycx6da btwxx1t3 hv4rvrfc dati1w0a discj3wi b5q2rw42 lq239pai mysgfdmx hddg9phg">
                                                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 rj1gh0hx buofh1pr g5gj957u hpfvmrgz p8fzw8mz pcp91wgn iuny7tx3 ipjc6fyt">
                                                                                                <div class="dlv3wnog enqfppq2 lhclo0ds j83agx80">
                                                                                                    <div v-for="(item,index) in me_ul.imgAll" :key="index" class="qno324ep l9j0dhe7 tvmbv18p j83agx80">
                                                                                                        <div class="k4urcfbm l9j0dhe7 stjgntxs ni8dbmo4 cgat1ltu datstx6m">
                                                                                                            <a aria-hidden="true" class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 a8c37x1j p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a d5it6em2 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l k4urcfbm" href="/photo/?fbid=345181689281505&amp;set=ecnf.100013690299496" role="link" tabindex="-1">
                                                                                                                <div class="i09qtzwb rq0escxv n7fi1qx3 pmk7jnqg j9ispegn kr520xx4">
                                                                                                                    <img alt="" class="datstx6m bixrwtb6 k4urcfbm ue3kfks5" :src="item">
                                                                                                                    <span class="i09qtzwb rq0escxv n7fi1qx3 pmk7jnqg j9ispegn kr520xx4 blnotr6c ue3kfks5">
                                                                                                                    </span>
                                                                                                                </div>
                                                                                                                <div class="n00je7tq arfg74bv qs9ysxi8 k77z8yql i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s" data-visualcompletion="ignore">
                                                                                                                </div>
                                                                                                            </a>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div class="sjgh65i0">
                                                                            <div class="j83agx80 l9j0dhe7 k4urcfbm">
                                                                                <div style="border-radius: max(0px, min(8px, -999900% - 39996px + 999900vw)) / 8px;" class="rq0escxv l9j0dhe7 du4w35lb hybvsw6c ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi ni8dbmo4 stjgntxs k4urcfbm sbcfpzgs">
                                                                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t e5nlhep0 aodizinl">
                                                                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t buofh1pr tgvbjcpo">
                                                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 hv4rvrfc dati1w0a">
                                                                                                <div class="j83agx80 cbu4d94t mysgfdmx hddg9phg">
                                                                                                    <div class="w0hvl6rk qjjbsfad">
                                                                                                        <h2 class="oo9gr5id o3w64lxj hnhda86s lzcic4wl oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j muag1w35 ew0dbk1b b2s5l15y" dir="auto">
                                                                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 i1fnvgqd bp9cbjyn owycx6da btwxx1t3 jeutjz8y">
                                                                                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 rj1gh0hx buofh1pr g5gj957u hpfvmrgz">
                                                                                                                    <span class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql o3w64lxj b2s5l15y hnhda86s oo9gr5id">
                                                                                                                        <div class="l9j0dhe7 stjgntxs ni8dbmo4" style="-moz-box-orient: vertical; -webkit-line-clamp: 2; display: -webkit-box;">
                                                                                                                            <a class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 gpro0wi8 hnhda86s" href="/profile.php?id=100013690299496&amp;sk=friends" role="link" tabindex="0">
                                                                                                                                好友
                                                                                                                            </a>
                                                                                                                        </div>
                                                                                                                    </span>
                                                                                                                </div>
                                                                                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 nqmvxvec taijpn5t h676nmdw">
                                                                                                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 i1fnvgqd bp9cbjyn owycx6da btwxx1t3">
                                                                                                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 kr9hpln1 ttbfdpzt">
                                                                                                                            &nbsp;
                                                                                                                        </div>
                                                                                                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0">
                                                                                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 i1fnvgqd gs1a9yip owycx6da btwxx1t3">
                                                                                                                                <a class="oajrlxb2 gs1a9yip b0kwm4yp mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 q9uorilb mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h owjl8umy f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l py34i1dx gcieejh5 bn081pho humdl8nn izx4hr6d jk6sbkaj kdgqqoy6 ihh4hy1g qttc61fc pzggbiyp actionChildElement" href="/profile.php?id=100013690299496&amp;sk=friends" role="link" tabindex="0">
                                                                                                                                    <span class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a5q79mjw g1cxx5fr knj5qynh q66pz984 a8c37x1j ni8dbmo4 stjgntxs ltmttdrg g0qnabr5">
                                                                                                                                        查看全部
                                                                                                                                    </span>
                                                                                                                                    <div class="n00je7tq arfg74bv qs9ysxi8 k77z8yql i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s" data-visualcompletion="ignore" style="border-radius: 4px; inset: -8px;">
                                                                                                                                    </div>
                                                                                                                                </a>
                                                                                                                            </div>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </h2>
                                                                                                    </div>
                                                                                                    <div class="w0hvl6rk qjjbsfad">
                                                                                                        <span class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j s89635nw ew0dbk1b a5q79mjw g1cxx5fr knj5qynh m9osqain hzawbc8m" dir="auto">
                                                                                                            <div class="l9j0dhe7 stjgntxs ni8dbmo4" style="-moz-box-orient: vertical; -webkit-line-clamp: 3; display: -webkit-box;">
                                                                                                                1,660 位好友
                                                                                                            </div>
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="sej5wr8e">
                                                                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 i1fnvgqd gs1a9yip owycx6da btwxx1t3 hv4rvrfc dati1w0a discj3wi b5q2rw42 lq239pai mysgfdmx hddg9phg">
                                                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t d2edcug0 rj1gh0hx buofh1pr g5gj957u hpfvmrgz p8fzw8mz pcp91wgn iuny7tx3 ipjc6fyt">
                                                                                                <div class="i1fnvgqd lhclo0ds j83agx80 ll8tlv6m">
                                                                                                    <div v-for="(item,index) in me_ul.friend" :key="index" class="do7mct30 cbu4d94t j83agx80 n851cfcs">
                                                                                                        <div class="nc684nl6">
                                                                                                            <a aria-hidden="true" class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 a8c37x1j p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a d5it6em2 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l k4urcfbm" href="/ari.tulang.984/" role="link" tabindex="-1">
                                                                                                                <div class="i09qtzwb rq0escxv n7fi1qx3 pmk7jnqg j9ispegn kr520xx4">
                                                                                                                    <img alt="" class="datstx6m bixrwtb6 k4urcfbm ue3kfks5 pw54ja7n l82x9zwi uo3d90p7" :src="item.img">
                                                                                                                    <span class="i09qtzwb rq0escxv n7fi1qx3 pmk7jnqg j9ispegn kr520xx4 blnotr6c ue3kfks5 pw54ja7n l82x9zwi uo3d90p7">
                                                                                                                    </span>
                                                                                                                </div>
                                                                                                                <div class="n00je7tq arfg74bv qs9ysxi8 k77z8yql i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s" data-visualcompletion="ignore">
                                                                                                                </div>
                                                                                                            </a>
                                                                                                        </div>
                                                                                                        <div class="pg28xi8c aov4n071 cbu4d94t j83agx80">
                                                                                                            <div class="nc684nl6">
                                                                                                                <div>
                                                                                                                    <a class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 gpro0wi8" href="/ari.tulang.984/" role="link" tabindex="0">
                                                                                                                        <span class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j hop8lmos enqfppq2 e9vueds3 j5wam9gi lrazzd5p oo9gr5id" dir="auto">
                                                                                                                            {{item.name}}
                                                                                                                        </span>
                                                                                                                    </a>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <footer aria-label="Facebook" role="contentinfo">
                                                                        <span class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j hop8lmos enqfppq2 e9vueds3 j5wam9gi knj5qynh m9osqain" dir="auto">
                                                                            <ul class="nc684nl6">
                                                                                <li class="nc684nl6">
                                                                                    <a class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl m9osqain gpro0wi8 b1v8xokw" href="/privacy/explanation" role="link" tabindex="0">
                                                                                        隐私权政策
                                                                                    </a>
                                                                                    <span aria-hidden="true">
                                                                                        ·
                                                                                    </span>
                                                                                </li>
                                                                                <li class="nc684nl6">
                                                                                    <a class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl m9osqain gpro0wi8 b1v8xokw" href="/policies?ref=pf" role="link" tabindex="0">
                                                                                        服务条款
                                                                                    </a>
                                                                                    <span aria-hidden="true">
                                                                                        ·
                                                                                    </span>
                                                                                </li>
                                                                                <li class="nc684nl6">
                                                                                    <a class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl m9osqain gpro0wi8 b1v8xokw" href="/business/" role="link" tabindex="0">
                                                                                        广告
                                                                                    </a>
                                                                                    <span aria-hidden="true">
                                                                                        ·
                                                                                    </span>
                                                                                </li>
                                                                                <li class="nc684nl6">
                                                                                    <a class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl m9osqain gpro0wi8 b1v8xokw" href="/help/568137493302217" role="link" tabindex="0">
                                                                                        Ad Choices
                                                                                        <span class="ormqv51v l9j0dhe7">
                                                                                            <i class="hu5pjgll m6k467ps sp_-69RjdrrvoB sx_51663b">
                                                                                            </i>
                                                                                        </span>
                                                                                    </a>
                                                                                    <span aria-hidden="true">
                                                                                        ·
                                                                                    </span>
                                                                                </li>
                                                                                <li class="nc684nl6">
                                                                                    <a class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl m9osqain gpro0wi8 b1v8xokw" href="/policies/cookies/" role="link" tabindex="0">
                                                                                        Cookie
                                                                                    </a>
                                                                                    <span aria-hidden="true">
                                                                                        ·
                                                                                    </span>
                                                                                </li>
                                                                                <li class="nc684nl6">
                                                                                    <div aria-expanded="false" aria-haspopup="menu" class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l" role="button" tabindex="0">
                                                                                        更多
                                                                                    </div>
                                                                                    <span aria-hidden="true">
                                                                                        ·
                                                                                    </span>
                                                                                </li>
                                                                            </ul>
                                                                            Facebook © 2020
                                                                        </span>
                                                                    </footer>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="rq0escxv l9j0dhe7 du4w35lb d2edcug0 gile2uim buofh1pr g5gj957u hpfvmrgz aov4n071 oi9244e8 bi6gxh9e h676nmdw aghb5jc5">
                                                                <post-list :list="page_list"></post-list>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <About :me_ul="me_ul" v-else-if="activeName==1"></About>
                                            <Following v-else-if="activeName==2"></Following>
                                            <imgs v-else-if="activeName==3"></imgs>
                                            <qiandao v-else-if="activeName==5"> </qiandao>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="500px">
        <div class="dialog-title2" style="width:80%">
            <el-input prefix-icon="el-icon-search" class="search" placeholder="搜索枫果果的个人主页" v-model="search"></el-input>
        </div>
        <div class="search_con" v-if="search==''">
            <img src="../../assets/me.jpg" alt="">
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
import About from './about.vue'
import Following from './following.vue'
import imgs from './imgs.vue'
import qiandao from './qiandao.vue'
import postList from '@/common/post-list.vue'
export default {
    components: {
        postList,
        qiandao,
        imgs,
        About,
        Following
    },
    data() {
        return {
            page_list: [{
                    showEmoji:false,
                    me_img: require("@/assets/me.jpg"),
                    collection:[],
                    collect_title:"",
                    goodsNum: 0,
                    date: "9月18日20:44",
                    title: "",
                    share: 12,
                    name: "陈某某",
                    title: "二珂《這裡有埋伏》，聽完感覺戀愛了，大長腿的小仙女兒",
                    img: require("@/assets/me.jpg")
                },
                {
                    showEmoji:false,
                    me_img: require("@/assets/me.jpg"),
                    collection:[],
                    collect_title:"",
                    goodsNum: 0,
                    date: "9月18日20:44",
                    title: "",
                    share: 12,
                    name: "陈某某",
                    title: "二珂《這裡有埋伏》，聽完感覺戀愛了，大長腿的小仙女兒",
                    img: require("@/assets/me.jpg")
                }
            ],
            dialogVisible: false,
            search: "",
            me_ul: {
                name:"枫果果",
                highlight: [],
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
            reqFriend:[{
                    title: "小黄人",
                    req:false,
                    common: [{
                            img: require("@/assets/me.jpg")
                        },
                        {
                            img: require("@/assets/me.jpg")
                        },
                    ],
                    img: require("@/assets/me.jpg")
                },
                {
                    req:false,
                    title: "小黄人2",
                    common: [{
                            img: require("@/assets/me.jpg")
                        },
                        {
                            img: require("@/assets/me.jpg")
                        },
                    ],
                    img: require("@/assets/me.jpg")
                },
            ],
            friend: [{
                    title: "小黄人",
                    req:false,
                    common: [{
                            img: require("@/assets/me.jpg")
                        },
                        {
                            img: require("@/assets/me.jpg")
                        },
                    ],
                    img: require("@/assets/me.jpg")
                },
                {
                    req:false,
                    title: "小黄人2",
                    common: [{
                            img: require("@/assets/me.jpg")
                        },
                        {
                            img: require("@/assets/me.jpg")
                        },
                    ],
                    img: require("@/assets/me.jpg")
                },
            ],
            activeName: "0",
            activeIndex2: '1'
        }
    },
    methods: {
        //请求好友操作
        gethabdle(state,item,i){
            //发送请求
            if(state==1){
                item.req=true
            //移除
            }else if(state==2) {
                this.friend.splice(i,1)
            //取消请求
            }else{
                 item.req=false
            }
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style>

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

/*好友列表 */
.friend-ul {
    padding: 0 8px;
}

.friend-ul>li {
    display: flex;
    padding: 8px;
    border-radius: 5px;
}

.friend-ul>li:hover {
    background: #eee;
}

.friend-rg {
    width: 70%;
}

.friend-title {
    font-size: 1rem;
    color: var(--primary-text);
    font-weight: 500;
    line-height: 1.3333;
}

.friend-text {
    margin: 5px 0;
    color: #999;
    display: flex;
    align-items: center;
}
.friend-button{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.friend-button .el-button {
    width: 46%;
}

.friend-ul>li>.friend-lf>img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 12px;
}

.friend-text-img {
    margin-right: 2px;
    display: inline-block;
    width: 15px;
    height: 15px;
}

.friend-text-img>img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.rq0escxv.rek2kq2y {
    z-index: 111;
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

.bkfpd7mw>div {
    margin-right: 10px;
}

.friend-icon {
    background-image: url(../../assets/_AgLJqLL0tL.png);
    width: 20px;
    height: 20px;
    display: inline-block;

}

.book-icon2:hover {
    opacity: 0.9;
    cursor: pointer;
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

.search-li {
    display: flex;
    align-items: center;
}

.search-li:hover {
    background-color: #eee;
}

.search-li>span {
    width: 70%;
    word-break: break-all;
    text-align: left;
}
.j83agx80  {
    margin-right: 4px;
}

.book-down{
    margin-left: 15px;
    border: 0;
}
</style>
