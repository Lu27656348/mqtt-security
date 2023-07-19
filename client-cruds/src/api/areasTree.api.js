import axios from 'axios';
import { headers } from '../libs/api';


export const getAreasTreeRequest = async() => {
    return await axios.get('http://localhost:3030/auth/areatree',{headers: headers})
}

export const createAreaTreeRequest = async(area) => {
    console.log("api=>createAreaTreeRequest=>"+area)
    return await axios.post('http://localhost:3030/auth/areatree/create',area,{headers: headers})
}

export const deleteAreaTreeRequest = async(id) => {
    return await axios.delete('http://localhost:3030/auth/areatree/'+id,{headers: headers})
}

export const getAreaTreeRequest = async(id) => {
    return await axios.get('http://localhost:3030/auth/areatree/'+id,{headers: headers})
}

export const updateAreaTreeRequest = async(id,area) => {
    console.log("ifff"+id);
    console.log(area)
    
    return await axios.put('http://localhost:3030/auth/areatree/'+id,area,{headers: headers})
}
