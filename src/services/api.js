import axios from 'axios'

const api = axios.create({
    baseURL: 'https://crud-base-roan.vercel.app/'
})

export default api
