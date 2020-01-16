import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const Home = ()=>import('@/views/home/Home.vue')
const Comster = ()=>import('@/views/comster/Comster.vue')
const Poster = ()=>import('@/views/poster/Poster.vue')
const Shop = ()=>import('@/views/shop/Shop.vue')
const Good = ()=>import('@/views/good/Good.vue')
const PublishGood = ()=>import('@/views/good/PublishGood.vue')
const Login = ()=>import('@/login/Login.vue')


const router = new VueRouter({
	routes: [
		{ path: '/', component: Home},
		{ path: '/poster', component: Poster},
		{ path: '/shop', component: Shop},
		{ path: '/good', component: Good},
		{ path: '/publish', component: PublishGood},
		{ path: '/comster', component: Comster},
		{ 
			path:'/login', 
			components: {
				login: Login
			}
		},
		{ path: '/*', redirect: '/'},
	]
})

router.beforeEach((to, from, next)=>{
	const isLogin = localStorage.getItem('isLogin') 
	if (to.path === '/login') {
		next()
	} else {
		if (isLogin == 1) {
			next()
		} else {
			next('/login')
		}
	}
})


//抛出
export default router