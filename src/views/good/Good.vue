<template>
	<div class="good">
				
		<TabFilter v-model='tabIdx'></TabFilter>
		
		<div class="publish">
			<el-button type="primary" size='small' style='float: left;' @click='skip'>发布商品</el-button>
		</div>
		
		<FormFilter v-model="formParams" @filter='filterHandle'></FormFilter>
		
		<GoodTable :list="list"></GoodTable>
		
		<div class="good_page">
			<el-pagination
				@size-change="sizeHandle"
				@current-change="pageHandle"
				:current-page="currentPage"
				:page-sizes="[5, 10, 15, 20]"
				:page-size="5"
				layout="total, sizes, prev, pager, next, jumper"
				:total="total">
			</el-pagination>
		</div>
		
	</div>
</template>



<script>
import { mapState } from 'vuex'
// import { fetchGoodList } from '@/utils/api'
const TabFilter = ()=>import('./components/TabFilter.vue')
const FormFilter = ()=>import('./components/FormFilter.vue')
const GoodTable = ()=>import('./components/GoodTable.vue')

export default {
	beforeRouteEnter(to, from, next){
		const isLogin = localStorage.getItem('isLogin')
		if (isLogin == 1) {
			next()
		} else {
			next('/login')
		}
	},
	components: {
		TabFilter,
		FormFilter,
		GoodTable
	},
	data: function() {
		return {
			tabIdx: '-1',
			currentPage: 1,
			currentSize: 5,
			list: [],
			total: 0,
			formParams: {
				name: '',
				group_no: 0,
				type_no: 0,
				sale_min: '',
				sale_max: '',
				price_min: '',
				price_max: '',
				deduction_no: '0'
			}
			
		}
	},
	computed: {
		...mapState('good', ['msg'])
	},
	watch: {
		tabIdx() {
			this.changeList()
	}
	},
	mounted() {
		this.changeList()
	},
	methods: {
		changeList() {
			const params = {
				status_no: this.tabIdx,
				page: this.currentPage,
				size: this.currentSize,
				// name: this.formParams.name,
				// group_no: this.formParams.group_no,
				// type_no: this.formParams.type_no,
				// sale_min: this.formParams.sale_min,
				// sale_max: this.formParams.sale_max,
				// price_min: this.formParams.price_min,
				// price_max: this.formParams.price_max,
				// deduction_no: this.formParams.deduction_no
				...this.formParams
			}
			this.$http.fetchGoodList(params).then(res=>{
				console.log('res',res)
				this.list = res.list
				this.total = res.total
			})
		},
		skip() {
			this.$router.push('/publish')
		},
		sizeHandle(val) {
			console.log(`每页 ${val} 条`);
			this.currentSize = val;
			this.changeList()
		},
		pageHandle(val) {
			console.log(`当前页: ${val}`);
			this.currentPage = val;
			this.changeList()
		},
		filterHandle(){
			this.changeList()
		}
	}
}
</script>


<style lang="scss" scoped>
.good {
	.publish {
		padding: 20px 0;
	}
	.good_page {
		margin-top: 20px;
		text-align: right;
	}
	
}
</style>