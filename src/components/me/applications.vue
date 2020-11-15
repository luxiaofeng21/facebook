<template>
<div>
    <div id="headerArea">
        <div class="uiHeader uiHeaderPage">
            <div class="clearfix uiHeaderTop">
                <div class="rfloat _ohf">
                    <h2 class="accessible_elem">应用和网站</h2>
                    <div class="uiHeaderActions"></div>
                </div>
                <div>
                    <h2 class="uiHeaderTitle" aria-hidden="true">应用和网站</h2>
                </div>
            </div>
        </div>
    </div>
    <div id="contentArea" role="main">
        <div id="SettingsPage_Content">
            <div>
                <div class="">
                    <div class="_80cn">
                        <div class="_7-8z">
                            <div class="_7-8-"><span role="heading" aria-level="3" class=" _50f7 _2iel"></span></div>
                            <div class="_680t">
                                <div class="_7-8_  _2ieo _2iex">这些是你使用 Facebook 帐户登录过的应用和网站。它们可以接收你选择与之分享的信息。已过期或已移除的应用可能仍可以访问你曾经与之分享的信息，但无法再接收其他非公开信息。<a class="_4e_m" target="_blank" href="/help/218345114850283">详细了解</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="_80b_">
                        <div class="_80cp">
                            <div class="_5vx2 _5vx4">
                                <div class="_5vx7 clearfix" direction="both">
                                    <div class="_ohe lfloat">
                                        <el-tabs v-model="activeName" @tab-click="handleClick">
                                            <el-tab-pane label="使用中" name="first">
                                                <span slot="label">
                                                    使用中
                                                    <el-badge value="12"></el-badge>

                                                </span>
                                            </el-tab-pane>
                                            <el-tab-pane label="已过期" name="second"></el-tab-pane>
                                            <el-tab-pane label="已移除" name="third"></el-tab-pane>
                                        </el-tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_80c0">
                            <div class="_86ij"><span class="accessible_elem"><label for="js_1" id="js_2"><span style="font-family: Arial, sans-serif; font-size: 13px; line-height: 17px; letter-spacing: normal; font-weight: normal; overflow-wrap: normal; text-align: left; color: rgb(28, 30, 33);"></span></label></span>
                                <div class="_86ik _3qn7 _61-0 _2fyh _3qnf">
                                    <el-input placeholder="请输入内容" v-model="search" size="small">
                                        <i slot="append" class="el-input__icon el-icon-search"></i>
                                    </el-input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="_80c1">
                        <div class="_680v"><i class="_3-tc img sp_TGof8m43NsM sx_e9b707" alt=""></i>
                            <div class="_3-tn"><span class=" _2ien">没有需要检查的应用或网站。</span></div>
                        </div>
                    </div>
                </div><!-- react-mount-point-unstable -->
            </div>
            <div>
                <div class="_3o4u">偏好设置</div>
                <table class="uiGrid _51mz _4na0 _5f0n" id="u_jsonp_2_d" cellspacing="0" cellpadding="0">
                    <tbody>
                        <tr class="_51mx">
                            <td class="_51m-">
                                <div class="_3q73" style="height: 200px;">
                                    <div class="_4na1"><i class="_3aiu img sp_TGof8m43NsM sx_a9dd4c"></i><span class="_3aiv">应用、网站和游戏</span></div>
                                    <div class="_4na2">这项设置让你控制在 Facebook 站内站外是否和应用、网站和游戏互动。</div>
                                    <div class="_3q72">已开启</div>
                                    <div class="_1u-7">
                                        <div><a role="button" class="_42ft _4jy0 _4jy4 _517h _51sy" href="#" ajaxify="/settings/applications/platform_opt_out/" rel="dialog">编辑</a></div>
                                    </div>
                                </div>
                            </td>
                            <td class="_51m- _51mw">
                                <div class="_3q73" style="height: 200px;">
                                    <div class="_4na1"><i class="_3aiu img sp_TGof8m43NsM sx_9cef27"></i><span class="_3aiv">游戏和应用通知</span></div>
                                    <div class="_4na2">这项设置控制好友的游戏邀请、游戏状态更新、应用开发者在 Facebook 与 Gameroom 上的应用通知。更改这些设置不会对你使用应用和玩游戏产生影响。</div>
                                    <div class="_3q72">已开启</div>
                                    <div class="_1u-7">
                                        <div><a role="button" class="_42ft _4jy0 _4jy4 _517h _51sy" href="#" ajaxify="/settings/applications/disable_notifs_invites/" rel="dialog">编辑</a></div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="_51mx">
                            <td class="_51m-">
                                <div class="_3q73" style="height: 200px;">
                                    <div class="_4na1"><i class="_3aiu img sp_TGof8m43NsM sx_e47887"></i><span class="_3aiv">Facebook 移动应用旧版本</span></div>
                                    <div class="_4na2">部分旧版本 Facebook 移动应用（如过时的黑莓版 Facebook）无法在发帖时直接选择分享对象，你可以通过这项设置调整这类旧版本中所发布内容的隐私设置。</div>
                                    <div class="_3q72"></div>
                                    <div class="_1u-7">
                                        <div>
                                            <div class="_6a _43_1 _21o-" id="u_jsonp_2_8">
                                                <div class="_6a uiPopover" id="u_jsonp_2_e"><a role="button" class="_42ft _4jy0 _55pi _5vto _55_p _2agf _4o_4 _401v _p _4jy3 _517h _51sy" href="#" style="max-width:200px;" aria-haspopup="true" aria-label="分享对象： 公开" id="u_jsonp_2_4" aria-expanded="false" rel="toggle" data-hover="tooltip" data-tooltip-content="公开" data-tooltip-alignh="right"><span class="_-xe _3-8_"><i class="_21or img sp_NVWLSuNJzzH sx_222842"></i></span><span class="_55pe"><span class="img _55ym _55yn _55yo hidden_elem _3__n" aria-busy="true" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuetext="正在加载..." id="u_jsonp_2_9"></span><i class="hidden_elem img sp_uP16EDN4sAD sx_8b0a9e" id="u_jsonp_2_5"><u>checkmark</u></i><i class="hidden_elem img sp_uP16EDN4sAD sx_faa30e" id="u_jsonp_2_6"><u>caution-solid</u></i>公开</span><span class="_4o_3 _3-99"><i class="img sp_uP16EDN4sAD sx_1a1953"></i></span></a></div><input type="hidden" autocomplete="off" name="privacyx" value="300645083384735" id="u_jsonp_2_7">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="_51m- _51mw">
                                <div class="_3_e6" style="height: 200px;">
                                    <div class="_4na1"><i class="_3aiu img sp_TGof8m43NsM sx_53ce2f"></i><span class="_3aiv">我们移除了“其他人使用的应用”这项设置</span></div>
                                    <div class="_4na2">
                                        <div>
                                            <div class="_3_e7">这些过期设置只适合我们旧版本的开放平台，已经被移除。</div>
                                            <div>如果希望了解或更改你目前向应用和网站分享的信息，请在“使用中”查看。</div>
                                        </div>
                                    </div>
                                    <div class="_3q72"></div>
                                    <div class="_1u-7"><span></span></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="mtm">
                <div class="_4-u2 _30i5 _4-u8" id="settings_usability_survey_root"><span class="_48ul">你找到需要的帮助了吗？<a ajaxify="/settings/survey/usability/feedback/?response=yes&amp;ref=applications" rel="async" href="#" role="button" class="mls">是</a> · <a ajaxify="/settings/survey/usability/feedback/?response=no&amp;ref=applications" rel="async" href="#" role="button">否</a> · <a ajaxify="/settings/survey/usability/feedback/?response=browsing&amp;ref=applications" rel="async" href="#" role="button">我不需要什么具体帮助</a></span></div>
            </div>
        </div>
    </div>
    <div id="bottomContent"></div>
</div>
</template>

<script>
export default {
    data() {
        return {
            search: "",
            activeName: 'first'
        }
    },
    methods: {

        handleClick(e) {
            console.log(this.activeName)
        }
    },
}
</script>

<style scoped>
@import '../../css/me.css';

._43gh {
    display: flex
}

._43gi {
    margin-left: -4px
}

._3krp {
    margin-right: 12px;
    text-align: center;
    width: 75px
}

._31zj {
    margin-right: 5px;
    text-align: center;
    width: 10px
}

._3ab9 {
    align-items: flex-end;
    display: flex
}

._66r6 {
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase
}

._3l3d:hover ._3l3e {
    visibility: visible
}

._3l3e {
    visibility: hidden
}

._16-d ._58ak {
    width: 350px
}

._4j3x {
    margin-right: 12px;
    text-align: center;
    width: 60px
}

._5r7p {
    color: #444950;
    font-weight: bold;
    margin-bottom: 20px
}

._5r7q {
    margin-top: 4px
}

._5r7r {
    margin-left: 10px
}

._5r7p ._58ak {
    width: 407px
}

._3zge {
    height: 50px;
    padding-top: 20px;
    text-align: center
}

._3_ae {
    border: 1px solid #dadde1;
    border-radius: 3px;
    border-spacing: 0;
    overflow: hidden;
    text-align: left;
    width: 100%
}

._3_a- {
    background-color: #f5f7f8
}

._3_b0 {
    height: 48px
}

._3_b0>._3_a_ {
    border-top: 1px solid #dadde1
}

._3_a_ {
    padding: 8px 12px
}

._2ykl,
._2ykn,
._2ykp {
    border-radius: 50%;
    display: inline-block;
    height: 10px;
    margin: 3px 8px 0 0;
    vertical-align: top;
    width: 10px
}

._2ykl {
    background-color: #00a400
}

._2ykn {
    background-color: #ffba00
}

._2ykp {
    background-color: #bec3c9
}

._2ykm {
    display: inline-block;
    max-width: 93%
}

._42qn {
    width: 80px
}

._42qo {
    max-width: 120px
}

._1dns {
    display: inline-block;
    max-width: 88%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

._1dnr {
    display: block;
    min-width: 100px
}

._87gr {
    background-color: #fff
}

._40uz {
    padding-bottom: 9px
}

._11sf {
    border-bottom-color: #ebedf0;
    border-bottom-style: solid;
    border-bottom-width: 1px
}

._11sg {
    max-height: 445px;
    overflow-y: auto
}

._11sh {
    color: #90949c;
    font-size: 13px;
    line-height: normal;
    max-width: 350px;
    padding-bottom: 30px
}

._9db6 {
    color: #90949c;
    font-size: 13px;
    line-height: normal;
    max-width: 350px
}

._9db7 {
    color: #216fdb;
    font-size: 13px;
    line-height: normal;
    padding-bottom: 20px;
    padding-top: 8px
}

._5vri {
    padding-bottom: 20px;
    position: relative
}

._54sh {
    padding-left: 6px
}

._5vrj {
    color: #898f9c;
    font-size: 13px;
    padding-bottom: 8px;
    padding-top: 8px
}

._5vrk {
    color: #1d2129;
    font-size: 15px;
    font-weight: bold;
    padding-bottom: 4px
}

._6bzt {
    color: #1d2129;
    font-size: 13px;
    font-weight: 600
}

._5vrs {
    padding-bottom: 25px
}

._5vrs ._3sts {
    width: 180px
}

._40o1 {
    padding-bottom: 25px
}

._40o2 {
    margin-top: 8px
}

._54sr {
    font-size: 13px
}

._9ae8 {
    font-size: 15px
}

._9ae9 {
    font-size: 15px
}

._-t_ {
    color: #1c1e21;
    font-size: 13px;
    font-weight: bold;
    line-height: 14px
}

._1cln {
    position: relative
}

._6bzu {
    background: #f2f3f5;
    border: 1px solid #dadde1
}

._6fl6 .uiInlineTokenizer {
    min-height: 24px
}

._6fl6 .uiToken {
    height: inherit
}

._88rv {
    border-top: 1px solid #ebedf0
}

._88tc {
    color: #606770;
    font-size: 14px;
    margin-top: 30px
}

._88td {
    float: left;
    line-height: 28px;
    margin-right: 10px
}

._88-6 {
    background: #f5f6f7;
    border: solid 1px #dadde1;
    margin: 20px 0;
    padding: 15px
}

._88-7 {
    color: #90949c;
    font-size: 12px;
    font-weight: bold;
    line-height: 27px
}

._88-8 {
    background-color: #1877f2;
    border-color: #1877f2;
    color: #fff;
    padding: 2px 10px
}

._88-8:hover {
    background-color: #0e52b0;
    border-color: #0e52b0;
    color: #fff;
    padding: 2px 10px
}

._88-9 {
    color: #606770;
    font-size: 14px;
    margin-bottom: 20px
}

._88-a {
    color: #606770;
    font-size: 14px
}

._88-b {
    background-color: #1877f2;
    border-color: #1877f2;
    color: #fff;
    padding: 2px 10px
}

._88-b:hover {
    background-color: #0e52b0;
    border-color: #0e52b0;
    color: #fff;
    padding: 2px 10px
}

._88-c {
    background-color: #f5f6f7;
    border-color: #dadde1;
    color: #444950;
    padding: 2px 10px
}

._88-c:hover {
    background-color: #ebedf0;
    border-color: #dadde1;
    color: #444950;
    padding: 2px 10px
}

._9dsm {
    padding-bottom: 15px
}

._3fig {
    cursor: pointer;
    height: 48px;
    outline: none;
    overflow: hidden;
    padding: 7px 0 7px 7px;
    width: 225px
}

._25ko {
    border: 2px solid #f5f6f7;
    margin-bottom: 2px;
    margin-left: 2px
}

._57nf {
    color: #90949c;
    font-size: 15px
}

._57nf:hover {
    color: #1d2129;
    top: 0
}

._57ne {
    color: #1d2129;
    font-size: 15px;
    font-weight: bold
}

._i4p li {
    height: 34px
}

._yue {
    padding: 16px
}

._yuf {
    font-size: 17px;
    font-weight: bold;
    padding: .75em;
    text-align: center
}

._yug {
    color: #606770;
    font-size: 14px;
    line-height: 1.5em;
    padding: 1em
}

._yxp {
    background-color: #f2f3f5;
    border: 1px solid #e9f0f2;
    color: #606770;
    display: block;
    margin: 1em;
    padding: 1em
}

._yxq {
    float: left
}

._yxr,
._90wc {
    margin-left: 2em
}

._90wd {
    color: #000;
    font-size: 7px;
    font-weight: lighter
}

._3fij {
    border-top: 1px solid #e9eaed;
    margin-top: 2px;
    overflow: hidden
}

._yxs {
    margin-right: 4px;
    margin-top: 4px
}

._3fik {
    background: #f5f6f7;
    padding: 20px;
    text-align: center
}

._9adt {
    background: #f5f6f7;
    display: flex;
    height: 50px;
    margin: 6px 0 6px 0;
    padding: 16px;
    position: relative
}

._3q73 {
    background: #f5f6f7;
    border: 4px solid #f5f6f7;
    height: 200px;
    margin: 6px;
    padding: 20px 26px 26px 20px;
    position: relative;
    text-align: center
}

._9adu {
    flex-grow: 1
}

._9adv {
    align-items: center;
    display: flex;
    float: right;
    vertical-align: middle
}

._3q72 {
    color: #90949c;
    font-size: 13px;
    font-weight: bold;
    padding-bottom: 20px
}

._9adw {
    display: inline-block;
    position: relative
}

._3_e6 {
    border: 2px dashed #dadde1;
    color: #90949c;
    height: 200px;
    margin: 6px;
    opacity: .7;
    padding: 20px 26px 26px 20px;
    position: relative;
    text-align: center
}

._3_e7 {
    margin-bottom: 1.5em
}

._3fig:hover {
    background: #e9ebee
}

._yxt {
    margin-right: 4px;
    pointer-events: none;
    -moz-user-select: none
}

._67nj {
    background: #edf2fa;
    border: 2px solid #b0d5ff;
    border-radius: 3px;
    outline: none
}

._4n9s {
    background-color: #f5f6f7;
    color: #90949c;
    font-size: 13px;
    padding: 20px 20px 0 20px
}

._4n9u {
    color: #1d2129;
    font-size: 13px;
    font-weight: bold;
    padding-top: 7px
}

._4n9v {
    padding-left: 9px
}

._4n9w {
    color: #ccc;
    font-size: 11px;
    font-weight: 500;
    padding-left: 4px
}

._4n9x {
    padding-right: 0
}

._4n9y {
    padding-right: 2px
}

._4n9z {
    padding-top: 15px
}

._4n9z ._25kn {
    margin-right: 7px;
    opacity: 0;
    padding: 2px
}

._3fig:hover ._4n9z ._25kn {
    opacity: 1
}

._25ko ._4n9z ._25kn,
._3fig ._4n9z ._25kn,
._4n9z ._25kn {
    opacity: .25
}

._w9r {
    padding-bottom: 0
}

._4n9- {
    border-top: 1px solid #e9eaed;
    color: #365899;
    font-size: 13px;
    padding: 15px
}

._4na0 {
    margin-top: 16px
}

._9adx {
    color: #4b4f56;
    font-size: 15px;
    font-weight: bold;
    position: relative
}

._4na1 {
    color: #4b4f56;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 25px;
    position: relative
}

._9ady {
    color: #90949c;
    font-size: 13px
}

._4na2 {
    color: #90949c;
    font-size: 13px;
    padding-bottom: 20px
}

._3igt {
    background-color: #f5f6f7;
    color: #90949c;
    font-size: 13px;
    padding: 20px
}

._4na3 {
    background-color: #f5f6f7;
    max-height: 320px;
    overflow: hidden;
    padding: 20px
}

._4g7f {
    color: #90949c;
    font-size: 13px;
    font-weight: bold;
    padding: 8px 0 10px 0
}

._4g7g {
    border-top: 1px solid #e9eaed
}

._1u-7 {
    vertical-align: middle
}

._2bqf {
    line-height: 22px
}

._3ais {
    color: #666;
    font-size: 12px
}

._3ait {
    padding-bottom: 2px;
    margin-left: 5px
}

._3aiu {
    margin-right: 12px
}

._3aiv {
    bottom: 4px;
    position: relative
}

._i4r {
    color: #ccc;
    font-size: 13px;
    margin-left: 10px
}

._i4s {
    padding-top: 8px;
    position: relative
}

._i4t {
    position: relative;
    top: 1px
}

._i4u {
    margin-right: 2px
}

._4g7h {
    margin-left: 2px;
    margin-right: 2px
}

._i4v {
    margin-left: 2px
}

._i4w:hover {
    text-decoration: none
}

._4n9t {
    line-height: 30px
}

._i4x {
    margin-top: 1px
}

._27oj {
    position: absolute
}

._d4t {
    border: 1px solid #ebedf0;
    border-radius: 3px
}

._d4u {
    padding: 8px 20px 3px 20px
}

._d4v {
    height: 30px;
    padding-top: 4px
}

._27oj {
    line-height: 24px
}

._1g_f {
    color: #8d949e;
    display: inline-block;
    margin-left: 10px
}

._3o4u {
    color: #000;
    font-size: 15px;
    font-weight: bold;
    line-height: 16px;
    margin-top: 40px
}

._87gs {
    padding: 3px
}

._87gt {
    padding-left: 5px
}

._87gu {
    font-size: 1.1em;
    padding-bottom: 3px
}

._87gv {
    color: #828282;
    float: left;
    font-size: .9em;
    font-weight: lighter
}

._87gw {
    color: #00a400;
    padding: 0 5px 0 0
}

._87gx {
    color: #f7923b;
    padding: 0 5px 0 0
}

._87nn {
    color: #fa383e;
    padding: 0 5px 0 0
}

._87gy {
    float: left;
    font-size: .8em
}

._87gz {
    padding: 0 5px 0 5px
}

._88zy {
    color: #1877f2;
    font-size: 12px
}

._8ams {
    font-size: 13px;
    line-height: 25px;
    margin-left: 5px
}

._9dsl {
    color: #90949c;
    font-size: 13px
}

._680k {
    border: 1px #DADDE1 solid
}

._89in {
    margin-left: 25px;
    margin-right: 25px
}

._685i {
    color: #606770;
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: -14px
}

._680l {
    border-bottom: 1px #DADDE1 solid;
    display: flex;
    justify-content: space-between
}

._80cn {
    background-color: #fff;
    border-radius: 3px 3px 0 0;
    display: flex;
    justify-content: space-between
}

._9cwb {
    flex: 1 1 auto;
    margin-bottom: 15px
}

._4e_m {
    color: #3578e5;
    font-weight: 400;
    text-decoration: none
}

._4e-7 {
    flex: 1 1 auto;
    line-height: 0;
    width: 0
}

._4e-7 ._45hc:hover ._13xf {
    background-color: #ecf3ff
}

._4e-7 ._1hqh:hover ._13xf,
._4e-7 ._13xf {
    background-color: #1877f2;
    left: 0;
    right: 0
}

._4e-7 ._45hc {
    font-weight: bold;
    padding-left: 0;
    padding-right: 0;
    vertical-align: baseline
}

._4e-7 ._1hqh {
    background-color: #ecf3ff
}

._4e-7 ._4jq5 {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 48px;
    margin: 0;
    padding: 0 16px
}

._80cp {
    flex: 1 1 auto;
    line-height: 0;
    width: 0
}

._80cp ._45hc ._13xf {
    left: 0;
    right: 0
}

._80cp ._45hc {
    font-weight: bold
}

._684i {
    color: #606770;
    font-weight: 400;
    line-height: 20px
}

._4219 {
    display: inline-block
}

._4e-7 ._45hc:hover ._684i,
._4e-7 ._1hqh ._684i {
    color: #1c1e21
}

._4e-7 ._1hqh ._684i {
    font-weight: 700
}

._80cp ._45hc:hover ._684i,
._80cp ._1hqh ._684i {
    color: #1c1e21;
    left: 0;
    right: 0
}

._80cp ._1hqh ._684i {
    font-weight: 700
}

._80cp ._5vwy ._13xf {
    background-color: #1877f2
}

._684j {
    background-color: #fff;
    border: 1px #DADCDE solid;
    border-radius: 16px;
    box-sizing: border-box;
    color: #8d949e;
    display: inline-block;
    display: none;
    flex: 0 0 auto;
    font-size: 12px;
    height: 18px;
    line-height: 16px;
    margin-left: 8px;
    padding: 0 6px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, .2)
}

._4e-7 ._1hqh ._684j {
    display: inline-block
}

._4e-7 ._1hqh ._684j,
._4e-7 ._45hc:hover ._684j {
    color: #1c1e21
}

._80cp ._1hqh ._684j {
    display: inline-block
}

._80cp ._1hqh ._684j,
._80cp ._45hc:hover ._684j {
    color: #1c1e21
}

._680m {
    align-self: center;
    flex: 0 0 auto;
    margin-right: 20px
}

._680m ._58ak {
    border: 1px #DADDE1 solid;
    border-radius: 2px;
    box-sizing: border-box;
    height: 28px;
    padding-top: 6px
}

._680m ._58al {
    width: 200px
}

._680m ._58al::-moz-placeholder,
._680m ._58al:-moz-placeholder {
    color: #8d949e
}

._80c0 {
    align-self: center;
    flex: 0 0 auto
}

._80c0 ._58ak {
    border: 1px #DADDE1 solid;
    border-radius: 2px;
    box-sizing: border-box;
    height: 28px
}

._80c0 ._58al {
    width: 200px
}

._80c0 ._58al::-moz-placeholder,
._80c0 ._58al:-moz-placeholder {
    color: #8d949e
}

._680n {
    background-color: #f5f6f7
}

._80c1 {
    background-color: #fff
}

._680o {
    background-color: #fff;
    border-bottom: 1px #DADDE1 solid;
    border-radius: 3px 3px 0 0;
    display: flex
}

._80b_ {
    border-bottom: 1px #DADDE1 solid;
    display: flex;
    justify-content: space-between
}

._680p {
    flex: 1 1 auto;
    padding: 20px 20px
}

._7-8z {
    flex: 1 1 auto;
    padding: 25px 0 17px 0
}

._680q {
    margin-bottom: 10px
}

._7-8- {
    margin-bottom: 15px
}

._680t {
    margin-top: 6px
}

._4e__ {
    margin-top: 8px
}

._7-8_ {
    margin-top: 15px
}

._4e__:first-child {
    margin-top: 0
}

._4f00 {
    margin-top: 10px
}

._4f09 {
    color: #3578e5;
    list-style-type: square;
    margin-left: 8px;
    padding-left: 16px;
    padding-top: 8px
}

._2ygp {
    margin-top: 4px
}

._2ygp:first-child {
    margin-top: 0
}

._680u {
    align-items: center;
    border-left: 1px #EBEDF0 solid;
    display: flex;
    padding: 0 20px;
    padding-top: 15px
}

._80d0 {
    align-items: center;
    display: flex;
    padding: 26px 0 0 0
}

._3-t4 {
    flex: 1 1 auto
}

._80d1 {
    flex: 1 1 auto;
    padding-right: 20px
}

._z3b {
    display: inline-block;
    flex: 0 0 auto
}

._680v {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 130px;
    justify-content: center
}

._3-tc {
    flex: 0 0 auto;
    height: 24px;
    margin-bottom: 10px;
    width: 24px
}

._3-tn {
    color: #8d949e;
    font-size: 15px
}

._1ucf {
    color: #000;
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px
}

._680w {
    display: flex;
    flex-wrap: wrap;
    padding-left: 20px;
    padding-top: 20px
}

._6a6k {
    padding-top: 20px
}

._680x {
    align-items: center;
    background-color: #fff;
    border-radius: 0 0 3px 3px;
    border-top: 1px #DADDE1 solid;
    box-sizing: border-box;
    color: #3578e5;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 10px
}

._680x:hover {
    background-color: rgba(255, 255, 255, .3)
}

._28hm {
    margin-left: 6px
}

._83r6 {
    align-items: center;
    background-color: #ebedf0;
    border: 1px #EBEDF0 solid;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    padding: 10px
}

._83r6:hover {
    background-color: #dadde1
}

._3y15 {
    border: 1px solid #dadde1;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: default;
    display: flex;
    flex: 0 0 auto;
    height: 86px;
    margin-bottom: 20px;
    margin-right: 20px;
    overflow: hidden;
    width: 225px
}

._6a6l {
    background-color: #fff;
    border-bottom: 2px solid #dadde1;
    color: #606770;
    display: flex;
    font-weight: bold;
    height: 50px
}

._1-2n {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px;
    padding-left: 20px;
    width: 180px
}

._1-42 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px;
    width: 80px
}

._3eh- {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px;
    padding-left: 20px;
    width: 160px
}

._1-43 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px
}

._2ni0 {
    box-sizing: border-box;
    cursor: default;
    display: flex;
    flex: 0 0 auto;
    min-height: 50px;
    overflow: hidden;
    padding-right: 10px;
    width: 100%
}

._2ni0:nth-child(even) {
    background-color: #ebedf0
}

._2ni0:nth-child(odd) {
    background-color: #fff
}

._2ni0:hover {
    background-color: #ecf3ff
}

._2ni3 {
    align-items: center;
    cursor: pointer;
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
    padding-left: 20px
}

._2ni1,
._2ni1:hover {
    border-color: #1877f2
}

._2ni8 {
    color: #8d949e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px;
    white-space: normal;
    width: 80px
}

._6adm {
    color: #8d949e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px;
    padding-left: 20px;
    width: 60px
}

._3y15 {
    padding: 0
}

._3y15:hover {
    border-color: #dadde1
}

._3y17,
._3y17:hover {
    border-color: #1877f2
}

._2_ks {
    align-items: center;
    background: #fff;
    cursor: pointer;
    display: flex;
    flex: 1 1 auto;
    overflow: hidden;
    padding: 10px 10px
}

._2_ks:hover {
    background-color: #ecf3ff
}

._3y18 {
    flex: 0 0 auto
}

._81uf {
    float: left;
    margin: 14px
}

._81ug {
    float: left;
    width: 350px
}

._81uk {
    float: left;
    font-weight: bold;
    margin: 18px 0 5px 0
}

._81ul {
    clear: both;
    color: #828282;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 360px
}

._9cn2 {
    color: #fa383e;
    font-size: 16px;
    font-weight: normal;
    margin-left: 5px
}

._9cpu {
    display: inline-block;
    line-height: normal;
    vertical-align: bottom
}

._81um {
    color: #3578e5;
    float: right;
    font-size: 13px;
    font-weight: 400;
    margin: 28px 20px
}

._3y19 {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    margin-right: 2px;
    width: 0
}

._2ni4 {
    display: flex;
    flex: 1 1 auto;
    margin-left: 10px;
    margin-right: 2px
}

._2ni6 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px;
    width: 150px
}

._3y1k {
    font-size: 13px;
    font-weight: bold;
    width: 100%
}

._2ni7 {
    font-size: 13px;
    font-weight: bold
}

._2_kt {
    color: #8d949e;
    font-size: 12px;
    margin-top: 4px
}

._4qok {
    color: #8d949e;
    font-size: 12px;
    margin-top: 4px
}

._2ni0 ._2_kt {
    display: flex
}

._3-lo {
    color: #3578e5;
    font-size: 13px;
    font-weight: 400;
    margin-top: 4px;
    width: 100%
}

._3y15:hover ._3-lo {
    color: #3578e5
}

._2ni9 {
    color: #3578e5;
    font-size: 13px;
    font-weight: 400;
    margin-top: 4px
}

._2ni0:hover ._2ni9 {
    color: #3578e5
}

._2_ku {
    align-items: center;
    align-self: stretch;
    background-color: #fff;
    border-left: 1px #EBEDF0 solid;
    cursor: default;
    display: inline-flex;
    flex: 0 0 auto;
    justify-content: center;
    -moz-user-select: none;
    width: 42px
}

._2ni2 {
    align-items: center;
    align-self: stretch;
    cursor: default;
    display: inline-flex;
    flex: 0 0 auto;
    justify-content: center;
    -moz-user-select: none;
    width: 42px
}

._3y1q {
    display: inline-block;
    flex: 0 0 auto;
    margin-left: 2px
}

._80c6 {
    background-color: #f5f6f7;
    border: 1px solid #dadde1;
    border-radius: 2px;
    color: #8d949e;
    margin: 8px 0 28px 0;
    opacity: 1;
    padding: 10px
}

._81un {
    margin: 20px 0 20px 0
}

._81un ._1n5g {
    border-bottom: 0 solid
}

._81ue {
    background-color: #fff;
    height: 100%
}

._81ue:hover {
    background-color: #f5f6f7;
    cursor: pointer;
    height: 100%
}

#contentCol ._7-8z,
#contentCol ._680t,
#contentCol ._7-8_,
#contentCol ._7-8- {
    margin-bottom: 0;
    margin-top: 0;
    padding-top: 0
}

._8ana {
    color: #606770;
    font-size: 14px;
    padding: 5px
}

._8amr {
    color: #1877f2;
    font-size: 14px
}

._88tq {
    display: flex
}

._88te {
    background-color: #1877f2;
    border: 1px solid #1877f2;
    border-radius: 2px;
    box-sizing: content-box;
    color: #fff;
    font-size: 13px;
    -moz-osx-font-smoothing: grayscale;
    font-weight: bold;
    justify-content: center;
    margin-left: -4px;
    padding: 0 4px;
    position: relative;
    text-align: center;
    text-shadow: none;
    vertical-align: middle
}

.gecko.mac ._88te {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif
}

.segoe ._88te {
    font-weight: 600
}

._88te .img {
    bottom: 1px;
    position: relative;
    vertical-align: middle
}

._88tl {
    line-height: 28px;
    margin-left: 10px;
    size: .9em
}

._88tr {
    color: #606770;
    font-size: 14px;
    line-height: 28px;
    margin-right: 10px
}

.sp_TGof8m43NsM {
    background-image: url(/rsrc.php/v3/y2/r/0CLuGTzJSHV.png);
    background-size: auto;
    background-repeat: no-repeat;
    display: inline-block;
    height: 16px;
    width: 16px
}

.sp_TGof8m43NsM.sx_57897e {
    background-position: 0 -209px
}

.sp_TGof8m43NsM.sx_091a9b {
    background-position: 0 -226px
}

.sp_TGof8m43NsM.sx_743e94 {
    width: 12px;
    height: 12px;
    background-position: 0 -328px
}

.sp_TGof8m43NsM.sx_c21598 {
    width: 10px;
    height: 10px;
    background-position: -13px -328px
}

.sp_TGof8m43NsM.sx_2d19b2 {
    background-position: 0 -243px
}

.sp_TGof8m43NsM.sx_6decf0 {
    background-position: 0 -260px
}

.sp_TGof8m43NsM.sx_9e83ac {
    background-position: 0 -277px
}

.sp_TGof8m43NsM.sx_93af6d {
    width: 24px;
    height: 24px;
    background-position: 0 0
}

.sp_TGof8m43NsM.sx_75aa36 {
    width: 24px;
    height: 24px;
    background-position: 0 -25px
}

.sp_TGof8m43NsM.sx_e9b707 {
    width: 24px;
    height: 24px;
    background-position: 0 -50px
}

.sp_TGof8m43NsM.sx_964466 {
    width: 24px;
    height: 24px;
    background-position: 0 -75px
}

.sp_TGof8m43NsM.sx_3c04ed {
    width: 24px;
    height: 24px;
    background-position: 0 -100px
}

.sp_TGof8m43NsM.sx_c7134b {
    background-position: 0 -294px
}

.sp_TGof8m43NsM.sx_39c18b {
    background-position: 0 -311px
}

.sp_TGof8m43NsM.sx_9cef27 {
    width: 20px;
    height: 20px;
    background-position: 0 -125px
}

.sp_TGof8m43NsM.sx_53ce2f {
    width: 20px;
    height: 20px;
    background-position: 0 -146px
}

.sp_TGof8m43NsM.sx_e47887 {
    width: 20px;
    height: 20px;
    background-position: 0 -167px
}

.sp_TGof8m43NsM.sx_a9dd4c {
    width: 20px;
    height: 20px;
    background-position: 0 -188px
}

#bootloader_qphWq {
    height: 42px;
}

.bootloader_qphWq {
    display: block !important;
}
</style>
