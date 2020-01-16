<template lang="html">
	<div class='main'>
		<router-view></router-view>
		<div class="logo">
			<i class="fa fa-thumbs-up"></i>
			有赞
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.main {
	background: white;
	
	padding-left: 20px;
	min-width: 1000px;
	.logo {
			line-height: 80px;
			text-align: center;
			font-size: 30px;
			color: rgb(191, 191, 195)
	}
}
</style>
