import axios from 'axios'

//Axios conectado a NODEJS
const apiLocal = axios.create({
    baseURL:import.meta.env.VITE_URL_API
})

export default apiLocal;