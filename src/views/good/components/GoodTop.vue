<template>
	<div class="good_top">
		<el-steps :active="1" simple>
			<el-step title="1.编辑基本信息" icon="el-icon-edit"></el-step>
			<el-step title="2.编辑商品详情" icon="el-icon-upload"></el-step>
		</el-steps>
	</div>
</template>



<script>
export default {
	
}
</script>

<style lang="scss" scoped>
.good_top {
	padding-top: 10px;
	padding-right: 10px
}
</style>