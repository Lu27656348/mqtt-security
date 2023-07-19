import axios from 'axios';
import { headers } from '../libs/api';


export const getAreasRequest = async() => {
    return await axios.get('http://localhost:3030/auth/areas',{headers: headers})
}

export const createAreaRequest = async(area) => {
    return await axios.post('http://localhost:3030/auth/areas',area,{headers: headers})
}

export const deleteAreaRequest = async(id) => {
    return await axios.delete('http://localhost:3030/auth/areas/'+id,{headers: headers})
}

export const getAreaRequest = async(id) => {
    return await axios.get('http://localhost:3030/auth/areas/'+id,{headers: headers})
}

export const updateAreaRequest = async(id,area) => {
    console.log("ifff"+id);
    console.log(area)
    
    return await axios.put('http://localhost:3030/auth/areas/'+id,area,{headers: headers})
}
