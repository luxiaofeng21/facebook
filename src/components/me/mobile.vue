<template>
<div>
    <div id="headerArea">
        <div class="uiHeader uiHeaderPage">
            <div class="clearfix uiHeaderTop">
                <div class="rfloat _ohf">
                    <h2 class="accessible_elem">手机设置</h2>
                    <div class="uiHeaderActions"></div>
                </div>
                <div>
                    <h2 class="uiHeaderTitle" aria-hidden="true">手机设置</h2>
                </div>
            </div>
        </div>
    </div>
    <div id="contentArea" role="main">
        <div id="SettingsPage_Content">
            <div class="phm _6cx">
                <div class="clearfix">
                    <div class="mbm mlm pam fbSettingsMobileRegisterForm rfloat _ohf uiBoxGray noborder">
                        <ul class="uiList _4kg _6-h _6-j _6-i">
                            <li>
                                <div class="mbs">收到验证码了？</div>
                                <form rel="async" id="fbMobileConfirmationForm" onsubmit="var error = DOM.scry(this, &quot;.fbSettingsConfirmError&quot;); error[0] &amp;&amp; DOM.remove(error[0]);" action="/ajax/settings/mobile/confirm_phone.php" method="post"><input type="hidden" name="cquick_token" value="AQ7lv1A_XAkkwTo3" autocomplete="off"><input type="hidden" name="ctarget" value="https%25252525252525252525252525252525252525252525252525253A%25252525252525252525252525252525252525252525252525252F%25252525252525252525252525252525252525252525252525252Fwww.facebook.com" autocomplete="off"><input type="hidden" name="cquick" value="jsc_c_e" autocomplete="off"><input type="hidden" name="jazoest" value="22127" autocomplete="off"><input type="hidden" name="fb_dtsg" value="AQEaEGWRrhod:AQFeRMQJUeXr" autocomplete="off"><input type="text" class="inputtext _55r1" placeholder="输入验证码" name="confirmation_code" aria-label="输入验证码"><input type="submit" class="hidden_elem" id="fbMobilePhoneConfirm"><span class="stat_elem"><button value="1" class="_42ft mls _4jy0 fbPhoneConfirmButton _4jy3 _4jy1 selected _51sy" type="submit">确认</button><img class="mts mls uiLoadingIndicatorAsync img" src="/rsrc.php/v3/yb/r/GsNJNwuI-UM.gif" alt="" width="16" height="11"></span>
                                    <div id="conf_code_error_msg"></div>
                                </form>
                            </li>
                        </ul>
                    </div>
                    <div class="mtm mbl">
                        <div class="mbs fcg">你的手机：</div>
                        <div class="mlm">
                            <ul class="uiList _4kg _6-h _704 _6-i">
                                <li style="padding-bottom: 1%;"><strong><span dir="ltr">+86 186 8203 0023</span></strong><br><span class="fcg">已通过短信激活</span><br><span id="u_jsonp_17_8"><a href="#" role="button">移除</a><img class="uiLoadingIndicatorAsync img" src="/rsrc.php/v3/yb/r/GsNJNwuI-UM.gif" alt="" width="16" height="11"></span></li>
                            </ul>
                            <div class="mts"></div>
                        </div><a href="/ajax/phone/confirmation?source=phone_acquisition_scalable&amp;state=1&amp;promo_type=settings&amp;entry_point=web_mobile_settings" rel="dialog-post" role="button" class="mbm mlm">+ 新增号码</a>
                        <div class="mvl"><a href="/ajax/settings/mobile/lost_phone.php" rel="dialog" role="button">手机丢了？</a></div>
                    </div>
                </div>
            </div>
            <ul class="uiList fbSettingsList fbSettingsListBorderTop fbSettingsListBorderBottom _4kg _4ks">
                <li class="fbSettingsListItem clearfix _5b2_ fbSettingsListItemLabeled" data-testid="settings_section_phones"><a class="fbSettingsListLink clearfix pvm phs" role="button" aria-expanded="false" aria-labelledby="u_jsonp_17_5" href="/settings?tab=mobile&amp;section=phones" rel="ignore" data-meta="{&quot;ajaxify&quot;:&quot;\/ajax\/settings\/mobile\/phones.php&quot;,&quot;rel&quot;:&quot;async&quot;}" data-onclick="[{&quot;mod&quot;:&quot;SettingsController&quot;,&quot;meth&quot;:&quot;handleLinkClick&quot;,&quot;a&quot;:[{&quot;__elem&quot;:1}]}]">
                        <h3 class="pls fbSettingsListItemLabel" id="u_jsonp_17_5">短信</h3><span style="padding-left: 23px;" class="uiIconText fbSettingsListItemEdit"><i class="img sp_fHxCi0eLlUk sx_b6b2f7" style="top: -2px;"></i><span class="fbSettingsListItemEditText">编辑</span></span><span class="fbSettingsListItemSaved hidden_elem">修改已保存</span><span class="fbSettingsListItemContent fcg">发送到： <strong><span dir="ltr">+86 186 8203 0023</span></strong></span>
                    </a>
                    <div class="content"></div>
                </li>
                <li class="fbSettingsListItem clearfix _5b2_ fbSettingsListItemLabeled" data-testid="settings_section_limit"><a class="fbSettingsListLink clearfix pvm phs" role="button" aria-expanded="false" aria-labelledby="u_jsonp_17_6" href="/settings?tab=mobile&amp;section=limit" rel="ignore" data-meta="{&quot;ajaxify&quot;:&quot;\/ajax\/settings\/mobile\/limit.php&quot;,&quot;rel&quot;:&quot;async&quot;}" data-onclick="[{&quot;mod&quot;:&quot;SettingsController&quot;,&quot;meth&quot;:&quot;handleLinkClick&quot;,&quot;a&quot;:[{&quot;__elem&quot;:1}]}]">
                        <h3 class="pls fbSettingsListItemLabel" id="u_jsonp_17_6">单日短信限制</h3><span style="padding-left: 23px;" class="uiIconText fbSettingsListItemEdit"><i class="img sp_fHxCi0eLlUk sx_b6b2f7" style="top: -2px;"></i><span class="fbSettingsListItemEditText">编辑</span></span><span class="fbSettingsListItemSaved hidden_elem">修改已保存</span><span class="fbSettingsListItemContent fcg">短信数量上限： <strong>无限制</strong></span>
                    </a>
                    <div class="content"></div>
                </li>
                <li class="fbSettingsListItem clearfix _5b2_ fbSettingsListItemLabeled" data-testid="settings_section_time-interval"><a class="fbSettingsListLink clearfix pvm phs" role="button" aria-expanded="false" aria-labelledby="u_jsonp_17_7" href="/settings?tab=mobile&amp;section=time-interval" rel="ignore" data-meta="{&quot;ajaxify&quot;:&quot;\/ajax\/settings\/mobile\/time_interval&quot;,&quot;rel&quot;:&quot;async&quot;}" data-onclick="[{&quot;mod&quot;:&quot;SettingsController&quot;,&quot;meth&quot;:&quot;handleLinkClick&quot;,&quot;a&quot;:[{&quot;__elem&quot;:1}]}]">
                        <h3 class="pls fbSettingsListItemLabel" id="u_jsonp_17_7">收短信时段</h3><span style="padding-left: 23px;" class="uiIconText fbSettingsListItemEdit"><i class="img sp_fHxCi0eLlUk sx_b6b2f7" style="top: -2px;"></i><span class="fbSettingsListItemEditText">编辑</span></span><span class="fbSettingsListItemSaved hidden_elem">修改已保存</span><span class="fbSettingsListItemContent fcg">只在 <strong>8:00 AM</strong> 到 <strong>11:00 PM</strong> 收到 Facebook 的短信</span>
                    </a>
                    <div class="content"></div>
                </li>
            </ul>
            <div class="mvm phm uiP fsm fcg">到 <a href="/help/130694300342171">Facebook 移动应用</a>页面详细了解相关内容</div>
            <div class="_4-u2 _30i5 _4-u8" id="settings_usability_survey_root"><span class="_48ul">你找到需要的帮助了吗？<a ajaxify="/settings/survey/usability/feedback/?response=yes&amp;ref=mobile" rel="async" href="#" role="button" class="mls">是</a> · <a ajaxify="/settings/survey/usability/feedback/?response=no&amp;ref=mobile" rel="async" href="#" role="button">否</a> · <a ajaxify="/settings/survey/usability/feedback/?response=browsing&amp;ref=mobile" rel="async" href="#" role="button">我不需要什么具体帮助</a></span></div>
        </div>
    </div>
    <div id="bottomContent"></div>
</div>
</template>

<style scoped>
@import '../../css/me.css';
</style>
