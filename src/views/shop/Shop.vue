<template lang="html">
	<div class="shop">
		<div class="tabs">
			<div class="tab_tip">移动店铺试用剩余有效期 3 天 1 小时 1 分钟</div>
			<el-tabs v-model="tabName" @tab-click="tabClick">
				<el-tab-pane label="店铺主页" name="first">
					<TabContent1></TabContent1>
				</el-tab-pane>
				<el-tab-pane label="店铺导航" name="second">
					<TabContent2></TabContent2>
				</el-tab-pane>
				<el-tab-pane label="个人中心" name="third">
					<TabContent3></TabContent3>
				</el-tab-pane>
			</el-tabs>
		</div>
		
	</div>
</template>

<script>

const TabContent1 = ()=>import('./components/TabContent1.vue')
const TabContent2 = ()=>import('./components/TabContent2.vue')
const TabContent3 = ()=>import('./components/TabContent3.vue')	
	
export default {
	components: {
		TabContent1,
		TabContent2,
		TabContent3
	},
	data() {
      return {
        tabName: 'first'
      };
    },
    methods: {
      tabClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style lang="scss" scoped>
.shop {
	height: 580px;
	.tabs {
		position: relative;
		.tab_tip {
			position: absolute;
			top: 0;
			right: 8px;
			font-size: 12px;
			color: #aaa;
			line-height: 40px;
			&>i {
				font-size: 30px;
				width: 30px;
				height: 30px;
				display: inline-block
			}
		}
	}
}
</style>
