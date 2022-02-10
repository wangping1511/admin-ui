import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { App } from 'vue'
// @ts-ignore
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Layout from '@/layout/index.vue'

NProgress.configure({ showSpinner: false })

export const constantRoutes: RouteRecordRaw[] = [
	{
		path: '/redirect/:path*',
		component: Layout,
		meta: { hidden: true }
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes,
	scrollBehavior: (to, from, savedPosition) => {
		return { top: 0 }
	}
})

router.beforeEach((to, from) => {
	NProgress.start()
})

router.afterEach(() => {
	NProgress.done()
})


export function setupRouter(app:App<Element>){
	app.use(router)
}
