<template>
	<div class="good_lei">
		<div class="good_let">商品类型</div>
		
		<div class="lister">
			<el-button plain class='butt'>
				实物商品<br>
				<span>(物流发货)</span>
			</el-button>
			<el-button plain class='butt'>
				虚拟商品<br>
				<span>(无需物流)</span>
			</el-button>
			<el-button plain class='butt'>
				电子卡劵<br>
				<span>(无需物流)</span>
			</el-button>
			<el-button plain class='butt'>
				酒店商品<br>
				<span>(无需物流)</span>
			</el-button>
			<el-button plain class='butt'>
				蛋糕烘焙<br>
				<span>(同城送或自提)</span>
			</el-button>
		</div>
		
	</div>
</template>



<script>
export default {
}
</script>

<style lang="scss" scoped>
.good_lei {
	padding-top: 20px;
	padding-right: 10px;
	&>.good_let {
		width: 100%;
		height: 50px;
		background: rgb(245, 247, 250);
		line-height: 50px;
		padding-left: 10px;
		margin-bottom: 20px;
		box-sizing: border-box;
	}
	&>.lister {
		&>.butt {
			width: 120px;
			
		}
		span {
			color: #ccc;
			font-size: 10px;
		}
		
	}
	
}
</style>