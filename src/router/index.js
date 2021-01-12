import Vue from 'vue'
import Router from 'vue-router'
import {Message} from 'element-ui'
import Login from '@/components/login/index'
import NewUser from '@/components/login/newUser'
import Identify from '@/components/login/identify'
import Recover from '@/components/login/recover'
import Code from '@/components/login/code'
import Password from '@/components/login/password'
import Ineligible from '@/components/login/ineligible'
import Index from '@/components/index/index'
import Watch from '@/components/watch/watch'
import Groups from '@/components/groups/groups'
import grouopHome from '@/components/groups/home'
import GroupsItem from '@/components/groups/groups_item'
import Create from '@/components/groups/create'
import Gaming from '@/components/gaming/gaming'
import Friends from '@/components/friends/friends'
import Creation from '@/components/create/creation'
import Account from '@/components/me/account'
import YourInformation from '@/components/me/your_information'
import Interese from '@/components/me/interese'
import Stories from '@/components/create/stories'
import Events from '@/components/events/events'
import Fundraisers from '@/components/events/fundraisers'
import Saved from "@/components/index/saved"
import Pay from "@/components/pay/index"
import  Memories from "@/components/memories/memories"
import  Onemi from "@/components/index/onemi"
import messenger from '@/components/messenger/index'
import Goal from '@/components/ad_center/goal'
import manageHome from '@/components/ad_center/manageHome'
import settings from '@/components/ad_center/settings'
import insights from '@/components/ad_center/insights'
import weather from '@/components/weather/index'
import pages from '@/components/ad_center/index'
import adCreate from '@/components/ad_center/create'
import potential from '@/components/ad_center/potential'
import Privacy from '@/components/privacy/index'
import Checkup from '@/components/privacy/checkup'
import dynamic from '@/components/dynamic/index'
import live from '@/components/live/index'
import categories from '@/components/groups/categories'
import publicHomePage from '@/components/publicHomePage/index'
import jobs from '@/components/jobs/index'
import managementGroup from '@/components/groups/management_group'
import Mailbox from '@/components/help/Mailbox'
import mePage from '@/components/mePage/index'
import help from '@/components/help/index'


var router= new Router({
  routes: [
    
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:"/help",
      name:"help",
      component:help
    },
    {
      path:"/mePage",
      name:"mePage",
      component:mePage
    },
    {
      path:"/Mailbox",
      name:"Mailbox",
      component:Mailbox
    },
    {
      path:"/pages",
      name:"pages",
      component:pages
    },
    {
      path:"/weather",
      name:"weather",
      component:weather
    },
    {
      path:"/messenger",
      name:"messenger",
      component:messenger
    },
    {
      path:"/ad_center/insights",
      name:"insights",
      component:insights
    },
    {
      path:"/ad_center/settings",
      name:"settings",
      component:settings
    },
    {
      path:"/manageHome",
      name:"manageHome",
      component:manageHome,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:"/management_group",
      name:"management_group",
      component:managementGroup
    },
    {
      path:"/publicpage",
      name:"publicpage",
      component:publicHomePage
    },
    {
      path:"/jobs",
      name:"jobs",
      component:jobs
    },
    {
      path:"/live",
      name:"live",
      component:live
    },
    {
      path:"/categories",
      name:"categories",
      component:categories
    },
    
    {
      path:"/dynamic",
      name:"dynamic",
      component:dynamic
    },
    {
      path:"/privacy",
      name:"privacy",
      component:Privacy
    },
    {
      path:"/privacy/checkup",
      name:"checkup",
      component:Checkup
    },
    {
      path: '/login/identify',
      name: 'identify',
      component: Identify
    },
    {
      path: '/login/recover',
      name: 'recover',
      component: Recover
    },
    {
      path: '/login/code',
      name: 'code',
      component: Code
    },
    {
      path: '/login/password',
      name: 'password',
      component: Password
    }
    ,
    {
      path: '/login/ineligible',
      name: 'ineligible',
      component: Ineligible
    },
    {
      path: '/login/newuser',
      name: 'newuser',
      component: NewUser
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/index/onemi',
      name: 'onemi',
      component: Onemi
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends
    },
    {
      path: '/watch',
      name: 'watch',
      component: Watch
    },
    {
      path: '/groups',
      name: 'groups',
      component: Groups,
    },
    {
      path: '/gaming',
      name: 'gaming',
      component: Gaming
    },
    {
      path: '/groups/groups_item',
      name: 'groups_item',
      component: GroupsItem
    },
   
    {
      path: '/groups/create',
      name: 'create',
      component: Create
    },
    {
      path: '/create/creation',
      name: 'creation',
      component: Creation
    },
    {
      path: '/me/account',
      name: 'account',
      component: Account,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/me/interese',
      name: 'interese',
      component: Interese
    },
    {
      path: '/your_information',
      name: 'your_information',
      component: YourInformation
    },
    {
      path:"/create/stories",
      name:"stories",
      component:Stories
    },
    {
      path:"/events",
      name:"events",
      component:Events
    },
    {
      path:"/events/fundraiser",
      name:"fundraisers",
      component:Fundraisers
    }
    ,
    {
      path:"/index/saved",
      name:"saved",
      component:Saved
    },
    {
      path:"/index/pay",
      name:"pay",
      component:Pay
    },
    {
      path:"/memories/memories",
      name:"memories",
      component:Memories
    },
    {
      path:"/goal",
      name:"goal",
      component:Goal
    },
    {
      path:"/ad_center/potential",
      name:"potential",
      component:potential
    },
    {
      path:"/ad_center/create",
      name:"adCreate",
      component:adCreate
    },
    {
      path:"/ad_center/appinstall",
      name:"appinstall",
      component:()=>import("@/components/ad_center/appinstall")
    },
    {
      path:"/ad_center/pagead",
      name:"pagead",
      component:()=>import("@/components/ad_center/pagead")
    },
    {
      path:"/ad_center/inbox",
      name:"inbox",
      component:()=>import("@/components/ad_center/inbox")
    },
    {
      path:"/ad_center/websitead",
      name:"websitead",
      component:()=>import("@/components/ad_center/websitead")
    },
    {
      path:"/ad_center/entry_point",
      name:"entry_point",
      component:()=>import("@/components/ad_center/entry_point")
    },
    {
      path:"/events/create",
      name:"events_create",
      component:()=>import("@/components/events/create")
    },
    {
      path:"/events/event-item",
      name:"event-item",
      component:()=>import("@/components/events/event-item")
    },
    {
      path:"/events/detail",
      name:"activity-detail",
      component:()=>import("@/components/events/detail")
    },
    {
      path:"/groups/grouopHome",
      name:"grouopHome",
      component:grouopHome
    },
    {
      path:"/tie_item",
      name:"tie-item",
      component:()=>import("@/common/tie-item")
    },
    {
      path:"*",
      component:()=>import("@/common/404")
    }
  ]
})

//路由守卫
router.beforeEach((to, from, next) => {
  const istoken=localStorage.token;
  var reg = /login|help/ //是否包含login
  if(reg.test(to.path)){
      next()
  }else{
    if(istoken){
      next()
    }else{
        Message.error("登录过期，请重新登录！！！")
        setTimeout(res=>{
          next("/login")
        },1000)
    }
  }
  
})
Vue.use(Router)
export default router