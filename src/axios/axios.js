import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://nongsan-viet.herokuapp.com/'
})

export default instance;