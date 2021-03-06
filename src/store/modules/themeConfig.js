const themeConfigModule = {
	namespaced: true,
	state: {
		themeConfig: {
			/* 全局主题
            ------------------------------- */
			// 默认 primary 颜色
			primary: '#409eff',
			// 默认 success 颜色
			success: '#67c23a',
			// 默认 info 颜色
			info: '#909399',
			// 默认 warning 颜色
			warning: '#e6a23c',
			// 默认 danger 颜色
			danger: '#f56c6c',

			/* 菜单 / 顶栏
            ------------------------------- */
			// 默认顶栏导航背景颜色
			topBar: '#2196F3',
			// 默认菜单导航背景颜色
			menuBar: '#1976D2',
			// 默认分栏菜单背景颜色
			columnsMenuBar: '#545c64',
			// 默认顶栏导航字体颜色
			topBarColor: '#FFFFFF',
			// 默认菜单导航字体颜色
			menuBarColor: '#FFFFFF',
			// 默认TagsView导航背景颜色
			tagsViewBgColor: '#1e82d3',
			// 默认分栏菜单字体颜色
			columnsMenuBarColor: '#e6e6e6',
			// Tags显示风格
			tagsStyle: 'tagsStyleOne',


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
			isCacheTagsView: true,
			// 是否开启 TagsView 拖拽
			isSortableTagsView: true,
			// 是否开启 Footer 底部版权信息
			isFooter: false,

			/* 布局切换
            ------------------------------- */
			// 默认布局，可选 1、默认 defaults 2、经典 classic 3、横向 transverse 4、分栏 columns
			layout: 'defaults',

			/* 后端控制路由
            ------------------------------- */
			// 是否开启后端控制路由
			isRequestRoutes: false,
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
		setTopBarColor(state, color) {
			state.themeConfig.topBar = color;
		},
		setTopBarTextColor(state, color) {
			state.themeConfig.topBarColor = color;
		},
		setTagsViewBgColor(state, color) {
			state.themeConfig.tagsViewBgColor = color;
		},
		setTagsStyle(state, style) {
			state.themeConfig.tagsStyle = style;
		},
		openTagsview(state, data) {
			state.themeConfig.isTagsview = data;
		},
		openBreadcrumb(state, data) {
			state.themeConfig.isBreadcrumb = data;
		},
		isShowLogo(state, data){
			state.themeConfig.isShowLogo = data;
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
