import axios from 'axios'
import config from './config/config'

const instance = axios.create({})

instance.defaults.baseURL = config.apiURL
instance.interceptors.request.use(config => {
	console.log("Interceptando requisição: ", config)
	config.data = {
		...config.data,
		curso: 'Vue JS'
	}

	return config
	// return new Promise((resolve) => {
	// 	setTimeout(() => {
	// 		resolve(config)
	// 	}, 2000)
	// })
}, error => {
	console.log(error)
	return Promise.reject(error)
})

export default instance