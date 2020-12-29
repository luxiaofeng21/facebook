<template>
    <div>
        <div class="l9j0dhe7 dp1hu0rb cbu4d94t j83agx80" role="main">
            <div class="bp9cbjyn j83agx80 cbu4d94t d2edcug0 ">
                <div class="rq0escxv d2edcug0 ecyo15nh hv4rvrfc dati1w0a">
                    <div class="tou-title el-margin">推广网站</div>
                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw taijpn5t gs1a9yip lhclo0ds btwxx1t3 sv5sfqaa o22cckgh obtkqiv7 fop5sh7t">
                        <div class="rq0escxv l9j0dhe7 du4w35lb qmfd67dx hpfvmrgz gile2uim buofh1pr g5gj957u aov4n071 oi9244e8 bi6gxh9e h676nmdw aghb5jc5">
                           
                           <div class="el-card">
                                <div class="flex el-bottom">
                                    <span class="book-title">广告创意</span>
                                    <span class="link">使用帖子</span>
                                </div>
                                <book-input class="el-block el-bottom" :book="remark"></book-input>
                                <div class="el-bottom">
                                    <div class="website-head">
                                        <div class="lf">多媒体素材 1/5  · 选择多张图片或多个视频来创建轮播广告。</div>
                                        <div class="book-icon2"> <i class="el-icon-picture"></i>选择多媒体素材</div>
                                    </div>
                                    <div class="website-content">
                                            <img src="../../assets/gao.png" alt="">
                                            <div class="book-icon2 icon-primary2">编辑选项 <i class="el-icon-caret-bottom"></i></div>
                                    </div>
                                    <div class="website-biao">
                                         <book-input class="el-block" :book="title"></book-input>
                                    </div>
                                </div>
                                <div class="el-bottom">
                                    <el-select class="el-block" v-model="book.button" placeholder="按钮">
                                        <el-option v-for="(item,index) in buttonList" :key="index" :label="item.label" :value="item.value"></el-option>
                                    </el-select>
                                </div>
                                <div class="el-bottom">
                                    <el-input v-model="book.url" placeholder="网站地址"></el-input>
                                </div>
                           </div>

                            <div class="el-card">
                                <div class="flex">
                                    <span class="book-title">特殊广告类别</span>
                                    <span class="link">详细了解</span>
                                </div><br>
                                 <div class="website-head">
                                        <div class="lf">有关社会议题（例如经济、公民和社会权利）、选举、政治人物或政治活动的广告。</div>
                                        <el-switch v-model="book.class"></el-switch>
                                 </div>
                            </div>

                            <div class="el-card">
                                <div class="book-title">受众</div>
                                <div>你的广告向谁展示？</div>
                                <p>
                                    <el-radio checked>通过目标定位功能选择的用户</el-radio>
                                </p>
                                <div class="website-item">
                                    <div class="flex">
                                        <span>受众详情</span>
                                        <i class="el-icon-edit"></i>
                                    </div>
                                    <div class="website-text">
                                        <span class="m9osqain">地区 - 所在地</span>
                                        <span>美国</span>
                                    </div>
                                    <div class="website-text">
                                        <span class="m9osqain">年龄</span>
                                        <span>18 - 65+</span>
                                    </div>
                                </div>
                                <el-button type="info" class="el-block">新建受众</el-button>
                            </div>

                            <div class="el-card">
                                <div class="flex "> 
                                    <span class="book-title">投放期</span>
                                    <i class="el-icon-warning"></i>
                                </div>
                                <el-radio-group v-model="book.expect">
                                    <el-radio :label="1">  
                                        <div>长期投放广告</div>
                                        <div class="m9osqain">你的广告将以单日预算长期投放。我们建议使用这一选项。<a href="" class="link">详细了解</a></div>
                                    </el-radio>
                                    <el-radio :label="2">  
                                        <div>选择广告结束日期</div>
                                    </el-radio>
                                </el-radio-group>
                                <div class="flex" v-if="book.expect==2">
                                    <el-input style="flex:1" v-model="book.date.day" placeholder="天数"></el-input>
                                    <el-date-picker
                                    v-model="book.date.date"
                                    type="date"
                                    placeholder="选择日期">
                                    </el-date-picker>
                                </div>
                                <div class="el-margin"><hr></div>
                                <div class="flex"> 
                                    <span class="book-title">单日预算</span>
                                    <i class="el-icon-warning"></i>
                                </div>
                                <div >单日花费的实际金额可能有所不同。 <i class="el-icon-warning"></i></div>
                                <br>
                                <div class="flex">
                                    <div class="lf">
                                        <div class="m9osqain">国家/地区，货币</div>
                                        <div>CN，CNY</div>
                                    </div>
                                    <div class="book-icon2">更改</div>
                                </div>
                                <div class="website-money">
                                    <div class="text">预估覆盖人数：每天2,135.7 万 - 6,172.3 万人</div>   
                                    <div class="title">￥ <el-input v-model="book.money"></el-input> <i class="hover-icon"> <i class="el-icon-edit"></i> </i> </div>   
                                    <el-slider v-model="book.money" show-input-controls></el-slider>
                                </div>
                            </div>

                            <div class="el-card">
                                <div class="book-collapse bactive">
                                        <div class="book-collapse-head ">
                                                <div class="book-icon"> <i class="el-icon-menu"></i> </div>
                                                <div class="rg">
                                                    <div class="label">版位</div>
                                                    <div class="title">{{showPlatform}}</div>
                                                </div>
                                                <i class="el-icon-arrow-up"></i>
                                        </div>
                                        <div class="book-collapse-content">
                                            <div class="flex">
                                                <div class="lf"> 你的广告会在哪里展示？</div>
                                                <i class="el-icon-warning"></i>
                                            </div>
                                            <el-checkbox class="el-block" style="margin-top:5px" v-for="(item,index) in platform" :key="index" v-model="item.checked" :disabled="item.disabled">{{item.title}}</el-checkbox>
                                        </div>
                                </div>
                                <div class="book-collapse ">
                                        <div class="book-collapse-head">
                                                <div class="book-icon"> <i class="el-icon-s-marketing"></i> </div>
                                                <div class="rg">
                                                    <div class="label">Facebook Pixel 像素代码</div>
                                                    <div class="title">没有 Pixel 像素代码</div>
                                                </div>
                                                <el-switch v-model="book.pixel"></el-switch>
                                        </div>
                                </div>
                                <div class="book-collapse">
                                        <div class="book-collapse-head">
                                                <div class="book-icon"> <i class="el-icon-s-management"></i> </div>
                                                <div class="rg">
                                                    <div class="label">支付方式</div>
                                                    <div class="title"></div>
                                                </div>
                                                <i class="el-icon-arrow-up"></i>
                                        </div>
                                        <div class="book-collapse-content">
                                            <div class="el-bottom">你可能会收到这条广告的多笔账单。详细了解 <a href="" class="link">详细了解</a> </div>
                                            <div class="el-bottom" style="text-align:center">
                                                    <i class="sp_MEDOBIx002c sx_bcba32"></i>
                                                    <i class="sp_MEDOBIx002c sx_6f2bdc"></i>
                                            </div>
                                            <div class="book-icon2 icon-primary">添加支付方式</div>
                                        </div>
                                </div>
                            </div>

                            <div style="height:50px"></div>
                        </div>
                        <div class="rq0escxv l9j0dhe7 du4w35lb qmfd67dx hpfvmrgz o387gat7 buofh1pr g5gj957u aov4n071 oi9244e8 bi6gxh9e h676nmdw aghb5jc5 rek2kq2y">
                            <div>
                                <div class="book-title el-margin">广告预览</div>
                                <div class="perview">
                                    <div class="perview-head">
                                        <div class="lf">
                                            <el-avatar src="../../assets/gao.png"></el-avatar>
                                            <div class="content"> 
                                                <div class="title">{{title.text}}</div>
                                                <div class="text"> 赞助内容 · <img src="../../assets/diqiu.png" alt=""> </div>
                                            </div>
                                        </div>
                                        <i class="el-icon-more"></i>
                                    </div>
                                    <div class="perview-content">
                                            <div class="title"> {{remark.text}} </div>
                                            <div class="img">  <img src="../../assets/gao.png" alt=""></div>
                                            <div class="content">
                                                    <div class="lf">
                                                            <div class="perview-url">{{book.url}}</div>
                                                            <div class="perview-title">{{title.text}}</div>
                                                    </div>
                                                    <div class="perview-button">{{buttonList[book.button-1].label}}</div>
                                            </div>
                                    </div>
                                    <div class="perview-footer">
                                            <ul class="perview-ul">
                                                <li>
                                                    <i class="icon-handle icon1"></i> <span >点赞</span>
                                                </li>
                                                <li>
                                                    <i class="icon-handle icon2"></i> <span >评论</span>
                                                </li>
                                                <li>
                                                    <i class="icon-handle icon3"></i> <span >分享</span>
                                                </li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="lpgh02oy" style="top: 72px;">
                                <span>
                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw ofv0k9yr g5ia77u1">
                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t buofh1pr tgvbjcpo muag1w35 enqfppq2">
                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw d2edcug0 aahdfvyu tvmbv18p">
                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw e5nlhep0 aodizinl">
                                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t buofh1pr tgvbjcpo">
                                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw d2edcug0 hv4rvrfc dati1w0a">
                                                            <div class="j83agx80 cbu4d94t ew0dbk1b irj2b8pg">
                                                                <div class="qzhwtbm6 knvmm38d">
                                                                    <h2 class="gmql0nx0 l94mrbxd p1ri9a11 lzcic4wl d2edcug0 hpfvmrgz" dir="auto">
                                                                        <span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb iv3no6db a5q79mjw g1cxx5fr lrazzd5p oo9gr5id hzawbc8m"
                                                                        dir="auto">
                                                                            <span class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ojkyduve" style="-webkit-box-orient: vertical; -webkit-line-clamp: 2; display: -webkit-box;">
                                                                                预估单日成效
                                                                            </span>
                                                                        </span>
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw d2edcug0 aahdfvyu tvmbv18p">
                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw i1fnvgqd gs1a9yip lhclo0ds btwxx1t3 hv4rvrfc dati1w0a jb3vyjys b5q2rw42 lq239pai mysgfdmx hddg9phg">
                                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t g5gj957u d2edcug0 hpfvmrgz d8ncny3e buofh1pr p8fzw8mz pcp91wgn iuny7tx3 ipjc6fyt">
                                                        <div class="">
                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw i1fnvgqd ll8tlv6m owycx6da btwxx1t3 discj3wi b5q2rw42 lq239pai mysgfdmx hddg9phg">
                                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t g5gj957u d2edcug0 hpfvmrgz rj1gh0hx buofh1pr p8fzw8mz pcp91wgn iuny7tx3 ipjc6fyt">
                                                                    <span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb mdeji52x e9vueds3 j5wam9gi lrazzd5p m9osqain"
                                                                    dir="auto">
                                                                        覆盖人数
                                                                        <span class="h676nmdw">
                                                                            <div aria-label="更多信息" class="oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 pq6dq46d mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l dwo3fsh8 pzggbiyp pkj7ub1o bqnlxs5p kkg9azqs c24pa1uk ln9iyx3p fe6kdd0r ar1oviwq l10q8mi9 sq40qgkc s8quxz6p pdjglbur"
                                                                            role="button" tabindex="0">
                                                                                <i class="hu5pjgll cwsop09l sp_JPRtGa-kpmy sx_1061b4">
                                                                                </i>
                                                                                <div class="s45kfl79 emlxlaya bkmhp75w spb7xbtv i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s"
                                                                                data-visualcompletion="ignore" style="inset: -8px;">
                                                                                </div>
                                                                            </div>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw d2edcug0 hpfvmrgz p8fzw8mz pcp91wgn iuny7tx3 ipjc6fyt">
                                                                    <span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 ns63r2gh fe6kdd0r mau55g9w c8b282yb iv3no6db o3w64lxj b2s5l15y knj5qynh oo9gr5id"
                                                                    dir="auto">
                                                                        823 - 2,377
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw i1fnvgqd gs1a9yip lhclo0ds btwxx1t3 hv4rvrfc dati1w0a jb3vyjys b5q2rw42 lq239pai mysgfdmx hddg9phg">
                                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t g5gj957u d2edcug0 hpfvmrgz d8ncny3e buofh1pr p8fzw8mz pcp91wgn iuny7tx3 ipjc6fyt">
                                                        <div class="">
                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw i1fnvgqd ll8tlv6m owycx6da btwxx1t3 discj3wi b5q2rw42 lq239pai mysgfdmx hddg9phg">
                                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t g5gj957u d2edcug0 hpfvmrgz rj1gh0hx buofh1pr p8fzw8mz pcp91wgn iuny7tx3 ipjc6fyt">
                                                                    <span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb mdeji52x e9vueds3 j5wam9gi lrazzd5p m9osqain"
                                                                    dir="auto">
                                                                        链接点击量
                                                                        <span class="h676nmdw">
                                                                            <div aria-label="更多信息" class="oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 pq6dq46d mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l dwo3fsh8 pzggbiyp pkj7ub1o bqnlxs5p kkg9azqs c24pa1uk ln9iyx3p fe6kdd0r ar1oviwq l10q8mi9 sq40qgkc s8quxz6p pdjglbur"
                                                                            role="button" tabindex="0">
                                                                                <i class="hu5pjgll cwsop09l sp_JPRtGa-kpmy sx_1061b4">
                                                                                </i>
                                                                                <div class="s45kfl79 emlxlaya bkmhp75w spb7xbtv i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s"
                                                                                data-visualcompletion="ignore" style="inset: -8px;">
                                                                                </div>
                                                                            </div>
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw d2edcug0 hpfvmrgz p8fzw8mz pcp91wgn iuny7tx3 ipjc6fyt">
                                                                    <span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 ns63r2gh fe6kdd0r mau55g9w c8b282yb iv3no6db o3w64lxj b2s5l15y knj5qynh oo9gr5id"
                                                                    dir="auto">
                                                                        70 - 202
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="jei6r52m dhix69tm wkznzc2l nvd5e08m ay7djpcl pwoa4pd7">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <span>
                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw ofv0k9yr g5ia77u1">
                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t buofh1pr tgvbjcpo muag1w35 enqfppq2">
                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw d2edcug0 aahdfvyu tvmbv18p">
                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw e5nlhep0 aodizinl">
                                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t buofh1pr tgvbjcpo">
                                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw d2edcug0 hv4rvrfc dati1w0a">
                                                            <div class="j83agx80 cbu4d94t ew0dbk1b irj2b8pg">
                                                                <div class="qzhwtbm6 knvmm38d">
                                                                    <h2 class="gmql0nx0 l94mrbxd p1ri9a11 lzcic4wl d2edcug0 hpfvmrgz" dir="auto">
                                                                        <span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb iv3no6db a5q79mjw g1cxx5fr lrazzd5p oo9gr5id hzawbc8m"
                                                                        dir="auto">
                                                                            <span class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ojkyduve" style="-webkit-box-orient: vertical; -webkit-line-clamp: 2; display: -webkit-box;">
                                                                                支付概要
                                                                            </span>
                                                                        </span>
                                                                    </h2>
                                                                </div>
                                                                <div class="qzhwtbm6 knvmm38d">
                                                                    <span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb iv3no6db jq4qci2q a3bd9o3v knj5qynh m9osqain hzawbc8m"
                                                                    dir="auto">
                                                                        <span class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7" style="-webkit-box-orient: vertical; -webkit-line-clamp: 3; display: -webkit-box;">
                                                                            你的广告将投放5天。
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw d2edcug0 aahdfvyu tvmbv18p">
                                                <div class="l9j0dhe7 dati1w0a hv4rvrfc n1l5q3vz">
                                                    <div class="bi6gxh9e aov4n071">
                                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw i1fnvgqd gs1a9yip owycx6da btwxx1t3 jb3vyjys b5q2rw42 lq239pai mysgfdmx hddg9phg">
                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw d2edcug0 hpfvmrgz p8fzw8mz pcp91wgn iuny7tx3 ipjc6fyt">
                                                                <div class="j83agx80 cbu4d94t ew0dbk1b irj2b8pg">
                                                                    <div class="qzhwtbm6 knvmm38d">
                                                                        <span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb iv3no6db jq4qci2q a3bd9o3v knj5qynh oo9gr5id hzawbc8m"
                                                                        dir="auto">
                                                                            总预算
                                                                        </span>
                                                                    </div>
                                                                    <div class="qzhwtbm6 knvmm38d">
                                                                        <span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb mdeji52x e9vueds3 j5wam9gi knj5qynh m9osqain hzawbc8m"
                                                                        dir="auto">
                                                                            ¥34.00/天 x 5天。
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw d2edcug0 hpfvmrgz p8fzw8mz pcp91wgn iuny7tx3 ipjc6fyt">
                                                                <div class="j83agx80 cbu4d94t ew0dbk1b irj2b8pg">
                                                                    <div class="qzhwtbm6 knvmm38d">
                                                                        <span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb iv3no6db jq4qci2q a3bd9o3v knj5qynh oo9gr5id hzawbc8m"
                                                                        dir="auto">
                                                                            ¥170.00 CNY
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <div>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bp9cbjyn cwj9ozl2 i09qtzwb gez4vhu6 j83agx80 cbu4d94t poy2od1o k4urcfbm">
                    <div class="rq0escxv d2edcug0 ecyo15nh hv4rvrfc dati1w0a">
                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw taijpn5t gs1a9yip lhclo0ds btwxx1t3 sv5sfqaa o22cckgh obtkqiv7 fop5sh7t">
                            <div class="rq0escxv l9j0dhe7 du4w35lb gderk4og hpfvmrgz dxtxif39 buofh1pr g5gj957u aov4n071 oi9244e8 bi6gxh9e h676nmdw aghb5jc5">
                                <div class="f10w8fjw pybr56ya">
                                    <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw i1fnvgqd bp9cbjyn owycx6da btwxx1t3">
                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t g5gj957u d2edcug0 hpfvmrgz rj1gh0hx buofh1pr">
                                            <div class="tvfksri0 j83agx80 bp9cbjyn">
                                                <span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb mdeji52x e9vueds3 j5wam9gi knj5qynh oo9gr5id"
                                                dir="auto">
                                                    点击立即推广，即表示你同意 Facebook 的
                                                    <div class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl oo9gr5id gpro0wi8 lrazzd5p"
                                                    role="button" tabindex="0">
                                                        <span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 e9vueds3 j5wam9gi lrazzd5p py34i1dx">
                                                            条款和条件
                                                        </span>
                                                    </div>
                                                </span>
                                                <div class="rfua0xdk h676nmdw oi9244e8 cyypbtt7 asscux74">
                                                </div>
                                                <a class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 gpro0wi8"
                                                href="/business/content_ref/?callsite=LWI_SUBMISSION_SECTION&amp;name=HELP_CENTER"
                                                role="link" tabindex="0" target="_blank">
                                                    <span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb mdeji52x e9vueds3 j5wam9gi lrazzd5p py34i1dx"
                                                    dir="auto">
                                                        帮助中心
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t pfnyh3mw d2edcug0 hpfvmrgz">
                                            <div aria-label="立即推广" class="oajrlxb2 c98fg2ug gcieejh5 bn081pho humdl8nn izx4hr6d rq0escxv rj84mg9z j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys tkv8g59h qt6c0cv9 fl8dtwsd i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss cbu4d94t taijpn5t ni8dbmo4 stjgntxs k4urcfbm tv7at329"
                                            role="button" tabindex="-1" aria-disabled="true">
                                                <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 pfnyh3mw taijpn5t bp9cbjyn owycx6da btwxx1t3 c4xchbtz by2jbhx6">
                                                    <div class="rq0escxv l9j0dhe7 du4w35lb d2edcug0 hpfvmrgz j83agx80 j5wkysh0 hytbnt81">
                                                        <span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d3f4x2em fe6kdd0r mau55g9w c8b282yb iv3no6db jq4qci2q a3bd9o3v lrazzd5p erlsw9ld"
                                                        dir="auto">
                                                            <span class="a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5">
                                                                立即推广
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="n00je7tq arfg74bv qs9ysxi8 k77z8yql i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s"
                                                data-visualcompletion="ignore">
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
</template>

<script>
import bookInput from "@/common/book-input"
export default {
    components:{
        bookInput
    },
    data() {
        return {
            platform:[
                {
                    checked:true,
                    title:"Facebook",
                    disabled:true
                },
                {
                    checked:true,
                    title:"Messenger"
                },
            ],
            remark:{
                title:"描述",
                text:"广告"
            },
            title:{
                title:"标题",
                text:"这是潇潇"
            },
            book:{
                button:1,
                url:"",
                expect:1,
                date:{
                    day:"",
                    date:""
                },
                class:false
            },
            buttonList:[
                {
                    label:"立即申请",
                    value:1
                },
                {
                    label:"立即预订",
                    value:2
                },
                {
                    label:"联系我们",
                    value:3
                },
                {
                    label:"立即捐款",
                    value:4
                },
                {
                    label:"下载",
                    value:5
                },
                {
                    label:"详细了解",
                    value:6
                },{
                    label:"预约时间",
                    value:7
                },{
                    label:"查看菜单",
                    value:8
                },
                {
                    label:"去逛逛",
                    value:9
                },
                {
                    label:"立即注册",
                    value:10
                },
                {
                    label:"更多视频",
                    value:11
                },

            ]
        };
    },
    computed:{
        showPlatform(){
            return this.platform.filter(x=>x.checked).map(x=>x.title).join(",")
        }
        
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped >
.el-card{
    padding: 15px;
    margin-bottom: 15px;
}

.website-head{
    display: flex;
}
.website-head>.lf{
    flex: 1;
}
.website-content{
    height: 300px;
    overflow: hidden;
    position: relative;
    margin-top: 15px;
}
.website-content>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.website-content>.book-icon2{
    position: absolute;
    bottom: 5%;
    right: 5%;
}
.website-item{
    background-color: #F0F2F5;
    padding:10px 15px;
    margin-bottom: 10px;
}
.el-radio{
    display: flex;
    margin: 10px;
}


.website-money{
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
}
.website-money>.text{
    font-size: 17px;
    margin-bottom: 15px;
}
.website-money>.title{
    display: flex;
    align-items: center;
    color: #1877F2;
    font-size: 20px;
    justify-content: center;
}
.website-biao{
    padding: 15px;
    background-color: #E4E6EB;
}


.book-collapse{
    margin-bottom: 15px;
}
.book-collapse-head{
    display: flex;
    align-items: center;
    padding: 8px 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    cursor: pointer;
}
.book-collapse-content{
    padding: 0 10px;
}
.book-collapse-head>.rg>.label{
    font-size: 12px;
    color: #666;
}
.book-collapse-head>.rg>.title{
    font-size: 18px;
}
.book-collapse-head:hover{
    background-color: #eee;
}
.book-collapse-head>.rg{
    flex: 1;
}
.book-collapse-head>i{
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
}

.bactive>.book-collapse-head{
    background-color: #EAF3FF;
}

.bactive>.book-collapse-head .book-icon{
    background-color: #1877F2;
    color: #fff;
}


.sp_MEDOBIx002c {
    background-image: url(../../assets/bank.png);
    background-size: auto;
    background-repeat: no-repeat;
    display: inline-block;
    height: 20px;
    width: 30px;
}
.sp_MEDOBIx002c.sx_6f2bdc {
    background-position: -248px -527px;
}
.sp_MEDOBIx002c.sx_bcba32 {
    background-position: -62px -548px;
}


/*预览 */
.perview-head{
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
}
.perview-head>.lf{
    display: flex;
    align-items: center;
}
.perview-head>.lf img{
    width: 10px;
}
.perview-head>.lf>.content{
    margin-left: 10px;
}
.perview-head>.lf>.content>.title{
    font-size: 15px;
    font-weight: 500;
}
.perview-head>.lf>.content>.text{
    font-size: 12px;
    color: #999;
}
.perview-content>.img{
    height: 200px;
    overflow: hidden;
}
.perview-content>.img>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.perview-content>.title{
    background-color: #fff;
    padding: 0 15px 10px 15px;
}
.perview-content>.content{
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.perview-content>.content>.lf{
    flex: 1;
}
.perview-url{
    color: #666;
}
.perview-title{
    word-break: break-all;
    font-weight: bold;
}
.perview-button{
    border:1px solid #666;
    padding: 2px 5px;
    font-size: 12px;
}


.perview-footer{
    background-color: #fff;
    padding-top: 10px;
}
.perview-ul{
    display: flex;
    border-top: 1px solid #eee;
}
.perview-ul>li{
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px 0;
}
.perview-ul>li>i{
    margin-right: 5px;
}
.perview-ul>li:hover{
    background-color: #eee;
    cursor: pointer;
}
</style>

<style>
    .website-money>.title .el-input__inner,.website-money>.title .el-input{
        outline: none;
        border: 0;
        width: auto;
        color: #1877F2;
        font-size: 35px;
        text-align: center;
        width: 100px;
    }
</style>