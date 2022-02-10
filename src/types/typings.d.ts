import 'vue-router'

declare module 'vue-router' {
	interface RouteMeta {
		// 标题
		title?: string,
		// 是否缓存
		hidden?: boolean
	}
}
