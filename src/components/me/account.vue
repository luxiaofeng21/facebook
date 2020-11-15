<template>
<div class="app">
    <div class="SettingsPage CometSettingsPage hasLeftCol fbx _8m53 _-kb _605a h_l20malqpf gecko win x1 Locale_zh_CN cores-gte4 _19_u">
        <div class="_li" id="u_0_a">
            <div id="globalContainer" class="uiContextualLayerParent">
                <div class="fb_content clearfix " id="content" role="main">
                    <div>
                        <div id="toolbarContainer" class="hidden_elem">
                        </div>
                        <div id="mainContainer">
                            <div id="leftCol">
                                <div class="CometSettingsMainHeader">
                                    设置
                                </div>
                                <Menu :menu="menuAll" :findex="findex" v-on:getchild="getchild"></Menu>
                            </div>
                            <div id="contentCol">
                                <Security v-if="state==1"></Security>
                                <YourFacebook v-else-if="state==2"></YourFacebook>
                                <Privacy v-else-if="state==4"></Privacy>
                                <Timeline v-else-if="state==5"></Timeline>
                                <Stories v-else-if="state==6"></Stories>
                                <Location v-else-if="state==7"></Location>
                                <Blocking v-else-if="state==8"></Blocking>
                                <Language v-else-if="state==9"></Language>
                                <Face v-else-if="state==10"></Face>
                                <Notifications v-else-if="state==12"></Notifications>
                                <Mobile v-else-if="state==13"></Mobile>
                                <Followers v-else-if='state==14'></Followers>
                                <Applications v-else-if='state==16'></Applications>
                                <div v-else>
                                    <div id="headerArea">
                                        <div class="uiHeader uiHeaderPage">
                                            <div class="clearfix uiHeaderTop">
                                                <div class="rfloat _ohf">
                                                    <h2 class="accessible_elem">
                                                        帐户常规设置
                                                    </h2>
                                                    <div class="uiHeaderActions">
                                                    </div>
                                                </div>
                                                <div>
                                                    <h2 class="uiHeaderTitle" aria-hidden="true">
                                                        帐户常规设置
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="contentArea" role="main">
                                        <div id="SettingsPage_Content">
                                            <ul class="uiList fbSettingsList fbSettingsListBorderTop fbSettingsListBorderBottom _4kg _4ks">
                                                <li class="fbSettingsListItem clearfix _5b2_ fbSettingsListItemLabeled" v-for="(item,index) in arr" :key="index">
                                                    <a class="fbSettingsListLink clearfix pvm phs" v-if="!item.checked">
                                                        <h3 class="pls fbSettingsListItemLabel" id="u_0_4">
                                                            {{item.title}}
                                                        </h3>
                                                        <span style="padding-left: 23px;" class="uiIconText fbSettingsListItemEdit">
                                                            <i class="img sp_fHxCi0eLlUk sx_b6b2f7" style="top: -2px;">
                                                            </i>

                                                            <span class="fbSettingsListItemEditText" v-on:click="getLook(index)">
                                                                {{index==arr.length-1?'查看':"编辑"}}
                                                            </span>
                                                        </span>
                                                        <span class="fbSettingsListItemSaved hidden_elem">
                                                            修改已保存
                                                        </span>
                                                        <span class="fbSettingsListItemContent fcg">
                                                            <strong>
                                                                {{item.text}}
                                                            </strong>
                                                        </span>
                                                    </a>
                                                    <div class="content" v-else>
                                                        <div class="fbSettingsEditor uiBoxGray noborder" id="settingsNameForm">
                                                            <div class="show_label" id="u_q_5">
                                                                <div class="mam fbSettingsEditorLabel" tabindex="-1"><strong>{{item.title}}</strong></div>
                                                                <div class="pbm fbSettingsEditorFields" v-if="index==0">
                                                                    <div class="ptm">
                                                                        <table role="presentation" class="_3stn">
                                                                            <tbody v-if="item.set">
                                                                                <tr class="_3stt">
                                                                                    <th class="_3sts"><label for="u_q_4">姓</label></th>
                                                                                    <td class="_480u"><input type="text" class="inputtext" name="primary_last_name" v-model="surname" id="u_q_4"></td>
                                                                                </tr>
                                                                                <tr class="_3stt">
                                                                                    <th class="_3sts"><label for="u_q_3">中间名</label></th>
                                                                                    <td class="_480u"><input type="text" class="inputtext" v-model="middlename" name="primary_middle_name" placeholder="选填" id="u_q_3"></td>
                                                                                </tr>
                                                                                <tr class="_3stt">
                                                                                    <th class="_3sts"><label for="u_q_2">名</label></th>
                                                                                    <td class="_480u"><input type="text" class="inputtext" v-model="sunlight" autofocus="1" name="primary_first_name" value="曦" id="u_q_2"></td>
                                                                                </tr>

                                                                                <tr class="_3sto">
                                                                                    <td colspan="2">
                                                                                        <hr>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                            <tbody v-else>
                                                                                <tr class="_3stt">
                                                                                    <th class="_3sts"><label for="u_q_2">姓名</label></th>
                                                                                    <td class="_480u"><span class="fcg">{{name}}</span>
                                                                                        <div><a role="button" class="_42ft _4jy0 _4jy3 _517h _51sy" rel="async" tabindex="0" v-on:click="getshow(2)">更改姓名的先后顺序</a></div>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td colspan="2">
                                                                                        <div class="mtm _3qku" id="u_q_1"><strong>请注意：</strong> 如果在 Facebook 上更改姓名，未来 60 天内你将无法再次更改姓名。请不要在姓名中随意添加大小写字母、标点、字符或词语。<a target="_blank">详细了解</a>。 <div class="_3-8x" v-if="!item.set">你上一次更改姓名是在 {{item.date}}</div>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr class="_3sto">
                                                                                    <td colspan="2">
                                                                                        <hr>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th class="_3sts">之前的名字</th>
                                                                                    <td class="_480u"><span class="fcg">枫果果</span></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th class="_3sts noLabel"></th>
                                                                                    <td class="_480u"><a role="button" class="_42ft _4jy0 _4jy3 _517h _51sy" v-on:click="getshow(3)" rel="async" tabindex="0">使用之前的姓名</a></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td colspan="2">
                                                                                        <div class="mts uiP fsm fcg">你可以在更改姓名后的 48 小时内<strong>切换回之前的姓名</strong>。切换姓名后，你在未来 60 天内都不能再次更改姓名了。</div>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr class="_3sto">
                                                                                    <td colspan="2">
                                                                                        <hr>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th class="_3sts">其他名字</th>
                                                                                    <td class="_480u">
                                                                                        <div><input type="hidden" autocomplete="off" name="show_alternate" value="1"><input type="hidden" autocomplete="off" name="alternate_name" value=""><a href="/profile.php?id=100004644524593&amp;sk=about&amp;section=bio">添加其他名字</a></div>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr class="_3sto">
                                                                                    <td colspan="2">
                                                                                        <hr>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>

                                                                            <tbody>
                                                                                <tr>
                                                                                    <td colspan="2">你也可以<a ajaxify="/settings/name_change_locale_switcher/?pane=select&amp;refpane=primary" rel="async" href="#" role="button">添加或更改其他语言姓名</a>。</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div class="mtm uiBoxGray topborder">
                                                                        <div class="mtm">
                                                                            <div class="clearfix">
                                                                                <div class="lfloat _ohe">
                                                                                    <button class="_42ft _42fu submit selected _42g-" v-if="item.set" v-on:click="getshow(1)">预览修改</button>
                                                                                    <button class="_42ft _42fu cancel" v-on:click="item.checked=false" type="button">取消</button>
                                                                                    <img class="mas saveThrobber uiLoadingIndicatorAsync img" src="/rsrc.php/v3/yb/r/GsNJNwuI-UM.gif" alt="" width="16" height="11">
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div v-if="index==1" class="pbm fbSettingsEditorFields">
                                                                    <div class="ptm">
                                                                        <div class="mts uiP fsm fcg">公开帐号与时间线网址相同：<div class="mts mls uiP fsm">
                                                                                <ul class="uiList _4of _4kg">
                                                                                    <li>
                                                                                        <div class="fcb">facebook.com/<span class="timelineUsername fwb">your.username</span></div>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <table class="uiInfoTable mtm noBorder" role="presentation">
                                                                            <tbody>
                                                                                <tr class="dataRow">
                                                                                    <th class="label"><label for="username">帐号</label></th>
                                                                                    <td class="data"><input type="text" class="inputtext" name="username" value="" autocomplete="off" aria-describedby="u_c_1"><span class="mls fbSettingsHangingMessage" id="fbSettingsUsernameThrobber"><span class="fbSettingsUsernameStatus"></span><img class="uiLoadingIndicatorAsync img" src="/rsrc.php/v3/yb/r/GsNJNwuI-UM.gif" alt="" width="16" height="11"></span></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <div class="mvm uiP fsm fcg" id="u_c_1">提示：&nbsp;帐号应包含你的真实姓名。&nbsp;<a class="uiHelpLink" href="/help/?faq=105399436216001#What-are-the-guidelines-around-creating-a-custom-username?" target="_blank"></a></div>
                                                                    </div>
                                                                    <div class="mtm uiBoxGray topborder">
                                                                        <div class="mtm">
                                                                            <button class="_42ft _42fu submit selected _42g-">保存更改</button>
                                                                            <button class="_42ft _42fu cancel" v-on:click="item.checked=false" type="button">取消</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div v-if="index==2" class="pbm fbSettingsEditorFields">
                                                                    <div class="ptm">
                                                                        <div>
                                                                            <div>
                                                                                <div class="_8vbr">
                                                                                    <div><span class="_50f7 _2iex">当前邮箱</span></div>
                                                                                    <div class="_8vbq"><span class="_50f7">543787366@qq.com</span>
                                                                                        <div class="fsm fwn fcg"><span class="_2iex">首选</span></div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="_8vc6">
                                                                                    <el-switch v-model="tswitch" active-color="##3578E5">
                                                                                    </el-switch>
                                                                                    <div class="plm"><span>允许好友在<a href="/dyi/?referrer=email_settings">下载个人信息</a>时下载我的邮箱。</span></div>
                                                                                </div><a ajaxify="/settings/email/add2/" rel="dialog" href="#" role="button">+ 添加其他邮箱或手机号</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="mtm uiBoxGray topborder">
                                                                        <div class="mtm">
                                                                            <button class="_42ft _42fu cancel" v-on:click="item.checked=false" type="button">关闭</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div v-if="index==3" class="pbm fbSettingsEditorFields">
                                                                    <div class="ptm">
                                                                        <div id="u_m_2">
                                                                            <div>
                                                                                <div class="hidden_elem"></div>
                                                                                <div class="_3-95"><span style="font-family: Arial, sans-serif; font-size: 12px; line-height: 16px; letter-spacing: normal; overflow-wrap: normal; text-align: left; color: rgb(28, 30, 33);">543787366@qq.com</span><span><span aria-hidden="true"> · </span><a v-on:click="getshow(4)">更改</a></span></div>
                                                                                <div class="_4s1v" style="font-family: Arial, sans-serif; font-size: 12px; line-height: 16px; letter-spacing: normal; overflow-wrap: normal; text-align: left; color: rgb(29, 33, 41);">我们会使用这个邮箱给你发送广告帐户（已绑定你的 Facebook 个人帐户）相关的营销动态以及通知。更新这个邮箱将只更改你接收这些通知的位置，而不是接收的通知类型。如需更改通知设置，请前往你的<a class="bizOK" href="/ads/manager/account/settings/">广告帐户设置。</a></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div v-if="index==4" class="pbm fbSettingsEditorFields">
                                                                    <div class="ptm">
                                                                        <div class="_3-95 _50f7">你的委托联系人</div>
                                                                        <div class="mbs uiP fsm fcg">你可以指定一位用户，在你身故后负责帐户管理事宜。TA 可以帮你：</div>
                                                                        <div class="_7i88">
                                                                            <ul class="_7i8h">
                                                                                <li><span class="_rzy">管理你个人主页上的追思帖，包括决定谁能发布帖子、谁能查看帖子，以及删除帖子和移除对你的标记</span></li>
                                                                                <li><span class="_rzy">申请移除你的帐户</span></li>
                                                                                <li><span class="_rzy">回应加好友请求</span></li>
                                                                                <li><span class="_rzy">更新你的头像和封面照片</span></li>
                                                                            </ul>
                                                                        </div>
                                                                        <div class="mvm uiP fsm fcg">你的委托联系人只能管理在你去世后发布的帖子，不能以你的名义发帖或查看你的消息。 <a href="/help/1568013990080948">详细了解</a></div>
                                                                        <div id="memorial_contact">
                                                                            <div>
                                                                                <div class="stat_elem _3-8p _4ycm">
                                                                                    <form rel="async" ajaxify="/settings/legacy_contact/save/" method="post" action="#" onsubmit="" id="u_4_1"><input type="hidden" name="cquick_token" value="AQ6wXRtjQqeyFTbm" autocomplete="off"><input type="hidden" name="ctarget" value="https%3A%2F%2Fwww.facebook.com" autocomplete="off"><input type="hidden" name="cquick" value="jsc_c_e" autocomplete="off"><input type="hidden" name="jazoest" value="21919" autocomplete="off"><input type="hidden" name="fb_dtsg" value="AQHQ0m3ESkgg:AQE1xS20Z9Ap" autocomplete="off">
                                                                                        <div><input type="hidden" name="id" value=""><span class="_wrn _213j _5blj"><span placeholder="选择一位好友" autocomplete="off" autocorrect="off" class="_58ah"><label class="_55r1 _55r2 _58ak _3ct8" id="js_4"><input class="_58al" type="text" aria-autocomplete="list" aria-controls="js_3" aria-expanded="false" role="combobox" placeholder="选择一位好友" autocomplete="off" autocorrect="off" value=""></label></span></span><button class="_5blk _4jy0 _4jy5 _517h _51sy _42ft _42fr" disabled="" type="submit" value="1">添加</button></div><!-- react-mount-point-unstable -->
                                                                                        <div class="_3oxd">你选择委托联系人后，我们会通知对方。在你的帐户成为悼念帐户前，你的委托联系人不会再收到通知。</div>
                                                                                    </form><img class="uiLoadingIndicatorAsync img" src="/rsrc.php/v3/yb/r/GsNJNwuI-UM.gif" alt="" width="16" height="11">
                                                                                </div>
                                                                                <div class="_4ycm">
                                                                                    <form rel="async" ajaxify="/settings/legacy_contact/delete_account_save/" method="post" action="#" onsubmit="" id="u_4_3"><input type="hidden" name="cquick_token" value="AQ6wXRtjQqeyFTbm" autocomplete="off"><input type="hidden" name="ctarget" value="https%3A%2F%2Fwww.facebook.com" autocomplete="off"><input type="hidden" name="cquick" value="jsc_c_e" autocomplete="off"><input type="hidden" name="jazoest" value="21919" autocomplete="off"><input type="hidden" name="fb_dtsg" value="AQHQ0m3ESkgg:AQE1xS20Z9Ap" autocomplete="off">
                                                                                        <div><span class="_50f8">如果你不希望在自己去世后留下 Facebook 帐户，那么可以申请永久移除帐户，而无需选择委托联系人。</span>
                                                                                            <div><label class="uiLinkButton"><input class="uiLinkButtonInput" type="submit" value="请求在去世后删除你的帐户。"></label></div>
                                                                                        </div><img class="_3oxf uiLoadingIndicatorAsync img" src="/rsrc.php/v3/yb/r/GsNJNwuI-UM.gif" alt="" width="16" height="11"><input type="hidden" autocomplete="off" name="delete" value="1">
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div>
                                                                            <div class="_41kh _50f7">停用帐户</div>
                                                                            <div class="mvm uiP fsm fcg">停用帐户后，你的个人主页将不可访问，你在 Facebook 分享的大部分内容都将不再显示姓名和头像。但部分信息仍对他人可见，其中包括你发送的消息，及你在他人好友名单中的姓名。 <a href="/about/basics/stay-safe-and-secure/deactivating/">详细了解</a></div><a href="/deactivate/?source=account_settings_page">停用帐户</a>
                                                                        </div>
                                                                    </div>
                                                                    <div class="mtm uiBoxGray topborder">
                                                                        <div class="mtm">
                                                                            <button class="_42ft _42fu cancel" v-on:click="item.checked=false" type="button">关闭</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </li>
                                            </ul>
                                            <div class="_4-u2 _30i5 _4-u8" id="settings_usability_survey_root">
                                                <span class="_48ul">
                                                    你找到需要的帮助了吗？
                                                    <a ajaxify="/settings/survey/usability/feedback/?response=yes&amp;ref=account" rel="async" href="#" role="button" class="mls">
                                                        是
                                                    </a>
                                                    ·
                                                    <a ajaxify="/settings/survey/usability/feedback/?response=no&amp;ref=account" rel="async" href="#" role="button">
                                                        否
                                                    </a>
                                                    ·
                                                    <a ajaxify="/settings/survey/usability/feedback/?response=browsing&amp;ref=account" rel="async" href="#" role="button">
                                                        我不需要什么具体帮助
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="">
                    <div id="pageFooter" data-referrer="page_footer" data-testid="page_footer">
                        <div id="contentCurve">
                        </div>
                        <div id="pageFooterChildren" role="contentinfo" aria-label="Facebook 网站链接">
                            <ul class="uiList pageFooterLinkList _509- _4ki _703 _6-i">
                                <li>
                                    <a href="/facebook" accesskey="8" title="阅读我们的博客，搜索资源中心，寻找工作机会。">
                                        公司简介
                                    </a>
                                </li>
                                <li>
                                    <a href="/ad_campaign/landing.php?placement=pf&amp;campaign_id=466780656697650&amp;extra_1=auto" title="在 Facebook 发布广告。">
                                        创建广告
                                    </a>
                                </li>
                                <li>
                                    <a href="/pages/create/?ref_type=site_footer" title="创建主页">
                                        创建公共主页
                                    </a>
                                </li>
                                <li>
                                    <a href="developers.facebook.com/?ref=pf" title="在我们的平台开发">
                                        开发者
                                    </a>
                                </li>
                                <li>
                                    <a href="/careers/?ref=pf" title="优秀公司吸引顶尖人才。加入我们。">
                                        招聘信息
                                    </a>
                                </li>
                                <li>
                                    <a data-nocookies="1" href="/privacy/explanation" title="了解 Facebook 和你的隐私权。">
                                        隐私权政策
                                    </a>
                                </li>
                                <li>
                                    <a href="/policies/cookies/" title="了解 cookie 和 Facebook" data-nocookies="1">
                                        Cookie
                                    </a>
                                </li>
                                <li>
                                    <a class="_41ug" data-nocookies="1" href="/help/568137493302217" title="了解 Ad Choices。">
                                        Ad Choices
                                        <i class="img sp_TVq_EU0iIln sx_71e4f5">
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a data-nocookies="1" href="/policies?ref=pf" accesskey="9" title="审阅我们的条款和政策。">
                                        条款
                                    </a>
                                </li>
                                <li>
                                    <a href="/help/?ref=pf" accesskey="0" title="访问帮助中心。">
                                        帮助中心
                                    </a>
                                </li>
                                <li>
                                    <a accesskey="6" class="accessible_elem" href="/settings" title="查看并编辑你的 Facebook 设置。">
                                        设置
                                    </a>
                                </li>
                                <li>
                                    <a accesskey="7" class="accessible_elem" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;privacy_source=activity_log_top_menu" title="查看动态记录">
                                        动态记录
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="mvl copyright">
                            <div>
                                <span>
                                    Facebook © 2020
                                </span>
                                <div class="fsm fwn fcg">
                                    <ul class="uiList localeSelectorList _509- _4ki _6-h _6-j _6-i" data-nocookies="1">
                                        <li>
                                            中文(简体)
                                        </li>
                                        <li>
                                            <a class="_sv4" dir="ltr" href="/settings" onclick="require(&quot;IntlUtils&quot;).setLocale(null, &quot;www_list_selector&quot;, &quot;en_US&quot;); return false;" title="English (US)">
                                                English (US)
                                            </a>
                                        </li>
                                        <li>
                                            <a class="_sv4" dir="ltr" href="/settings" onclick="require(&quot;IntlUtils&quot;).setLocale(null, &quot;www_list_selector&quot;, &quot;ja_JP&quot;); return false;" title="Japanese">
                                                日本語
                                            </a>
                                        </li>
                                        <li>
                                            <a class="_sv4" dir="ltr" href="/settings" onclick="require(&quot;IntlUtils&quot;).setLocale(null, &quot;www_list_selector&quot;, &quot;ko_KR&quot;); return false;" title="Korean">
                                                한국어
                                            </a>
                                        </li>
                                        <li>
                                            <a class="_sv4" dir="ltr" href="/settings" onclick="require(&quot;IntlUtils&quot;).setLocale(null, &quot;www_list_selector&quot;, &quot;fr_FR&quot;); return false;" title="French (France)">
                                                Français (France)
                                            </a>
                                        </li>
                                        <li>
                                            <a class="_sv4" dir="ltr" href="/settings" onclick="require(&quot;IntlUtils&quot;).setLocale(null, &quot;www_list_selector&quot;, &quot;id_ID&quot;); return false;" title="Indonesian">
                                                Bahasa Indonesia
                                            </a>
                                        </li>
                                        <li>
                                            <a class="_sv4" dir="ltr" href="/settings" onclick="require(&quot;IntlUtils&quot;).setLocale(null, &quot;www_list_selector&quot;, &quot;pl_PL&quot;); return false;" title="Polish">
                                                Polski
                                            </a>
                                        </li>
                                        <li>
                                            <a class="_sv4" dir="ltr" href="/settings" onclick="require(&quot;IntlUtils&quot;).setLocale(null, &quot;www_list_selector&quot;, &quot;es_LA&quot;); return false;" title="Spanish">
                                                Español
                                            </a>
                                        </li>
                                        <li>
                                            <a class="_sv4" dir="ltr" href="/settings" onclick="require(&quot;IntlUtils&quot;).setLocale(null, &quot;www_list_selector&quot;, &quot;pt_BR&quot;); return false;" title="Portuguese (Brazil)">
                                                Português (Brasil)
                                            </a>
                                        </li>
                                        <li>
                                            <a class="_sv4" dir="ltr" href="/settings" onclick="require(&quot;IntlUtils&quot;).setLocale(null, &quot;www_list_selector&quot;, &quot;de_DE&quot;); return false;" title="German">
                                                Deutsch
                                            </a>
                                        </li>
                                        <li>
                                            <a class="_sv4" dir="ltr" href="/settings" onclick="require(&quot;IntlUtils&quot;).setLocale(null, &quot;www_list_selector&quot;, &quot;it_IT&quot;); return false;" title="Italian">
                                                Italiano
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button" class="_42ft _4jy0 _517i _517h _51sy" rel="dialog" ajaxify="/settings/language/language/?uri=https%3A%2F%2Fwww.facebook.com%2Fsettings&amp;source=www_list_selector_more" href="#" title="更多语言">
                                                <i class="img sp_9HJCsjHoPNx sx_2a8c0e">
                                                </i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div id="pagelet_dock" data-referrer="pagelet_dock">
                <div class="_48gf fbDockWrapper fbDockWrapperRight" id="u_0_e">
                    <div class="fbDock clearfix">
                        <div class="clearfix nubContainer rNubContainer">
                            <div class="uiToggle _50-v fbNub _rz3 _ur5" id="u_0_b">
                                <a class="fbNubButton" tabindex="0" aria-label="键盘快捷键说明" title="键盘快捷键说明" rel="toggle" role="button" data-hover="tooltip" data-tooltip-content="键盘快捷键说明" data-tooltip-alignh="right">
                                    <div>
                                        <i class="fbNubButtonIcon img sp_w7Flr_H1j3z sx_a43732">
                                            <u>
                                                键盘快捷键说明
                                            </u>
                                        </i>
                                        <i class="fbNubButtonIconPressed img sp_w7Flr_H1j3z sx_bf9e3c">
                                            <u>
                                                键盘快捷键说明
                                            </u>
                                        </i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="_2xwp">
                    <div id="sticky-upload-hook">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="30%">
        <div v-if="dialogTitle=='预览你的新名字'">
            <p>选择姓名的显示方式：</p>
            <el-radio-group v-model="radio">
                <el-radio :label="0">{{surname}}{{middlename}}{{sunlight}}</el-radio>
                <el-radio :label="1">{{middlename}}{{sunlight}}</el-radio>
                <el-radio :label="2">{{sunlight}}{{middlename}}{{surname}}</el-radio>
            </el-radio-group>
            <div class="mvm ptm uiP fsm fcg"><strong>请注意：</strong> 未来 60 天内，你将无法修改名字。<a href="/help/112146705538576" target="_blank">详细了解</a>。</div>
            <p class="mvm ptm uiP fsm fcg">若满意这个新名字，请输入密码：</p>
            <div>
                <span class="_3sts">密码</span>
                <input class="inputtext" type="password" v-model="password" />
            </div>
        </div>

        <div v-if="dialogTitle=='更改广告帐户联系人'">
            <p class="mvm ptm uiP fsm fcg">更改你的个人广告帐户绑定邮箱。</p>
            <span class="_3sts">新邮箱</span>
            <input class="inputtext" type="emilt" v-model="emilt" />
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>

</div>
</template>

<script>
import Menu from '@/common/menu'
import Security from './security.vue'
import YourFacebook from './your_facebook.vue'
import Timeline from './timeline.vue'
import Privacy from './privacy'
import Stories from './stories'
import Location from './location'
import Blocking from './blocking'
import Language from './language'
import Face from './face'
import Notifications from './notifications'
import Mobile from './mobile'
import Followers from './followers'
import Applications from './applications'
export default {
    components: {
        Applications,
        Followers,
        Mobile,
        Notifications,
        Face,
        Language,
        Blocking,
        Location,
        Stories,
        Privacy,
        Timeline,
        Menu,
        Security,
        YourFacebook
    },
    data() {
        return {
            emilt: "",
            tswitch: true,
            dialogTitle: "",
            name: "钟之曦",
            password: "",
            dialogVisible: false,
            sunlight: "曦",
            surname: "钟",
            middlename: "之",
            radio: 0,
            findex: 0,
            state: 0,
            menuAll: [{
                    title: "常规选项",
                    icon: "el-icon-s-tools"
                },
                {
                    title: "安全与登录",
                    icon: "el-icon-s-claim"
                },
                {
                    title: "你的facebook信息",
                    icon: "el-icon-s-grid"
                },
                {
                    title: "",
                },
                {
                    title: "隐私",
                    icon: "el-icon-s-check"
                },

                {
                    title: "时间线与标记 ",
                    icon: "el-icon-s-promotion"
                },
                {
                    title: "快拍",
                    icon: "el-icon-camera-solid"
                },
                {
                    title: "定位",
                    icon: "el-icon-location"
                },
                {
                    title: "屏蔽",
                    icon: "el-icon-s-check"
                },
                {
                    title: "语言",
                    icon: "el-icon-tickets"
                },
                {
                    title: "人脸识别",
                    icon: "el-icon-user-solid"
                },
                {
                    title: ""
                },
                {
                    title: "通知",
                    icon: "el-icon-message-solid"
                }, {
                    title: "手机",
                    icon: "el-icon-mobile-phone"
                }, {
                    title: "公开贴",
                    icon: "el-icon-view"
                }, {
                    title: "",
                }, {
                    title: "应用和网站",
                    icon: "el-icon-menu"
                }, {
                    title: "小游戏",
                    icon: "el-icon-film"
                }, {
                    title: "业务集成工具",
                    icon: "el-icon-receiving"
                }, {
                    title: "广告",
                    icon: "el-icon-data-analysis"
                }, {
                    title: "Ads Pa'yments",
                    icon: "el-icon-bank-card"
                }, {
                    title: "Facebook Pay",
                    icon: "el-icon-wallet"
                }, {
                    title: "帮助信息邮箱",
                    icon: "el-icon-bangzhu"
                }, {
                    title: "视频",
                    icon: "el-icon-video-camera-solid"
                },
            ],

            arr: [{
                    title: "姓名",
                    text: "(枫果果)",
                    checked: false,
                    set: false,
                    date: "2020年9月10日"
                },
                {
                    title: "账号",
                    checked: false,
                    text: " 还没有设置帐号 ",
                    set: true,
                    date: "2020年9月10日"
                },
                {
                    title: "联系方式",
                    checked: false,
                    text: "543787366@qq.com",
                    set: true,
                    date: "2020年9月10日"
                },
                {
                    title: " 广告帐户联系方式 ",
                    text: "543787366@qq.com",
                    checked: false,
                    set: true,
                    date: "2020年9月10日"
                },
                {
                    checked: false,
                    title: "管理账户",
                    text: "修改委托联系人设置或停用帐户",
                    set: true,
                    date: "2020年9月10日"
                },
                {
                    title: "身份验证",
                    text: "请验证身份，以便进行更多操作，例如投放社会议题、选举或政治类广告。",
                    set: true,
                    date: "2020年9月10日"
                }
            ],
            value: false
        }
    },
    created() {

    },
    methods: {
        getshow(i) {
            if (i < 3) {
                this.dialogTitle = "预览你的新名字"
            } else if (i == 3) {
                this.dialogTitle = "切换回之前的姓名"
            } else if (i == 4) {
                this.dialogTitle = "更改广告帐户联系人"
            }
            this.dialogVisible = true;
        },
        getchild(i, e) {

            this.state = i;
            this.findex = i;
        },
        getLook(e) {
            for (var item of this.arr) {
                item.checked = false
            }
            if (e == this.arr.length - 1) {
                this.$router.push({
                    name: "index"
                })
            } else {
                if (this.arr[e].checked) {
                    this.arr[e].checked = false;
                } else {
                    this.arr[e].checked = true;
                }

            }
        }
    }
}
</script>

<style scoped>
@import '../../css/me.css';
</style>
