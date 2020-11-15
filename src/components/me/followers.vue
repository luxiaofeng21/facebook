<template>
<div>
    <div id="headerArea">
        <div class="uiHeader uiHeaderPage">
            <div class="clearfix uiHeaderTop">
                <div class="rfloat _ohf">
                    <h2 class="accessible_elem">公开帖筛选器和工具</h2>
                    <div class="uiHeaderActions"></div>
                </div>
                <div>
                    <h2 class="uiHeaderTitle" aria-hidden="true">公开帖筛选器和工具</h2>
                </div>
            </div>
        </div>
    </div>
    <div id="contentArea" role="main">
        <div id="SettingsPage_Content">
            <ul class="uiList fbSettingsSections _4kg">
                <li class="fbSettingsSectionsItem fbSettingsSectionsItemBorderTop">
                    <div class="clearfix">
                        <h3 class="mlm fbSettingsSectionsItemName lfloat _ohe">谁可以关注我</h3>
                        <div class="fbSettingsSectionsItemContent rfloat _ohf">
                            <div class="mvm">
                                <form rel="async" action="/ajax/follow/enable_follow.php" method="post" onsubmit="" id="u_jsonp_18_b"><input type="hidden" name="cquick_token" value="AQ7lv1A_XAkkwTo3" autocomplete="off"><input type="hidden" name="ctarget" value="https%2525252525252525252525252525252525252525252525252525253A%2525252525252525252525252525252525252525252525252525252F%2525252525252525252525252525252525252525252525252525252Fwww.facebook.com" autocomplete="off"><input type="hidden" name="cquick" value="jsc_c_e" autocomplete="off"><input type="hidden" name="jazoest" value="21923" autocomplete="off"><input type="hidden" name="fb_dtsg" value="AQF8MSDOZZOP:AQFVnO525rTf" autocomplete="off"><input type="hidden" autocomplete="off" name="location" value="44"><input type="hidden" autocomplete="off" name="hideable_ids" value="[&quot;#following_plugin_item&quot;,&quot;#public_conversation_item&quot;]"><input type="hidden" autocomplete="off" id="followPluginInjectInput" name="should_inject" value="1">
                                    <div class="clearfix">
                                        <div class="subscriberDropdown lfloat _ohe">粉丝可以在动态消息中看到你的帖子，好友会默认关注你的帖子，但你同样可以允许陌生人关注你的公开帖。使用该设置即可选择能够关注你的用户。<div class="mvm uiP fsm">每次发帖，你均可选择帖子的分享对象。</div>
                                            <div class="mvm uiP fsm">此设置不适用于在 Marketplace 和二手货小组中关注你的用户。你可以在 Marketplace 管理这些设置。</div>
                                            <div class="mvm uiP fsm"><a href="/help/follow/">详细了解</a></div>
                                        </div>
                                        <div class="_6a _6b rfloat _ohf">
                                            <div class="_6a _6b uiPopover" id="u_jsonp_18_c"><a role="button" class="_42ft _4jy0 _55pi _5vto _55_p _2agf _4o_4 _p _4jy3 _517h _51sy" href="#" style="max-width:200px;" aria-haspopup="true" aria-expanded="false" rel="toggle" id="u_jsonp_18_d"><span class="_-xe _3-8_"><i class="img sp_0VdR1AVzRKa sx_44f39e"></i></span><span class="_55pe">好友</span><span class="_4o_3 _3-99"><i class="img sp_uP16EDN4sAD sx_1a1953"></i></span></a></div><input type="hidden" autocomplete="off" name="allow_subscribers" value="disallow" id="u_jsonp_18_e">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="fbSettingsSectionsItem fbSettingsSectionsItemBorderTop" id="following_editor_item">
                    <ul class="uiList fbSettingsList fbSettingsListBorderTop fbSettingsListBorderBottom _4kg _4ks">
                        <li class="fbSettingsListItem clearfix _5b2_ fbSettingsListItemLabeled" data-testid="settings_section_comment"><a class="fbSettingsListLink clearfix pvm phs" role="button" aria-expanded="false" aria-labelledby="u_jsonp_18_5" href="/settings?tab=followers&amp;section=comment" rel="ignore" data-meta="{&quot;ajaxify&quot;:&quot;\/ajax\/settings\/subscribers\/comment.php&quot;,&quot;rel&quot;:&quot;async&quot;}" data-onclick="[{&quot;mod&quot;:&quot;SettingsController&quot;,&quot;meth&quot;:&quot;handleLinkClick&quot;,&quot;a&quot;:[{&quot;__elem&quot;:1}]}]">
                                <h3 class="pls fbSettingsListItemLabel" id="u_jsonp_18_5">公开帖的评论</h3><span style="padding-left: 23px;" class="uiIconText fbSettingsListItemEdit"><i class="img sp_fHxCi0eLlUk sx_b6b2f7" style="top: -2px;"></i><span class="fbSettingsListItemEditText">编辑</span></span><span class="fbSettingsListItemSaved hidden_elem">修改已保存</span><span class="fbSettingsListItemContent fcg">谁能评论你的公开帖：&nbsp;<strong>所有人</strong></span>
                            </a>
                            <div class="content"></div>
                        </li>
                        <li class="fbSettingsListItem clearfix _5b2_ fbSettingsListItemLabeled" data-testid="settings_section_notifications"><a class="fbSettingsListLink clearfix pvm phs" role="button" aria-expanded="false" aria-labelledby="u_jsonp_18_6" href="/settings?tab=followers&amp;section=notifications" rel="ignore" data-meta="{&quot;ajaxify&quot;:&quot;\/ajax\/settings\/subscribers\/notifications.php&quot;,&quot;rel&quot;:&quot;async&quot;}" data-onclick="[{&quot;mod&quot;:&quot;SettingsController&quot;,&quot;meth&quot;:&quot;handleLinkClick&quot;,&quot;a&quot;:[{&quot;__elem&quot;:1}]}]">
                                <h3 class="pls fbSettingsListItemLabel" id="u_jsonp_18_6">公开帖的通知</h3><span style="padding-left: 23px;" class="uiIconText fbSettingsListItemEdit"><i class="img sp_fHxCi0eLlUk sx_b6b2f7" style="top: -2px;"></i><span class="fbSettingsListItemEditText">编辑</span></span><span class="fbSettingsListItemSaved hidden_elem">修改已保存</span><span class="fbSettingsListItemContent fcg">接收通知：&nbsp;<strong>所有人</strong></span>
                            </a>
                            <div class="content"></div>
                        </li>
                        <li class="fbSettingsListItem clearfix _5b2_ fbSettingsListItemLabeled" data-testid="settings_section_public_profile_media"><a class="fbSettingsListLink clearfix pvm phs" role="button" aria-expanded="false" aria-labelledby="u_jsonp_18_7" href="/settings?tab=followers&amp;section=public_profile_media" rel="ignore" data-meta="{&quot;ajaxify&quot;:&quot;\/ajax\/settings\/subscribers\/public_profile_media.php&quot;,&quot;rel&quot;:&quot;async&quot;}" data-onclick="[{&quot;mod&quot;:&quot;SettingsController&quot;,&quot;meth&quot;:&quot;handleLinkClick&quot;,&quot;a&quot;:[{&quot;__elem&quot;:1}]}]">
                                <h3 class="pls fbSettingsListItemLabel" id="u_jsonp_18_7">公开的个人资料</h3><span style="padding-left: 23px;" class="uiIconText fbSettingsListItemEdit"><i class="img sp_fHxCi0eLlUk sx_b6b2f7" style="top: -2px;"></i><span class="fbSettingsListItemEditText">编辑</span></span><span class="fbSettingsListItemSaved hidden_elem">修改已保存</span><span class="fbSettingsListItemContent fcg">谁能赞或评论你的头像和其他公开的主页信息？&nbsp;<strong>好友</strong></span>
                            </a>
                            <div class="content"></div>
                        </li>
                    </ul>
                </li>
                <li class="fbSettingsSectionsItem fbSettingsSectionsItemBorderTop" id="public_conversation_item">
                    <ul class="uiList fbSettingsList fbSettingsListBorderTop fbSettingsListBorderBottom _4kg _4ks">
                        <li class="fbSettingsListItem clearfix _5b2_ fbSettingsListItemLabeled" data-testid="settings_section_ranked_comments"><a class="fbSettingsListLink clearfix pvm phs" role="button" aria-expanded="false" aria-labelledby="u_jsonp_18_8" href="/settings?tab=followers&amp;section=ranked_comments" rel="ignore" data-meta="{&quot;ajaxify&quot;:&quot;\/ajax\/settings\/subscribers\/ranked_comments.php&quot;,&quot;rel&quot;:&quot;async&quot;}" data-onclick="[{&quot;mod&quot;:&quot;SettingsController&quot;,&quot;meth&quot;:&quot;handleLinkClick&quot;,&quot;a&quot;:[{&quot;__elem&quot;:1}]}]">
                                <h3 class="pls fbSettingsListItemLabel" id="u_jsonp_18_8">评论排名</h3><span style="padding-left: 23px;" class="uiIconText fbSettingsListItemEdit"><i class="img sp_fHxCi0eLlUk sx_b6b2f7" style="top: -2px;"></i><span class="fbSettingsListItemEditText">编辑</span></span><span class="fbSettingsListItemSaved hidden_elem">修改已保存</span><span class="fbSettingsListItemContent fcg">评论排名：&nbsp;<strong>关</strong></span>
                            </a>
                            <div class="content"></div>
                        </li>
                        <li class="fbSettingsListItem clearfix _5b2_ fbSettingsListItemLabeled" data-testid="settings_section_username"><a class="fbSettingsListLink clearfix pvm phs" role="button" aria-expanded="false" aria-labelledby="u_jsonp_18_9" href="/settings?tab=followers&amp;section=username" rel="ignore" data-meta="{&quot;ajaxify&quot;:&quot;\/ajax\/settings\/subscribers\/username.php&quot;,&quot;rel&quot;:&quot;async&quot;}" data-onclick="[{&quot;mod&quot;:&quot;SettingsController&quot;,&quot;meth&quot;:&quot;handleLinkClick&quot;,&quot;a&quot;:[{&quot;__elem&quot;:1}]}]">
                                <h3 class="pls fbSettingsListItemLabel" id="u_jsonp_18_9">帐号</h3><span style="padding-left: 23px;" class="uiIconText fbSettingsListItemEdit"><i class="img sp_fHxCi0eLlUk sx_b6b2f7" style="top: -2px;"></i><span class="fbSettingsListItemEditText">编辑</span></span><span class="fbSettingsListItemSaved hidden_elem">修改已保存</span><span class="fbSettingsListItemContent fcg">还没有设置帐号</span>
                            </a>
                            <div class="content"></div>
                        </li>
                        <li class="fbSettingsListItem clearfix _5b2_ fbSettingsListItemLabeled" data-testid="settings_section_twitter"><a class="fbSettingsListLink clearfix pvm phs" role="button" aria-expanded="false" aria-labelledby="u_jsonp_18_a" href="/settings?tab=followers&amp;section=twitter" rel="ignore" data-meta="{&quot;ajaxify&quot;:&quot;\/ajax\/settings\/subscribers\/twitter.php&quot;,&quot;rel&quot;:&quot;async&quot;}" data-onclick="[{&quot;mod&quot;:&quot;SettingsController&quot;,&quot;meth&quot;:&quot;handleLinkClick&quot;,&quot;a&quot;:[{&quot;__elem&quot;:1}]}]">
                                <h3 class="pls fbSettingsListItemLabel" id="u_jsonp_18_a">Twitter</h3><span style="padding-left: 23px;" class="uiIconText fbSettingsListItemEdit"><i class="img sp_fHxCi0eLlUk sx_b6b2f7" style="top: -2px;"></i><span class="fbSettingsListItemEditText">编辑</span></span><span class="fbSettingsListItemSaved hidden_elem">修改已保存</span><span class="fbSettingsListItemContent fcg">关联 Twitter 帐号</span>
                            </a>
                            <div class="content"></div>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="mvm phm uiP fsm"><a href="/profile.php?id=100004644524593&amp;viewas=100000686899395&amp;from=subscribersetting">想知道粉丝能看到什么？查看你的公开时间线。</a></div>
            <div class="_4-u2 _30i5 _4-u8" id="settings_usability_survey_root"><span class="_48ul">你找到需要的帮助了吗？<a ajaxify="/settings/survey/usability/feedback/?response=yes&amp;ref=followers" rel="async" href="#" role="button" class="mls">是</a> · <a ajaxify="/settings/survey/usability/feedback/?response=no&amp;ref=followers" rel="async" href="#" role="button">否</a> · <a ajaxify="/settings/survey/usability/feedback/?response=browsing&amp;ref=followers" rel="async" href="#" role="button">我不需要什么具体帮助</a></span></div>
        </div>
    </div>
    <div id="bottomContent"></div>
</div>
</template>

<style scoped>
@import '../../css/me.css';
</style>
