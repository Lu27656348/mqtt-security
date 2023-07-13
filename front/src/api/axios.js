import axios from 'axios';

export default axios.create({
    baseURL: 'http://127.0.0.1:3030'
    // baseURL: process.env.REACT_APP_URL_AXIOS
});
