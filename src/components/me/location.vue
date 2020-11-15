<template>
<div>
    <div id="headerArea">
        <div class="uiHeader uiHeaderPage">
            <div class="clearfix uiHeaderTop">
                <div class="rfloat _ohf">
                    <h2 class="accessible_elem">定位设置</h2>
                    <div class="uiHeaderActions"></div>
                </div>
                <div>
                    <h2 class="uiHeaderTitle" aria-hidden="true">定位设置</h2>
                </div>
            </div>
        </div>
    </div>
    <div id="contentArea" role="main">
        <div id="SettingsPage_Content">
            <div class="_4-u2 _4-u8">
                <div class="_4-u3 _2ph-">
                    <div class="clearfix">
                        <div class="mvm uiP rfloat _ohf fsm"><a role="button" class="_42ft _42fu" href="/location_history/view/?ref=settings"><span><i class="img sp_fJB-TUzCeng sx_c1e9aa"><u>line-chart</u></i> 查看位置记录</span></a></div>
                        <div style="width: 70%;">
                            <div class="_50f8">
                                <div>开启位置记录后，Facebook 可以记录移动设备定位服务每次确定的精确位置信息，并根据这些信息帮助你探索周边事物。只有你能查看这些信息，你还可以在移动设备或电脑中查看和删除位置记录。 <a href="/location_history/info/">详细了解</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="uiList fbSettingsSections _4kg">
                <li class="fbSettingsSectionsItem fbSettingsSectionsItemBorderTop">
                    <div class="clearfix">
                        <h3 class="mlm fbSettingsSectionsItemName lfloat _ohe">位置记录</h3>
                        <div class="fbSettingsSectionsItemContent rfloat _ohf">
                            <ul class="uiList fbSettingsList fbSettingsListBorderTop fbSettingsListBorderBottom _4kg _4ks">
                                <li class="fbSettingsListItem clearfix"><a class="fbSettingsListLink clearfix pvm phs" role="button" aria-expanded="false" href="/settings?tab=location&amp;section=location_history" rel="ignore" data-meta="{&quot;ajaxify&quot;:&quot;\/ajax\/settings\/location\/location_history.php&quot;,&quot;rel&quot;:&quot;async&quot;}" data-onclick="[{&quot;mod&quot;:&quot;SettingsController&quot;,&quot;meth&quot;:&quot;handleLinkClick&quot;,&quot;a&quot;:[{&quot;__elem&quot;:1}]}]"><span style="padding-left: 23px;" class="uiIconText fbSettingsListItemEdit"><i class="img sp_fHxCi0eLlUk sx_b6b2f7" style="top: -2px;"></i><span class="fbSettingsListItemEditText">编辑</span></span><span class="fbSettingsListItemSaved hidden_elem">修改已保存</span><span class="fbSettingsListItemContent fcg">
                                            <div class="_90lw">
                                                <div class="_nll">为移动设备开启位置记录？</div>
                                                <div class="_nlm fwb">已开启</div>
                                            </div>
                                        </span></a>
                                    <div class="content"></div>
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
