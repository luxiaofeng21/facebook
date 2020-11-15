<template>
<div class="app">
    <div id="contentCol" class="clearfix">
        <div id="headerArea">
            <div class="uiHeader uiHeaderPage">
                <div class="clearfix uiHeaderTop">
                    <div class="rfloat _ohf">
                        <h2 class="accessible_elem">
                            安全与登录
                        </h2>
                        <div class="uiHeaderActions">
                        </div>
                    </div>
                    <div>
                        <h2 class="uiHeaderTitle" aria-hidden="true">
                            安全与登录
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div id="contentArea" role="main">
            <div id="SettingsPage_Content">
                <div>
                    <div>
                        <div>
                            <div class="_k7f _4-u2  _4-u8">
                                <div class="_k7g _4-u3">
                                    <span class=" _50f7 _2ieq">
                                        推荐
                                    </span>
                                </div>
                                <div class="_1nfz _4-u3">
                                    <table cols="3" class="_4p8y uiGrid _51mz" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr class="_51mx">
                                                <td class="_1fow _51m- hLeft">
                                                    <i alt="" class="img sp_ub4b-D9OLay sx_9bd75d">
                                                    </i>
                                                </td>
                                                <td class="_51m- hLeft">
                                                    <span class="_39gj">
                                                        选择能够帮助你找回帐户的好友
                                                    </span>
                                                    <span class="_4p8z">
                                                        选择 3 到 5 位好友，在你无法登录帐户时帮助你。我们建议每位用户执行此操作。
                                                    </span>
                                                </td>
                                                <td class="_51mw _51m- hRght">
                                                    <button class="_1nf- _4jy0 _4jy3 _517h _51sy _42ft" type="submit" value="1">
                                                        编辑
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="_39gk" hidden="">
                                        <div id="trusted_friends_recommended">
                                            <div class="_5zf3">
                                                <div class="fbSettingsEditor uiBoxGray noborder">
                                                    <div>
                                                        <div class="pbm fbSettingsEditorFields">
                                                            <div class="ptm">
                                                                <div class="mbs uiP fsm fcg">
                                                                    信任联系人是在你无法访问帐户时，能够帮助你安全找回帐户的好友。
                                                                </div>
                                                                <div class="fcg" id="fbNoTrustedFriends">
                                                                    <div class="clearfix">
                                                                        <div class="lfloat _ohe">
                                                                            <strong>
                                                                                你还未选择任何好友。
                                                                            </strong>
                                                                        </div>
                                                                        <div class="rfloat _ohf">
                                                                            <a rel="dialog" href="/ajax/guardian/preselect/intro" role="button">
                                                                                选择好友
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="fbPortraitsRoot" class="hidden_elem">
                                                                    <div class="mts ptm uiBoxGray topborder">
                                                                        <div class="fcg">
                                                                            <div class="clearfix">
                                                                                <div class="lfloat _ohe">
                                                                                    <strong>
                                                                                        你的信任联系人：
                                                                                    </strong>
                                                                                </div>
                                                                                <div class="rfloat _ohf">
                                                                                    <a rel="dialog" href="/ajax/guardian/preselect/dialog" role="button" class="mrm">
                                                                                        编辑
                                                                                    </a>
                                                                                    <a rel="dialog" href="/ajax/guardian/preselect/remove" role="button">
                                                                                        全部移除
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div id="fbFriendsPortraits">
                                                                            <div class="mtm">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="mtm uiBoxGray topborder">
                                                                <div class="mtm">
                                                                    <img class="mas saveThrobber uiLoadingIndicatorAsync img" src="/rsrc.php/v3/yb/r/GsNJNwuI-UM.gif" alt="" width="16" height="11">
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
                        <div class="_k7f _15va _4-u2  _4-u8">
                            <div class="_k7g _15v9 _4-u3">
                                <span class=" _50f7 _2ieq">
                                    登录位置
                                </span>
                            </div>
                            <span class="_5-6i">
                                <div class="_a7w _195p _4-u3">
                                    <div direction="left" class="clearfix">
                                        <div class="_ohe lfloat">
                                            <div class="_a7x img _8o _8r">
                                                <img alt="Windows PC" src="/images/si/security_settings/wyli/device-windows.png" class="img">
                                            </div>
                                        </div>
                                        <div class="">
                                            <div class="_42ef _8u">
                                                <div class="clearfix">
                                                    <div class="_ohe lfloat">
                                                        <div>
                                                            <span class="_3o7u">
                                                                Windows 电脑 ·
                                                                <span data-hover="tooltip">
                                                                    未知地点
                                                                </span>
                                                            </span>
                                                            <span class="_1aml _50f8">
                                                                Firefox ·
                                                                <span class="_1anp">
                                                                    在线
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="_ohf rfloat">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="_a7w _195p _4-u3">
                                    <div direction="left" class="clearfix">
                                        <div class="_ohe lfloat">
                                            <div class="_a7x img _8o _8r">
                                                <img alt="iPhone" src="/images/si/security_settings/wyli/device-iphone.png" class="img">
                                            </div>
                                        </div>
                                        <div class="">
                                            <div class="_42ef _8u">
                                                <div class="clearfix">
                                                    <div class="_ohe lfloat">
                                                        <div>
                                                            <span class="_3o7u">
                                                                iPhone 11 ·
                                                                <span data-hover="tooltip">
                                                                    China · 广东 · 广州
                                                                </span>
                                                            </span>
                                                            <span class="_1aml _50f8">
                                                                Facebook 应用 ·
                                                                <span class="_50f8">
                                                                    8月5日 20:06
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="_ohf rfloat">
                                                        <div class="uiPopover _6a">
                                                            <a class="_1amm _p" aria-label="编辑" role="button">
                                                                <el-popover placement="bottom" width="10" trigger="click">
                                                                    <div class="_54ng">
                                                                        <ul class="_54nf" role="menu">
                                                                            <li class="_54ni __MenuItem" role="presentation"><a class="_54nc" href="#" role="menuitem"><span><span class="_54nh">不是你？</span></span></a></li>
                                                                            <li class="_54ni __MenuItem" role="presentation"><a class="_54nc" href="#" role="menuitem"><span><span class="_54nh">退出</span></span></a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <i slot="reference" alt="" class="img sp_ub4b-D9OLay sx_69e1a4">
                                                                    </i>
                                                                </el-popover>

                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                            <div class="_4h8e _4-u3">
                                <div class="clearfix">
                                    <div class="_ohe lfloat">
                                        <a href="#">
                                            <div direction="left" class="clearfix">
                                                <div class="_ohe lfloat">
                                                    <i class="el-icon-caret-bottom" alt="">
                                                    </i>
                                                </div>
                                                <div class="el-inline">
                                                    <div class="_42ef _8u">
                                                        <span class="_2gee">
                                                            展开
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="_ohf rfloat">
                                        <a href="#">
                                            <span class="_4h8f">
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_1xpm _4-u2  _4-u8">
                            <div class="_1nfx _4-u3  _57d8">
                                <span class=" _50f7">
                                    登录
                                </span>
                            </div>
                            <div class="_1nfz _4-u3">
                                <table cols="3" class="_4p8y uiGrid _51mz" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr class="_51mx">
                                            <td class="_1fow _51m- hLeft">
                                                <i alt="" class="img sp_ub4b-D9OLay sx_9824b6">
                                                </i>
                                            </td>
                                            <td class="_51m- hLeft">
                                                <span class="_39gj">
                                                    更改密码
                                                </span>
                                                <span class="_4p8z">
                                                    建议你使用高强度密码，不要与其他地方重复
                                                </span>
                                            </td>
                                            <td class="_51mw _51m- hRght">
                                                <button class="_1nf- _4jy0 _4jy3 _517h _51sy _42ft" type="submit" value="1">
                                                    编辑
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="_39gk" hidden="">
                                    <div id="password">
                                        <div class="_5zf3 _2b14">
                                            <div class="fbSettingsEditor uiBoxGray noborder">
                                                <div>
                                                    <div class="pbm fbSettingsEditorFields">
                                                        <div class="ptm">
                                                            <div>
                                                                <div>
                                                                    <div class="_3qn7 _61-0 _2fyh _3qnf">
                                                                        <div style="padding-bottom: 24px;">
                                                                            <div class="_3-94 _3qn7 _61-0 _2fyh _3qnf">
                                                                                <div class="_3qn7 _61-3 _2fyi _3qnf">
                                                                                    <div class="_86ij">
                                                                                        <div class="_21op _3qn7 _61-3 _2fyi _3qng">
                                                                                            <div class="_3qn7 _61-0 _2fyi _3qng">
                                                                                                <div class="_3-94" style="padding-top: 0px;">
                                                                                                    <div class="_3qn7 _61-0 _2fyi _3qng">
                                                                                                        <span class="">
                                                                                                            <label for="js_6" id="js_7">
                                                                                                                <span style="font-family: Arial, sans-serif; font-size: 13px; line-height: 17px; letter-spacing: normal; font-weight: normal; overflow-wrap: normal; text-align: left; color: rgb(28, 30, 33);">
                                                                                                                    旧密码
                                                                                                                </span>
                                                                                                            </label>
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="_86ik _3qn7 _61-0 _2fyh _3qnf">
                                                                                            <span class="_2gn0" style="height: 36px; background-color: rgb(255, 255, 255); border: 1px solid rgb(204, 208, 213); border-radius: 4px; box-shadow: none; color: rgb(28, 30, 33); font-family: Arial, sans-serif; --background-color:#FFFFFF;">
                                                                                                <input class="_58al _2gnb" type="password" aria-errormessage="js_9" aria-invalid="true" aria-labelledby="js_7" autocomplete="disable_autocomplete" id="js_6" value="zhongxi520">
                                                                                                <div aria-label="切换密码遮蔽" class="oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 pq6dq46d mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l dwo3fsh8 pzggbiyp pkj7ub1o bqnlxs5p kkg9azqs c24pa1uk ln9iyx3p fe6kdd0r ar1oviwq l10q8mi9 sq40qgkc s8quxz6p pdjglbur" role="button" tabindex="0">
                                                                                                    <i class="hu5pjgll lzf7d6o1 sp_8WRqmpvuVQ7 sx_cbc630">
                                                                                                    </i>
                                                                                                    <div class="s45kfl79 emlxlaya bkmhp75w spb7xbtv i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s" data-visualcompletion="ignore" style="inset: -8px;">
                                                                                                    </div>
                                                                                                </div>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div style="padding-bottom: 24px;">
                                                                            <div class="_3-94 _3qn7 _61-0 _2fyh _3qnf">
                                                                                <div class="_3qn7 _61-3 _2fyi _3qnf">
                                                                                    <div class="_86ij">
                                                                                        <div class="_21op _3qn7 _61-3 _2fyi _3qng">
                                                                                            <div class="_3qn7 _61-0 _2fyi _3qng">
                                                                                                <div class="_3-94" style="padding-top: 0px;">
                                                                                                    <div class="_3qn7 _61-0 _2fyi _3qng">
                                                                                                        <span class="">
                                                                                                            <label for="js_b" id="js_c">
                                                                                                                <span style="font-family: Arial, sans-serif; font-size: 13px; line-height: 17px; letter-spacing: normal; font-weight: normal; overflow-wrap: normal; text-align: left; color: rgb(28, 30, 33);">
                                                                                                                    新密码
                                                                                                                </span>
                                                                                                            </label>
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="_86ik _3qn7 _61-0 _2fyh _3qnf">
                                                                                            <span class="_2gn0" style="height: 36px; background-color: rgb(255, 255, 255); border: 1px solid rgb(204, 208, 213); border-radius: 4px; box-shadow: none; color: rgb(28, 30, 33); font-family: Arial, sans-serif; --background-color:#FFFFFF;">
                                                                                                <input class="_58al _2gnb" type="password" aria-errormessage="js_e" aria-invalid="true" aria-labelledby="js_c" autocomplete="disable_autocomplete" id="js_b" value="">
                                                                                                <div aria-label="切换密码遮蔽" class="oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 pq6dq46d mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l dwo3fsh8 pzggbiyp pkj7ub1o bqnlxs5p kkg9azqs c24pa1uk ln9iyx3p fe6kdd0r ar1oviwq l10q8mi9 sq40qgkc s8quxz6p pdjglbur" role="button" tabindex="0">
                                                                                                    <i class="hu5pjgll lzf7d6o1 sp_8WRqmpvuVQ7 sx_cbc630">
                                                                                                    </i>
                                                                                                    <div class="s45kfl79 emlxlaya bkmhp75w spb7xbtv i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s" data-visualcompletion="ignore" style="inset: -8px;">
                                                                                                    </div>
                                                                                                </div>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div style="padding-bottom: 24px;">
                                                                            <div class="_3-94 _3qn7 _61-0 _2fyh _3qnf">
                                                                                <div class="_3qn7 _61-3 _2fyi _3qnf">
                                                                                    <div class="_86ij">
                                                                                        <div class="_21op _3qn7 _61-3 _2fyi _3qng">
                                                                                            <div class="_3qn7 _61-0 _2fyi _3qng">
                                                                                                <div class="_3-94" style="padding-top: 0px;">
                                                                                                    <div class="_3qn7 _61-0 _2fyi _3qng">
                                                                                                        <span class="">
                                                                                                            <label for="js_g" id="js_h">
                                                                                                                <span style="font-family: Arial, sans-serif; font-size: 13px; line-height: 17px; letter-spacing: normal; font-weight: normal; overflow-wrap: normal; text-align: left; color: rgb(28, 30, 33);">
                                                                                                                    再次输入新密码
                                                                                                                </span>
                                                                                                            </label>
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="_86ik _3qn7 _61-0 _2fyh _3qnf">
                                                                                            <span class="_2gn0" style="height: 36px; background-color: rgb(255, 255, 255); border: 1px solid rgb(204, 208, 213); border-radius: 4px; box-shadow: none; color: rgb(28, 30, 33); font-family: Arial, sans-serif; --background-color:#FFFFFF;">
                                                                                                <input class="_58al _2gnb" type="password" aria-errormessage="js_j" aria-invalid="true" aria-labelledby="js_h" autocomplete="disable_autocomplete" id="js_g" value="">
                                                                                                <div aria-label="切换密码遮蔽" class="oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 pq6dq46d mg4g778l btwxx1t3 pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh p8dawk7l dwo3fsh8 pzggbiyp pkj7ub1o bqnlxs5p kkg9azqs c24pa1uk ln9iyx3p fe6kdd0r ar1oviwq l10q8mi9 sq40qgkc s8quxz6p pdjglbur" role="button" tabindex="0">
                                                                                                    <i class="hu5pjgll lzf7d6o1 sp_8WRqmpvuVQ7 sx_cbc630">
                                                                                                    </i>
                                                                                                    <div class="s45kfl79 emlxlaya bkmhp75w spb7xbtv i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s" data-visualcompletion="ignore" style="inset: -8px;">
                                                                                                    </div>
                                                                                                </div>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="_3qn7 _61-0 _2fyi _3qnf">
                                                                            <div class="_6g3g" style="flex: 0 1 auto; order: 0;">
                                                                                <div style="padding: 0px 4px;">
                                                                                    <button style="letter-spacing: normal; color: rgb(255, 255, 255); font-size: 12px; font-weight: bold; font-family: Arial, sans-serif; line-height: 34px; text-align: center; background-color: rgb(176, 213, 255); border-color: rgb(176, 213, 255); height: 36px; padding-left: 19px; padding-right: 19px; border-radius: 2px;" type="submit" aria-disabled="true" class="_271k _271m _271n _1qjd _av_ _7tvm _7tv2 _7tv4">
                                                                                        <div class="_43rl">
                                                                                            <div data-hover="tooltip" data-tooltip-display="overflow" class="_43rm">
                                                                                                保存更改
                                                                                            </div>
                                                                                        </div>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                            <div class="_6g3g" style="flex: 0 1 auto; order: 0;">
                                                                                <div style="padding: 0px 4px;">
                                                                                    <a style="letter-spacing: normal; color: rgb(68, 73, 80); font-size: 12px; font-weight: bold; font-family: Arial, sans-serif; line-height: 34px; text-align: center; background-color: rgb(245, 246, 247); border-color: rgb(218, 221, 225); height: 36px; padding-left: 19px; padding-right: 19px; border-radius: 2px;" type="button" aria-disabled="false" class="_271k _271m _1qjd _1gwm _7tvm _7tv2 _7tv4" href="/recover/initiate/?ref=www_change_password">
                                                                                        <div class="_43rl">
                                                                                            <div data-hover="tooltip" data-tooltip-display="overflow" class="_43rm">
                                                                                                Forgot your password?
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <!-- react-mount-point-unstable -->
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mtm uiBoxGray topborder">
                                                            <div class="mtm">
                                                                <img class="mas saveThrobber uiLoadingIndicatorAsync img" src="/rsrc.php/v3/yb/r/GsNJNwuI-UM.gif" alt="" width="16" height="11">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="_1nfz _4-u3">
                                <table cols="3" class="_4p8y uiGrid _51mz" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr class="_51mx">
                                            <td class="_1fow _51m- hLeft">
                                                <i alt="" class="img sp_ub4b-D9OLay sx_bbe596">
                                                </i>
                                            </td>
                                            <td class="_51m- hLeft">
                                                <span class="_39gj">
                                                    保存登录信息
                                                </span>
                                                <span class="_4p8z">
                                                    <span>
                                                        <span class="_y5_">
                                                            开
                                                        </span>
                                                        <span class="_y60">
                                                            •
                                                        </span>
                                                    </span>
                                                    系统只会在你选择的浏览器和设备上保存登录信息
                                                </span>
                                            </td>
                                            <td class="_51mw _51m- hRght">
                                                <button class="_1nf- _4jy0 _4jy3 _517h _51sy _42ft" type="submit" value="1">
                                                    编辑
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="_39gk" hidden="">
                                    <div id="device_based_login">
                                        <div class="_5zf3">
                                            <div class="fbSettingsEditor uiBoxGray noborder">
                                                <div>
                                                    <div class="pbm fbSettingsEditorFields">
                                                        <div class="ptm">
                                                            <div>
                                                                <div class="_4-u2 _4-u8">
                                                                    <div class="_4-u3 _5dwa _5dwb _57d8 _57d8">
                                                                        <span class="_38my">
                                                                            这个浏览器
                                                                            <span class="_c1c">
                                                                            </span>
                                                                        </span>
                                                                        <div class="_3s3-">
                                                                        </div>
                                                                    </div>
                                                                    <div class="_4-u3 _2z5s">
                                                                        <a ajaxify="/login/device-based/invalidate-nonce/?flow=logged_in_settings" rel="async-post" href="#" role="button">
                                                                            <div class="_2ph_">
                                                                                <div class="fsl fwb fcb">
                                                                                    移除已保存的登录信息
                                                                                </div>
                                                                                <div class="fsm fwn fcg">
                                                                                    下次使用这个浏览器登录时必须输入密码。
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div class="_4-u3 _2z5s">
                                                                        <a ajaxify="/login/device-based/async/remove/?flow=logged_in_settings" rel="async-post" href="#" role="button">
                                                                            <div class="_2ph_">
                                                                                <div class="fsl fwb fcb">
                                                                                    移除帐户
                                                                                </div>
                                                                                <div class="fsm fwn fcg">
                                                                                    你下次登录时需要输入邮箱或手机号。
                                                                                </div>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div class="_2pid">
                                                                    <div class="_4-u2 _4-u8">
                                                                        <div class="_4-u3 _5dwa _5dwb _57d8 _57d8">
                                                                            <span class="_38my">
                                                                                其他设备或浏览器
                                                                                <span class="_c1c">
                                                                                </span>
                                                                            </span>
                                                                            <div class="_3s3-">
                                                                            </div>
                                                                        </div>
                                                                        <div class="_4-u3 _2z5s removableItem">
                                                                            <a ajaxify="/settings/security/device_based_login/remove/?flow=settings_for_remote_devices&amp;id=1552756434889159&amp;single=1" rel="async-post" href="#" role="button">
                                                                                <div class="_2ph_">
                                                                                    <div class="fsl fwb fcb">
                                                                                        从 iOS 13 · Facebook for iOS 移除已保存的登录信息
                                                                                    </div>
                                                                                    <div class="fsm fwn fcg">
                                                                                        上次使用：8月5日 20:06
                                                                                    </div>
                                                                                    <div class="fsm fwn fcg">
                                                                                        无登录密码
                                                                                    </div>
                                                                                </div>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mtm uiBoxGray topborder">
                                                            <div class="mtm">
                                                                <img class="mas saveThrobber uiLoadingIndicatorAsync img" src="/rsrc.php/v3/yb/r/GsNJNwuI-UM.gif" alt="" width="16" height="11">
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
                        <div class="_1xpm _4-u2  _4-u8">
                            <div class="_1nfx _4-u3  _57d8">
                                <span class=" _50f7">
                                    双重验证
                                </span>
                            </div>
                            <div class="_1nfz _4-u3">
                                <table cols="3" class="_4p8y uiGrid _51mz" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr class="_51mx">
                                            <td class="_1fow _51m- hLeft">
                                                <i alt="" class="img sp_ub4b-D9OLay sx_5482ad">
                                                </i>
                                            </td>
                                            <td class="_51m- hLeft">
                                                <span class="_39gj">
                                                    使用双重验证
                                                </span>
                                                <span class="_4p8z">
                                                    如果发现有人尝试从陌生设备或浏览器登录，我们会要求提供验证码。
                                                </span>
                                            </td>
                                            <td class="_51mw _51m- hRght">
                                                <button class="_1nf- _4jy0 _4jy3 _517h _51sy _42ft" type="submit" value="1">
                                                    编辑
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="_39gk" hidden="">
                                    <div id="two_fac_auth">
                                        <div class="_5zf3">
                                            <div class="fbSettingsEditor uiBoxGray noborder">
                                                <div>
                                                    <div class="pbm fbSettingsEditorFields">
                                                        <div class="ptm">
                                                        </div>
                                                        <div class="mtm uiBoxGray topborder">
                                                            <div class="mtm">
                                                                <img class="mas saveThrobber uiLoadingIndicatorAsync img" src="/rsrc.php/v3/yb/r/GsNJNwuI-UM.gif" alt="" width="16" height="11">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="_1nfz _4-u3">
                                <table cols="3" class="_4p8y uiGrid _51mz" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr class="_51mx">
                                            <td class="_1fow _51m- hLeft">
                                                <i alt="" class="img sp_ub4b-D9OLay sx_d4903f">
                                                </i>
                                            </td>
                                            <td class="_51m- hLeft">
                                                <span class="_39gj">
                                                    已授权设备
                                                </span>
                                                <span class="_4p8z">
                                                    审核你不需要使用验证码登录的设备列表
                                                </span>
                                            </td>
                                            <td class="_51mw _51m- hRght">
                                                <button class="_1nf- _4jy0 _4jy3 _517h _51sy _42ft" type="submit" value="1">
                                                    查看
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="_39gk" hidden="">
                                    <div id="authorized_logins">
                                        <div class="_5zf3">
                                            <div class="fbSettingsEditor uiBoxGray noborder">
                                                <div>
                                                    <div class="pbm fbSettingsEditorFields">
                                                        <div class="ptm">
                                                            <div class="_3-8y _3ktl" id="2facDevicesList">
                                                                <form rel="async" ajaxify="/ajax/settings/security/devices.php" method="post" onsubmit="" id="u_e_0">
                                                                    <input type="hidden" name="cquick_token" value="AQ5EKxvpxpZg4QiA" autocomplete="off">
                                                                    <input type="hidden" name="ctarget" value="https%25252525252525253A%25252525252525252F%25252525252525252Fwww.facebook.com" autocomplete="off">
                                                                    <input type="hidden" name="cquick" value="jsc_c_e" autocomplete="off">
                                                                    <input type="hidden" name="jazoest" value="22125" autocomplete="off">
                                                                    <input type="hidden" name="fb_dtsg" value="AQGjWXDfaQmd:AQF5YsoGnSTP" autocomplete="off">
                                                                    <div class="uiP fsm">
                                                                        尚未验证任何装置。
                                                                    </div>
                                                                    <button value="1" class="_42ft _4jy0 _4jy3 _517h _51sy" type="submit">
                                                                        移除
                                                                    </button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div class="mtm uiBoxGray topborder">
                                                            <div class="mtm">
                                                                <img class="mas saveThrobber uiLoadingIndicatorAsync img" src="/rsrc.php/v3/yb/r/GsNJNwuI-UM.gif" alt="" width="16" height="11">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="_1nfz _4-u3">
                                <table cols="3" class="_4p8y uiGrid _51mz" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr class="_51mx">
                                            <td class="_1fow _51m- hLeft">
                                                <i alt="" class="img sp_ub4b-D9OLay sx_156b57">
                                                </i>
                                            </td>
                                            <td class="_51m- hLeft">
                                                <span class="_39gj">
                                                    应用密码
                                                </span>
                                                <span class="_4p8z">
                                                    使用独立密码登录应用，而不是使用 Facebook 密码或登录验证码。
                                                </span>
                                            </td>
                                            <td class="_51mw _51m- hRght">
                                                <button class="_1nf- _4jy0 _4jy3 _517h _51sy _42ft" type="submit" value="1">
                                                    添加
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="_39gk" hidden="">
                                    <div id="per_app_passwords">
                                        <div class="_5zf3">
                                            <div class="fbSettingsEditor uiBoxGray noborder">
                                                <form rel="async" action="/ajax/settings/security/per_app_passwords" method="post" onsubmit="" id="u_f_2">
                                                    <input type="hidden" name="cquick_token" value="AQ5EKxvpxpZg4QiA" autocomplete="off">
                                                    <input type="hidden" name="ctarget" value="https%25252525252525253A%25252525252525252F%25252525252525252Fwww.facebook.com" autocomplete="off">
                                                    <input type="hidden" name="cquick" value="jsc_c_e" autocomplete="off">
                                                    <input type="hidden" name="jazoest" value="21855" autocomplete="off">
                                                    <input type="hidden" name="fb_dtsg" value="AQGKB_J3EL-U:AQE4FlSfB-rY" autocomplete="off">
                                                    <div class="pbm fbSettingsEditorFields">
                                                        <div class="ptm">
                                                            <div class="mbm">
                                                                <div id="fbPerAppPasswdList">
                                                                </div>
                                                                <div class="clearfix">
                                                                    <span class="lfloat _ohe">
                                                                        <a href="/help/249378535085386/" class="mrs" data-hover="tooltip" data-tooltip-content="部分 Facebook 应用（例如：Jabber、Skype、Xbox 等）无法接收登录验证码。如果启用了双重验证，你有可能暂时无法登录帐户。你可以使用应用密码替代帐户密码来登录应用。" data-tooltip-position="below">
                                                                            详细了解
                                                                        </a>
                                                                        应用密码
                                                                    </span>
                                                                    <span class="rfloat _ohf">
                                                                        <a rel="dialog" href="ajax/login/per_app_passwords/dialog" role="button">
                                                                            创建应用密码
                                                                        </a>
                                                                        <a class="hidden_elem uiHelpLink mlm" href="#" role="button" data-hover="tooltip" data-tooltip-content="部分 Facebook 应用（例如：Jabber、Skype、Xbox 等）无法接收登录验证码。如果启用了双重验证，你有可能暂时无法登录帐户。你可以使用应用密码替代帐户密码来登录应用。" data-tooltip-position="below" data-tooltip-alignh="right">
                                                                        </a>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mtm uiBoxGray topborder">
                                                            <div class="mtm">
                                                                <label class="submit uiButtonDisabled uiButton uiButtonConfirm" id="u_f_0" for="u_f_1">
                                                                    <input value="保存更改" disabled="1" type="submit" id="u_f_1">
                                                                </label>
                                                                <img class="mas saveThrobber uiLoadingIndicatorAsync img" src="/rsrc.php/v3/yb/r/GsNJNwuI-UM.gif" alt="" width="16" height="11">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_1xpm _4-u2  _4-u8">
                            <div class="_1nfx _4-u3  _57d8">
                                <span class=" _50f7">
                                    加强安全防护
                                </span>
                            </div>
                            <div class="_1nfz _4-u3">
                                <table cols="3" class="_4p8y uiGrid _51mz" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr class="_51mx">
                                            <td class="_1fow _51m- hLeft">
                                                <i alt="" class="img sp_ub4b-D9OLay sx_36c243">
                                                </i>
                                            </td>
                                            <td class="_51m- hLeft">
                                                <span class="_39gj">
                                                    接收陌生登录提醒
                                                </span>
                                                <span class="_4p8z">
                                                    一旦有人从你平时不用的设备或浏览器登录，我们会马上通知你
                                                </span>
                                            </td>
                                            <td class="_51mw _51m- hRght">
                                                <button class="_1nf- _4jy0 _4jy3 _517h _51sy _42ft" type="submit" value="1">
                                                    编辑
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="_39gk" hidden="">
                                    <div id="login_alerts">
                                        <div class="_5zf3">
                                            <div class="fbSettingsEditor uiBoxGray noborder">
                                                <form rel="async" action="/ajax/settings/security/login_alerts/" method="post" onsubmit="" id="u_g_7">
                                                    <input type="hidden" name="cquick_token" value="AQ5EKxvpxpZg4QiA" autocomplete="off">
                                                    <input type="hidden" name="ctarget" value="https%25252525252525253A%25252525252525252F%25252525252525252Fwww.facebook.com" autocomplete="off">
                                                    <input type="hidden" name="cquick" value="jsc_c_e" autocomplete="off">
                                                    <input type="hidden" name="jazoest" value="22071" autocomplete="off">
                                                    <input type="hidden" name="fb_dtsg" value="AQFh6fKfBVbM:AQHV1pZQ4qpx" autocomplete="off">
                                                    <div class="pbm fbSettingsEditorFields">
                                                        <div class="ptm">
                                                            <div class="mbm uiP fsm">
                                                                <span class="_50f8">
                                                                    有人通过未知设备或浏览器登录时收到提醒。
                                                                </span>
                                                            </div>
                                                            <div class="_tph">
                                                                <div class="_tpl">
                                                                    <i class="_4y2b img sp_SRjijgVn2fi sx_ec1d6e">
                                                                    </i>
                                                                    <span class="_tpm">
                                                                        通知
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <div class="uiInputLabel clearfix">
                                                                        <label class="_55sh uiInputLabelInput">
                                                                            <input type="radio" name="n" value="1" id="u_g_1">
                                                                            <span>
                                                                            </span>
                                                                        </label>
                                                                        <label for="u_g_1" class="uiInputLabelLabel">
                                                                            接收通知
                                                                        </label>
                                                                    </div>
                                                                    <div class="uiInputLabel clearfix">
                                                                        <label class="_55sh uiInputLabelInput">
                                                                            <input type="radio" name="n" value="0" checked="1" id="u_g_2">
                                                                            <span>
                                                                            </span>
                                                                        </label>
                                                                        <label for="u_g_2" class="uiInputLabelLabel">
                                                                            不接收通知
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="_tpp">
                                                            </div>
                                                            <div class="_tph">
                                                                <div class="_tpl">
                                                                    <i class="_4y2b img sp_SRjijgVn2fi sx_185d96">
                                                                    </i>
                                                                    <span class="_tpm">
                                                                        Messenger
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <div class="uiInputLabel clearfix">
                                                                        <label class="_55sh uiInputLabelInput">
                                                                            <input type="radio" name="m" value="1" id="u_g_3">
                                                                            <span>
                                                                            </span>
                                                                        </label>
                                                                        <label for="u_g_3" class="uiInputLabelLabel">
                                                                            接收通知
                                                                        </label>
                                                                    </div>
                                                                    <div class="uiInputLabel clearfix">
                                                                        <label class="_55sh uiInputLabelInput">
                                                                            <input type="radio" name="m" value="0" checked="1" id="u_g_4">
                                                                            <span>
                                                                            </span>
                                                                        </label>
                                                                        <label for="u_g_4" class="uiInputLabelLabel">
                                                                            不接收通知
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="_tpp">
                                                            </div>
                                                            <div class="_tph">
                                                                <div class="_tpl">
                                                                    <i class="_4y2b img sp_SRjijgVn2fi sx_0b3fe4">
                                                                    </i>
                                                                    <span class="_tpm">
                                                                        邮箱
                                                                    </span>
                                                                </div>
                                                                <div>
                                                                    <div class="uiInputLabel clearfix">
                                                                        <label class="_kv1 _55sg uiInputLabelInput">
                                                                            <input type="checkbox" name="el[]" value="543787366@qq.com" id="u_g_5">
                                                                            <span class="_66ul">
                                                                            </span>
                                                                        </label>
                                                                        <label for="u_g_5" class="uiInputLabelLabel">
                                                                            通过
                                                                            <b>
                                                                                <span>
                                                                                    543787366@qq.com
                                                                                </span>
                                                                            </b>
                                                                            接收邮件提醒。
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="_tpp">
                                                            </div>
                                                            <a ajaxify="/login_alerts/add/email/" rel="dialog" href="#" role="button">
                                                                添加邮箱
                                                            </a>
                                                            <br>
                                                        </div>
                                                        <div class="mtm uiBoxGray topborder">
                                                            <div class="mtm">
                                                                <label class="submit uiButtonDisabled uiButton uiButtonConfirm" id="u_g_0" for="u_g_6">
                                                                    <input value="保存更改" disabled="1" type="submit" id="u_g_6">
                                                                </label>
                                                                <img class="mas saveThrobber uiLoadingIndicatorAsync img" src="/rsrc.php/v3/yb/r/GsNJNwuI-UM.gif" alt="" width="16" height="11">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="_1nfz _4-u3">
                                <table cols="3" class="_4p8y uiGrid _51mz" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr class="_51mx">
                                            <td class="_1fow _51m- hLeft">
                                                <i alt="" class="img sp_ub4b-D9OLay sx_9bd75d">
                                                </i>
                                            </td>
                                            <td class="_51m- hLeft">
                                                <span class="_39gj">
                                                    选择 3 到 5 位好友，在你无法登录帐户时帮助你
                                                </span>
                                                <span class="_4p8z">
                                                    你的信任联系人将从 Facebook 获得的验证码和链接发送给你，帮助你重新登录帐户
                                                </span>
                                            </td>
                                            <td class="_51mw _51m- hRght">
                                                <button class="_1nf- _4jy0 _4jy3 _517h _51sy _42ft" type="submit" value="1">
                                                    编辑
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="_39gk" hidden="">
                                    <div id="trusted_friends">
                                        <div class="_5zf3">
                                            <div class="fbSettingsEditor uiBoxGray noborder">
                                                <div>
                                                    <div class="pbm fbSettingsEditorFields">
                                                        <div class="ptm">
                                                            <div class="mbs uiP fsm fcg">
                                                                信任联系人是在你无法访问帐户时，能够帮助你安全找回帐户的好友。
                                                            </div>
                                                            <div class="fcg" id="fbNoTrustedFriends">
                                                                <div class="clearfix">
                                                                    <div class="lfloat _ohe">
                                                                        <strong>
                                                                            你还未选择任何好友。
                                                                        </strong>
                                                                    </div>
                                                                    <div class="rfloat _ohf">
                                                                        <a rel="dialog" href="/ajax/guardian/preselect/intro" role="button">
                                                                            选择好友
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="fbPortraitsRoot" class="hidden_elem">
                                                                <div class="mts ptm uiBoxGray topborder">
                                                                    <div class="fcg">
                                                                        <div class="clearfix">
                                                                            <div class="lfloat _ohe">
                                                                                <strong>
                                                                                    你的信任联系人：
                                                                                </strong>
                                                                            </div>
                                                                            <div class="rfloat _ohf">
                                                                                <a rel="dialog" href="/ajax/guardian/preselect/dialog" role="button" class="mrm">
                                                                                    编辑
                                                                                </a>
                                                                                <a rel="dialog" href="/ajax/guardian/preselect/remove" role="button">
                                                                                    全部移除
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div id="fbFriendsPortraits">
                                                                        <div class="mtm">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mtm uiBoxGray topborder">
                                                            <div class="mtm">
                                                                <img class="mas saveThrobber uiLoadingIndicatorAsync img" src="/rsrc.php/v3/yb/r/GsNJNwuI-UM.gif" alt="" width="16" height="11">
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
                        <div class="_1xpm _4-u2  _4-u8">
                            <div class="_1nfx _4-u3  _57d8">
                                <span class=" _50f7">
                                    高级
                                </span>
                            </div>
                            <div class="_1nfz _4-u3">
                                <table cols="3" class="_4p8y uiGrid _51mz" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr class="_51mx">
                                            <td class="_1fow _51m- hLeft">
                                                <i alt="" class="img sp_ub4b-D9OLay sx_f9c4e7">
                                                </i>
                                            </td>
                                            <td class="_51m- hLeft">
                                                <span class="_39gj">
                                                    加密通知邮件
                                                </span>
                                                <span class="_4p8z">
                                                    加密来自 Facebook 的邮件（只有你能够解密这些邮件）
                                                </span>
                                            </td>
                                            <td class="_51mw _51m- hRght">
                                                <button class="_1nf- _4jy0 _4jy3 _517h _51sy _42ft" type="submit" value="1">
                                                    编辑
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="_39gk" hidden="">
                                    <div id="public_key">
                                        <div class="_5zf3">
                                            <div class="fbSettingsEditor uiBoxGray noborder">
                                                <form rel="async" action="/ajax/settings/security/public_key" method="post" onsubmit="" id="u_i_3">
                                                    <input type="hidden" name="cquick_token" value="AQ5EKxvpxpZg4QiA" autocomplete="off">
                                                    <input type="hidden" name="ctarget" value="https%25252525252525253A%25252525252525252F%25252525252525252Fwww.facebook.com" autocomplete="off">
                                                    <input type="hidden" name="cquick" value="jsc_c_e" autocomplete="off">
                                                    <input type="hidden" name="jazoest" value="22063" autocomplete="off">
                                                    <input type="hidden" name="fb_dtsg" value="AQGgvBnOB_nI:AQFDJM1rNq9z" autocomplete="off">
                                                    <div class="pbm fbSettingsEditorFields">
                                                        <div class="ptm">
                                                            <div class="_3-95 _50f7">
                                                                你的 OpenPGP 公钥
                                                            </div>
                                                            输入你的 OpenPGP 公钥：
                                                            <div>
                                                                <textarea title="输入 PGP 公钥" class="uiTextareaAutogrow" style="font-family: monospace; font-size: 80%;" cols="80" id="pgp_edit_textarea" name="pgp_edit_textarea" placeholder="输入 PGP 公钥" rows="16">
                                                                    </textarea>
                                                                <div>
                                                                    <div class="uiInputLabel clearfix">
                                                                        <label class="_kv1 _55sg uiInputLabelInput">
                                                                            <input type="checkbox" name="use_for_email" value="use_for_email" onclick="" id="u_i_2">
                                                                            <span class="_66ul">
                                                                            </span>
                                                                        </label>
                                                                        <label for="u_i_2" class="uiInputLabelLabel">
                                                                            使用这组公钥给 Facebook 发来的通知邮件加密？
                                                                            <a class="uiHelpLink mhs" href="#" role="button" data-hover="tooltip" data-tooltip-content="如果勾选方框，你会收到一封加密验证邮件，确保你可以解密通过该公钥加密的通知邮件。如果你能够解密这封验证邮件并点击内含链接，Facebook 将使用你的公钥加密发送给你的通知邮件。">
                                                                            </a>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div class="mvm uiP fsm fcg">
                                                                    如果你希望分享你的公钥，你可以在个人主页的
                                                                    <a href="/profile.php?id=100004644524593&amp;sk=about&amp;section=contact-info">
                                                                        联系方式和基本信息页面
                                                                    </a>
                                                                    中修改分享对象。
                                                                </div>
                                                                <input type="hidden" autocomplete="off" name="uid" value="100004644524593">
                                                            </div>
                                                            <div class="mvm uiP fsm fcg">
                                                                你可以在
                                                                <a target="_blank" href="/facebook/publickey/download/">
                                                                    这里
                                                                </a>
                                                                下载 Facebook 公钥。
                                                            </div>
                                                        </div>
                                                        <div class="mtm uiBoxGray topborder">
                                                            <div class="mtm">
                                                                <label class="submit uiButtonDisabled uiButton uiButtonConfirm" id="u_i_0" for="u_i_1">
                                                                    <input value="保存更改" disabled="1" type="submit" id="u_i_1">
                                                                </label>
                                                                <img class="mas saveThrobber uiLoadingIndicatorAsync img" src="/rsrc.php/v3/yb/r/GsNJNwuI-UM.gif" alt="" width="16" height="11">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="_1nfz _4-u3">
                                <table cols="3" class="_4p8y uiGrid _51mz" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr class="_51mx">
                                            <td class="_1fow _51m- hLeft">
                                                <i alt="" class="img sp_ub4b-D9OLay sx_5d1b14">
                                                </i>
                                            </td>
                                            <td class="_51m- hLeft">
                                                <span class="_39gj">
                                                    站外帐户找回
                                                </span>
                                                <span class="_4p8z">
                                                    使用你的 Facebook 帐户来找回其他网站帐户
                                                </span>
                                            </td>
                                            <td class="_51mw _51m- hRght">
                                                <button class="_1nf- _4jy0 _4jy3 _517h _51sy _42ft" type="submit" value="1">
                                                    编辑
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="_39gk" hidden="">
                                    <div id="delegated_account_recovery">
                                        <div class="_5zf3">
                                            <div class="fbSettingsEditor uiBoxGray noborder">
                                                <div>
                                                    <div class="pbm fbSettingsEditorFields">
                                                        <div class="ptm">
                                                            <span class="_5gyo">
                                                                保存的帐户密钥允许你使用 Facebook 帐户重新获得对其他服务的访问权。
                                                            </span>
                                                            <div id="u_j_0">
                                                                <div class="_2pai">
                                                                    <div class="_5gyp">
                                                                        你尚未使用 Facebook 保存任何其他服务的密钥。
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mtm uiBoxGray topborder">
                                                            <div class="mtm">
                                                                <img class="mas saveThrobber uiLoadingIndicatorAsync img" src="/rsrc.php/v3/yb/r/GsNJNwuI-UM.gif" alt="" width="16" height="11">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="_1nfz _4-u3">
                                <table cols="3" class="_4p8y uiGrid _51mz" cellspacing="0" cellpadding="0">
                                    <tbody>
                                        <tr class="_51mx">
                                            <td class="_1fow _51m- hLeft">
                                                <i alt="" class="img sp_ub4b-D9OLay sx_07a809">
                                                </i>
                                            </td>
                                            <td class="_51m- hLeft">
                                                <span class="_39gj">
                                                    查看来自 Facebook 的近期邮件
                                                </span>
                                                <span class="_4p8z">
                                                    请查看我们近期给你发送的邮件，包括有关帐户安全的邮件
                                                </span>
                                            </td>
                                            <td class="_51mw _51m- hRght">
                                                <button class="_1nf- _4jy0 _4jy3 _517h _51sy _42ft" type="submit" value="1">
                                                    查看
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="_39gk" hidden="">
                                    <div id="recent_emails">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- react-mount-point-unstable -->
                </div>
            </div>
        </div>
        <div id="bottomContent">
        </div>
    </div>
</div>
</template>

<style scoped>
@import '../../css/me.css';
</style>
