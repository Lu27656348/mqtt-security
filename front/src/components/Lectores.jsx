import React, { useEffect,useState } from 'react'
import axios from '@/api/axios';
import Lector from './Lector';


function Lectores() {

  const [devices, setDevices] = useState([]);
  
  function getLectores() {
    const token = localStorage.getItem("token");
    axios.get('auth/devices',
      {headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
      }
    }).then((response) => {
      setDevices(response.data);
    });
  }
  
  useEffect(() => {
    getLectores(); // llamamos a la función getLectores en el useEffect
  }, []);

  return (
    <>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-12 md:grid-cols-3">
        {devices && devices.map((lector) => (
          <Lector key={lector.device_id} getLectores={getLectores} device_id={lector.device_id} status={lector.status} topic_res={lector.topic_res}  />       
         ))}
      </div>
    </>
  )
}

export default Lectores;