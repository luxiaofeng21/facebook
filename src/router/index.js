import Vue from 'vue'
import Router from 'vue-router'
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
import GroupsItem from '@/components/groups/groups_item'
import Create from '@/components/groups/create'
import Gaming from '@/components/gaming/gaming'
import About from '@/components/friends/about'
import Friends from '@/components/friends/friends'
import Following from '@/components/friends/following'
import PhotosAll from '@/components/friends/photos_all'
import Videos from '@/components/friends/videos'
import Maps from '@/components/friends/map'
import Creation from '@/components/create/creation'
import Account from '@/components/me/account'
import YourInformation from '@/components/me/your_information'
import Interese from '@/components/me/interese'
import Stories from '@/components/create/stories'
import Events from '@/components/events/events'
import Fundraisers from '@/components/events/fundraisers'
import BookMarks from '@/components/friends/bookmarks'
import Saved from "@/components/index/saved"
import Ads from "@/components/index/Ads"
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
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
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
      component:manageHome
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
      path: '/friends/about',
      name: 'about',
      component: About
    },
    {
      path: '/friends/following',
      name: 'following',
      component: Following
    },
    {
      path: '/friends/photos_all',
      name: 'photos_all',
      component: PhotosAll
    },
    {
      path: '/friends/videos',
      name: 'videos',
      component: Videos
    },
    {
      path: '/friends/maps',
      name: 'maps',
      component: Maps
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
      component: Account
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
    },
    {
      path:"/friends/bookmarks",
      name:"bookmarks",
      component:BookMarks
    }
    ,
    {
      path:"/index/saved",
      name:"saved",
      component:Saved
    },
    {
      path:"/index/ads",
      name:"ads",
      component:Ads
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
    }
    
  ]
})
