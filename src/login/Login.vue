<template>
	<div class="login">
		<div class="user">
			<h1>登录</h1>
			<el-input v-model="input" placeholder="用户名" class="input"></el-input>
			<el-input v-model="pass" placeholder="密码" show-password class="pass"></el-input>
			<el-button type="primary" @click='login' size="small">登录</el-button>
		</div>
		
	</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
	data: function() {
		return {
			username: '',
			password: '',
			input: '',
			pass: ''
		}
	},
	methods: {
		...mapActions('user', ['userLogin']),
		...mapMutations('user', ['updataUserinfo']),
		login() {
			const data = {
				username: this.username,
				password: this.password
			}
			this.$http.fetchLogin(data).then(res=>{
				this.updataUserinfo(res)
				localStorage.setItem('token', res.token)
				localStorage.setItem('isLogin', 1)
				this.$router.replace('/')
			})
		}
	}
}
</script>






<style lang="scss" scoped>

.login {
	position: fixed;
	left: 30%;
	top: 20%;
	text-align: center;
	margin: 0 auto;
	border: 1px solid #ccc;
	padding: 100px;
	background-color: skyblue;
	.user {
		width: 300px;
	}
	.input {
		margin-bottom: 30px
	}
	.pass {
		margin-bottom: 30px
	}
}

</style>