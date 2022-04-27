import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import HelloWorld from '../components/HelloWorld'
const router = new VueRouter({
    routes: [{
            path: '/',
            name:'index',
            component: ()=>import('../views/login/Login')
            // component: HelloWorld
        },
        {
            path: '/main',
            name:'main',
            component: ()=>import('../views/MainNav'),
            children: [
              {
                path: '/home',
                name:'home',
                component: ()=>import('../views/admin/HomePage'),
              },
              {
                path: '/table',
                name:'table',
                component: ()=>import('../views/table/IndexTable'),
              },
            ]
            // component: HelloWorld
        },
        
    ],
    
})

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
router.beforeEach((to, from, next) => {
    let authtoken= window.sessionStorage.getItem("token")
    console.log(authtoken)
    let token = authtoken!=null?authtoken:''
    console.log(token)
    
    if (to.name !== 'index'&&token=='') next({ name: 'index' })
    else next()
  })
export default router