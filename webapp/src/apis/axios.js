import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_API,
    timeout: 30000,
})

instance.interceptors.request.use((config) => {
    const ambrosHeaders = {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
    const headers = Object.assign(config.headers, ambrosHeaders)
    config.headers = headers
    return config
})

instance.interceptors.response.use((config) => {
    return config.data
})

export default instance
