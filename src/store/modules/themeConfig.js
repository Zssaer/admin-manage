const themeConfigModule = {
	namespaced: true,
	state: {
		themeConfig: {
			/* 全局主题
            ------------------------------- */
			// 默认 primary 颜色，请注意：需要同时修改 `/@/theme/common/var.scss` 对应的值
			primary: '#409eff',
			// 默认 success 颜色，请注意：需要同时修改 `/@/theme/common/var.scss` 对应的值
			success: '#67c23a',
			// 默认 info 颜色，请注意：需要同时修改 `/@/theme/common/var.scss` 对应的值
			info: '#909399',
			// 默认 warning 颜色，请注意：需要同时修改 `/@/theme/common/var.scss` 对应的值
			warning: '#e6a23c',
			// 默认 danger 颜色，请注意：需要同时修改 `/@/theme/common/var.scss` 对应的值
			danger: '#f56c6c',

			/* 菜单 / 顶栏
            ------------------------------- */
			// 默认顶栏导航背景颜色，请注意：需要同时修改 `/@/theme/common/var.scss` 对应的值
			topBar: '#ffffff',
			// 默认菜单导航背景颜色，请注意：需要同时修改 `/@/theme/common/var.scss` 对应的值
			menuBar: '#6A8372',
			// 默认分栏菜单背景颜色，请注意：需要同时修改 `/@/theme/common/var.scss` 对应的值
			columnsMenuBar: '#545c64',
			// 默认顶栏导航字体颜色，请注意：需要同时修改 `/@/theme/common/var.scss` 对应的值
			topBarColor: '#606266',
			// 默认菜单导航字体颜色，请注意：需要同时修改 `/@/theme/common/var.scss` 对应的值
			menuBarColor: '#eaeaea',
			// 默认分栏菜单字体颜色，请注意：需要同时修改 `/@/theme/common/var.scss` 对应的值
			columnsMenuBarColor: '#e6e6e6',


			/* 界面设置
            ------------------------------- */
			// 是否开启菜单水平折叠效果
			isCollapse: false,


			/* 界面显示
            ------------------------------- */
			// 是否开启侧边栏 Logo
			isShowLogo: false,
			// 初始化变量，用于 el-scrollbar 的高度更新，请勿删除
			isShowLogoChange: false,
			// 是否开启 Breadcrumb
			isBreadcrumb: true,
			// 是否开启 Tagsview
			isTagsview: true,
			// 是否开启 Breadcrumb 图标
			isBreadcrumbIcon: false,
			// 是否开启 Tagsview 图标
			isTagsviewIcon: false,
			// 是否开启 TagsView 缓存
			isCacheTagsView: false,
			// 是否开启 TagsView 拖拽
			isSortableTagsView: false,
			// 是否开启 Footer 底部版权信息
			isFooter: false,

			/* 布局切换
            ------------------------------- */
			// 默认布局，可选 1、默认 defaults 2、经典 classic 3、横向 transverse 4、分栏 columns
			layout: 'defaults',

			/* 后端控制路由
            ------------------------------- */
			// 是否开启后端控制路由
			isRequestRoutes: true,

			/* 全局网站标题 / 副标题
            ------------------------------- */
			// 网站主标题（菜单导航、浏览器当前网页标题）
			globalTitle: 'deltalpha-admin',
			// 网站副标题（登录页顶部文字）
			globalViceTitle: ''
		},
	},
	mutations: {
		// 设置布局配置
		getThemeConfig(state, data) {
			state.themeConfig = data;
		},
		setMenuColor(state, color) {
			state.themeConfig.menuBar = color;
		},
		setMenuBarColor(state, color) {
			state.themeConfig.menuBarColor = color;
		},
	},
	actions: {
		// 设置布局配置
		setThemeConfig({ commit }, data) {
			commit('getThemeConfig', data);
		},
	},
};

export default themeConfigModule;
