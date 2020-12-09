<template>
 <div class="clearfix _4g07 _1hj6" id="MAIN_CONTENT_ID">
        <!-- <div class="_1hj7">
            <div role="navigation" aria-label="帮助中心部分" class="_3mh9">
                <div class="_960" id="u_0_1c">
                    <div class="_960" id="u_0_14">
                        <div class="_4ka8" id="localNavRootID">
                            <div v-for="(item,index) in list" :key="index">
                                <a :class="active==index?'_4kaa':'_4ka9' " href="/help/570785306433644/?helpref=hc_fnav">
                                    {{item.title}}
                                </a>
                                <div v-if="item.children">
                                    <div class="_4kab">
                                    </div>
                                    <a v-for="(v,i) in item.children" :key="i" class="_4kac" >
                                        {{item.title}}
                                    </a>
                                    <div class="_4kab _3-8-">
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="_cy _5jm3" data-testid="help-center-search-result-content"
            id="hc2content" role="main" aria-label="帮助中心">
                <div class="_4qzj">
                    <h1 class="_4qzk">
                        {{obj.name}}
                    </h1>
                    <div class="_4qzm" v-for="(item,index) in obj.list" :key="index">
                        <div class="_4qzn">
                            {{item.title}}
                        </div>
                        <div class="_5i04" v-for="(detail,i) in item.children" :key="i">
                            <div class="_5i08 clearfix" role="presentation">
                                <a class="_5dwo _5i10" aria-controls="u_0_0" aria-expanded="false" role="button"
                                href="#">
                                    {{detail.title}}
                                    <span class="_5i03"></span>
                                </a>
                            </div>
                            <div class="_5i0_">
                                <div class="_z6x" id="u_0_0">
                                    <div class="_4ng1">
                                        {{detail.text}}
                                    </div>
                                    <div class="_4qzn">
                                        要创建 Facebook 帐户：
                                    </div>
                                    <ol class="_1_ex">
                                        <li class="_1_ez">
                                            前往
                                            <a href="https://www.facebook.com/" target="blank">
                                                facebook.com
                                            </a>
                                            ，然后点击
                                            <b>
                                                新建帐户
                                            </b>
                                            。
                                        </li>
                                        <li class="_1_ez">
                                            输入姓名、邮箱或手机号、密码、出生日期及性别。
                                        </li>
                                        <li class="_1_ez">
                                            点击
                                            <a href="https://www.facebook.com/r.php">
                                                <b>
                                                    注册
                                                </b>
                                            </a>
                                            。
                                        </li>
                                        <li class="_1_ez">
                                            您需要
                                            <a href="/help/223900927622502">
                                                确认邮箱或手机号
                                            </a>
                                            才能完成帐户创建。
                                        </li>
                                    </ol>
                                    <div class="_4qzn">
                                        如果在创建 Facebook 帐户时遇到问题：
                                    </div>
                                    <div class="_4ng0">
                                        填写
                                        <a href="/help/contact/730681660635800">
                                            此表单
                                        </a>
                                        将创建 Facebook 帐户时遇到的问题提交给我们。
                                    </div>
                                    <br>
                                    <div class="_4qzn">
                                        如果您在登录时遇到问题：
                                    </div>
                                    <ul class="uiList _1_ey _4kg _6-h _6-j _6-i">
                                        <li class="_1_ez">
                                            如果您在输入密码时遇到问题，请了解
                                            <a href="/help/213395615347144">
                                                如何重置密码
                                            </a>
                                            。
                                        </li>
                                        <li class="_1_ez">
                                            如果仍无法登录，
                                            <a href="/help/105487009541643">
                                                点此了解后续处理办法
                                            </a>
                                            。
                                        </li>
                                    </ul>
                                </div>
                                <div class="clearfix _d9-">
                                    <div class="_1xxm">
                                        <a class="_5dwo" href="/help/188157731232424?helpref=uf_permalink">
                                            查看完整文章
                                        </a>
                                        <div>
                                            ·
                                            <a class="_5dwo" href="/ajax/sharer/?s=34&amp;appid=239655269434058&amp;id=188157731232424&amp;p[]=188157731232424"
                                            rel="dialog" role="button">
                                                分享文章
                                            </a>
                                        </div>
                                    </div>
                                    <form rel="async" action="/ajax/rapidfeedback/?__rf__a=su&amp;__rf__s=AbBwBTYScQy6AKUClI3YePYh-4JHYIvGJgAL_oxE_hV1LM-mLBOCdMdVfKp1KTBO-dEmQo9_kz-YgKg77kNfiiX6WLkwTC10RYkH8ld0p_cr8300oIDwu0GpCt07uzMzmDgo20nxVyy-Uq5YSta9WN-KLPtmZtT1hd2cUyv7AFvyt-0UEfX-6mxNA2jCnzdtmjrykLZmQP6By1v79YccLSsCiOuZQpLkcVfhVDJUkampkHyrQBRwJYQuxI8JyAjvPqxdL7sEoRMJXbOvLeHiRtMVeUFPt9hJuZqL9fjtCNqk2ccCKX8PP-YZX_vg2Meai6s7Fkg-EBEKIXGW1sOipRVW9vfFlPUjhLQpuEoz9J8P8bdiDyZqm79sCTugxMgSRmHrKNvgxr0X1hda3ylnQRoObiv3gzO4lq8yMxZ_WgpydO8hHEl298nTZRMALLDP2kdPHIKeON4NPZA1NthBCWwh2EdSjmlP3JOw1OJdNGzdR8LLVw_QH7rmJsTuLujiqG2tV0d4QGjgYsWjCknGjMaqptiYdBBu3wTG-xDAXNLvKUj2msIXAnYQC5hPEmB8pQPgLrN1o6Ac-ueSa1hEnQUwk6W4YIn8EAD6iNriXq997zV2aKVS7u2FsNcZ97fYsab3hmC7jSXUuIer1TnX7sM4IVh_Syyj7GzIl4fyHh_t2fY6rplQWFNDypKBEkFxtnNcFjjqSoN6esLTDzQjPclU23u0JVf4oyDS4ItokMQq0KEkVRe5lwwuS37GrJU3qxoIpupeBKdEWetfhITnnsgc47S5UTXp743DTUrjRElDE61dvryA60U-nmMyx6MXKhkSemb-ic4uy1DpYLKKvIxSAZ6xq63JuDykwmiv3uau-w"
                                    method="post" id="survey_container_0_7" onsubmit="">
                                        <input type="hidden" name="jazoest" value="22223" autocomplete="off">
                                        <input type="hidden" name="fb_dtsg" value="AQGOSpOJxgms:AQGuzu5feZ9b"
                                        autocomplete="off">
                                        <div class="_3_5j" id="u_0_1e">
                                            <div class="_41y _iqm" id="u_0_1f" style="opacity: 1;">
                                                <div class="_481h" id="u_0_1g">
                                                    此信息有帮助吗？
                                                </div>
                                                <div class="_glu">
                                                    <label id="u_0_1h">
                                                        <div class="_481n">
                                                            <input type="radio" name="282968678562998" value="5">
                                                            是
                                                        </div>
                                                    </label>
                                                    <label id="u_0_1i">
                                                        <div class="_481n">
                                                            <input type="radio" name="282968678562998" value="1">
                                                            否
                                                        </div>
                                                    </label>
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
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {
        
    },
    mounted() {

    },
    methods: {
        
    }
};
</script>

<style scoped >
@import '../../css/help.css';
</style>
