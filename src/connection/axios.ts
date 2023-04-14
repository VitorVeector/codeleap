import axios from "axios"

const axiosInstance = axios.create({
    withCredentials: true
})

axiosInstance.interceptors.request.use((config) => {
    config.headers['Access-Control-Allow-Origin'] = '*';
    return config;
});

export default axiosInstance