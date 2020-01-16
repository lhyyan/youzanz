import { fetchLogin } from '@/utils/api'



const userStore = {
	namespaced: true,
	state: {
		userinfo: {
			username: 'Straw Crystal'
		}
	},
	mutations: {
		updataUserinfo(state,payload) {
			state.userinfo = payload
		}
	},
	actions: {
		userLogin(data){
			return fetchLogin(data)
		}
	}
}

export default userStore