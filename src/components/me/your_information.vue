<template>
<div id="globalContainer" role="main" aria-describedby="pageTitle" style="padding:0 20px">
    <div id="u_0_1">
        <div>
            <div>
                <div class="_22c3">
                    访问个人信息
                </div>
                <div class="_381d _4-u2  _4-u8">
                    <p class="_22c4">
                        <span>
                            <span class="_3l1s">
                                这是你的 Facebook 信息列表，可供你随时查看。我们已把信息分类，方便你查找需要的信息。我们的
                                <a href="/privacy/explanation/">
                                    数据使用政策
                                </a>
                                详细说明了我们如何收集并使用你的信息、信息的分享方式和保留时限。其中还归纳了你的权利和行使方式，以及我们在提供全球服务过程中如何操作并传输你的信息。
                            </span>
                        </span>
                    </p>
                    <p class="_22c4">
                        <span>
                            <span class="_3l1s">
                                如果希望保留副本，你可以选择
                                <a href="/dyi/?referrer=ayi">
                                    下载个人信息
                                </a>
                                。
                            </span>
                        </span>
                    </p>
                </div>
            </div>
            <div class="_381d _4-u2  _4-u8">
                <div class="_sxo">
                    <span class="_sxp">
                        你的信息
                        <span class="_4es3" data-hover="tooltip" data-tooltip-content="你在 Facebook 上输入、上传和分享的信息，例如你的个人信息、帖子、赞和评论。">
                            <i alt="" class="img sp_TLeDHPXXFtI sx_22ff52">
                            </i>
                        </span>
                    </span>
                    <a @click="getall">
                        全部展开
                    </a>
                </div>
                <div class="_381c">
                    <div class="_11i0">
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(140, 114, 203);">
                                        <img src="@/assets/me/post_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            帖子
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;" id="js_2">
                                            <span>
                                                <span class="_3l1s">
                                                    你在 Facebook 分享的帖子以及你被标记在内的帖子
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=statuscluster&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            你的帖子
                                        </a>
                                    </div>
                                    <div>
                                        你分享到 Facebook 的照片、视频、文字和状态更新
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=tagsbyotherscluster&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            标记你的动态
                                        </a>
                                    </div>
                                    <div>
                                        标记你的帖子、照片和评论
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=wallcluster&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            其他用户发布到你时间线的帖子
                                        </a>
                                    </div>
                                    <div>
                                        其他用户分享到你时间线的帖子
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=hiddenstories&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            时间线上隐藏的帖子
                                        </a>
                                    </div>
                                    <div>
                                        你选择不在时间线上显示的帖子，包括你和其他用户发布的帖子
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=notes_my_notes">
                                            日志
                                        </a>
                                    </div>
                                    <div>
                                        你创建或被标记在内的日志
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=questionscluster&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            问卷投票
                                        </a>
                                    </div>
                                    <div>
                                        你创建或参与的投票
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(247, 146, 59);">
                                        <img src="@/assets/me/comment_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            评论
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;" id="js_3">
                                            <span>
                                                <span class="_3l1s">
                                                    你对自己的帖子、他人的帖子以及所在小组中的帖子发布的评论
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=commentscluster&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            评论
                                        </a>
                                    </div>
                                    <div>
                                        你发布的评论
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(163, 206, 223);">
                                        <img src="@/assets/me/friends_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            好友
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;">
                                            <span>
                                                <span class="_3l1s">
                                                    你在 Facebook 上的联系人
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=friends&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            好友
                                        </a>
                                    </div>
                                    <div>
                                        目前与你有联系的用户
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=sentfriendrequests&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            发送的加好友请求
                                        </a>
                                    </div>
                                    <div>
                                        你发给其他 Facebook 用户的加好友请求
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=receivedfriendrequests&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            收到的加好友请求
                                        </a>
                                    </div>
                                    <div>
                                        其他用户发给你的加好友请求
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=removedfriends&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            被删好友
                                        </a>
                                    </div>
                                    <div>
                                        在 Facebook 上与你不再联系的用户
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(53, 120, 229);">
                                        <img src="@/assets/me/app-messenger_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            消息
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;">
                                            <span>
                                                <span class="_3l1s">
                                                    你和其他用户在 Messenger 互发的消息
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="www.messenger.com/t/?fbclid=IwAR2Fs5rTfg8TpDjAofdu97kR3btvctqn_87QWJqlAy_aYGRZl6vmXctDdMs">
                                            你的消息
                                        </a>
                                    </div>
                                    <div>
                                        你收发的消息
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(219, 65, 35);">
                                        <img src="@/assets/me/calendar_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            活动
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;">
                                            <span>
                                                <span class="_3l1s">
                                                    你对活动的响应和你创建的所有活动
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=createdevents&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            你的活动
                                        </a>
                                    </div>
                                    <div>
                                        你创建的活动
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=eventrsvps&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            你的活动响应
                                        </a>
                                    </div>
                                    <div>
                                        你对活动的响应：包括“参加”、“可能参加”、“有兴趣”和“不参加”
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=invitedevents&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            活动邀请
                                        </a>
                                    </div>
                                    <div>
                                        你收到的活动邀请
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(247, 146, 59);">
                                        <img src="@/assets/me/app-pages_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            公共主页
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;">
                                            <span>
                                                <span class="_3l1s">
                                                    你担任管理员的公共主页，以及你推荐的公共主页
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/bookmarks/pages">
                                            你的主页
                                        </a>
                                    </div>
                                    <div>
                                        你管理的主页
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(245, 135, 150);">
                                        <img src="@/assets/me/card_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            支付记录
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;">
                                            <span>
                                                <span class="_3l1s">
                                                    你通过 Facebook 完成的支付记录
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="secure.facebook.com/settings/?tab=payments&amp;section=history">
                                            支付记录
                                        </a>
                                    </div>
                                    <div>
                                        你的支付记录
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(236, 126, 189);">
                                        <img src="@/assets/me/pin_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            你的地点
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;">
                                            <span>
                                                <span class="_3l1s">
                                                    你创建的所有地点
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=yourplaces&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            你创建的地点
                                        </a>
                                    </div>
                                    <div>
                                        你所创建地点的名称、所在位置以及创建日期和时间
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(24, 119, 242);">
                                        <img src="@/assets/me/app-facebook-gaming_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            Facebook Gaming
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;">
                                            <span>
                                                <span class="_3l1s">
                                                    你的 Facebook Gaming 玩家主页
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="m.facebook.com/nt/?id=gaming%2Fsee-more%3Fsection%3Dyour_game_reviews%26logging_data%255Bentrypoint%255D%3Ddeeplink%26theme%3Dlight">
                                            游戏点评
                                        </a>
                                    </div>
                                    <div>
                                        你点评过的小游戏
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(104, 134, 148);">
                                        <img src="@/assets/me/dots-3-horizontal_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            其他动态
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;">
                                            <span>
                                                <span class="_3l1s">
                                                    帐户相关动态，例如你收到和发送的“戳”
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/pokes/">
                                            谁戳了你
                                        </a>
                                    </div>
                                    <div>
                                        你收到或发送的“戳”
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=videopollsvoted&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            互动视频
                                        </a>
                                    </div>
                                    <div>
                                        你参加过的投票和竞猜节目，以及你回答或的问题
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=volunteering&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            Volunteering
                                        </a>
                                    </div>
                                    <div>
                                        你的志愿者活动偏好设置和动态
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="_11i0">
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(252, 216, 114);">
                                        <img src="@/assets/me/photo_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            照片和视频
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;" id="js_5">
                                            <span>
                                                <span class="_3l1s">
                                                    你分享的或标记你的照片和视频
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=photos_all">
                                            你的照片
                                        </a>
                                    </div>
                                    <div>
                                        你上传和分享的照片
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=photos_of">
                                            标记你的照片和视频
                                        </a>
                                    </div>
                                    <div>
                                        标记你的照片和视频
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=videos_by">
                                            你的视频
                                        </a>
                                    </div>
                                    <div>
                                        你上传和分享的视频
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(84, 199, 236);">
                                        <img src="@/assets/me/like_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            赞和心情
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;" id="js_4">
                                            <span>
                                                <span class="_3l1s">
                                                    你点赞或留下心情的帖子、评论和公共主页
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=likedposts&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            帖子和评论
                                        </a>
                                    </div>
                                    <div>
                                        你赞过或留下过心情的帖子和评论
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=likedinterests&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            主页
                                        </a>
                                    </div>
                                    <div>
                                        你赞过或留下过心情的主页
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(243, 83, 105);">
                                        <img src="@/assets/me/following_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            你关注的人和你的粉丝
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;">
                                            <span>
                                                <span class="_3l1s">
                                                    你选择查看其内容的用户、组织或商家以及你关注的用户
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=following">
                                            已关注
                                        </a>
                                    </div>
                                    <div>
                                        你选择查看其内容或帖子的用户、组织或商家
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=following">
                                            粉丝
                                        </a>
                                    </div>
                                    <div>
                                        关注你的用户
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(163, 206, 113);">
                                        <img src="@/assets/me/group_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            小组
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;">
                                            <span>
                                                <span class="_3l1s">
                                                    你所属的小组、你管理的小组以及你在所属小组中发布的帖子和评论
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/groups/">
                                            你的小组
                                        </a>
                                    </div>
                                    <div>
                                        你加入的小组
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=groupmembership&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            你作为小组成员的动态
                                        </a>
                                    </div>
                                    <div>
                                        你加入小组的日期
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=groupposts&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            你在小组中的帖子和评论
                                        </a>
                                    </div>
                                    <div>
                                        你在所属小组中发布的帖子和评论
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(107, 206, 187);">
                                        <img src="@/assets/me/profile-settings_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            个人信息
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;">
                                            <span>
                                                <span class="_3l1s">
                                                    你的联系方式、个人主页简介版块、生活纪事、爱好和音乐
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div class="_208k">
                                        <span>
                                            你的帐户：
                                            <span class="_1ufq">
                                                18 11 月, 2012
                                            </span>
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            你帐户的创建日期
                                        </span>
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=about&amp;section=contact-info">
                                            你的联系方式
                                        </a>
                                    </div>
                                    <div>
                                        你添加到个人主页的所有地址、手机号和邮箱
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=about&amp;section=overview">
                                            个人简介
                                        </a>
                                    </div>
                                    <div>
                                        你在个人主页上添加的姓名、出生日期、工作和教育信息，以及你居住过的地点
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=about&amp;section=year-overviews">
                                            生活纪事
                                        </a>
                                    </div>
                                    <div>
                                        你添加到个人主页的重要活动或事件
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=profile_songs">
                                            你的音乐
                                        </a>
                                    </div>
                                    <div>
                                        你已添加到个人主页的音乐
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=profilehobbies&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            你的爱好
                                        </a>
                                    </div>
                                    <div>
                                        你在个人信息中添加的爱好
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(157, 135, 210);">
                                        <img src="@/assets/me/marketplace_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            Marketplace
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;">
                                            <span>
                                                <span class="_3l1s">
                                                    你的 Marketplace 动态
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/marketplace/selling/?tab=sold">
                                            已售货品
                                        </a>
                                    </div>
                                    <div>
                                        你在 Marketplace 卖出的货品
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(245, 195, 59);">
                                        <img src="@/assets/me/bookmark_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            收藏内容和收藏夹
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;">
                                            <span>
                                                <span class="_3l1s">
                                                    你收藏的帖子、照片和视频
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/saved/">
                                            你的收藏
                                        </a>
                                    </div>
                                    <div>
                                        你收藏的帖子、照片和视频
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/saved/">
                                            收藏夹
                                        </a>
                                    </div>
                                    <div>
                                        你创建的帖子、照片和视频收藏夹，以及你和其他用户共享的收藏夹
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(107, 206, 187);">
                                        <img src="@/assets/me/apps_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            应用和网站
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;">
                                            <span>
                                                <span class="_3l1s">
                                                    你管理的应用，以及使用 Facebook 登录的应用和网站
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/settings/apps/list/">
                                            应用和网站
                                        </a>
                                    </div>
                                    <div>
                                        你使用 Facebook 登录过的应用
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="developers.facebook.com/apps/">
                                            你的应用
                                        </a>
                                    </div>
                                    <div>
                                        你管理的应用
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=allapps&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            应用和网站发布的帖子
                                        </a>
                                    </div>
                                    <div>
                                        你授权应用以你的身份发布的帖子
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(138, 141, 145);">
                                        <img src="@/assets/me/post_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            私密文件夹
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;">
                                            <span>
                                                <span class="_3l1s">
                                                    查看你的私人内容
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=archivedstories&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            收入私人影集的快拍
                                        </a>
                                    </div>
                                    <div>
                                        你分享到快拍的照片和视频
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="_381d _4-u2  _4-u8">
                <div class="_sxo">
                    <span class="_sxp">
                        你的个人信息
                        <span class="_4es3" data-hover="tooltip" data-tooltip-content="你的 Facebook 帐户相关信息，例如你的 Facebook 登录记录和你使用的设备。">
                            <i alt="" class="img sp_TLeDHPXXFtI sx_22ff52">
                            </i>
                        </span>
                    </span>
                    <a href="#">
                        全部展开
                    </a>
                </div>
                <div class="_381c">
                    <div class="_11i0">
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(107, 206, 187);">
                                        <img src="@/assets/me/ad_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            广告和商家
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;" data-tooltip-content="你的兴趣、你与广告主之间的互动和已有关系，以及你在 Facebook 站外与商家和组织的互动。">
                                            <span>
                                                <span class="_3l1s">
                                                    你的兴趣、你与广告主之间的互动和已有关系，以及你在 Facebook 站外与商家和组织的互动。
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/ds/preferences/?entry_product=information_about_you&amp;section_id=interests#interests">
                                            广告兴趣
                                        </a>
                                    </div>
                                    <div>
                                        根据你的 Facebook 动态和其他操作所归结的兴趣；这些数据帮助我们展示与你相关的广告
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/ds/preferences/?entry_product=information_about_you&amp;section_id=interacted#interacted">
                                            上传过包含你信息的联系人名单的广告主
                                        </a>
                                    </div>
                                    <div>
                                        使用上传的联系人名单投放广告的广告主，联系人名单中包含你与广告主或其数据合作伙伴分享的联系信息
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/off_facebook_activity/?entry_point=1">
                                            你的 Facebook 站外动态
                                        </a>
                                    </div>
                                    <div>
                                        你在 Facebook 站外访问商家和组织的相关活动
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/ds/preferences/?entry_product=information_about_you&amp;section_id=interacted#interacted">
                                            与你互动过的广告主
                                        </a>
                                    </div>
                                    <div>
                                        你在 Facebook 上点击过其广告的广告主
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(84, 199, 236);">
                                        <img src="@/assets/me/magnifying-glass_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            搜索记录
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;">
                                            <span>
                                                <span class="_3l1s">
                                                    你搜索过的字词、语句、姓名和名称
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=search&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            你的搜索记录
                                        </a>
                                    </div>
                                    <div>
                                        你搜索过的字词、语句、姓名和名称
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=video_search&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            你搜过的视频
                                        </a>
                                    </div>
                                    <div>
                                        你搜索过的视频
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(251, 114, 75);">
                                        <img src="@/assets/me/key_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            安全与登录信息
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;" data-tooltip-content="你的登录记录、会话时长和其他安全相关信息。如需详细查看所有安全信息，你可以下载安全信息" id="js_8">
                                            <span>
                                                <span class="_3l1s">
                                                    你的登录记录、会话时长和其他安全相关信息。如需详细查看所有安全信息，你可以
                                                    <a href="/dyi/?sections[0]=23&amp;referrer=ayi_security">
                                                        下载安全信息
                                                    </a>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=activesessions&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            登录位置
                                        </a>
                                    </div>
                                    <div>
                                        你登录 Facebook 后的在线时段
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=loginslogouts&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            登录与退出
                                        </a>
                                    </div>
                                    <div>
                                        你的 Facebook 帐户登录和退出记录
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=recognizeddevices&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            已授权设备
                                        </a>
                                    </div>
                                    <div>
                                        你保存到 Facebook 帐户的电脑和手机
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="_11i0">
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(163, 206, 113);">
                                        <img src="@/assets/me/profile-circle_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            个人简介
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;" id="js_6">
                                            <span>
                                                <span class="_3l1s">
                                                    你的 Facebook 帐户相关信息
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div class="_208k">
                                        <span>
                                            好友群：
                                            <span class="_1ufq">
                                                开始成年人生活
                                            </span>
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            描述你在人生各阶段的 Facebook 好友群体
                                        </span>
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/settings?tab=facerec">
                                            人脸识别
                                        </a>
                                    </div>
                                    <div>
                                        你可以通过人脸识别设置选择是否允许 Facebook 在照片和视频中识别你的脸。
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/invite_history.php">
                                            你的通讯录
                                        </a>
                                    </div>
                                    <div>
                                        你添加的好友和其他用户的联系方式
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=videowatch&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            你看过的视频
                                        </a>
                                    </div>
                                    <div>
                                        你在 Facebook 上看过的视频
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(252, 216, 114);">
                                        <img src="@/assets/me/compass-north-arrow_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            位置
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;">
                                            <span>
                                                <span class="_3l1s">
                                                    你的位置相关信息
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/location_history/view/?ref=ayi">
                                            位置记录
                                        </a>
                                    </div>
                                    <div>
                                        通过你的设备获得的精确位置信息
                                    </div>
                                </div>
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/primary_location/info/">
                                            常住地
                                        </a>
                                    </div>
                                    <div>
                                        你的常住地
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="_3j7y _208g _208h _4-u2  _4-u8">
                            <div aria-label="显示链接" role="button" tabindex="0">
                                <div class="_3j83">
                                    <div class="_208i _1vkv" style="background-color: rgb(84, 199, 236);">
                                        <img src="@/assets/me/microphone_filled_20_fig-white.png" alt="" class="img">
                                    </div>
                                    <div class="_208j">
                                        <div class="_208k">
                                            录音和转写文字
                                        </div>
                                        <div data-hover="tooltip" class="_4ik4 _4ik5" style="-webkit-line-clamp: 2;" id="js_7">
                                            <span>
                                                <span class="_3l1s">
                                                    Facebook 录音和转写文字记录
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="_208n">
                                    </div>
                                </div>
                            </div>
                            <div class="_208o">
                                <div class="_67nc">
                                    <div>
                                        <a class="_208f" href="/profile.php?id=100004644524593&amp;sk=allactivity&amp;category_key=voicesearch&amp;privacy_source=access_hub&amp;entry_point=ayi_hub">
                                            语音搜索记录
                                        </a>
                                    </div>
                                    <div>
                                        语音搜索记录
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
</template>

<script>
export default {
    data() {
        return {
            list: [stop]
        }
    },
    mounted() {
        var json = '{"renderTimestamp":1597397243072,"sellerId":240314920,"scmItemExpand":{},"id":4001346178366,"qcStrategy":{},"promiseTemplate":0,"catProperty":{"p-284":{"text":"WOMEN(WOMEN)","value":494},"p-2":{"text":"NONE(AE存量)*******","value":201512802},"p-10":[{"text":"竹纤维(Bamboo Fiber)","value":7919},{"text":"莱卡(Stretch & Spandex)","value":1912}]},"itemPostingTerm":1,"categoryPath":{"path":["女装","半身裙"],"spell":"bsq","idpath":[200000345,349],"name":"半身裙","id":349,"leaf":true},"productUnit":{"text":"件/个 (piece/pieces)","value":"100000015"},"standardDesc":{"type":1,"editData":{}},"title":[{"value":"213","label":"英语","key":"en_US","isEditedByUser":true},{"value":"","label":"阿拉伯语","key":"ar_MA","isEditedByUser":false},{"value":"","label":"德语","key":"de_DE","isEditedByUser":false},{"value":"","label":"西班牙语","key":"es_ES","isEditedByUser":false},{"value":"","label":"法语","key":"fr_FR","isEditedByUser":false},{"value":"","label":"印度尼西亚语","key":"in_ID","isEditedByUser":false},{"value":"","label":"意大利语","key":"it_IT","isEditedByUser":false},{"value":"","label":"希伯来语","key":"iw_IL","isEditedByUser":false},{"value":"","label":"日语","key":"ja_JP","isEditedByUser":false},{"value":"","label":"韩语","key":"ko_KR","isEditedByUser":false},{"value":"","label":"荷兰语","key":"nl_NL","isEditedByUser":false},{"value":"","label":"波兰语","key":"pl_PL","isEditedByUser":false},{"value":"","label":"葡萄牙语","key":"pt_BR","isEditedByUser":false},{"value":"","label":"俄语","key":"ru_RU","isEditedByUser":false},{"value":"","label":"泰国语","key":"th_TH","isEditedByUser":false},{"value":"","label":"土耳其语","key":"tr_TR","isEditedByUser":false},{"value":"","label":"越南语","key":"vi_VN","isEditedByUser":false}],"saleProp":{"p-14":[{"rgb":"#000","imageUrl":"","checked":true,"text":"黑色","value":193,"alias":"black"},{"checked":true,"rgb":"#1eddff","imageUrl":"","text":"天蓝色","value":1254,"alias":""}],"p-5":{"selectedSizeGroupId":{"subName":"sizeGroup_0-null","text":"通用","value":"0-null"},"value":[{"text":"XS","value":100014066},{"text":"XXXS","value":200006272}]},"custom_-1":[{"text":"1","value":-1}],"p-200007763":[{"text":"ZA","value":100015009},{"text":"CHINA","value":201336100},{"text":"IL","value":203124903}],"p-200369262":[{"text":"158","value":200052836},{"text":"170","value":200042076}]},"stockReduceStrategy":{"text":"付款减库存","value":"payment_success_deduct"},"supportAliPay":1,"saleModel":{"text":"按 件 出售","value":"sell_by_piece"},"sku":[{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","rgb":"#000","imageUrl":"","checked":true,"text":"黑色","value":193,"alias":"black","label":"颜色"},{"name":"p-5","text":"XS","value":100014066,"label":"尺寸"},{"name":"p-200369262","text":"158","value":200052836,"label":"身高"},{"name":"p-200007763","text":"ZA","value":100015009,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-193_5-100014066_200369262-200052836_200007763-100015009_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","rgb":"#000","imageUrl":"","checked":true,"text":"黑色","value":193,"alias":"black","label":"颜色"},{"name":"p-5","text":"XS","value":100014066,"label":"尺寸"},{"name":"p-200369262","text":"158","value":200052836,"label":"身高"},{"name":"p-200007763","text":"CHINA","value":201336100,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-193_5-100014066_200369262-200052836_200007763-201336100_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","rgb":"#000","imageUrl":"","checked":true,"text":"黑色","value":193,"alias":"black","label":"颜色"},{"name":"p-5","text":"XS","value":100014066,"label":"尺寸"},{"name":"p-200369262","text":"158","value":200052836,"label":"身高"},{"name":"p-200007763","text":"IL","value":203124903,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-193_5-100014066_200369262-200052836_200007763-203124903_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","rgb":"#000","imageUrl":"","checked":true,"text":"黑色","value":193,"alias":"black","label":"颜色"},{"name":"p-5","text":"XS","value":100014066,"label":"尺寸"},{"name":"p-200369262","text":"170","value":200042076,"label":"身高"},{"name":"p-200007763","text":"ZA","value":100015009,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-193_5-100014066_200369262-200042076_200007763-100015009_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","rgb":"#000","imageUrl":"","checked":true,"text":"黑色","value":193,"alias":"black","label":"颜色"},{"name":"p-5","text":"XS","value":100014066,"label":"尺寸"},{"name":"p-200369262","text":"170","value":200042076,"label":"身高"},{"name":"p-200007763","text":"CHINA","value":201336100,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-193_5-100014066_200369262-200042076_200007763-201336100_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","rgb":"#000","imageUrl":"","checked":true,"text":"黑色","value":193,"alias":"black","label":"颜色"},{"name":"p-5","text":"XS","value":100014066,"label":"尺寸"},{"name":"p-200369262","text":"170","value":200042076,"label":"身高"},{"name":"p-200007763","text":"IL","value":203124903,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-193_5-100014066_200369262-200042076_200007763-203124903_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","rgb":"#000","imageUrl":"","checked":true,"text":"黑色","value":193,"alias":"black","label":"颜色"},{"name":"p-5","text":"XXXS","value":200006272,"label":"尺寸"},{"name":"p-200369262","text":"158","value":200052836,"label":"身高"},{"name":"p-200007763","text":"ZA","value":100015009,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-193_5-200006272_200369262-200052836_200007763-100015009_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","rgb":"#000","imageUrl":"","checked":true,"text":"黑色","value":193,"alias":"black","label":"颜色"},{"name":"p-5","text":"XXXS","value":200006272,"label":"尺寸"},{"name":"p-200369262","text":"158","value":200052836,"label":"身高"},{"name":"p-200007763","text":"CHINA","value":201336100,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-193_5-200006272_200369262-200052836_200007763-201336100_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","rgb":"#000","imageUrl":"","checked":true,"text":"黑色","value":193,"alias":"black","label":"颜色"},{"name":"p-5","text":"XXXS","value":200006272,"label":"尺寸"},{"name":"p-200369262","text":"158","value":200052836,"label":"身高"},{"name":"p-200007763","text":"IL","value":203124903,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-193_5-200006272_200369262-200052836_200007763-203124903_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","rgb":"#000","imageUrl":"","checked":true,"text":"黑色","value":193,"alias":"black","label":"颜色"},{"name":"p-5","text":"XXXS","value":200006272,"label":"尺寸"},{"name":"p-200369262","text":"170","value":200042076,"label":"身高"},{"name":"p-200007763","text":"ZA","value":100015009,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-193_5-200006272_200369262-200042076_200007763-100015009_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","rgb":"#000","imageUrl":"","checked":true,"text":"黑色","value":193,"alias":"black","label":"颜色"},{"name":"p-5","text":"XXXS","value":200006272,"label":"尺寸"},{"name":"p-200369262","text":"170","value":200042076,"label":"身高"},{"name":"p-200007763","text":"CHINA","value":201336100,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-193_5-200006272_200369262-200042076_200007763-201336100_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","rgb":"#000","imageUrl":"","checked":true,"text":"黑色","value":193,"alias":"black","label":"颜色"},{"name":"p-5","text":"XXXS","value":200006272,"label":"尺寸"},{"name":"p-200369262","text":"170","value":200042076,"label":"身高"},{"name":"p-200007763","text":"IL","value":203124903,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-193_5-200006272_200369262-200042076_200007763-203124903_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","checked":true,"rgb":"#1eddff","imageUrl":"","text":"天蓝色","value":1254,"alias":"","label":"颜色"},{"name":"p-5","text":"XS","value":100014066,"label":"尺寸"},{"name":"p-200369262","text":"158","value":200052836,"label":"身高"},{"name":"p-200007763","text":"ZA","value":100015009,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-1254_5-100014066_200369262-200052836_200007763-100015009_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","checked":true,"rgb":"#1eddff","imageUrl":"","text":"天蓝色","value":1254,"alias":"","label":"颜色"},{"name":"p-5","text":"XS","value":100014066,"label":"尺寸"},{"name":"p-200369262","text":"158","value":200052836,"label":"身高"},{"name":"p-200007763","text":"CHINA","value":201336100,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-1254_5-100014066_200369262-200052836_200007763-201336100_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","checked":true,"rgb":"#1eddff","imageUrl":"","text":"天蓝色","value":1254,"alias":"","label":"颜色"},{"name":"p-5","text":"XS","value":100014066,"label":"尺寸"},{"name":"p-200369262","text":"158","value":200052836,"label":"身高"},{"name":"p-200007763","text":"IL","value":203124903,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-1254_5-100014066_200369262-200052836_200007763-203124903_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","checked":true,"rgb":"#1eddff","imageUrl":"","text":"天蓝色","value":1254,"alias":"","label":"颜色"},{"name":"p-5","text":"XS","value":100014066,"label":"尺寸"},{"name":"p-200369262","text":"170","value":200042076,"label":"身高"},{"name":"p-200007763","text":"ZA","value":100015009,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-1254_5-100014066_200369262-200042076_200007763-100015009_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","checked":true,"rgb":"#1eddff","imageUrl":"","text":"天蓝色","value":1254,"alias":"","label":"颜色"},{"name":"p-5","text":"XS","value":100014066,"label":"尺寸"},{"name":"p-200369262","text":"170","value":200042076,"label":"身高"},{"name":"p-200007763","text":"CHINA","value":201336100,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-1254_5-100014066_200369262-200042076_200007763-201336100_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","checked":true,"rgb":"#1eddff","imageUrl":"","text":"天蓝色","value":1254,"alias":"","label":"颜色"},{"name":"p-5","text":"XS","value":100014066,"label":"尺寸"},{"name":"p-200369262","text":"170","value":200042076,"label":"身高"},{"name":"p-200007763","text":"IL","value":203124903,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-1254_5-100014066_200369262-200042076_200007763-203124903_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","checked":true,"rgb":"#1eddff","imageUrl":"","text":"天蓝色","value":1254,"alias":"","label":"颜色"},{"name":"p-5","text":"XXXS","value":200006272,"label":"尺寸"},{"name":"p-200369262","text":"158","value":200052836,"label":"身高"},{"name":"p-200007763","text":"ZA","value":100015009,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-1254_5-200006272_200369262-200052836_200007763-100015009_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","checked":true,"rgb":"#1eddff","imageUrl":"","text":"天蓝色","value":1254,"alias":"","label":"颜色"},{"name":"p-5","text":"XXXS","value":200006272,"label":"尺寸"},{"name":"p-200369262","text":"158","value":200052836,"label":"身高"},{"name":"p-200007763","text":"CHINA","value":201336100,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-1254_5-200006272_200369262-200052836_200007763-201336100_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","checked":true,"rgb":"#1eddff","imageUrl":"","text":"天蓝色","value":1254,"alias":"","label":"颜色"},{"name":"p-5","text":"XXXS","value":200006272,"label":"尺寸"},{"name":"p-200369262","text":"158","value":200052836,"label":"身高"},{"name":"p-200007763","text":"IL","value":203124903,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-1254_5-200006272_200369262-200052836_200007763-203124903_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","checked":true,"rgb":"#1eddff","imageUrl":"","text":"天蓝色","value":1254,"alias":"","label":"颜色"},{"name":"p-5","text":"XXXS","value":200006272,"label":"尺寸"},{"name":"p-200369262","text":"170","value":200042076,"label":"身高"},{"name":"p-200007763","text":"ZA","value":100015009,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-1254_5-200006272_200369262-200042076_200007763-100015009_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","checked":true,"rgb":"#1eddff","imageUrl":"","text":"天蓝色","value":1254,"alias":"","label":"颜色"},{"name":"p-5","text":"XXXS","value":200006272,"label":"尺寸"},{"name":"p-200369262","text":"170","value":200042076,"label":"身高"},{"name":"p-200007763","text":"CHINA","value":201336100,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-1254_5-200006272_200369262-200042076_200007763-201336100_custom_-1--1"},{"skuTotalStock":null,"scInvId":null,"skuStock":"213","skuPrice":"12.00","scItemId":null,"skuOuterId":"213","skuId":null,"props":[{"name":"p-14","checked":true,"rgb":"#1eddff","imageUrl":"","text":"天蓝色","value":1254,"alias":"","label":"颜色"},{"name":"p-5","text":"XXXS","value":200006272,"label":"尺寸"},{"name":"p-200369262","text":"170","value":200042076,"label":"身高"},{"name":"p-200007763","text":"IL","value":203124903,"label":"发货地"},{"name":"custom_-1","text":"1","value":-1}],"action":{"selected":true},"salePropKey":"14-1254_5-200006272_200369262-200042076_200007763-203124903_custom_-1--1"}],"sizeChartTemplate":{"leafId":"349"},"freightTemplate":722423062,"mainImage":[{"id":195059253,"url":"ae01.alicdn.com/kf/Hb90b419b020d43899d928d3c411bc872Z.jpg","width":1000,"height":666,"size":337091,"name":"D.jpg","key":"f89eb2097d26176d763f83fb06066131","suffix":"jpg","type":"image","bannerId":null,"specs":null,"selectedSpec":null,"expression":null,"folderId":906501,"sizes":337091,"pix":"1000x666"},{"url":"","thumbUrl":""},{"url":"","thumbUrl":""},{"url":"","thumbUrl":""},{"url":"","thumbUrl":""},{"url":"","thumbUrl":""}],"logisticsWeight":{"weight":"1"},"deliveryPeriod":"1","logisticsSize":{"length":1,"width":1,"height":1}}'
        console.log(JSON.parse(json))
    },
    methods: {
        getall() {

        }
    }
}
</script>

<style scoped>
._22c3 {
    font-size: 21px;
    line-height: 24px;
    margin: 10px 0 12px
}

._381d {
    margin-bottom: 12px;
    width: 744px
}

._381d ._22c4 {
    font-size: 15px;
    line-height: 18px;
    margin: 12px
}

._381d ._sxo {
    border-bottom: 1px solid #dddfe2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 12px;
    padding: 12px;
    vertical-align: middle
}

._381d ._sxo ._sxp {
    font-size: 15px;
    font-weight: bold
}

._381d ._sxo ._4es3 {
    margin-left: 6px;
    position: relative;
    top: 2px
}

._381d ._381c {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 12px
}

._381d ._11i0 {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start
}

._3j7y ._208j ._3l1s+._3l1s:before {
    content: ' \b7\ '
}

._3j7y ._1ufq {
    color: #1d2129;
    font-weight: bold
}

._3j7y {
    box-sizing: border-box;
    display: inline-block;
    max-width: 354px;
    min-width: 354px
}

._3j7y._22ng {
    max-width: 232px;
    min-width: 232px;
    padding: 12px
}

._3j7y+._3j7y {
    margin-top: 12px
}

._3j7y ._208j {
    color: #90949c
}

._3j7y ._127k {
    float: right
}

._3j7y ._208j ._208k {
    color: #1d2129;
    font-size: 14px;
    font-weight: bold;
    line-height: 17px
}

._208g ._208j {
    flex-direction: column;
    justify-content: center;
    margin-left: 8px;
    max-width: 256px;
    min-height: 49px;
    min-width: 256px
}

._22ng ._208j ._208k {
    font-size: 15px
}

._208g ._3j83 {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    padding: 12px
}

._22ng ._208j,
._22ng ._3j83,
._22ng ._208f {
    text-align: center
}

._22ng ._3j83 {
    padding: 12px 0 16px
}

._3j7y ._208i,
._208g ._208j,
._208g ._208n {
    display: inline-block
}

._208g ._208j {
    display: inline-flex
}

._3j7y ._208i {
    height: 40px;
    width: 40px
}

._208g ._208i {
    position: relative;
    top: 4px
}

._22ng ._208i,
._3j7y ._1vkv {
    border-radius: 20px
}

._3j7y ._1vkv>.img {
    height: 20px;
    padding: 10px;
    width: 20px
}

._22ng ._208i {
    background-size: cover;
    border: 1px solid #fff;
    margin-bottom: 6px;
    position: relative
}

._22ng ._208i+._208i {
    margin-left: -16px
}

._3j7y ._208f {
    color: #4267b2
}

._22ng ._208f+._208f {
    border-left: 1px solid #dddfe2
}

._22ng ._208o {
    border-top: 1px solid #dddfe2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 8px
}

._22ng ._208f {
    flex-grow: 1
}

._208g ._208f,
._208g ._208o ._208k {
    display: block;
    font-size: 14px;
    font-weight: bold
}

._208g ._67nc+._67nc {
    margin-top: 8px
}

._208g ._208o {
    border-top: 1px solid #dddfe2;
    color: #90949c;
    margin: 0 12px;
    padding: 12px 0
}

._208g._208h ._208o {
    display: none
}

._208g ._208n {
    background-image: url(/rsrc.php/v3/yp/r/BoD-z1pnmy8.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -247px;
    background-color: transparent;
    border: none;
    height: 16px;
    margin-left: 8px;
    position: relative;
    top: 16px;
    width: 16px
}

._208g._208h ._208n {
    background-image: url(/rsrc.php/v3/yp/r/BoD-z1pnmy8.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -332px
}

#bootloader_GEEPd {
    height: 42px;
}

.bootloader_GEEPd {
    display: block !important;
}

.clearfix._ikh._4_vt {
    display: flex;
    justify-content: center;
}

._381d {
    margin-bottom: 12px;
    width: 744px;
}

#globalContainer {
    width: 947px;
}

#globalContainer {
    margin: 0 auto;
    position: relative;
    zoom: 1;
}

._4-u8 {
    background-color: #fff;
}

._381d ._22c4 {
    font-size: 15px;
    line-height: 18px;
    margin: 12px;
}

._381d {
    padding: 1px;
}
</style>
