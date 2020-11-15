<template>
<div id="contentCol" class="clearfix">
    <div id="headerArea">
        <div class="uiHeader uiHeaderPage">
            <div class="clearfix uiHeaderTop">
                <div class="rfloat _ohf">
                    <h2 class="accessible_elem">
                        你的 Facebook 信息
                    </h2>
                    <div class="uiHeaderActions">
                    </div>
                </div>
                <div>
                    <h2 class="uiHeaderTitle" aria-hidden="true">
                        你的 Facebook 信息
                    </h2>
                </div>
            </div>
        </div>
    </div>
    <div id="contentArea" role="main">
        <div id="SettingsPage_Content">
            <div class="_4-u2 _3-97 _2pi0 _4-u8">
                <span class="_50f4">
                    你可以随时查看或下载你的个人信息并删除你的帐户。
                </span>
            </div>
            <ul class="uiList fbSettingsList fbSettingsListBorderTop fbSettingsListBorderBottom _4kg _4ks">
                <li class="fbSettingsListItem clearfix _5b2_ fbSettingsListItemLabeled" data-testid="settings_section_access_your_information">
                    <router-link class="fbSettingsListLink clearfix pvm phs" role="button" aria-expanded="false" aria-labelledby="u_jsonp_4_4" :to="{name:'your_information'}">
                        <h3 class="pls fbSettingsListItemLabel" id="u_jsonp_4_4">
                            访问个人信息
                        </h3>
                        <span class="fbSettingsListItemEdit">
                            <span class="fbSettingsListItemEditText">
                                查看
                            </span>
                        </span>
                        <span class="fbSettingsListItemSaved hidden_elem">
                            修改已保存
                        </span>
                        <span class="fbSettingsListItemContent fcg">
                            <div class="_90lw" data-onclick="[{&quot;mod&quot;:&quot;SettingsController&quot;,&quot;meth&quot;:&quot;logClickFacebookSettingsPage&quot;,&quot;a&quot;:[&quot;settings_2_0&quot;,&quot;access_your_information&quot;]}]">
                                <div class="_nll wideText">
                                    按类别查看你的个人信息。
                                </div>
                                <div class="_nlm fwb">
                                </div>
                            </div>
                        </span>
                    </router-link>
                    <div class="content">
                    </div>
                </li>
                <li class="fbSettingsListItem clearfix _5b2_ fbSettingsListItemLabeled" data-testid="settings_section_data_transfer_project">
                    <a class="fbSettingsListLink clearfix pvm phs" role="button" aria-expanded="false" aria-labelledby="u_jsonp_4_5" href="/dtp/">
                        <h3 class="pls fbSettingsListItemLabel" id="u_jsonp_4_5">
                            转移你的照片或视频副本
                        </h3>
                        <span class="fbSettingsListItemEdit">
                            <span class="fbSettingsListItemEditText">
                                查看
                            </span>
                        </span>
                        <span class="fbSettingsListItemSaved hidden_elem">
                            修改已保存
                        </span>
                        <span class="fbSettingsListItemContent fcg">
                            <div class="_90lw" data-onclick="[{&quot;mod&quot;:&quot;SettingsController&quot;,&quot;meth&quot;:&quot;logClickFacebookSettingsPage&quot;,&quot;a&quot;:[&quot;settings_2_0&quot;,&quot;data_transfer_project&quot;]}]">
                                <div class="_nll wideText">
                                    把你的照片或视频转移到另一服务。
                                </div>
                                <div class="_nlm fwb">
                                </div>
                            </div>
                        </span>
                    </a>
                    <div class="content">
                    </div>
                </li>
                <li class="fbSettingsListItem clearfix _5b2_ fbSettingsListItemLabeled" data-testid="settings_section_download_your_information">
                    <a class="fbSettingsListLink clearfix pvm phs" role="button" aria-expanded="false" aria-labelledby="u_jsonp_4_6" href="/dyi/?referrer=yfi_settings">
                        <h3 class="pls fbSettingsListItemLabel" id="u_jsonp_4_6">
                            下载个人信息
                        </h3>
                        <span class="fbSettingsListItemEdit">
                            <span class="fbSettingsListItemEditText">
                                查看
                            </span>
                        </span>
                        <span class="fbSettingsListItemSaved hidden_elem">
                            修改已保存
                        </span>
                        <span class="fbSettingsListItemContent fcg">
                            <div class="_90lw" data-onclick="[{&quot;mod&quot;:&quot;SettingsController&quot;,&quot;meth&quot;:&quot;logClickFacebookSettingsPage&quot;,&quot;a&quot;:[&quot;settings_2_0&quot;,&quot;download_your_information&quot;]}]">
                                <div class="_nll wideText">
                                    下载你的个人信息副本，保存备份或转移到另一服务。
                                </div>
                                <div class="_nlm fwb">
                                </div>
                            </div>
                        </span>
                    </a>
                    <div class="content">
                    </div>
                </li>
                <li class="fbSettingsListItem clearfix _5b2_ fbSettingsListItemLabeled" data-testid="settings_section_activity_log">
                    <a class="fbSettingsListLink clearfix pvm phs" role="button" aria-expanded="false" aria-labelledby="u_jsonp_4_7" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;privacy_source=your_facebook_information&amp;entry_point=settings_yfi">
                        <h3 class="pls fbSettingsListItemLabel" id="u_jsonp_4_7">
                            动态记录
                        </h3>
                        <span class="fbSettingsListItemEdit">
                            <span class="fbSettingsListItemEditText">
                                查看
                            </span>
                        </span>
                        <span class="fbSettingsListItemSaved hidden_elem">
                            修改已保存
                        </span>
                        <span class="fbSettingsListItemContent fcg">
                            <div class="_90lw" data-onclick="[{&quot;mod&quot;:&quot;SettingsController&quot;,&quot;meth&quot;:&quot;logClickFacebookSettingsPage&quot;,&quot;a&quot;:[&quot;settings_2_0&quot;,&quot;activity_log&quot;]}]">
                                <div class="_nll wideText">
                                    查看并管理你的个人信息和部分设置。
                                </div>
                                <div class="_nlm fwb">
                                </div>
                            </div>
                        </span>
                    </a>
                    <div class="content">
                    </div>
                </li>
                <li class="fbSettingsListItem clearfix _5b2_ fbSettingsListItemLabeled" data-testid="settings_section_clear_history">
                    <a class="fbSettingsListLink clearfix pvm phs" role="button" aria-expanded="false" aria-labelledby="u_jsonp_4_8" href="/off_facebook_activity/">
                        <h3 class="pls fbSettingsListItemLabel" id="u_jsonp_4_8">
                            Facebook 站外动态
                        </h3>
                        <span class="fbSettingsListItemEdit">
                            <span class="fbSettingsListItemEditText">
                                查看
                            </span>
                        </span>
                        <span class="fbSettingsListItemSaved hidden_elem">
                            修改已保存
                        </span>
                        <span class="fbSettingsListItemContent fcg">
                            <div class="_90lw">
                                <div class="_nll wideText">
                                    来自你在 Facebook 站外的商家和组织的动态记录，你可以查看它们，还可以取消这些数据与帐户之间的关联。
                                </div>
                                <div class="_nlm fwb">
                                </div>
                            </div>
                        </span>
                    </a>
                    <div class="content">
                    </div>
                </li>
                <li class="fbSettingsListItem clearfix _5b2_ fbSettingsListItemLabeled" data-testid="settings_section_managing_your_information">
                    <a class="fbSettingsListLink clearfix pvm phs" role="button" aria-expanded="false" aria-labelledby="u_jsonp_4_9" href="/help/contact/1994830130782319">
                        <h3 class="pls fbSettingsListItemLabel" id="u_jsonp_4_9">
                            管理你的个人信息
                        </h3>
                        <span class="fbSettingsListItemEdit">
                            <span class="fbSettingsListItemEditText">
                                查看
                            </span>
                        </span>
                        <span class="fbSettingsListItemSaved hidden_elem">
                            修改已保存
                        </span>
                        <span class="fbSettingsListItemContent fcg">
                            <div class="_90lw" data-onclick="[{&quot;mod&quot;:&quot;SettingsController&quot;,&quot;meth&quot;:&quot;logClickFacebookSettingsPage&quot;,&quot;a&quot;:[&quot;settings_2_0&quot;,&quot;managing_your_information&quot;]}]">
                                <div class="_nll wideText">
                                    详细了解如何管理你的个人信息。
                                </div>
                                <div class="_nlm fwb">
                                </div>
                            </div>
                        </span>
                    </a>
                    <div class="content">
                    </div>
                </li>
                <li class="fbSettingsListItem clearfix _5b2_ fbSettingsListItemLabeled" data-testid="settings_section_delete_your_account">
                    <a class="fbSettingsListLink clearfix pvm phs" role="button" aria-expanded="false" aria-labelledby="u_jsonp_4_a" href="/help/delete_account/">
                        <h3 class="pls fbSettingsListItemLabel" id="u_jsonp_4_a">
                            删除你的帐户和个人信息
                        </h3>
                        <span class="fbSettingsListItemEdit">
                            <span class="fbSettingsListItemEditText">
                                查看
                            </span>
                        </span>
                        <span class="fbSettingsListItemSaved hidden_elem">
                            修改已保存
                        </span>
                        <span class="fbSettingsListItemContent fcg">
                            <div class="_90lw" data-onclick="[{&quot;mod&quot;:&quot;SettingsController&quot;,&quot;meth&quot;:&quot;logClickFacebookSettingsPage&quot;,&quot;a&quot;:[&quot;settings_2_0&quot;,&quot;delete_your_account&quot;]}]">
                                <div class="_nll wideText">
                                    永久删除 Facebook 帐户和个人信息。
                                </div>
                                <div class="_nlm fwb">
                                </div>
                            </div>
                        </span>
                    </a>
                    <div class="content">
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div id="bottomContent">
    </div>
</div>
</template>

<style scoped>
@import '../../css/me.css';
</style>
