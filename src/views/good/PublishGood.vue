<template>
	<div class="publish_good">
		<GoodTop></GoodTop>
		
		<GoodLei></GoodLei>
		
		<JiChu></JiChu>
		
		<Preas></Preas>
	</div>
</template>



<script>

const GoodTop = ()=>import('./components/GoodTop.vue')
const GoodLei = ()=>import('./components/GoodLei.vue')
const JiChu = ()=>import('./components/JiChu.vue')
const Preas = ()=>import('./components/Preas.vue')

export default {
	components: {
		GoodTop,
		GoodLei,
		JiChu,
		Preas
	}
}
</script>

<style lang="scss" scoped>
	
</style>