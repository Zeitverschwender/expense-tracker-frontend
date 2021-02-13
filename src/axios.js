import * as axios from 'axios';
axios.defaults.withCredentials = true;

const BASE_URL = process.env.NODE_ENV==='production' ? process.env.REACT_APP_API_PROD_URL : process.env.REACT_APP_API_DEV_URL

export default axios.create({
    baseURL: BASE_URL
});
