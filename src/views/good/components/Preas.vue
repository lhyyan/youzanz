<template>
	<div class="good_preas">
		<div class="preaer">价格库存</div>
		
		
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="商品规格:">
				
			</el-form-item>
			
			
		</el-form>
		
		
		
		
	</div>
</template>



<script>
export default {
	data() {
		return {
			ruleForm: {
				name: '',
				
			},
			rules: {
				name: [
					{ required: true, message: '商品名称必须填写，最多100个字', trigger: 'blur' },
					{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				],
			},
		}
	}
}
</script>

<style lang="scss" scoped>
.good_preas {
	padding-top: 10px;
	padding-right: 10px;
	&>.preaer {
		width: 100%;
		height: 50px;
		background: rgb(245, 247, 250);
		line-height: 50px;
		padding-left: 10px;
		margin-bottom: 20px;
		box-sizing: border-box;
	}
	&>.demo-ruleForm {
		
		
	}
	
}
</style>