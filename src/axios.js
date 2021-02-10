import axios from 'axios';

const BASE_URL = process.env.REACT_APP_IS_PROD ? process.env.REACT_APP_API_PROD_URL : process.env.REACT_APP_API_DEV_URL

const axiosInstance = axios.create({
    baseURL: BASE_URL
});

export default axiosInstance