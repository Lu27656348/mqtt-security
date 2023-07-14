import React, { useEffect,useState } from 'react'
import { StatisticsChart } from "@/widgets/charts";
import {statisticsChartsData} from "@/data";
import {ClockIcon,} from "@heroicons/react/24/outline";
import {Switch, Typography,} from "@material-tailwind/react";
import axios from '@/api/axios';


function Lectores() {

  const [lectores, setLectores] = useState([]);

  function handleSwitchChange(event, device_id) {
    const token = localStorage.getItem("token");
  
    const isChecked = event.target.checked;
    // Aquí puedes hacer lo que necesites con el estado del switch
    axios.put('auth/devices/change/'+device_id,
      { headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        }
    }).then((response) => {
      getLectores(); // llamamos a la función getLectores después de cambiar el estado del switch
    });
  }
  
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
          {lectores && lectores.map(({ device_id,topic_req,status }) => (
            <div key={device_id} class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div
                  class="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6">
                  
              </div>
              <div class="p-6">
                  <h6
                      class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
                      {topic_req}</h6>
                 
              </div>
              <div class="p-6 border-t border-blue-gray-50 px-6 py-5">
                  <p class="antialiased font-bold font-sans text-sm leading-normal flex items-center text-gray-800">    
                    <Switch
                        key={device_id}
                        id={device_id}
                        label={status}
                        defaultChecked={status === "OFF" ? true : false}
                        labelProps={{
                          className: "text-sm font-normal text-blue-gray-500",
                        }}
                        onChange={(event) => handleSwitchChange(event, device_id)}
                      />
                    </p>
              </div>
            </div>

          ))}
        </div>
        </>
    )
}

export default Lectores;