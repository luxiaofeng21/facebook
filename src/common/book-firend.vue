<template>
  <div class="book-firend">
    
    <div class="book-tou katn9ffz">
      <div
        class="tou-bg"
        :style=" me_ul.bg_img? `background-image:url(${me_ul.bg_img});background-size:cover;`: '' "
      >
        <div class="tou-img">
          <img :src="me_ul.me_img" alt="" />
          <el-upload
            v-if="type == 'me'"
            class="upload-img"
            :action="'api/uploadImg'"
            accept="image/*"
            :on-success="handlePreview"
          >
            <span class="book-icon"> <i class="el-icon-camera-solid"></i></span>
          </el-upload>
        </div>
        <el-upload
          v-if="type == 'me'"
          class="upload-img"
          :action="'api/uploadImg'"
          accept="image/*"
          :on-success="handlePreview2"
        >
          <div class="book-icon2" v-if="type == 'me'">
            <i class="el-icon-camera-solid"></i> 添加封面照片
          </div>
        </el-upload>
      </div>
      <div class="tou-title">{{ me_ul.user_name }}</div>
      <div class="tou-text">{{ me_ul.text }}</div>
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
            <el-button size="medium" slot="reference" class="book-down"
              >展开 <i class="el-icon-caret-bottom"></i>
            </el-button>
          </el-popover>
        </div>
        <div class="rg">
          <div class="book-icon2" v-if="type == 'me'" @click="dialogVisible2 = true">
            <i class="el-icon-edit"></i> 编辑个人主页
          </div>
          <div class="book-icon2 icon-success" v-else>
            <i class="el-icon-s-custom"></i> 加为好友
          </div>
          <div class="book-icon2">
            <i class="friend-icon msg-icon"></i>
          </div>
          <div class="book-icon2" @click="dialogVisible = true">
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
    </div>
    <div class="about">
      <div class="katn9ffz">
        <div class="book-container" v-if="activeName == 0">
          <div class="lf">
            <div class="book-card">
              <div class="book-title2">个人资料</div>
              <ul class="me-ul">
                <li>
                  <img src="../assets/bao.png" alt="" />
                  <span class="me-label">蓝翔 - 总经理</span>
                </li>
                <li>
                  <img src="../assets/maozi.png" alt="" />
                  <span class="me-label">曾经就读：蓝翔大学</span>
                </li>
                <li>
                  <img src="../assets/home.png" alt="" />
                  <span class="me-label">所在地</span>
                  <span class="me-title"> <a href="">上海</a> </span>
                </li>
                <li>
                  <img src="../assets/city.png" alt="" />
                  <span class="me-label">所在地</span>
                  <span class="me-title"> <a href="">上海</a> </span>
                </li>
                <li>
                  <img src="../assets/xin.png" alt="" />
                  <span class="me-label">单身</span>
                </li>
              </ul>
              <ul class="interest-ul">
                <li>
                  <span>🎤唱歌</span>
                </li>
                <li>
                  <span>📖阅读</span>
                </li>
              </ul>
            </div>
            <div class="book-card">
              <div class="flex">
                <div class="book-title2">照片</div>
                <div class="link">所有照片</div>
              </div>
              <share-list :list="imgAll" :type="'vertical'"></share-list>
            </div>
            <div class="book-card">
              <div class="flex">
                <div class="book-title2">好友</div>
                <div class="link">全部好友</div>
              </div>
              <share-list :list="friend" :type="'vertical'"></share-list>
            </div>
          </div>
          <div class="rg">
            <tie-list :show="show" v-if="type == 'me'"></tie-list>
            <post-list :list="list"></post-list>
            <div class="el-null" v-if="list.length <= 0">
              <img src="../assets/null4.svg" />
              暂无帖子~
            </div>
          </div>
        </div>
        <div class="sjgh65i0" v-else-if="activeName == 1">
          <div class="j83agx80 l9j0dhe7 k4urcfbm">
            <div
              style="
                border-radius: max(0px, min(8px, -999900% - 39996px + 999900vw)) / 8px;
              "
              class="rq0escxv l9j0dhe7 du4w35lb hybvsw6c ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi ni8dbmo4 stjgntxs k4urcfbm sbcfpzgs"
            >
              <div class="j83agx80">
                <div
                  class="ls2amcm3 pcp91wgn ihqw7lf3 p8fzw8mz discj3wi pfnyh3mw rq0escxv maa8sdkg"
                >
                  <div class="aahdfvyu gu00c43d o3lre8g0 sej5wr8e">
                    <h2
                      class="oo9gr5id o3w64lxj hnhda86s lzcic4wl oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j muag1w35 ew0dbk1b b2s5l15y"
                      dir="auto"
                      tabindex="-1"
                    >
                      <a
                        class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl gmql0nx0 gpro0wi8 hnhda86s"
                        href="/lucinara.rodrigues.35/about"
                        role="link"
                        tabindex="0"
                      >
                        简介
                      </a>
                    </h2>
                  </div>
                  <div
                    class="bi6gxh9e"
                    v-for="(item, index) in menu"
                    :key="index"
                    @click="getmenu(index)"
                  >
                    <a
                      :class="mactive == index ? 'oo1teu6h q66pz984' : ''"
                      class="oajrlxb2 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 a8c37x1j p7hjln8o kvgmc6g5 cxmmr5t8 tvmbv18p hcukyx3x pybr56ya rv4hoivh f10w8fjw h4z51re5 i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l beltcj47 p86d2i9g aot14ch1 kzx2olss"
                    >
                      <span
                        class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j muag1w35 ew0dbk1b jq4qci2q a3bd9o3v lrazzd5p ni8dbmo4 stjgntxs ltmttdrg g0qnabr5"
                        dir="auto"
                      >
                        {{ item }}
                      </span>
                    </a>
                  </div>
                </div>
                <div
                  class="about-list rq0escxv l9j0dhe7 du4w35lb j83agx80 i1fnvgqd gs1a9yip owycx6da btwxx1t3 hv4rvrfc dati1w0a discj3wi b5q2rw42 lq239pai mysgfdmx hddg9phg"
                >
                <div class="el-block" v-if="mactive == 0">
                     <ul class="me-ul" v-if="type!='me'">
                        <li>
                          <img src="../assets/bao.png" alt="" />
                          <span class="me-null">无工作地点可显示</span>
                        </li>
                        <li>
                          <img src="../assets/maozi.png" alt="" />
                          <span class="me-label"
                            >曾经就读：Lonoy Heroes Memorial High School</span
                          >
                        </li>
                        <li>
                          <img src="../assets/home.png" alt="" />
                          <span class="me-label">所在地：<a href="">Tagbilaran City</a></span>
                        </li>
                        <li>
                          <img src="../assets/city.png" alt="" />
                          <span class="me-label">来自：<a href="">上海</a></span>
                        </li>
                        <li>
                          <img src="../assets/xin.png" alt="" />
                          <span class="me-null">无感情状况可显示</span>
                        </li>
                  </ul>
                  <div v-else> 
                        <edit-info class="el-bottom" img="../assets/bao.png"  :title.sync="me_ul.job"   label="添加工作"></edit-info>
                        <edit-info class="el-bottom" img="../assets/maozi.png"  :title.sync="me_ul.university"   label="添加大学"></edit-info>
                        <edit-info class="el-bottom" img="../assets/home.png"  :title.sync="me_ul.senior"   label="添加高中"></edit-info>
                        <edit-info class="el-bottom" img="../assets/home.png"  :title.sync="me_ul.residence"   label="居住地"></edit-info>
                        <edit-info class="el-bottom" img="../assets/city.png" :title.sync="me_ul.hometown"   label="家乡"></edit-info>
                        <edit-info class="el-bottom" img="../assets/xin.png" :title.sync="me_ul.feeling"  label="感情状况"></edit-info>
                        <edit-info class="el-bottom" icon="el-icon-mobile-phone"  :title.sync="me_ul.tell"   label="联系方式"></edit-info>
                  </div>
                </div>
                 
                  <div v-else-if="mactive == 1" class="el-block">
                    <div class="el-bottom">
                          <div class="book-title el-bottom">工作</div>
                          <ul class="me-ul">
                              <li>
                                <img src="../assets/bao.png" alt="" />
                                <span class="me-null">无工作地点可显示</span>
                            </li>
                          </ul>
                          <edit-info v-if="type=='me'" :title.sync="me_ul.job"   label="添加工作"></edit-info>
                    </div>
                    <div class="el-bottom">
                          <div class="book-title el-bottom">大学</div>
                          <ul class="me-ul">
                              <li>
                                <img src="../assets/bao.png" alt="" />
                                <span class="me-null">无学校资料可显示</span>
                            </li>
                          </ul>
                          <edit-info v-if="type=='me'" :title.sync="me_ul.university"   label="添加大学"></edit-info>
                    </div>
                    <div class="el-bottom">
                          <div class="book-title el-bottom">高中</div>
                          <ul class="me-ul">
                                    <li>
                              <img src="../assets/school.png" alt="" style="filter: none" />
                              <span class="me-label"
                                >曾经就读：Lonoy Heroes Memorial High School</span
                              >
                            </li>
                          </ul>
                          <edit-info v-if="type=='me'" :title.sync="me_ul.senior"   label="添加高中"></edit-info>
                    </div>
                     
                  </div>
                  <div v-else-if="mactive == 2">
                    <div class="el-bottom book-title">居住地</div>
                    <edit-info v-if="type=='me'" :title.sync="me_ul.residence"   label="居住地"></edit-info>
                    <edit-info v-if="type=='me'" :title.sync="me_ul.hometown"   label="家乡"></edit-info>
                    <ul class="address-ul">
                          <li>
                            <el-avatar :src="me_ul.me_img"></el-avatar>
                            <div class="content">
                              <a class="title">上海市</a>
                              <div class="text">所在地</div>
                            </div>
                          </li>
                          <li>
                            <el-avatar :src="me_ul.me_img"></el-avatar>
                            <div class="content">
                              <a class="title">上海市</a>
                              <div class="text">家乡</div>
                            </div>
                          </li>
                    </ul>
                    
                  </div>
                  <div v-else-if="mactive == 3" class="el-block">
                    <ul class="me-ul">
                       <div class="el-bottom">
                            <div class="el-bottom book-title">联系方式</div>
                            <ul class="me-ul" v-if="type!='me'">
                                <li>
                                  <img src="../assets/shenfen.png" alt="" />
                                  <div class="me-null">无联系方式可显示</div>
                                </li>
                            </ul>
                             <edit-info v-else :title.sync="me_ul.tell"   label="联系方式"></edit-info>
                      </div>
                      <div class="el-bottom">
                            <div class="el-bottom book-title">网站和社交链接</div>
                            <ul class="me-ul" v-if="type!='me'">
                              <li>
                                <i class="el-icon-paperclip"> </i>
                                <div class="me-null">无链接可显示</div>
                              </li>
                            </ul>
                             <edit-info v-else :title.sync="me_ul.url"  label="网站和社交链接"></edit-info>
                      </div>
                      <div class="el-bottom">
                            <div class="el-bottom book-title">基本信息</div>
                            <ul class="me-ul" v-if="type!='me'">
                                <li>
                                  <i class="el-icon-s-custom"> </i>
                                  <div class="me-label">
                                    <span>男</span>
                                    <div class="me-text">性别</div>
                                  </div>
                                </li>
                            </ul>
                            <edit-info v-else :title.sync="me_ul.sex"  icon="el-icon-s-custom" label="性别"></edit-info>
                      </div>
                      
                    </ul>
                  </div>
                  <div v-else-if="mactive == 4" class="el-block">
                    <div class="el-bottom ">
                        <div class="el-bottom book-title">感情状况</div>
                        <ul class="me-ul" v-if="type!='me'">
                          <li>
                            <img src="../assets/xin.png" alt="" />
                            <span class="me-null">无感情状况可显示</span>
                          </li>
                        </ul>
                        <edit-info v-else :title.sync="me_ul.feeling"  label="感情状况"></edit-info>
                    </div>
                    <div class="el-bottom">
                          <div class="el-margin book-title">家庭成员</div>
                          <edit-info img="jia.png" :title.sync="me_ul.family"  label="家庭成员"></edit-info>
                    </div>
                  </div>
                  <div v-else-if="mactive==5" class="el-block"> 
                        <div class="el-bottom">
                          <div  class="book-title el-bottom">个人信息</div>
                          <edit-info img="guanyu.png" :title.sync="me_ul.sign"  label="详细介绍自己"></edit-info>
                        </div>
                        <div class="el-bottom">
                            <div  class="book-title el-bottom">姓名读音</div>
                            <edit-info img="yin.png" :title.sync="me_ul.sounds" label="姓名读音"></edit-info>
                        </div>
                         <div class="el-bottom">
                           <div  class="book-title el-bottom">其他名字</div>
                           <edit-info img=""  :title.sync="me_ul.other" label="添加昵称、乳名..."></edit-info>
                        </div>
                        <div class="el-bottom">
                           <div  class="book-title el-bottom">喜爱的人生引言</div>
                           <edit-info  :title.sync="me_ul.quote" label="喜爱的人生引言"></edit-info>
                        </div>
                  </div>
                  <div v-else-if="mactive==6" class="el-block"> 
                        <div class="el-bottom">
                          <div  class="book-title el-bottom">生活纪事</div>
                          <edit-info  icon="el-icon-s-management" :type="type" :title.sync="me_ul.life"  label="生活纪事"></edit-info>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="book-card" v-else-if="activeName == 2">
          <div class="book-title2">好友</div>
          <el-tabs v-model="tabs[0]">
            <el-tab-pane label="粉丝" name="1"></el-tab-pane>
            <el-tab-pane label="粉已关注" name="2"></el-tab-pane>
          </el-tabs>
          <share-list :list="friend" :type="'friend'"></share-list>
          <el-button type="info">查看全部</el-button>
        </div>
        <div class="book-card" v-else-if="activeName == 3">
          <div class="book-title2">相册</div>
          <el-tabs v-model="tabs[1]">
            <el-tab-pane :label="me_ul.user_name + '的相册'" name="1"></el-tab-pane>
            <el-tab-pane label="相册" name="2"></el-tab-pane>
          </el-tabs>
          <share-list :list="imgAll" :type="'vertical'"></share-list>
          <el-button type="info">查看全部</el-button>
        </div>
        <div class="book-card" v-else-if="activeName == 4">
          <div class="book-title2">视频</div>
          <div class="el-null" v-if="videos.length <= 0">这里空空如也~</div>
          <div v-else>
            <el-tabs v-model="tabs[2]">
              <el-tab-pane :label="me_ul.user_name + '的视频'" name="1"></el-tab-pane>
            </el-tabs>
            <share-list :list="videos" :type="'vertical'"></share-list>
            <el-button type="info">查看全部</el-button>
          </div>
        </div>
        <div class="book-card" v-else-if="activeName == 5">
          <div class="book-title2">签到</div>
          <div class="el-null" v-if="signs.length <= 0">这里空空如也~</div>
          <div v-else>
            <el-tabs value="1">
              <el-tab-pane label="最近去过" name="1"></el-tab-pane>
            </el-tabs>
            <share-list :list="signs"></share-list>
          </div>
        </div>
        <div class="book-card" v-if="sports.length > 0">
          <div class="book-title2">运动</div>
          <el-tabs v-model="tabs[3]">
            <el-tab-pane label="运动队" name="1"></el-tab-pane>
            <el-tab-pane label="运动员" name="2"></el-tab-pane>
          </el-tabs>
          <share-list :list="sports" :type="'vertical'"></share-list>
          <el-button type="info">查看全部</el-button>
        </div>
        <div class="book-card" v-if="music.length > 0">
          <div class="book-title2">音乐</div>
          <share-list :list="music"></share-list>
        </div>
        <div class="book-card" v-if="movies.length > 0">
          <div class="book-title2">电影</div>
          <share-list :list="movies"></share-list>
        </div>
        <div class="book-card" v-if="Tvs.length > 0">
          <div class="book-title2">电视节目</div>
          <share-list :list="Tvs"></share-list>
        </div>
        <div class="book-card" v-if="books.length > 0">
          <div class="book-title2">书籍</div>
          <share-list :list="books"></share-list>
        </div>
        <div class="book-card" v-if="gooks.length > 0">
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
          <share-list :list="gooks" :type="'vertical'"></share-list>
        </div>
        <div class="book-card" v-if="activity.length > 0">
          <div class="book-title2">活动</div>
          <share-list :list="activity"></share-list>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="500px">
      <div class="dialog-title2" style="width: 80%">
        <el-input
          prefix-icon="el-icon-search"
          class="search"
          :placeholder="`搜索${me_ul.user_name}的个人主页`"
          v-model="search"
        ></el-input>
      </div>
      <div class="search_con" v-if="search == ''">
        <img class="el-margin" :src="me_ul.me_img" alt="" />
        <div class="search_title">想找啥？搜搜吧！</div>
        <div class="search_text">
          搜索DA Cellphone Cases的个人主页，查找帖子、照片和其他可见动态。
        </div>
      </div>
      <div v-else>
        <div class="search-li">
          <div class="book-icon"><i class="el-icon-search"></i></div>
          <span>{{ search }}</span>
        </div>
      </div>
      <span v-if="search != ''" slot="footer">
        <div class="search-li">
          <div class="book-icon icon-checked"><i class="el-icon-search"></i></div>
          <span>在这个个人主页里搜索{{ search }}</span>
        </div>
      </span>
    </el-dialog>
    <el-dialog append-to-body title="编辑个人主页" :visible.sync="dialogVisible2" width="700px">
      <div class="edit-page">
        <div class="el-bottom">
          <div class="flex el-bottom">
            <span class="book-title2">头像</span>
            <span class="link">编辑</span>
          </div>
          <el-avatar :size="100" :src="me_ul.me_img"></el-avatar>
        </div>
        <div class="el-bottom">
          <div class="flex el-bottom">
            <span class="book-title2">封面</span>
            <span class="link">编辑</span>
          </div>
          <div class="feng-img">
            <img :src="me_ul.bg_img" alt="" />
          </div>
        </div>
        <div class="el-bottom">
          <div class="flex el-bottom">
            <span class="book-title2">个性签名</span>
            <span class="link">添加</span>
          </div>
          <div class="book-null"> 介绍一下自己呗…</div>
        </div>
         <div class="el-bottom">
          <div class="flex el-bottom">
            <span class="book-title2">定制个人资料</span>
            <span class="link">编辑</span>
          </div>
          <ul class="me-ul">
                <li>
                  <img src="../assets/bao.png" alt="" />
                  <span class="me-label">蓝翔 - 总经理</span>
                </li>
                <li>
                  <img src="../assets/maozi.png" alt="" />
                  <span class="me-label">曾经就读：蓝翔大学</span>
                </li>
                <li>
                  <img src="../assets/home.png" alt="" />
                  <span class="me-label">所在地</span>
                  <span class="me-title"> <a href="">上海</a> </span>
                </li>
                <li>
                  <img src="../assets/city.png" alt="" />
                  <span class="me-label">所在地</span>
                  <span class="me-title"> <a href="">上海</a> </span>
                </li>
                <li>
                  <img src="../assets/xin.png" alt="" />
                  <span class="me-label">单身</span>
                </li>
            </ul>
        </div>
        <div class="el-bottom">
          <div class="flex el-bottom">
            <span class="book-title2">爱好</span>
            <span class="link">编辑</span>
          </div>
          <ul class="interest-ul">
                <li>
                  <span>🎤唱歌</span>
                </li>
                <li>
                  <span>📖阅读</span>
                </li>
          </ul>
        </div>
        <div class="el-bottom">
          <div class="flex el-bottom">
            <span class="book-title2">精选</span>
            <span class="link">编辑</span>
          </div>
          <share-list :list="imgAll" type="vertical"></share-list>
        </div>
      </div>
      <span slot="footer">  <el-button @click="dialogVisible2=false;activeName='1'" type="primary" plain>编辑你的简介信息</el-button> </span>
    </el-dialog>
  </div>
</template>
<script>
import shareList from "@/common/share-list";
import bookInput from "@/common/book-input";
import postList from "@/common/post-list";
import tieList from "@/common/tie-list";
import editInfo from "@/common/edit-info";
export default {
  components: {
    editInfo,
    tieList,
    postList,
    shareList,
    bookInput,
  },
  props: ["uid","type"],
  data() {
    return {
      id:"",
      me_ul:{},
      dialogVisible2: false,
      list: [],
      show: false,
      signs: [],
      videos: [],
      sports: [
        {
          img: require("@/assets/activity.jpg"),
          title: "LHMHS Grade 10 Intramural Meet 2k16 Blue Eagle Team",
          text: "运动员",
        },
        {
          img: require("@/assets/activity.jpg"),
          title: "LHMHS Grade 10 Intramural Meet 2k16 Blue Eagle Team",
          text: "运动员",
        },
        {
          img: require("@/assets/activity.jpg"),
          title: "LHMHS Grade 10 Intramural Meet 2k16 Blue Eagle Team",
          text: "运动员",
        },
        {
          img: require("@/assets/activity.jpg"),
          title: "LHMHS Grade 10 Intramural Meet 2k16 Blue Eagle Team",
          text: "运动员",
        },
      ],
      music: [
        {
          img: require("@/assets/me.jpg"),
          title: "艾米",
          text: "歌手乐队",
        },
        {
          img: require("@/assets/me.jpg"),
          title: "艾米",
          text: "歌手乐队",
        },
        {
          img: require("@/assets/me.jpg"),
          title: "艾米",
          text: "歌手乐队",
        },
      ],
      movies: [
        {
          img: require("@/assets/groupBg.png"),
          title: "小城爱情故事",
          text: "电影",
        },
        {
          img: require("@/assets/groupBg.png"),
          title: "小城爱情故事",
          text: "电影",
        },
        {
          img: require("@/assets/groupBg.png"),
          title: "小城爱情故事",
          text: "电影",
        },
        {
          img: require("@/assets/groupBg.png"),
          title: "小城爱情故事",
          text: "电影",
        },
      ],
      Tvs: [
        {
          img: require("@/assets/groupBg.png"),
          title: "小城爱情故事",
          text: "电视节目",
        },
        {
          img: require("@/assets/groupBg.png"),
          title: "小城爱情故事",
          text: "电视节目",
        },
        {
          img: require("@/assets/groupBg.png"),
          title: "小城爱情故事",
          text: "电视节目",
        },
        {
          img: require("@/assets/groupBg.png"),
          title: "小城爱情故事",
          text: "电视节目",
        },
      ],
      books: [
        {
          img: require("@/assets/activity.jpg"),
          title: "旅游规律教化书",
        },
        {
          img: require("@/assets/activity.jpg"),
          title: "旅游规律教化书",
        },
      ],
      gooks: [
        {
          img: require("@/assets/me.jpg"),
          title: "张小姐",
          text: "音乐人",
        },
        {
          img: require("@/assets/me.jpg"),
          title: "张小姐",
          text: "音乐人",
        },
        {
          img: require("@/assets/me.jpg"),
          title: "张小姐",
          text: "音乐人",
        },
        {
          img: require("@/assets/me.jpg"),
          title: "张小姐",
          text: "音乐人",
        },
      ],
      activity: [
        {
          img: require("@/assets/activity.jpg"),
          title: "嘿嘿嘿",
          date: new Date(),
        },
      ],
      friend: [
        {
          img: require("@/assets/me.jpg"),
          title: "枫果果",
        },
        {
          img: require("@/assets/me.jpg"),
          title: "枫果果",
        },
      ],
      imgAll: [
        {
          img: require("@/assets/bg.jpg"),
          title: "呵呵",
        },
      ],
      tabs: ["1", "1", "1", "1", "1"],
     
      menu: [
        "概览",
        "工作与学历",
        "居住地",
        "联系方式和基本信息",
        "家庭成员与感情状况",
        "你的详细资料",
        "生活纪事",
      ],
       mactive: 0,
      activeName: "0",
      search: "",
      dialogVisible: false,
    };
  },
  methods: {
    getmenu(i) {
      this.mactive = i;
    },
    getfile(file, state) {
      var that = this;
      var user_info = this.$store.state.user_info;
      var name = file.data.name;
      if (state == 1) {
        user_info.me_img = name;
        this.me_ul.me_img = name;
      } else {
        user_info.bg_img = name;
        this.me_ul.bg_img =name;
      }

      this.$axios.post("/api/setUser", user_info).then((res) => {
        localStorage.setItem("user_info", JSON.stringify(res));
        that.$store.commit("edit", res);
        that.$message.success(res.msg);
      });
    },
    handlePreview(file) {
      this.getfile(file, 1);
    },
    handlePreview2(file) {
      this.getfile(file, 2);
    },
  },
  created(){
    var id=this.$route.query.id
    if(id){
          this.id=id
    }else{
          this.id=this.uid
    }
  },
 watch:{
    $route(to,from){
        this.id=to.query.id
    },
    id(id,old){
      //获取帖子
      this.$axios.get("/api/getrecommended?uid=" + id).then((res) => {
        this.list = res;
      });
      //获取用户信息
      this.$axios.get("/api/getuserInfo?id="+id).then(res=>{
        this.me_ul=res.data
      })
    }
 }
};
</script>
<style>
/*导航*/
.el-tabs__header {
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
.el-tabs__item {
  height: 45px;
}
.el-upload-list {
  display: none;
}

.el-button i{
  margin: 0
}
</style>
<style scoped>
@import "../css/friend.css";
.edit-page {
  text-align: center;
}
.feng-img{
  height: 250px;
}
.feng-img>img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}
</style>
