import axios from "../api/axios"

export function getToken(){
    return localStorage.getItem('token')
}

export function initAxiosInterceptors(){
    axios.interceptors.request.use(function(config){
        const token = getToken();
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
            config.headers.Accept = 'application/json';
        }
        return config;
    })

    axios.interceptors.response.use(
        function(response){
            return response;
        },
        function(error){
            if(error.response.status===401){
                console.log(error)
            }
        },
    )
}