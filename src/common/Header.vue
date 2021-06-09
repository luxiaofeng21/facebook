<template>
  <div role="banner">
    <div style="height: 62px"></div>
    <el-popover width="250">
          <div class="bp9cbjyn rq0escxv j83agx80 buofh1pr byvelhso dhix69tm poy2od1o j9ispegn kr520xx4 ehxjyohh" slot="reference">
                <router-link
                  aria-label="Facebook"
                  class="oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 q9uorilb mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l pedkr2u6 ms05siws pnx7fd3z nf1dmkjp"
                  to="/"
                  role="link"
                  tabindex="0"
                >
                  <svg
                    viewBox="0 0 36 36"
                    class="a8c37x1j ms05siws hwsy1cff b7h9ocf4"
                    fill="url(#jsc_s_2)"
                    height="40"
                    width="40">
                    <defs>
                      <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_2">
                        <stop offset="0%" stop-color="#0062E0"></stop>
                        <stop offset="100%" stop-color="#19AFFF"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"
                    ></path>
                    <path
                      class="p361ku9c"
                      d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
                    ></path>
                  </svg>
                </router-link>
                <div class="book-search"  >
                    <el-input prefix-icon="el-icon-search" placeholder="搜索facebook"></el-input>
                </div>
          </div>
          <div class="book-search-item">
                <div class="flex el-bottom">
                    <span class="book-title2">近期搜索</span>
                    <span class="link">编辑</span>
                </div>
                <cart-list :list="news" @getcart="geturl"></cart-list>
          </div>
    </el-popover>
    <div class="kr520xx4 j9ispegn poy2od1o n7fi1qx3 tkr6xdv7">
      <div class="rq0escxv l9j0dhe7 du4w35lb cddn0xzi j83agx80 cbu4d94t byvelhso">
        <div class="rq0escxv l9j0dhe7 du4w35lb j83agx80 cbu4d94t bkfpd7mw">
          <!--$-->
          <div aria-label="Facebook" class="taijpn5t cb02d2ww j83agx80" role="navigation">
            <ul class="thodolrn ojvp67qx taijpn5t buofh1pr j83agx80 aovydwv3 bqdfd6uv">
              <li
                class="buofh1pr to382e16 o5zgeu5y jrc8bbd0 dawyy4b1 hw7htvoc"
                v-for="(item, index) in tabNav"
                :key="index"
                v-on:click="getNav(index)"
              >
                <span
                  class="tojvnm2t a6sixzi8 abs2jz4q a8s20v7p t1p8iaqh k5wvi7nf q3lfd5jv pk4s997a bipmatt0 cebpdrjk qowsmv63 owwhemhu dp1hu0rb dhp61c6y iyyx5f41"
                >
                  <div class="bp9cbjyn j83agx80 cb02d2ww l9j0dhe7">
                    <div
                      :class=" hactive == index? 'ooq845xs s44p3ltw b2mspmbn akjuzmll bub6lnnc i09qtzwb lthxh50u pmk7jnqg tkxwya3v jav28p83 tt24zdws ms05siws flx89l3n b7h9ocf4' : ''"
                    ></div>
                    <router-link
                      aria-label="首页"
                      class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l bp9cbjyn cbu4d94t pi1r6xr4 taijpn5t k4urcfbm"
                      :to="{ name: item.name }"
                      role="link"
                      tabindex="0"
                      aria-current="page"
                    >
                      <span class="l9j0dhe7">
                        <svg
                          viewBox="0 0 28 28"
                          class="a8c37x1j ms05siws hwsy1cff b7h9ocf4"
                          :class="hactive == index ? 'aaxa7vy3' : ''"
                          height="28"
                          width="28"
                        >
                          <path :d="hactive == index ? item.path : item.icon"></path>
                        </svg>
                      </span>
                    </router-link>
                  </div>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="n7fi1qx3 hv4rvrfc b3onmgus poy2od1o kr520xx4 ehxjyohh">
      <div
        aria-label="帐户控件和设置"
        class="bp9cbjyn j83agx80 rl25f0pe byvelhso l9j0dhe7 du4w35lb"
        role="navigation"
      >
        <span
          class="tojvnm2t a6sixzi8 abs2jz4q a8s20v7p t1p8iaqh k5wvi7nf q3lfd5jv pk4s997a bipmatt0 cebpdrjk qowsmv63 owwhemhu dp1hu0rb dhp61c6y iyyx5f41"
        >
          <div class="j83agx80 l9j0dhe7">
            <el-popover placement="bottom" width="300" trigger="click">
              <div v-if="mactive == -1" class="aov4n071">
                <div
                  data-visualcompletion="ignore-dynamic"
                  style="padding-left: 8px; padding-right: 8px"
                >
                  <a
                    class="oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 a8c37x1j mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi"
                    href="#/mePage"
                    role="link"
                    tabindex="0"
                  >
                    <div
                      class="ow4ym5g4 auili1gw rq0escxv j83agx80 buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 nnctdnn4 hpfvmrgz qt6c0cv9 jb3vyjys l9j0dhe7 du4w35lb bp9cbjyn btwxx1t3 dflh9lhu scb9dxdr"
                    >
                      <div
                        class="o8rfisnq j83agx80 cbu4d94t bi6gxh9e tvfksri0 aov4n071 l9j0dhe7"
                      >
                        <div class="q9uorilb l9j0dhe7 pzggbiyp du4w35lb">
                          <div class="me-img">
                            <img :src="$store.state.user_info.me_img" alt="" />
                          </div>
                        </div>
                      </div>
                      <div
                        class="ow4ym5g4 auili1gw rq0escxv j83agx80 buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 tgvbjcpo hpfvmrgz qt6c0cv9 rz4wbd8a a8nywdso jb3vyjys du4w35lb bp9cbjyn btwxx1t3 l9j0dhe7"
                      >
                        <div
                          class="gs1a9yip ow4ym5g4 auili1gw rq0escxv j83agx80 cbu4d94t buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 tgvbjcpo hpfvmrgz rz4wbd8a a8nywdso l9j0dhe7 du4w35lb rj1gh0hx f10w8fjw pybr56ya"
                        >
                          <div class="">
                            <div class="j83agx80 cbu4d94t ew0dbk1b irj2b8pg">
                              <div class="qzhwtbm6 knvmm38d">
                                <span
                                  class="oi732d6d ik7dh3pa d2edcug0 hpfvmrgz qv66sw1b c1et5uql a8c37x1j s89635nw ew0dbk1b a5q79mjw g1cxx5fr lrazzd5p oo9gr5id hzawbc8m"
                                  dir="auto"
                                >
                                  {{ user_info.user_name }}
                                </span>
                              </div>
                              <div class="qzhwtbm6 knvmm38d">
                                <span
                                  class="oi732d6d ik7dh3pa d2edcug0 hpfvmrgz qv66sw1b c1et5uql a8c37x1j muag1w35 ew0dbk1b jq4qci2q a3bd9o3v knj5qynh m9osqain hzawbc8m"
                                  dir="auto"
                                >
                                  查看你的个人主页
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="n00je7tq arfg74bv qs9ysxi8 k77z8yql i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s rnr61an3"
                      data-visualcompletion="ignore"
                    ></div>
                  </a>
                </div>
                <hr class="aov4n071 dhix69tm wkznzc2l bi6gxh9e pwoa4pd7" />
                <div
                  data-visualcompletion="ignore-dynamic"
                  style="padding-left: 8px; padding-right: 8px"
                >
                  <div
                    class="oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 a8c37x1j mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi"
                    role="button"
                    tabindex="0"
                  >
                    <div
                      class="ow4ym5g4 auili1gw rq0escxv j83agx80 buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 nnctdnn4 hpfvmrgz qt6c0cv9 jb3vyjys l9j0dhe7 du4w35lb bp9cbjyn btwxx1t3 dflh9lhu scb9dxdr"
                    >
                      <div
                        class="nqmvxvec j83agx80 cbu4d94t bi6gxh9e tvfksri0 aov4n071 l9j0dhe7"
                      >
                        <div
                          class="s45kfl79 emlxlaya bkmhp75w spb7xbtv bp9cbjyn rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv pq6dq46d taijpn5t l9j0dhe7 tdjehn4e tv7at329 thwo4zme"
                        >
                          <i class="hu5pjgll m6k467ps sp_goeHjAlsAx- sx_b65bc2"> </i>
                        </div>
                      </div>
                      <div
                        @click="dialogVisible3 = true"
                        class="ow4ym5g4 auili1gw rq0escxv j83agx80 buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 tgvbjcpo hpfvmrgz qt6c0cv9 rz4wbd8a a8nywdso jb3vyjys du4w35lb bp9cbjyn btwxx1t3 l9j0dhe7"
                      >
                        <div
                          class="gs1a9yip ow4ym5g4 auili1gw rq0escxv j83agx80 cbu4d94t buofh1pr g5gj957u i1fnvgqd oygrvhab cxmmr5t8 hcukyx3x kvgmc6g5 tgvbjcpo hpfvmrgz rz4wbd8a a8nywdso l9j0dhe7 du4w35lb rj1gh0hx f10w8fjw pybr56ya"
                        >
                          <div class="">
                            <div class="j83agx80 cbu4d94t ew0dbk1b irj2b8pg">
                              <div class="qzhwtbm6 knvmm38d">
                                <span
                                  class="oi732d6d ik7dh3pa d2edcug0 hpfvmrgz qv66sw1b c1et5uql a8c37x1j muag1w35 ew0dbk1b jq4qci2q a3bd9o3v ekzkrbhg oo9gr5id hzawbc8m"
                                  dir="auto"
                                >
                                  提供反馈
                                </span>
                              </div>
                              <div class="qzhwtbm6 knvmm38d">
                                <span
                                  class="oi732d6d ik7dh3pa d2edcug0 hpfvmrgz qv66sw1b c1et5uql a8c37x1j hop8lmos enqfppq2 e9vueds3 j5wam9gi knj5qynh m9osqain hzawbc8m"
                                  dir="auto"
                                >
                                  帮助我们改进新版 Facebook。
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="n00je7tq arfg74bv qs9ysxi8 k77z8yql i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s rnr61an3"
                      data-visualcompletion="ignore"
                    ></div>
                  </div>
                </div>
                <hr class="aov4n071 dhix69tm wkznzc2l bi6gxh9e pwoa4pd7" />
                <cart-list :list="me_ul" @getcart="getme"></cart-list>
                <div class="dati1w0a ihqw7lf3 hv4rvrfc discj3wi">
                  <footer aria-label="Facebook" role="contentinfo">
                    <span
                      class="oi732d6d ik7dh3pa d2edcug0 hpfvmrgz qv66sw1b c1et5uql a8c37x1j hop8lmos enqfppq2 e9vueds3 j5wam9gi knj5qynh m9osqain"
                      dir="auto"
                    >
                      <ul class="nc684nl6">
                        <li class="nc684nl6">
                          <a
                            class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl m9osqain gpro0wi8 b1v8xokw"
                            href="/privacy/explanation"
                            role="link"
                            tabindex="0"
                          >
                            隐私权政策
                          </a>
                          <span>
                            <span
                              class="rfua0xdk pmk7jnqg stjgntxs ni8dbmo4 ay7djpcl q45zohi1"
                            >
                              &nbsp;
                            </span>
                            <span aria-hidden="true"> · </span>
                          </span>
                        </li>
                        <li class="nc684nl6">
                          <a
                            class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl m9osqain gpro0wi8 b1v8xokw"
                            href="/policies?ref=pf"
                            role="link"
                            tabindex="0"
                          >
                            服务条款
                          </a>
                          <span>
                            <span
                              class="rfua0xdk pmk7jnqg stjgntxs ni8dbmo4 ay7djpcl q45zohi1"
                            >
                              &nbsp;
                            </span>
                            <span aria-hidden="true"> · </span>
                          </span>
                        </li>
                        <li class="nc684nl6">
                          <a
                            class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl m9osqain gpro0wi8 b1v8xokw"
                            href="/business/"
                            role="link"
                            tabindex="0"
                          >
                            广告
                          </a>
                          <span>
                            <span
                              class="rfua0xdk pmk7jnqg stjgntxs ni8dbmo4 ay7djpcl q45zohi1"
                            >
                              &nbsp;
                            </span>
                            <span aria-hidden="true"> · </span>
                          </span>
                        </li>
                        <li class="nc684nl6">
                          <a
                            class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl m9osqain gpro0wi8 b1v8xokw"
                            href="/help/568137493302217"
                            role="link"
                            tabindex="0"
                          >
                            Ad Choices
                            <span class="ormqv51v l9j0dhe7">
                              <i class="hu5pjgll m6k467ps sp_Osp8PMBw1xR sx_6794b8"> </i>
                            </span>
                          </a>
                          <span>
                            <span
                              class="rfua0xdk pmk7jnqg stjgntxs ni8dbmo4 ay7djpcl q45zohi1"
                            >
                              &nbsp;
                            </span>
                            <span aria-hidden="true"> · </span>
                          </span>
                        </li>
                        <li class="nc684nl6">
                          <a
                            class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl m9osqain gpro0wi8 b1v8xokw"
                            href="/policies/cookies/"
                            role="link"
                            tabindex="0"
                          >
                            Cookie
                          </a>
                          <span>
                            <span
                              class="rfua0xdk pmk7jnqg stjgntxs ni8dbmo4 ay7djpcl q45zohi1"
                            >
                              &nbsp;
                            </span>
                            <span aria-hidden="true"> · </span>
                          </span>
                        </li>
                        <li class="nc684nl6">
                          <div
                            aria-expanded="false"
                            aria-haspopup="menu"
                            class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l"
                            role="button"
                            tabindex="0"
                          >
                            更多
                          </div>
                          <span>
                            <span
                              class="rfua0xdk pmk7jnqg stjgntxs ni8dbmo4 ay7djpcl q45zohi1"
                            >
                              &nbsp;
                            </span>
                            <span aria-hidden="true"> · </span>
                          </span>
                        </li>
                      </ul>
                      Facebook © 2020
                    </span>
                  </footer>
                </div>
              </div>
              <div v-else-if="mactive == 0">
                <div class="book-flex book-items">
                  <div class="book-icon" @click="mactive = -1">
                    <i class="el-icon-back"></i>
                  </div>
                  <div class="visible-title">设置与隐私</div>
                </div>
                <cart-list :list="setAll" @getcart="getset($event)"></cart-list>
              </div>
              <div v-else-if="mactive == 1">
                <div class="book-flex book-items">
                  <div class="book-icon" @click="mactive = -1">
                    <i class="el-icon-back"></i>
                  </div>
                  <div class="visible-title">帮助与支持</div>
                </div>
                <cart-list :list="setAll2" @getcart="gethelp"></cart-list>
              </div>
              <div v-else-if="mactive == 2">
                <div class="book-flex book-items">
                  <div class="book-icon" @click="mactive = -1">
                    <i class="el-icon-back"></i>
                  </div>
                  <div class="visible-title">显示偏好设置</div>
                </div>
                <cart-list :list="setAll3" :type="'switch'"></cart-list>
              </div>
              <el-tooltip
                class="item"
                effect="dark"
                content="账户"
                placement="top-start"
                slot="reference"
              >
                <div
                  aria-label="帐户"
                  class="oajrlxb2 tdjehn4e qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 j83agx80 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl l9j0dhe7 abiwlrkh p8dawk7l bp9cbjyn s45kfl79 emlxlaya bkmhp75w spb7xbtv rt8b4zig n8ej3o3l agehan2d sk4xxmp2 taijpn5t qypqp5cg q676j6op"
                  role="button"
                  tabindex="0"
                >
                  <i class="hu5pjgll lzf7d6o1 sp_Osp8PMBw1xR sx_bd622f"> </i>
                  <div
                    class="s45kfl79 emlxlaya bkmhp75w spb7xbtv i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s rnr61an3"
                    data-visualcompletion="ignore"
                  ></div>
                </div>
              </el-tooltip>
            </el-popover>
          </div>
        </span>
        <el-popover placement="bottom" width="300" trigger="click">
          <div class="tou-title">通知</div>
          <cart-list :list="messageList" :type="'msg'"></cart-list>
          <el-tooltip
            class="item"
            effect="dark"
            content="通知"
            placement="top-start"
            slot="reference"
          >
            <div class="book-icon">
              <svg
                viewBox="0 0 28 28"
                alt=""
                class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry"
                height="20"
                width="20"
              >
                <path
                  d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"
                ></path>
              </svg>
            </div>
          </el-tooltip>
        </el-popover>
        <el-popover placement="bottom" width="auto" trigger="click">
          <div class="el-padding">
            <div class="tou-title">Messenger</div>
            <el-input placeholder="搜索messenger">
              <i class="el-icon-search el-input__icon" slot="prefix"></i>
            </el-input>
            <cart-list
              class="el-margin"
              :list="frineds"
              @getcart="getmessage"
            ></cart-list>
            <div class="link">在 Messenger 中查看所有对话</div>
          </div>
          <el-tooltip
            class="item"
            effect="dark"
            content="messenger"
            placement="top-start"
            slot="reference"
          >
            <div class="book-icon">
              <svg
                viewBox="0 0 28 28"
                alt=""
                class="a8c37x1j ms05siws hwsy1cff b7h9ocf4 fzdkajry"
                height="20"
                width="20"
              >
                <path
                  d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"
                ></path>
              </svg>
            </div>
          </el-tooltip>
        </el-popover>
        <el-popover placement="bottom" width="300" trigger="click">
          <div class="tou-title">创建</div>
          <div class="ecm0bbzt rz4wbd8a sj5x9vvc a8nywdso">
            <cart-list :list="createArr" @getcart="getshow"> </cart-list>
          </div>
          <el-tooltip
            class="item"
            effect="dark"
            content="创建"
            placement="top-start"
            slot="reference"
          >
            <div class="book-icon">
              <i class="hu5pjgll lzf7d6o1 sp_Osp8PMBw1xR sx_8a7360"></i>
            </div>
          </el-tooltip>
        </el-popover>
        <router-link :to="{ path: '/mePage'}">
          <div class="flex facebook-tou" style="margin-right: 20px">
            <div class="me-img">
              <img :src="user_info.me_img" alt="" />
            </div>
            <span>{{ user_info.user_name }}</span>
          </div>
        </router-link>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="550px">
      <div v-if="choose == 2" class="tr9rh885 sjgh65i0">
        <img
          draggable="false"
          alt=""
          src="../assets/life.png"
          width="1680"
          height="460"
        />
        <div class="j83agx80 cbu4d94t mysgfdmx hddg9phg">
          <div class="w0hvl6rk qjjbsfad">
            <span
              dir="auto"
              class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j muag1w35 ew0dbk1b o3w64lxj b2s5l15y hnhda86s oo9gr5id oqcyycmt"
            >
              生活纪事
            </span>
          </div>
          <div class="w0hvl6rk qjjbsfad">
            <span
              dir="auto"
              class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j hop8lmos enqfppq2 e9vueds3 j5wam9gi lrazzd5p m9osqain oqcyycmt"
            >
              分享并回顾人生重要时刻。
            </span>
          </div>
        </div>
        <div class="dmwoc352 f0zqjlou dhix69tm wkznzc2l r54jmrld ay7djpcl pwoa4pd7"></div>
        <span
          dir="auto"
          class="oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j muag1w35 ew0dbk1b jq4qci2q a3bd9o3v lrazzd5p oo9gr5id oqcyycmt"
        >
          选择类别
        </span>
        <div class="gh1tjcio frluczxc gupp8or6 sej5wr8e">
          <ul class="life-ul">
            <li v-for="(item, index) in life" :key="index">
              <img :src="item.img" alt="" />
              <div class="life-title">{{ item.title }}</div>
            </li>
          </ul>
        </div>
      </div>
      <span slot="footer" class="dialog-footer" v-if="choose == 5">
        <el-button v-on:click="dialogVisible = false"> 取 消 </el-button>
        <el-button type="primary" v-on:click="dialogVisible = false"> 创建 </el-button>
      </span>
    </el-dialog>
    <el-dialog title="动态消息偏好设置" :visible.sync="dialogVisible2" width="550px">
      <div style="margin-bottom: 10px">管理和定制你的动态消息内容。</div>
      <cart-list :list="dynamicAll" type="arrow" size="big"></cart-list>
    </el-dialog>
    <el-dialog title="向 Facebook 提供反馈" :visible.sync="dialogVisible3" width="500px">
      <cart-list :list="feedback" type="arrow" @getcart="getfeed" size="big"></cart-list>
    </el-dialog>
    <el-dialog :title="feed_title" :visible.sync="dialogVisible4" width="500px">
      <div class="visible-item">
        <div class="visible-title">我们应该如何改进？</div>
        <el-select v-model="feed.title" placeholder="选择产品" style="width: 100%">
          <el-option
            v-for="(item, index) in feedProduct"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="visible-item">
        <div class="visible-text">详细信息</div>
        <el-input
          type="textarea"
          v-model="feed.text"
          placeholder="请提供尽可能更多的信息....."
        ></el-input>
      </div>
      <div class="visible-item">
        <div class="book-icon2">
          <i class="el-icon-paperclip"> </i>
          <span>添加截图或视频（推荐）</span>
        </div>
      </div>
      <div class="visible-item">
        <div class="book-icon2">
          <span>
            如果想提供建议帮助我们改善产品，请联系我们。如果遇到具体问题并需要帮助，请访问
            <a href="">帮助中心</a>
          </span>
        </div>
      </div>
    </el-dialog>
    <tie-post :show.sync="dialogVisible1" @getbtn="getie"></tie-post>
  </div>
</template>

<script>
import cartList from "./cart-list";
import tiePost from "./tie-post";
export default {
  props: ["hactive"],
  components: {
    tiePost,
    "cart-list": cartList,
  },
  data() {
    return {
      news:[],
      dialogVisible1: false,
      life: [
        //生活纪实
        {
          img: require("@/assets/life1.png"),
          title: "工作",
        },
        {
          img: require("@/assets/life2.png"),
          title: "教育",
        },
        {
          img: require("@/assets/life3.png"),
          title: "感情状况",
        },
        {
          img: require("@/assets/life4.png"),
          title: "居家与生活",
        },
        {
          img: require("@/assets/life5.png"),
          title: "家人",
        },
        {
          img: require("@/assets/life6.png"),
          title: "旅行",
        },
        {
          img: require("@/assets/life7.png"),
          title: "兴趣与爱好",
        },
        {
          img: require("@/assets/life8.png"),
          title: "健康与保养",
        },
        {
          img: require("@/assets/life9.png"),
          title: "里程碑与成就",
        },
        {
          img: require("@/assets/life10.png"),
          title: "纪念",
        },
        {
          img: require("@/assets/life11.png"),
          title: "新建生活纪事类别",
        },
      ],
      dialogVisible4: false,
      feed: {
        title: "",
      },
      feedProduct: [
        {
          label: "编辑工具/发布功能",
          value: 1,
        },
        {
          label: "表现",
          value: 2,
        },
        {
          label: "大学社区/微校园",
          value: 3,
        },
        {
          label: "登录",
          value: 5,
        },
        {
          label: "动态消息",
          value: 6,
        },
        {
          label: "个人主页",
          value: 7,
        },
        {
          label: "公共主页",
          value: 8,
        },
        {
          label: "广告",
          value: 9,
        },
        {
          label: "国际化",
          value: 10,
        },
        {
          label: "活动",
          value: 11,
        },
        {
          label: "健康",
          value: 12,
        },
        {
          label: "交友",
          value: 13,
        },
        {
          label: "快拍",
          value: 14,
        },
        {
          label: "媒体文件查看器",
          value: 15,
        },
        {
          label: "评论/点赞/心情/分享",
          value: 16,
        },
        {
          label: "气候科学信息中心",
          value: 17,
        },
        {
          label: "设置",
          value: 18,
        },
        {
          label: "视频",
          value: 19,
        },
        {
          label: "视频聊天室",
          value: 20,
        },
        {
          label: "首页",
          value: 21,
        },
        {
          label: "搜索",
          value: 22,
        },
        {
          label: "通知",
          value: 23,
        },
        {
          label: "新冠疫情信息中心",
          value: 24,
        },
        {
          label: "新用户体验",
          value: 25,
        },
        {
          label: "选民信息中心",
          value: 26,
        },
        {
          label: "隐私设置",
          value: 27,
        },
        {
          label: "游戏",
          value: 28,
        },
        {
          label: "直播",
          value: 29,
        },
        {
          label: "职位发布工具",
          value: 30,
        },
        {
          label: "众包",
          value: 31,
        },
        {
          label: "Facebook Pay",
          value: 32,
        },
        {
          label: "Goodwill/那年今天",
          value: 33,
        },
        {
          label: "Markeplace",
          value: 34,
        },
        {
          label: "Messenger",
          value: 35,
        },
        {
          label: "Watch",
          value: 36,
        },
        {
          label: "其他",
          value: 37,
        },
      ],
      feed_title: "",
      feedback: [
        {
          icon: "el-icon-s-help",
          title: "帮助我们改进新版 Facebook",
          text: "对新版 Facebook 的使用体验提出反馈。",
        },
        {
          icon: "el-icon-info",
          title: "报告漏洞",
          text: "告诉我们出现故障的功能。",
        },
      ],
      dialogVisible3: false,
      dynamicAll: [
        {
          icon: "el-icon-star-on",
          title: "管理特别关注对象",
          text: "添加用户和公共主页即可在动态消息中优先显示其帖子",
        },
        {
          icon: "el-icon-s-release",
          title: "停止关注",
          text: "停止关注用户、主页和小组，隐藏他们的帖子",
        },
        {
          icon: "el-icon-s-claim",
          title: "重新关注用户",
          text: "重新关注用户、主页和小组。",
        },
        {
          icon: "el-icon-time",
          title: "暂不关注",
          text: "管理你的“暂不关注”设置",
        },
      ],
      me_ul: [
        {
          icon: "el-icon-s-tools",
          title: "设置与隐私",
          arrow: true,
        },
        {
          icon: "el-icon-question",
          title: "帮助与支持",
          arrow: true,
        },
        {
          icon: "el-icon-moon",
          title: "显示偏好设置",
          arrow: true,
        },
        {
          icon: "el-icon-right",
          title: "退出",
        },
      ],
      frineds: [
        {
          img: require("@/assets/me.jpg"),
          title: "小黄人1",
          text: "你们现在是messenger联系人了",
        },
      ],
      messageList: [
        {
          imgicon: "sp_nkVxcm_S_R8 msg ",
          img: require("@/assets/me.jpg"),
          text: "你有新的推荐好友：",
          name: "枫果果",
          date: "5天前",
          unread: true,
        },
        {
          imgicon: "sp_nkVxcm_S_R8 flat ",
          img: require("@/assets/me.jpg"),
          text: "你有新的推荐好友：",
          name: "枫果果",
          date: "5天前",
          unread: true,
        },
      ],
      topic: "",
      createArr: [
        {
          title: "帖子",
          icon: "sp_Osp8PMBw1xR sx_b7c943",
          text: "分享一篇帖子到动态消息。",
        },
        {
          title: "快拍",
          icon: "sp_goeHjAlsAx- sx_dc013d",
          text: "分享图片或文字",
        },
        {
          title: "生活纪事",
          icon: "sp_goeHjAlsAx- sx_825b3a",
          text: "向你的个人主页添加一项生活纪事。",
        },
        {
          title: "公共主页",
          icon: "sp_Osp8PMBw1xR sx_7bf390",
          text: "和顾客、粉丝建立联系，分享业务新动态。",
        },
        {
          title: "广告",
          icon: "sp_goeHjAlsAx- sx_c0fd8b",
          text: "推广你的业务、品牌或组织。",
        },
        {
          title: "小组",
          icon: "sp_goeHjAlsAx- sx_236350",
          text: "与兴趣相投的用户建立联系。",
        },
        {
          title: "活动",
          icon: "sp_goeHjAlsAx- sx_a030c1",
          text: "发布公开或私人活动，吸引大家参与。",
        },
      ],
      tabNav: [
        {
          name: "index",
          icon:
            "M17.5 23.979 21.25 23.979C21.386 23.979 21.5 23.864 21.5 23.729L21.5 13.979C21.5 13.427 21.949 12.979 22.5 12.979L24.33 12.979 14.017 4.046 3.672 12.979 5.5 12.979C6.052 12.979 6.5 13.427 6.5 13.979L6.5 23.729C6.5 23.864 6.615 23.979 6.75 23.979L10.5 23.979 10.5 17.729C10.5 17.04 11.061 16.479 11.75 16.479L16.25 16.479C16.939 16.479 17.5 17.04 17.5 17.729L17.5 23.979ZM21.25 25.479 17 25.479C16.448 25.479 16 25.031 16 24.479L16 18.327C16 18.135 15.844 17.979 15.652 17.979L12.348 17.979C12.156 17.979 12 18.135 12 18.327L12 24.479C12 25.031 11.552 25.479 11 25.479L6.75 25.479C5.784 25.479 5 24.695 5 23.729L5 14.479 3.069 14.479C2.567 14.479 2.079 14.215 1.868 13.759 1.63 13.245 1.757 12.658 2.175 12.29L13.001 2.912C13.248 2.675 13.608 2.527 13.989 2.521 14.392 2.527 14.753 2.675 15.027 2.937L25.821 12.286C25.823 12.288 25.824 12.289 25.825 12.29 26.244 12.658 26.371 13.245 26.133 13.759 25.921 14.215 25.434 14.479 24.931 14.479L23 14.479 23 23.729C23 24.695 22.217 25.479 21.25 25.479Z",
          path:
            "M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29",
        },
        {
          name: "friends",
          icon:
            "M10.5 4.5c-2.272 0-2.75 1.768-2.75 3.25C7.75 9.542 8.983 11 10.5 11s2.75-1.458 2.75-3.25c0-1.482-.478-3.25-2.75-3.25zm0 8c-2.344 0-4.25-2.131-4.25-4.75C6.25 4.776 7.839 3 10.5 3s4.25 1.776 4.25 4.75c0 2.619-1.906 4.75-4.25 4.75zm9.5-6c-1.41 0-2.125.841-2.125 2.5 0 1.378.953 2.5 2.125 2.5 1.172 0 2.125-1.122 2.125-2.5 0-1.659-.715-2.5-2.125-2.5zm0 6.5c-1.999 0-3.625-1.794-3.625-4 0-2.467 1.389-4 3.625-4 2.236 0 3.625 1.533 3.625 4 0 2.206-1.626 4-3.625 4zm4.622 8a.887.887 0 00.878-.894c0-2.54-2.043-4.606-4.555-4.606h-1.86c-.643 0-1.265.148-1.844.413a6.226 6.226 0 011.76 4.336V21h5.621zm-7.122.562v-1.313a4.755 4.755 0 00-4.749-4.749H8.25A4.755 4.755 0 003.5 20.249v1.313c0 .518.421.938.937.938h12.125c.517 0 .938-.42.938-.938zM20.945 14C24.285 14 27 16.739 27 20.106a2.388 2.388 0 01-2.378 2.394h-5.81a2.44 2.44 0 01-2.25 1.5H4.437A2.44 2.44 0 012 21.562v-1.313A6.256 6.256 0 018.25 14h4.501a6.2 6.2 0 013.218.902A5.932 5.932 0 0119.084 14h1.861z",
          path:
            "M20.34 22.428c.077-.455.16-1.181.16-2.18 0-1.998-.84-3.981-2.12-5.41-.292-.326-.077-.838.36-.838h2.205C24.284 14 27 16.91 27 20.489c0 1.385-1.066 2.51-2.378 2.51h-3.786a.496.496 0 01-.495-.571zM20 13c-1.93 0-3.5-1.794-3.5-4 0-2.467 1.341-4 3.5-4s3.5 1.533 3.5 4c0 2.206-1.57 4-3.5 4zm-9.5-1c-2.206 0-4-2.019-4-4.5 0-2.818 1.495-4.5 4-4.5s4 1.682 4 4.5c0 2.481-1.794 4.5-4 4.5zm2.251 2A6.256 6.256 0 0119 20.249v1.313A2.44 2.44 0 0116.563 24H4.438A2.44 2.44 0 012 21.562v-1.313A6.256 6.256 0 018.249 14h4.502z",
        },
        {
          name: "watch",
          icon:
            "M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z",
          path:
            "M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.164 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.164 11.654C17.612 11.924 17.612 12.575 17.164 12.846M21.75 2.75 6.25 2.75C4.182 2.75 2.5 4.432 2.5 6.5L2.5 18C2.5 20.068 4.182 21.75 6.25 21.75L21.75 21.75C23.818 21.75 25.5 20.068 25.5 18L25.5 6.5C25.5 4.432 23.818 2.75 21.75 2.75",
        },
        {
          name: "groups",
          icon:
            "M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z",
          path:
            "M21.877 19 21.364 19C21.139 19 20.971 18.802 20.996 18.577 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.066 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.877 19ZM17.75 10.75C17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13 18.647 13 17.75 11.991 17.75 10.75ZM19.5 18.221C19.5 19.202 18.682 20 17.678 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.442 13.5 12.828 13.5L15.173 13.5C17.559 13.5 19.5 15.395 19.5 17.724L19.5 18.221ZM6.25 10.75C6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13 7.147 13 6.25 11.991 6.25 10.75ZM7.934 14.591C7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.991 18.461 7.004 18.577 7.03 18.802 6.861 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14L7.631 14C7.933 14 8.102 14.338 7.934 14.591ZM14 6C15.697 6 16.75 7.15 16.75 9 16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6ZM14 1C6.832 1 1 6.832 1 14 1 21.169 6.832 27 14 27 21.169 27 27 21.169 27 14 27 6.832 21.169 1 14 1Z",
        },
        {
          name: "gaming",
          icon:
            "M23.5 9.5H10.25a.75.75 0 00-.75.75v7c0 .414.336.75.75.75H17v5.5H4.5v-19h19v5zm0 14h-5v-6.25a.75.75 0 00-.75-.75H11V11h12.5v12.5zm1.5.25V4.25C25 3.561 24.439 3 23.75 3H4.25C3.561 3 3 3.561 3 4.25v19.5c0 .689.561 1.25 1.25 1.25h19.5c.689 0 1.25-.561 1.25-1.25z",
          path:
            "M10.25 18.5h6.25a.5.5 0 01.5.5v5.5a.5.5 0 01-.5.5H4.25C3.56 25 3 24.44 3 23.75V4.25C3 3.56 3.56 3 4.25 3h19.5c.69 0 1.25.56 1.25 1.25V9a.5.5 0 01-.5.5H10.25a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75zM11.5 17a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v12.25c0 .69-.56 1.25-1.25 1.25H19a.5.5 0 01-.5-.5v-6.75a.75.75 0 00-.75-.75H11.5z",
        },
      ],
      choose: 0,
      dialogVisible: false,
      dialogVisible2: false,
      value: true,
      path: "",
      mactive: -1,
      setAll3: [
        {
          icon: "el-icon-moon",
          title: "夜间模式",
          switch: false,
        },
        {
          icon: "el-icon-sunny",
          title: "精简模式",
          switch: false,
        },
      ],
      setAll2: [
        {
          icon: "el-icon-question",
          title: "帮助中心",
        },
        {
          icon: "el-icon-s-comment",
          title: "帮助论坛",
        },
        {
          icon: "el-icon-message",
          title: "帮助中心信箱",
        },
        {
          icon: "el-icon-info",
          title: "报告问题",
        },
      ],
      setAll: [
        {
          icon: "el-icon-s-tools",
          title: "设置",
        },
        {
          icon: "el-icon-s-tools",
          title: "隐私设置检查",
        },
        {
          icon: "el-icon-s-tools",
          title: "快捷隐私设置",
        },
        {
          icon: "el-icon-s-unfold",
          title: "动态记录",
        },
        {
          icon: "el-icon-s-marketing",
          title: "动态消息偏好设置",
        },
        {
          icon: "el-icon-s-tools",
          title: "语言",
        },
      ],
      user_info: {},
    };
  },
  created() {
    this.user_info = JSON.parse(localStorage.getItem("user_info"));
     var that=this;
     //用户信息
     this.$axios.get("/api/friends").then(res => {
        console.log(res,5465)
        this.news=res
    })
  },
  methods: {
    //发帖
    getie(item) {
      var user_info = this.$store.state.user_info;
      var info = {
        uid: user_info.id,
        content: item.content,
        type: item.type,
      };
      this.$axios({
        method: "post",
        url: "/api/createRecommended",
        data: info,
      }).then((res) => {
        if (res.code == 1) {
          this.$message.success(res.msg);
          this.dialogVisible1 = false;
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    getNav(i) {
      this.$emit("getnav", i);
    },
    //反馈
    getfeed(i) {
      if (i == 0) {
        this.feed_title = "帮助我们改进新版 Facebook";
      } else {
        this.feed_title = "报告漏洞";
      }
      this.dialogVisible4 = true;
    },
    //设置
    getset(i) {
      if (i == 0) {
        this.$router.push({
          name: "account",
        });
      } else if (i == 1) {
        this.$router.push({
          name: "checkup",
        });
      } else if (i == 2) {
        this.$router.push({
          name: "privacy",
        });
      } else if (i == 3) {
        this.$router.push({
          name: "dynamic",
        });
      } else if (i == 4) {
        this.dialogVisible2 = true;
      } else if (i == 5) {
        this.$router.push({
          name: "account",
          params: {
            state: 9,
          },
        });
      }
    },
    //帮助中心
    gethelp(i) {
      if (i == 3) {
        this.dialogVisible3 = true;
      } else if (i == 2) {
        this.$router.push({ name: "Mailbox" });
      } else if (i == 0) {
        this.$router.push({ name: "help" });
      }
    },
    //个人中心
    getme(i) {
      if (i == 3) {
        this.$axios.post("/api/outlogin").then((res) => {
          localStorage.clear();
          this.$message.success(res.msg);
          setTimeout(() => {
            this.$router.push({
              name: "login",
            });
          }, 1000);
        });
      } else {
        this.mactive = i;
      }
    },
    getshow(e) {
      if (e == 0) {
        this.dialogVisible1 = true;
      } else if (e == 1) {
        this.$router.push({
          name: "stories",
        });
      } else if (e == 3) {
        this.$router.push({
          name: "creation",
        });
      } else if (e == 4) {
        this.$router.push({
          name: "goal",
        });
      } else if (e == 5) {
        this.$router.push({
          name: "create",
        });
      } else if (e == 6) {
        this.$router.push({
          name: "events_create",
        });
      } else {
        this.choose = e;
        this.dialogVisible = true;
      }
    },
    //跳转聊天
    getmessage(i, v) {
      this.$router.push({ name: "messenger" });
    },
    geturl(index,item){
      this.$router.push({ name: "book_friend",query:{id:item.id}});
    }
  },
};
</script>

<style>
@import "../css/header.css";
.facebook-tou {
  display: flex;
}
.life-ul{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
}
.life-ul>li{
  width: 25%;
  margin: 10px 0;
  cursor: pointer;
}
</style>
