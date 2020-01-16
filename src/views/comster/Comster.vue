<template>
	<div class="comster">
		<div class="tabs">
			<el-tabs v-model="tabName" @tab-click="tabClick">
				<el-tab-pane label="权益卡管理" name="first">
					<QuanYi></QuanYi>
				</el-tab-pane>
				<el-tab-pane label="领卡记录" name="second">
					<LingKa></LingKa>
				</el-tab-pane>
				<el-tab-pane label="退卡记录" name="third">
					<TuiKa></TuiKa>
				</el-tab-pane>
			</el-tabs>
			
			

		</div>
	</div>
</template>


<script>
const QuanYi = ()=>import('./components/QuanYi.vue')
const LingKa = ()=>import('./components/LingKa.vue')
const TuiKa = ()=>import('./components/TuiKa.vue')

export default {
	components: {
		QuanYi,
		LingKa,
		TuiKa
	},
	data() {
      return {
        tabName: 'first',
		input: ''
      }
    },
    methods: {
      tabClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>


<style lang="scss" scoped>
.comster {
	height: 580px;
	position: relative;
	.tabs {
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