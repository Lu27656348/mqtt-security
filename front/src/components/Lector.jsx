import React, { useEffect, useState } from 'react'

import {Switch} from "@material-tailwind/react";
import axios from '@/api/axios';
import mqtt from "mqtt";

function Lector({device_id,status,topic_req,getLectores}) {

    const [estatus, setEstatus] = useState(status);
    const [mqttClient, setMqttClient] = useState(null);

    useEffect(() => {
      if (status === "ON") {
        // Establecer la conexión MQTT y suscribirse al tópico
        const client = mqtt.connect("mqtt://broker.emqx.io:1883");
        client.on("connect", function () {
          console.log(`Conectado a MQTT en el dispositivo ${device_id}`);
          client.subscribe(topic_req);
          client.subscribe(topic_req+'/escucha');
        });
        setMqttClient(client);
      } else {
        // Desconectar de MQTT
        if (mqttClient) {
          mqttClient.end();
          setMqttClient(null);
        }
      }
    
    // Función de limpieza para desconectarse de MQTT al desmontar el componente
    return () => {
        if (mqttClient) {
          mqttClient.end();
          setMqttClient(null);
        }
      };
    }, [status]);

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
        })
        setEstatus(isChecked ? "ON" : "OFF");
    }

    return (
        <>
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <div
                  className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg -mt-6">           
              </div>
              <div className="p-6">
                  <h6
                      className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
                      {topic_req}</h6>
                 
              </div>
              <div className="p-6 border-t border-blue-gray-50 px-6 py-5">
                    <div className="antialiased font-bold font-sans text-sm leading-normal flex items-center text-gray-800">    
                        <Switch
                            id={device_id}
                            label={estatus==='OFF' ? 'Desconectado' : 'Conectado'}
                            defaultChecked={status === "OFF" ? false : true}
                            labelProps={{
                            className: "text-sm font-normal text-blue-gray-500",
                            }}
                            onChange={(event) => handleSwitchChange(event, device_id)}
                        />
                    </div>
              </div>
            </div>
        </>
    )
}

export default Lector