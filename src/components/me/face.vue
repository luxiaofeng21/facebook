<template>
<div>
    <div id="headerArea">
        <div class="uiHeader uiHeaderPage">
            <div class="clearfix uiHeaderTop">
                <div class="rfloat _ohf">
                    <h2 class="accessible_elem">人脸识别设置</h2>
                    <div class="uiHeaderActions"></div>
                </div>
                <div>
                    <h2 class="uiHeaderTitle" aria-hidden="true">人脸识别设置</h2>
                </div>
            </div>
        </div>
    </div>
    <div id="contentArea" role="main">
        <div id="SettingsPage_Content">
            <div class="mbl fwb">这项设置允许 Facebook 辨别照片或视频中是否有你。如需详细了解我们会何时以何种方式对你进行人脸识别，<a href="/help/122175507864081?ref=learn_more" target="_blank">请访问帮助中心。</a></div>
            <ul class="uiList fbSettingsSections _4kg">
                <li class="fbSettingsSectionsItem fbSettingsSectionsItemBorderTop">
                    <div class="clearfix">
                        <h3 class="mlm fbSettingsSectionsItemName lfloat _ohe">人脸识别</h3>
                        <div class="fbSettingsSectionsItemContent rfloat _ohf">
                            <ul class="uiList fbSettingsList fbSettingsListBorderTop fbSettingsListBorderBottom _4kg _4ks">
                                <li class="fbSettingsListItem clearfix"><a class="fbSettingsListLink clearfix pvm phs" role="button" aria-expanded="true" href="/settings?tab=facerec&amp;section=face_recognition" rel="ignore" data-meta="{&quot;ajaxify&quot;:&quot;\/ajax\/settings\/facerec\/face_recognition.php&quot;,&quot;rel&quot;:&quot;async&quot;}" data-onclick="[{&quot;mod&quot;:&quot;SettingsController&quot;,&quot;meth&quot;:&quot;handleLinkClick&quot;,&quot;a&quot;:[{&quot;__elem&quot;:1}]}]" id="js_7"><span style="padding-left: 23px;" class="uiIconText fbSettingsListItemEdit"><i class="img sp_fHxCi0eLlUk sx_b6b2f7" style="top: -2px;"></i><span class="fbSettingsListItemEditText">编辑</span></span><span class="fbSettingsListItemSaved hidden_elem">修改已保存</span><span class="fbSettingsListItemContent fcg">
                                            <div class="_90lw">
                                                <div class="_nll">是否允许 Facebook 在照片和视频中识别你的脸？</div>
                                                <div class="_nlm fwb">是</div>
                                            </div>
                                        </span></a>
                                    <div class="content" aria-expanded="true"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div id="bottomContent"></div>
</div>
</template>

<style scoped>
@import '../../css/me.css';
</style>
