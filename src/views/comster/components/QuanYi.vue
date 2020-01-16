<template lang="html">
	<div class="quanyi">
		<div class="publish">
			<el-button type="primary" size='small' style='float: left;'>新建权益卡</el-button>
		</div>
		<el-input v-model="input" placeholder="请输入内容" class='xuanze'></el-input>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.quanyi {
	&>.publish {
		margin-top:10px;
		display: inline-block;
	}
	.xuanze {
		width: 250px;
		top:-4px;
		right: 0;
		left: 900px;
		
	}
}
</style>
