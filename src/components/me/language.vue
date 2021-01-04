<template>
<div>
    <div id="headerArea">
        <div class="uiHeader uiHeaderPage">
            <div class="clearfix uiHeaderTop">
                <div class="rfloat _ohf">
                    <h2 class="accessible_elem">语言和地区设置</h2>
                    <div class="uiHeaderActions"></div>
                </div>
                <div>
                    <h2 class="uiHeaderTitle" aria-hidden="true">语言和地区设置</h2>
                </div>
            </div>
        </div>
    </div>
    <div id="contentArea" role="main">
        <div id="SettingsPage_Content">
			 <set-list :list="list" @getsave="getsave"></set-list>
        </div>
    </div>
</div>
</template>
<script>
import setList from '@/common/set-list'
export default {
	components:{
		setList
	},
    data() {
        return {
            
            list:[
                {
                    label:"Facebook 语言",
                    children:[{ 
						state:1,
                        label:"这个帐户在 www.facebook.com 上的按钮、标题和其他 Facebook 文本所使用的语言",
                        text:"将该语言设为 Facebook 界面语言",
                        title:"中文(简体)",
                        atitle:"",
						list:lang
                    }]
                },
                {
                    label:"地区格式",
                    children:[{ 
                        label:"日期、时间和数字格式",
                        title:"",
						atitle:"",
						list:[
							{
								label:"中国",
								value:1
							},
							{
								label:"美国",
								value:2
							},
							{
								label:"法国",
								value:3
							},
							{
								label:"俄罗斯",
								value:4
							},
							{
								label:"德国",
								value:5
							},
							{
								label:"英国",
								value:6
							},
						]
                    },
                    { 
                        label:"温度计量单位",
                        title:"摄氏",
						atitle:"",
						list:[
							{label:"摄氏",value:"摄氏"},
							{label:"摄氏",value:"摄氏"}
						]
                    }],
                },
                {
                    label:"来自好友和公共主页的帖子",
                    children:[{ 
                        label:"你希望翻译成哪种语言",
                        title:"中文(简体)",
						atitle:"",
						list:lang
                    },
                    { 
						type:"search",
                        label:"不需要提供翻译的语言",
                        title:"中文(简体),中文(繁体)",
						atitle:"",
						list:lang
                    },
                    { 
                        type:"input",
                        label:"你不希望自动翻译的语言",
                        title:"",
                        atitle:"",
                    }],
                },
                {
                    label:"多语言发帖",
                    children:[{ 
                        label:"让你以多种语言发布更新状态",
                        title:"已开启",
                        atitle:"",
                    }],
                },
            ],
        }
    },
    created(){
		
    },
    methods:{
		
		getsave(v){
			var info=JSON.parse(localStorage.getItem("user_info"));
			//判断是否为数组
			if(v.atitle instanceof Object){
				v.title=v.atitle.join(",")
			}else{
				v.title=v.atitle
			}
			if(v.state==1){
				this.$axios.post("/api/setUser",info).then(res=>{
					if(res.code==1){
						this.$message.success("修改成功");
					}
					getlang(v.atitle)
				})
			}
			this.active=''
		}
    }
}
</script>
<style scoped>
@import '../../css/me.css';
</style>
