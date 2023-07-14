import React, { useEffect,useState } from 'react'
import axios from '@/api/axios';
import Lector from './Lector';


function Lectores() {

  const [lectores, setLectores] = useState([]);
  
  function getLectores() {
    const token = localStorage.getItem("token");
    axios.get('auth/devices',
      {headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
      }
    }).then((response) => {
      setLectores(response.data);
    });
  }
  
  useEffect(() => {
    getLectores(); // llamamos a la función getLectores en el useEffect
  }, []);

  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
        {lectores && lectores.map((lector) => (
          <Lector key={lector.device_id} getLectores={getLectores} device_id={lector.device_id} status={lector.status} topic_req={lector.topic_req}  />       
         ))}
      </div>
    </>
  )
}

export default Lectores;