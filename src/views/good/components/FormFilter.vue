<template>
	<div class="form_filter">
		<el-row type='flex' align='middle'>
			<!-- 第一行 -->
			<div class="bianma">
				<el-row type='flex' align='middle'>
					<el-col :span='2'>
						<span class="label">商品名称：</span>
					</el-col>
					<el-col :span="5">
						<el-input v-model="value.name" placeholder="请输入"></el-input>
					</el-col>
				
					<el-col :span='3'>
						<span class="label">商品分组：</span>
					</el-col>
					<el-col :span="5">
						<el-select v-model="value.group_no" placeholder="全部">
							<el-option
								v-for="(item,idx) in goodGroupList"
								:key="idx"
								:label="item.label"
								:value="item.id">
							</el-option>
						</el-select>
					</el-col>
				
					<el-col :span='3'>
						<span class="label">商品类型：</span>
					</el-col>
					<el-col :span="5">
						<el-select v-model="value.type_no" placeholder="全部">
							<el-option
								v-for="(item,idx) in goodTypeList"
								:key="idx"
								:label="item.label"
								:value="item.id">
							</el-option>
						</el-select>
					</el-col>
					<el-col :span="1"></el-col>
				</el-row>
				
				<!-- 第二行 -->
				<el-row type='flex' align='middle' class='center'>
					<el-col :span='2'>
						<span class="label">总销量：</span>
					</el-col>
					<el-col :span="2">
						<el-input v-model.number="value.sale_min"></el-input>
					</el-col>
					<el-col :span='1'>
						<span style="margin-left: 45%;">-</span>
					</el-col>
					<el-col :span="2">
						<el-input v-model.number="value.sale_max"></el-input>
					</el-col>
			
			
					<el-col :span='3'>
						<span class="label">价格（元）：</span>
					</el-col>
					<el-col :span="2">
						<el-input v-model.number="value.price_min"></el-input>
					</el-col>
					<el-col :span='1'>
						<span style="margin-left: 45%;">-</span>
					</el-col>
					<el-col :span="2">
						<el-input v-model.number="value.price_max"></el-input>
					</el-col>
			
				
					<el-col :span='3'>
						<span class="label">库存扣减方式：</span>
					</el-col>
					<el-col :span="5">
						<el-select v-model="value.deduction_no" placeholder="全部">
							<!-- <el-option
								v-for="item in options"
								:key="item.value"
								:label="item.label"
								:value="item.value">
							</el-option> -->
							<el-option key='1' label='全部' value='0'></el-option>
							<el-option key='2' label='拍下扣减库存' value='1'></el-option>
							<el-option key='3' label='付款扣减库存' value='2'></el-option>
						</el-select>
					</el-col>
				</el-row>
				
				<!-- 第三行 -->
				<div class="form_bottom">
					<el-col :span='5' :offset='2'>
						<el-button type="primary" size='small' @click="filterHanble" >筛选</el-button>
						<el-button size='small'>导出</el-button>
					</el-col>
				</div>
			</div>
		</el-row>
	</div>
</template>



<script>
import { goodGroupList, goodTypeList } from '@/utils/map'
export default {
	props: {
		value: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			goodGroupList,
			goodTypeList,
			options: [{
				value: '选项1',
				label: '黄金糕'
			}, {
				value: '选项2',
				label: '双皮奶'
			}, {
				value: '选项3',
				label: '蚵仔煎'
			}, {
				value: '选项4',
				label: '龙须面'
			}, {
				value: '选项5',
				label: '北京烤鸭'
			}],
			logohosh: ''
		}
    },
	methods: {
		filterHanble(){
			this.$emit('filter')
		}
	}
}
</script>


<style lang="scss" scoped>
.form_filter {
	background: rgb(248, 248, 248);
	box-sizing: border-box;
	padding: 15px;
	font-size: 14px;
	margin-top: 20px;
}
.label {
	display: block;
	text-align: right;
}
.center{
	margin-top: 40px;
}
.form_bottom {
	margin-top: 20px
}
</style>