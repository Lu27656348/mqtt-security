import axios from 'axios';


export const login = async(user) => {
  const result = axios.post('http://localhost:3030/login',user);
  return await result
}