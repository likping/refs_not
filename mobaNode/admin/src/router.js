import Vue from 'vue'
import Router from 'vue-router'
import main from './views/main'

import login from './components/login'

import  categoryList from "./components/categoryList"
import categoryEdit from "./components/categoryEdit"

import itemList from "./components/itemList"
import itemEdit from "./components/itemEdit"

import heroList from "./components/heroList"
import heroEdit from "./components/heroEdit"

import articleList from "./components/articleList"
import articleEdit from "./components/articleEdit"

import adList from "./components/adList"
import adEdit from "./components/adEdit"

import adminuserList from "./components/AdminUserList"
import adminuserEdit from "./components/AdminUserEdit"

Vue.use(Router)

const router =new Router({
  base: process.env.BASE_URL,
  routes: [
    {path:"/login",name:"login",component:login,meta:{ispublic:true}},
       {
         path:"/",
         name:"main",
         component:main,
         children:[
           { path: "/categories/list", component: categoryList},
           { path: "/categories/create", component: categoryEdit},
           { path: "/categories/edit/:id", component: categoryEdit,props:true },

           { path: "/item/list", component: itemList },
           { path: "/item/create", component: itemEdit },
           { path: "/item/edit/:id", component: itemEdit, props: true },

           { path: "/hero/list", component: heroList },
           { path: "/hero/create", component: heroEdit },
           { path: "/hero/edit/:id", component: heroEdit, props: true },

           { path: "/article/list", component: articleList },
           { path: "/article/create", component: articleEdit },
           { path: "/article/edit/:id", component: articleEdit, props: true },

           { path: "/ad/list", component: adList },
           { path: "/ad/create", component: adEdit },
           { path: "/ad/edit/:id", component: adEdit, props: true },

           { path: "/admin_user/list", component: adminuserList },
           { path: "/admin_user/create", component: adminuserEdit },
           { path: "/admin_user/edit/:id", component: adminuserEdit, props: true },
         ]
       }
  ]
})
router.beforeEach((to,from,next)=>{
   if(!to.meta.ispublic && !localStorage.token){
    return next('/login')
   }
   next()
  
})


export default  router