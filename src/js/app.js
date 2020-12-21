import Vue from 'vue'
import axios from 'axios'
import jquery from 'jquery'
import ElementUI from 'element-ui';
import MD5 from '@/js/md5.js';
Vue.use(ElementUI);

var url="http://127.0.0.1:83"
//设置请求接口
var http=axios.create({
    baseURL:url
})
// //请求拦截
// http.interceptors.request.use(config=>{ 
//     if(localStorage.token){
//         config.headers.Authorization=localStorage.token
//     }
//     return config
// })
// //响应拦截
// http.interceptors.request.use(res=>{
//     return res
// },error=>{
//     ElementUI.Message.error(error.response.data)
// })
Vue.prototype.$axios = http;
Vue.prototype.$url=url


Vue.prototype.getTimeDistance=function(time_str){var now = new Date();
	var date = new Date(time_str);
	//计算时间间隔，单位为分钟
	var inter = parseInt((now.getTime() - date.getTime())/1000/60);
	if(inter == 0){
		return "刚刚";
	}
	//多少分钟前
	else if(inter < 60){
		return inter.toString() + "分钟前";
	}
	//多少小时前
	else if(inter < 60*24){
		return parseInt(inter/60).toString() + "小时前";
	}
	//本年度内，日期不同，取日期+时间  格式如  06-13 22:11
	else if(now.getFullYear() == date.getFullYear()){
		return (date.getMonth()+1).toString() + "-" +
		date.getDate().toString() + " " +
		date.getHours() + ":" +
		date.getMinutes();
	}
	else{
		return date.getFullYear().toString().substring(2, 3) + "-" +
		(date.getMonth()+1).toString() + "-" +
		date.getDate().toString() + " " +
		date.getHours() + ":" +
		date.getMinutes();
	}
}
window.jquery = window.$ = jquery
window.transformLanguage=function(newLanguage) {
        let that=this;
        // 获取所有dom元素中文
        let transformStr = '';
        // 获取所有dom元素
        function getChildDom(dom, type, data = {}) {
            if(type == 'read') {
                [...dom.children].forEach(v => {
                    // 判断中文
                    // /^[\u0391-\uFFE5]+$/
                    let re= /[\u4e00-\u9fa5]/g;
                    // 防止某些标签有内容并且有标签 ，或者有空格 
                    let vHtml = $(v).contents().filter(function (index, content) {return content.nodeType === 3}).text().trim();
                    // 跳过script标签
                    if (re.test(vHtml) && v.tagName != 'SCRIPT') {
                        transformStr += `${vHtml},`
                    }
                    // 递归获取元素
                    getChildDom(v, type, data);
                })
            }else {
                let transOld = data.trans_result[0].src.split(',');
                let transNew = data.trans_result[0].dst.split(',');
                [...dom.children].forEach(v => {
                    // 判断中文
                    // /^[\u0391-\uFFE5]+$/
                    let re= /[\u4e00-\u9fa5]/g;
                    let vHtml = $(v).contents().filter(function (index, content) {return content.nodeType === 3}).text().trim();
                    // 跳过script标签
                    if (re.test(vHtml) && v.tagName != 'SCRIPT') {
                        // 防止标签里面还有标签，所以只替换里面的html,使用replace
                        $(v).html(
                            $(v).html().replace(
                            transOld[transOld.findIndex(arrList => arrList == vHtml)]
                            ,
                            transNew[transOld.findIndex(arrList => arrList == vHtml)]
                            )
                        )
                    }
                    // 递归获取元素
                    getChildDom(v, type, data);
                })
            }
        }
        getChildDom($("body")[0],'read');
        getTranslateData();
        // 获取翻译
        function getTranslateData() {
            let appid = '20201120000621336';   // 百度翻译API的appid
            let key = 'pMdmtj4djcGj7M4EOAMv';   // 百度翻译API的key
            let salt = (new Date).getTime();
            let query = transformStr;
            let from = 'zh';
            let to = newLanguage;
            let str1 = appid + query + salt + key;
            let sign = MD5(str1);
            $.ajax({
                url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
                type: 'get',
                dataType: 'jsonp',
                data: {
                    q: query,
                    appid: appid,
                    salt: salt,
                    from: from,
                    to: to,
                    sign: sign
                },
                success: function(data) {
                    data.trans_result && getChildDom(document,'write',data);
                },
                complete:function(){
                     loading.close()
                     $("#root").show()
                }
            });
        }
}
window.getlang=(langs)=>{
        var info=JSON.parse(localStorage.getItem("user_info"))
        if(info){
                if(langs){
                        info.lang=langs
                        localStorage.setItem("user_info",JSON.stringify(info))
                }
                var lang=info.lang
                if(lang){
                        window.loading=ElementUI.Loading.service({
                                lock: true,
                                text: 'Loading',
                                spinner: 'el-icon-loading',
                                background: 'rgba(0, 0, 0, 0.8)'
                        });
                        $("#root").hide()
                        setTimeout(res=>{
                                transformLanguage(lang)
                        },10)
                }
        }
}
// getlang()
window.lang=[{"label":"阿拉伯语","value":"are"},{"label":"爱尔兰语","value":"gle"},{"label":"奥克语","value":"oci"},{"label":"阿肯语","value":"aka"},{"label":"阿拉贡语","value":"arg"},{"label":"阿姆哈拉语","value":"amh"},{"label":"阿萨姆语","value":"asm"},{"label":"艾马拉语","value":"aym"},{"label":"阿塞拜疆语","value":"aze"},{"label":"阿斯图里亚斯语","value":"ast"},{"label":"奥塞梯语","value":"oss"},{"label":"爱沙尼亚语","value":"est"},{"label":"奥杰布瓦语","value":"oji"},{"label":"奥里亚语","value":"ori"},{"label":"奥罗莫语","value":"orm"},{"label":"波兰语","value":"pl"},{"label":"波斯语","value":"per"},{"label":"布列塔尼语","value":"bre"},{"label":"巴什基尔语","value":"bak"},{"label":"巴斯克语","value":"baq"},{"label":"巴西葡萄牙语","value":"pot"},{"label":"白俄罗斯语","value":"bel"},{"label":"柏柏尔语","value":"ber"},{"label":"邦板牙语","value":"pam"},{"label":"北方萨米语","value":"sme"},{"label":"北索托语","value":"ped"},{"label":"本巴语","value":"bem"},{"label":"比林语","value":"bli"},{"label":"比斯拉马语","value":"bis"},{"label":"俾路支语","value":"bal"},{"label":"冰岛语","value":"ice"},{"label":"波斯尼亚语","value":"bos"},{"label":"博杰普尔语","value":"bho"},{"label":"巴西语","value":"pt"},{"label":"楚瓦什语","value":"chv"},{"label":"聪加语","value":"tso"},{"label":"丹麦语","value":"dan"},{"label":"德语","value":"de"},{"label":"鞑靼语","value":"tat"},{"label":"掸语","value":"sha"},{"label":"德顿语","value":"tet"},{"label":"迪维希语","value":"div"},{"label":"低地德语","value":"log"},{"label":"俄语","value":"ru"},{"label":"法语","value":"fra"},{"label":"菲律宾语","value":"fil"},{"label":"芬兰语","value":"fin"},{"label":"梵语","value":"san"},{"label":"弗留利语","value":"fri"},{"label":"富拉尼语","value":"ful"},{"label":"法罗语","value":"fao"},{"label":"盖尔语","value":"gla"},{"label":"刚果语","value":"kon"},{"label":"高地索布语","value":"ups"},{"label":"高棉语","value":"hkm"},{"label":"格陵兰语","value":"kal"},{"label":"格鲁吉亚语","value":"geo"},{"label":"古吉拉特语","value":"guj"},{"label":"古希腊语","value":"gra"},{"label":"古英语","value":"eno"},{"label":"瓜拉尼语","value":"grn"},{"label":"韩语","value":"kor"},{"label":"荷兰语","value":"nl"},{"label":"胡帕语","value":"hup"},{"label":"哈卡钦语","value":"hak"},{"label":"哈萨克语","value":"kaz"},{"label":"海地语","value":"ht"},{"label":"豪萨语","value":"hau"},{"label":"黑山语","value":"mot"},{"label":"海地克里奥尔语","value":"ht"},{"label":"吉尔吉斯语","value":"kir"},{"label":"加利西亚语","value":"glg"},{"label":"加拿大法语","value":"frn"},{"label":"加泰罗尼亚语","value":"cat"},{"label":"捷克语","value":"cs"},{"label":"卡拜尔语","value":"kab"},{"label":"卡纳达语","value":"kan"},{"label":"卡努里语","value":"kau"},{"label":"卡舒比语","value":"kah"},{"label":"康瓦尔语","value":"cor"},{"label":"科萨语","value":"xho"},{"label":"科西嘉语","value":"cos"},{"label":"克里克语","value":"cre"},{"label":"克里米亚鞑靼语","value":"cri"},{"label":"克林贡语","value":"kli"},{"label":"克罗地亚语","value":"hrv"},{"label":"克丘亚语","value":"que"},{"label":"克什米尔语","value":"kas"},{"label":"孔卡尼语","value":"kok"},{"label":"库尔德语","value":"kur"},{"label":"拉丁语","value":"lat"},{"label":"老挝语","value":"lao"},{"label":"罗马尼亚语","value":"rom"},{"label":"拉特加莱语","value":"lag"},{"label":"拉脱维亚语","value":"lav"},{"label":"林堡语","value":"lim"},{"label":"林加拉语","value":"lin"},{"label":"卢干达语","value":"lug"},{"label":"卢森堡语","value":"ltz"},{"label":"卢森尼亚语","value":"ruy"},{"label":"卢旺达语","value":"kin"},{"label":"立陶宛语","value":"lit"},{"label":"罗曼什语","value":"roh"},{"label":"罗姆语","value":"ro"},{"label":"逻辑语","value":"loj"},{"label":"马来语","value":"may"},{"label":"缅甸语","value":"bur"},{"label":"马拉地语","value":"mar"},{"label":"马拉加斯语","value":"mg"},{"label":"马拉雅拉姆语","value":"mal"},{"label":"马其顿语","value":"mac"},{"label":"马绍尔语","value":"mah"},{"label":"迈蒂利语","value":"mai"},{"label":"曼克斯语","value":"glv"},{"label":"毛里求斯克里奥尔语","value":"mau"},{"label":"毛利语","value":"mao"},{"label":"孟加拉语","value":"ben"},{"label":"马耳他语","value":"mlt"},{"label":"蒙语","value":"mon"},{"label":"马拉提语","value":"mr"},{"label":"蒙古语（西里尔）","value":"moc"},{"label":"苗语","value":"hmn"},{"label":"挪威语","value":"nor"},{"label":"那不勒斯语","value":"nea"},{"label":"南恩德贝莱语","value":"nbl"},{"label":"南非荷兰语","value":"afr"},{"label":"南索托语","value":"sot"},{"label":"尼泊尔语","value":"nep"},{"label":"葡萄牙语","value":"pt"},{"label":"旁遮普语","value":"pan"},{"label":"帕皮阿门托语","value":"pap"},{"label":"普什图语","value":"pus"},{"label":"齐切瓦语","value":"nya"},{"label":"契维语","value":"twi"},{"label":"切罗基语","value":"chr"},{"label":"日语","value":"jp"},{"label":"瑞典语","value":"swe"},{"label":"萨丁尼亚语","value":"srd"},{"label":"萨摩亚语","value":"sm"},{"label":"克罗地亚语","value":"sec"},{"label":"塞尔维亚语","value":"srp"},{"label":"桑海语","value":"sol"},{"label":"僧伽罗语","value":"sin"},{"label":"世界语","value":"epo"},{"label":"书面挪威语","value":"nob"},{"label":"斯洛伐克语","value":"sk"},{"label":"斯洛文尼亚语","value":"slo"},{"label":"斯瓦希里语","value":"swa"},{"label":"苏格兰语","value":"sco"},{"label":"索马里语","value":"som"},{"label":"塞茨瓦纳语","value":"tn"},{"label":"塞尔维亚语（西里尔）","value":"src"},{"label":"泰语","value":"th"},{"label":"土耳其语","value":"tr"},{"label":"塔吉克语","value":"tgk"},{"label":"泰米尔语","value":"tam"},{"label":"他加禄语","value":"tgl"},{"label":"提格利尼亚语","value":"tir"},{"label":"泰卢固语","value":"tel"},{"label":"突尼斯阿拉伯语","value":"tua"},{"label":"土库曼语","value":"tuk"},{"label":"塔塔尔语","value":"tt"},{"label":"乌克兰语","value":"ukr"},{"label":"瓦隆语","value":"wln"},{"label":"威尔士语","value":"wel"},{"label":"文达语","value":"ven"},{"label":"沃洛夫语","value":"wol"},{"label":"乌尔都语","value":"urd"},{"label":"乌兹别克语","value":"uzb"},{"label":"维吾尔语","value":"uig"},{"label":"西班牙语","value":"spa"},{"label":"希伯来语","value":"heb"},{"label":"希腊语","value":"el"},{"label":"匈牙利语","value":"hu"},{"label":"西弗里斯语","value":"fry"},{"label":"西里西亚语","value":"sil"},{"label":"希利盖农语","value":"hil"},{"label":"下索布语","value":"los"},{"label":"夏威夷语","value":"haw"},{"label":"新挪威语","value":"nno"},{"label":"西非书面语","value":"nqo"},{"label":"信德语","value":"snd"},{"label":"修纳语","value":"sna"},{"label":"宿务语","value":"ceb"},{"label":"叙利亚语","value":"syr"},{"label":"新增粤语","value":"yus"},{"label":"新增普通话","value":"zhs"},{"label":"巽他语","value":"sun"},{"label":"英语","value":"en"},{"label":"印地语","value":"hi"},{"label":"印尼语","value":"id"},{"label":"意大利语","value":"it"},{"label":"越南语","value":"vie"},{"label":"意第绪语","value":"yid"},{"label":"因特语","value":"ina"},{"label":"亚齐语","value":"ach"},{"label":"印古什语","value":"ing"},{"label":"伊博语","value":"ibo"},{"label":"伊多语","value":"ido"},{"label":"约鲁巴语","value":"yor"},{"label":"亚美尼亚语","value":"arm"},{"label":"伊努克提图特语","value":"iku"},{"label":"因纽特语","value":"iu"},{"label":"伊朗语","value":"ir"},{"label":"扎扎其语","value":"zaz"},{"label":"中古法语","value":"frm"},{"label":"祖鲁语","value":"zul"},{"label":"爪哇语","value":"jav"},{"label":"藏语","value":"tib"},{"label":"不丹语","value":"dzo"}]

