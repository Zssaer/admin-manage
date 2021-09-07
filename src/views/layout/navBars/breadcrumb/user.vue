<template>
	<div class="layout-navbars-breadcrumb-user" :style="{ flex: layoutUserFlexNum }">
		<div class="layout-navbars-breadcrumb-user-icon" @click="onSearchClick">
			<i class="el-icon-search" title="菜单搜索"></i>
		</div>
		<div class="layout-navbars-breadcrumb-user-icon" @click="onSettingClick">
			<i class="el-icon-s-open" title="主题设置"></i>
		</div>
		<div class="layout-navbars-breadcrumb-user-icon">
			<el-popover placement="bottom" trigger="click" v-model:visible="isShowUserNewsPopover" :width="300" popper-class="el-popover-pupop-user-news">
				<template #reference>
					<el-badge :is-dot="false" @click="isShowUserNewsPopover = !isShowUserNewsPopover">
						<i class="el-icon-bell" title="消息"></i>
					</el-badge>
				</template>
				<transition name="el-zoom-in-top">
					<UserNews v-show="isShowUserNewsPopover" />
				</transition>
			</el-popover>
		</div>
		
		<div class="layout-navbars-breadcrumb-user-icon mr10" @click="onScreenfullClick">
			<i
				class="el-icon-full-screen"
				:title="isScreenfull ? '开全屏' : '关全屏'"
				:class="!isScreenfull ? 'icon-fullscreen' : 'icon-tuichuquanping'"
			></i>
		</div>
		<el-dropdown :show-timeout="70" :hide-timeout="50" @command="onHandleCommandClick">
			<span class="layout-navbars-breadcrumb-user-link">
				<img :src="getUserInfos.accessImage" class="layout-navbars-breadcrumb-user-link-photo mr5" />
				{{ getUserInfos.name === '' ? 'test' : getUserInfos.name }}
				<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item command="/home">首页</el-dropdown-item>
					<el-dropdown-item command="/selfMag/passwordmag">密码修改</el-dropdown-item>
					<el-dropdown-item divided command="logOut">退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
		<Search ref="searchRef" />
		<Setting ref="settingRef"/>
	</div>
</template>

<script>
import { loginOut} from '@/api/sysmag/userMag.js';
import { ref, computed, reactive, toRefs, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessageBox, ElMessage } from 'element-plus';
import screenfull from 'screenfull';
import { clearSession, getSession} from '@/utils/storage.js';
import UserNews from '@/views/layout/navBars/breadcrumb/userNews.vue';
import Search from '@/views/layout/navBars/breadcrumb/search.vue';
import Setting from '@/views/layout/navBars/breadcrumb/setting.vue';
export default {
	name: 'layoutBreadcrumbUser',
	components: { UserNews, Search,Setting },
	setup() {
		const router = useRouter();
		const settingRef = ref(null);
		const searchRef = ref(null);
		const state = reactive({
			isScreenfull: false,
			isShowUserNewsPopover: false,
			disabledI18n: false,
		});
		// 获取用户信息 vuex
		const getUserInfos = computed(() => {
			return getSession("userInfo");
		});
		// 设置分割样式
		const layoutUserFlexNum = computed(() => {
			return 1;
		});
		// 全屏点击时
		const onScreenfullClick = () => {
			if (!screenfull.isEnabled) {
				ElMessage.warning('暂不不支持全屏');
				return false;
			}
			screenfull.toggle();
			state.isScreenfull = !state.isScreenfull;
		};
		// 下拉菜单点击时
		const onHandleCommandClick = (path) => {
			if (path === 'logOut') {
				ElMessageBox({
					closeOnClickModal: false,
					closeOnPressEscape: false,
					title: "提示",
					message: "此操作将退出登录, 是否继续?",
					showCancelButton: true,
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					beforeClose: (action, instance, done) => {
						if (action === 'confirm') {
							//执行退出操作以便系统日志记录
							loginOut().then((res) => {
							});
							instance.confirmButtonLoading = true;
							instance.confirmButtonText = "退出中";
							setTimeout(() => {
								done();
								setTimeout(() => {
									instance.confirmButtonLoading = false;
								}, 300);
							}, 700);
						} else {
							done();
						}
					},
				})
					.then(() => {
						setTimeout(() => {
									ElMessage.success("安全退出成功！");
						}, 300);	
						clearSession(); // 清除缓存/token等
						router.push('/login');
						
					})
					.catch(() => {});
			} else {
				router.push(path);
			}
		};
		// 菜单搜索点击
		const onSettingClick = () => {
			settingRef.value.openSetting();
		};
		const onSearchClick = () => {
			searchRef.value.openSearch();
		};
		return {
			getUserInfos,
			onHandleCommandClick,
			onScreenfullClick,
			onSearchClick,
			onSettingClick,
			settingRef,
			searchRef,
			layoutUserFlexNum,
			...toRefs(state),
		};
	},
};
</script>

<style scoped lang="scss">
.layout-navbars-breadcrumb-user {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	&-link {
		height: 100%;
		display: flex;
		align-items: center;
		white-space: nowrap;
		&-photo {
			width: 25px;
			height: 25px;
			border-radius: 100%;
		}
	}
	&-icon {
		padding: 0 10px;
		cursor: pointer;
		color: var(--bg-topBarColor);
		height: 50px;
		line-height: 50px;
		display: flex;
		align-items: center;
		&:hover {
			background: rgba(0, 0, 0, 0.04);
			i {
				display: inline-block;
				animation: logoAnimation 0.3s ease-in-out;
			}
		}
	}
	::v-deep(.el-dropdown) {
		color: var(--bg-topBarColor);
	}
	::v-deep(.el-badge) {
		height: 40px;
		line-height: 40px;
		display: flex;
		align-items: center;
	}
	::v-deep(.el-badge__content.is-fixed) {
		top: 12px;
	}
}
</style>
