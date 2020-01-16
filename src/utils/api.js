import fetch from './fetch'

export function fetchGoodList(params) {
  // 返回Promise
  return fetch({
    method: "GET",
    params: params,
    url: '/youzan/getGoodList'
  })
}


export function fetchLogin(data) {
	return fetch({
		method: 'POST',
		data: data,
		url:'/youzan/login'
	})
}

export default {
	fetchGoodList,
	fetchLogin
}