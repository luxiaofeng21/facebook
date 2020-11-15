<template>
<div>
    <div id="headerArea">
        <div class="uiHeader uiHeaderPage">
            <div class="clearfix uiHeaderTop">
                <div class="rfloat _ohf">
                    <h2 class="accessible_elem">管理屏蔽内容</h2>
                    <div class="uiHeaderActions"></div>
                </div>
                <div>
                    <h2 class="uiHeaderTitle" aria-hidden="true">管理屏蔽内容</h2>
                </div>
            </div>
        </div>
    </div>
    <div id="contentArea" role="main">
        <div id="SettingsPage_Content">
            <ul class="uiList fbSettingsList fbSettingsListBorderTop fbSettingsListBorderBottom _4kg _4ks">
                <li class="fbSettingsListItem clearfix fbSettingsListItemLabeled">
                    <div class="pvm phs fbSettingsListLink clearfix"><span class="pls fbSettingsListItemLabel"><strong>受限好友名单</strong></span><a class="fbSettingsListItemEdit" ajaxify="/ajax/choose/?type=friendlist&amp;flid=123675447797272&amp;view=members" rel="dialog" href="#" role="button">编辑名单</a><span class="fbSettingsListItemContent fcg">
                            <div style="padding-right: 72px">把好友加入受限好友名单后，对方将无法看到你分享给好友的 Facebook 帖子，但仍能看到公开分享的内容或发布到共同好友时间线上的内容和标记他们的帖子。Facebook 不会通知好友，他们已被加入受限好友名单。<a href="/help?faq=206571136073851">详细了解</a>。</div>
                        </span></div>
                </li>
                <li class="fbSettingsListItem clearfix fbSettingsListItemLabeled">
                    <div class="pvm phs fbSettingsListLink clearfix"><span class="pls fbSettingsListItemLabel"><strong>拉黑用户</strong></span><span class="fbSettingsListItemContent fcg">
                            <div class="mbm uiP fsm">拉黑用户后，对方将无法在你的时间线上看到你的发布内容、标记你、邀请你参加活动或加入小组，也无法与你聊天或加你为好友。请注意：拉黑操作无法阻止你与对方同时加入应用、游戏或小组。</div>
                            <div class="_iw3">
                                <table class="uiInfoTable noBorder" role="presentation">
                                    <tbody>
                                        <tr class="dataRow">
                                            <th class="label">黑名单</th>
                                            <td class="data">
                                                <form rel="async" action="/ajax/privacy/block_dispatcher/" method="post" onsubmit="" id="u_jsonp_11_f"><input type="hidden" name="cquick_token" value="AQ7lv1A_XAkkwTo3" autocomplete="off"><input type="hidden" name="ctarget" value="https%2525252525252525253A%2525252525252525252F%2525252525252525252Fwww.facebook.com" autocomplete="off"><input type="hidden" name="cquick" value="jsc_c_e" autocomplete="off"><input type="hidden" name="jazoest" value="21961" autocomplete="off"><input type="hidden" name="fb_dtsg" value="AQEY42PAGjme:AQFWtn1S9TbA" autocomplete="off"><input type="text" class="inputtext mrm _iw2" name="q" placeholder="输入名称" aria-label="输入名称"><input type="hidden" autocomplete="off" name="blocking" value="1"><label class="uiButton uiButtonConfirm" for="u_jsonp_11_4"><input value="拉黑" type="submit" id="u_jsonp_11_4"></label></form>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot class="footer">
                                        <tr>
                                            <th class="label"></th>
                                            <td class="data">
                                                <div>
                                                    <ul class="uiList _4of _4kg" id="u_jsonp_11_g">
                                                        <li id="u_jsonp_11_h">
                                                            <form rel="async" ajaxify="/privacy/unblock_user_dialog/" action="#" method="post" onsubmit="" id="u_jsonp_11_i"><input type="hidden" name="cquick_token" value="AQ7lv1A_XAkkwTo3" autocomplete="off"><input type="hidden" name="ctarget" value="https%2525252525252525253A%2525252525252525252F%2525252525252525252Fwww.facebook.com" autocomplete="off"><input type="hidden" name="cquick" value="jsc_c_e" autocomplete="off"><input type="hidden" name="jazoest" value="21961" autocomplete="off"><input type="hidden" name="fb_dtsg" value="AQEY42PAGjme:AQFWtn1S9TbA" autocomplete="off"><input type="hidden" autocomplete="off" name="privacy_source" value="privacy_settings_page"><input type="hidden" autocomplete="off" name="uid" value="100002424959257"><span class="fcb">1318068619</span><label class="uiLinkButton pls"><input class="uiLinkButtonInput" type="submit" value="取消拉黑"></label></form>
                                                        </li>
                                                    </ul>
                                                    <div class="mts hidden_elem fsm fwn fcg" id="u_jsonp_11_j">你还未添加任何人入黑名单。</div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </span></div>
                </li>
                <li class="fbSettingsListItem clearfix fbSettingsListItemLabeled">
                    <div class="pvm phs fbSettingsListLink clearfix"><span class="pls fbSettingsListItemLabel"><strong>屏蔽消息</strong></span><span class="fbSettingsListItemContent fcg">
                            <div class="mbm uiP fsm">如果在这里屏蔽用户的消息和视频通话，对方也将无法通过 Messenger 应用联系你，但仍能够在你的时间线发帖、标记你、评论你的帖子或评论，除非你将用户拉黑。<a href="/help/389645087895231">详细了解</a>。</div>
                            <div class="_iw3">
                                <table class="uiInfoTable _iw1 noBorder" role="presentation">
                                    <tbody>
                                        <tr class="dataRow">
                                            <th class="label">屏蔽以下用户的消息：</th>
                                            <td class="data">
                                                <div class="uiTypeahead _1rg1" data-ft="{&quot;tn&quot;:&quot;+Q&quot;}" id="u_jsonp_11_6">
                                                    <div class="wrap"><input type="hidden" autocomplete="off" class="hiddenInput">
                                                        <div class="innerWrap"><input type="text" class="inputtext textInput" placeholder="输入名字..." autocomplete="new-password" aria-autocomplete="list" aria-expanded="false" aria-controls="typeahead_list_u_jsonp_11_6" aria-haspopup="true" role="combobox" spellcheck="false" aria-label="输入名字..." id="u_jsonp_11_k"></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot class="footer">
                                        <tr>
                                            <th class="label"></th>
                                            <td class="data">
                                                <div class="mts hidden_elem fsm fwn fcg">还未屏蔽任何用户的消息。</div>
                                                <ul class="uiList pls _4of _4kg" id="u_jsonp_11_5"></ul>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </span></div>
                </li>
                <li class="fbSettingsListItem clearfix fbSettingsListItemLabeled">
                    <div class="pvm phs fbSettingsListLink clearfix"><span class="pls fbSettingsListItemLabel"><strong>屏蔽应用邀请</strong></span><span class="fbSettingsListItemContent fcg">
                            <div class="mbm uiP fsm">一旦屏蔽来自某用户的应用程序邀请，往后来自该用户的应用请求将自动被忽略。屏蔽来自某好友的邀请，请在收到请求下方点击“忽略好友的所有请求”。</div>
                            <div class="_iw3">
                                <table class="uiInfoTable _iw1 noBorder" role="presentation">
                                    <tbody>
                                        <tr class="dataRow">
                                            <th class="label">屏蔽邀请</th>
                                            <td class="data">
                                                <div class="uiTypeahead _1rg1" data-ft="{&quot;tn&quot;:&quot;+Q&quot;}" id="u_jsonp_11_8">
                                                    <div class="wrap"><input type="hidden" autocomplete="off" class="hiddenInput">
                                                        <div class="innerWrap"><input type="text" class="inputtext textInput" placeholder="输入名字..." autocomplete="new-password" aria-autocomplete="list" aria-expanded="false" aria-controls="typeahead_list_u_jsonp_11_8" aria-haspopup="true" role="combobox" spellcheck="false" aria-label="输入名字..." id="u_jsonp_11_l"></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot class="footer">
                                        <tr>
                                            <th class="label"></th>
                                            <td class="data">
                                                <div class="mts hidden_elem fsm fwn fcg">你还未屏蔽来自任何人的邀请。</div>
                                                <ul class="uiList pls _4of _4kg" id="u_jsonp_11_7"></ul>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </span></div>
                </li>
                <li class="fbSettingsListItem clearfix fbSettingsListItemLabeled">
                    <div class="pvm phs fbSettingsListLink clearfix"><span class="pls fbSettingsListItemLabel"><strong>屏蔽活动邀请</strong></span><span class="fbSettingsListItemContent fcg">
                            <div class="mbm uiP fsm">一旦屏蔽某用户的活动邀请，之后来自该用户的活动邀请都将自动被忽略。</div>
                            <div class="_iw3">
                                <table class="uiInfoTable _iw1 noBorder" role="presentation">
                                    <tbody>
                                        <tr class="dataRow">
                                            <th class="label">屏蔽对象</th>
                                            <td class="data">
                                                <div class="uiTypeahead _1rg1" data-ft="{&quot;tn&quot;:&quot;+Q&quot;}" id="u_jsonp_11_a">
                                                    <div class="wrap"><input type="hidden" autocomplete="off" class="hiddenInput">
                                                        <div class="innerWrap"><input type="text" class="inputtext textInput" placeholder="输入名字..." autocomplete="new-password" aria-autocomplete="list" aria-expanded="false" aria-controls="typeahead_list_u_jsonp_11_a" aria-haspopup="true" role="combobox" spellcheck="false" aria-label="输入名字..." id="u_jsonp_11_m"></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot class="footer">
                                        <tr>
                                            <th class="label"></th>
                                            <td class="data">
                                                <div class="mts hidden_elem fsm fwn fcg">你还未屏蔽来自任何人的邀请。</div>
                                                <ul class="uiList pls _4of _4kg" id="u_jsonp_11_9"></ul>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </span></div>
                </li>
                <li class="fbSettingsListItem clearfix fbSettingsListItemLabeled">
                    <div class="pvm phs fbSettingsListLink clearfix"><span class="pls fbSettingsListItemLabel"><strong>屏蔽应用</strong></span><span class="fbSettingsListItemContent fcg">
                            <div class="mbm uiP fsm">一旦屏蔽应用，此应用将无法再联系你，或通过 Facebook 获得任何关于你的非公开信息。<a href="/help?faq=212102325489549">详细了解</a></div>
                            <div class="_iw3">
                                <table class="uiInfoTable _iw1 noBorder" role="presentation">
                                    <tbody>
                                        <tr class="dataRow">
                                            <th class="label">屏蔽应用</th>
                                            <td class="data">
                                                <div class="uiTypeahead _1rg1" data-ft="{&quot;tn&quot;:&quot;+Q&quot;}" id="u_jsonp_11_c">
                                                    <div class="wrap"><input type="hidden" autocomplete="off" class="hiddenInput">
                                                        <div class="innerWrap"><input type="text" class="inputtext textInput" placeholder="输入应用名..." autocomplete="new-password" aria-autocomplete="list" aria-expanded="false" aria-controls="typeahead_list_u_jsonp_11_c" aria-haspopup="true" role="combobox" spellcheck="false" aria-label="输入应用名..." id="u_jsonp_11_n"></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot class="footer">
                                        <tr>
                                            <th class="label"></th>
                                            <td class="data">
                                                <div class="mts hidden_elem fsm fwn fcg">你没有屏蔽过任何应用。</div>
                                                <ul class="uiList pls _4of _4kg" id="u_jsonp_11_b"></ul>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </span></div>
                </li>
                <li class="fbSettingsListItem clearfix fbSettingsListItemLabeled">
                    <div class="pvm phs fbSettingsListLink clearfix"><span class="pls fbSettingsListItemLabel"><strong>屏蔽主页</strong></span><span class="fbSettingsListItemContent fcg">
                            <div class="mbm uiP fsm">一旦屏蔽主页，该主页便无法在与你的帖子进行互动或对你的评论进行点赞或回复。你也无法在主页时间线上发帖或向主页发消息。屏蔽主页也将取消你对主页的赞和关注。</div>
                            <div class="_iw3">
                                <table class="uiInfoTable _iw1 noBorder" role="presentation">
                                    <tbody>
                                        <tr class="dataRow">
                                            <th class="label">屏蔽主页</th>
                                            <td class="data">
                                                <div class="uiTypeahead _1rg1" data-ft="{&quot;tn&quot;:&quot;+Q&quot;}" id="u_jsonp_11_e">
                                                    <div class="wrap"><input type="hidden" autocomplete="off" class="hiddenInput">
                                                        <div class="innerWrap"><input type="text" class="inputtext textInput" placeholder="输入主页名..." autocomplete="new-password" aria-autocomplete="list" aria-expanded="false" aria-controls="typeahead_list_u_jsonp_11_e" aria-haspopup="true" role="combobox" spellcheck="false" aria-label="输入主页名..." id="u_jsonp_11_o"></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot class="footer">
                                        <tr>
                                            <th class="label"></th>
                                            <td class="data">
                                                <div class="mts hidden_elem fsm fwn fcg">你还没有屏蔽任何主页。</div>
                                                <ul class="uiList pls _4of _4kg" id="u_jsonp_11_d"></ul>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </span></div>
                </li>
            </ul>
            <div class="mtm">
                <div class="_4-u2 _30i5 _4-u8" id="settings_usability_survey_root"><span class="_48ul">你找到需要的帮助了吗？<a ajaxify="/settings/survey/usability/feedback/?response=yes&amp;ref=blocking" rel="async" href="#" role="button" class="mls">是</a> · <a ajaxify="/settings/survey/usability/feedback/?response=no&amp;ref=blocking" rel="async" href="#" role="button">否</a> · <a ajaxify="/settings/survey/usability/feedback/?response=browsing&amp;ref=blocking" rel="async" href="#" role="button">我不需要什么具体帮助</a></span></div>
            </div>
        </div>
    </div>
    <div id="bottomContent"></div>
</div>
</template>

<style scoped>
@import '../../css/me.css';
</style>
