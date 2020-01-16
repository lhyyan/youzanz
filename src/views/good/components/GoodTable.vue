<template>
	<div class="good_table">
		<el-table
			:data="list"
			style="width: 100%"
			:default-sort = "{prop: 'date', order: 'descending'}"
			@selection-change="handleSelectionChange"
			>
			<el-table-column
				type="selection"
				width="55">
			</el-table-column>
			<el-table-column
				label="商品名"
				width="100">
				<template slot-scope="scope">
					<div class="good_img">
						<img :src="scope.row.src" alt="商品"/>
						<span v-text="scope.row.date"></span>
					</div>
					
				</template>
			</el-table-column>
			<el-table-column
				prop="price"
				label="价格"
				sortable
				width="100">
			</el-table-column>
			<el-table-column
				prop="visit_num"
				label="访问量"
				sortable
				width="100">
			</el-table-column>
			<el-table-column
				prop="inventory_num"
				label="库存"
				sortable
				width="100">
			</el-table-column>
			<el-table-column
				prop="sale_num"
				label="销量"
				sortable
				width="100">
			</el-table-column>
			<el-table-column
				prop="order"
				label="序号"
				sortable
				width="100">
			</el-table-column>
			<el-table-column
				prop="create_time"
				label="创建时间"
				sortable
				:formatter="timeHandle"
				width="200">
			</el-table-column>
			<el-table-column
				prop="status_no"
				label="商品状态"
				width="100">
			</el-table-column>
		</el-table>		
	</div>
</template>



<script>
import moment from 'moment'
export default {
	props: {
		list: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			multipleSelection: [],
			tableData: [{
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄',
				visit: '100'
			}, {
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1517 弄',
				visit: '100'
			}, {
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1519 弄',
				visit: '100'
			}, {
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1516 弄',
				visit: '100'
			}]
		}
    },
    methods: {
		formatter(row) {
			return row.address;
		},
		handleSelectionChange(val) {
			this.multipleSelection = val;
		},
		timeHandle(row){
			return moment(row.create_time).format('YYYY-MM-DD HH:mm:ss')
		}
		
    }
}
</script>


<style lang="scss" scoped>
.good_table {
	margin-top: 20px;
	.good_img {
		&>img {
			display: inline-block;
			width: 30px;
			height: 40px;
			cursor: pointer
		}
	}
}	
</style>