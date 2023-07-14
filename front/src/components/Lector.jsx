import React, { useEffect, useState } from 'react'

import {Button, Switch} from "@material-tailwind/react";
import axios from '@/api/axios';
import mqtt from 'mqtt/dist/mqtt'
import { useSnackbar } from 'notistack';
import accept from '../images/accept.png'
import fondo from '/img/home-decor-1.jpeg';

function Lector({device_id,status,topic_req,getLectores}) {
    const { enqueueSnackbar } = useSnackbar();
    const [estatus, setEstatus] = useState(status);
    const client = mqtt.connect("wss://broker.emqx.io:8084/mqtt");
    const [imagen,setImagen] = useState(fondo)
    useEffect(() => {
      if (status === "ON") {
        // Establecer la conexión MQTT y suscribirse al tópico
        client.on("connect", function () {
          console.log(`Conectado a MQTT en el dispositivo ${device_id}`);
          if (client && client.subscriptions && client.subscriptions[topic_req]) {
            console.log('El cliente MQTT está suscrito al canal "mytopic"');
          } else {
              client.subscribe(topic_req);
          }
        });
      } else {
        // Desconectar de MQTT
        if (client) 
          client.end();
      }
    
    }, []);

    client.on('message', function (topic, message) {
        if(estatus==='ON'){
            console.log(JSON.parse(message.toString()))
        }
    });

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
        if(!isChecked)
            setImagen(fondo);

    }

    function publicar(){
        if(estatus==='ON'){
            let data={
                lector_id:device_id,
                tarjeta_id:"tarjeta"
            };   
            if (client && client.subscriptions && client.subscriptions['mytopic']) {
                console.log('El cliente MQTT está suscrito al canal "mytopic"');
              } else {
                  client.subscribe(topic_req+'/escucha'); 
              }
            client.publish(topic_req, JSON.stringify(data));
            setImagen(accept);
            enqueueSnackbar("Mensaje publicado ", { variant: "success" });
        }else{
            enqueueSnackbar("No se puede publicar con el lector desconectado", { variant: "error" });
        }
    }

    return (
        <>
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div className="relative bg-clip-border rounded-xl overflow-hidden bg-gray-500 text-white shadow-gray-500/40 shadow-lg mx-0 mt-0 mb-4 h-64 xl:h-40">
                    <img src={imagen} alt="Modern" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                    <h6
                        className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
                        {topic_req}</h6>
                    
                </div>
                <div className="p-6 border-t border-blue-gray-50 px-6 py-5">
                        <div className="flex justify-between antialiased font-bold font-sans text-sm leading-normal items-center text-gray-800">    
                            <Switch
                                key={device_id}
                                id={device_id}
                                label={estatus==='OFF' ? 'Desconectado' : 'Conectado'}
                                defaultChecked={status === "OFF" ? false : true}
                                labelProps={{
                                className: "text-sm font-normal text-blue-gray-500",
                                }}
                                onChange={(event) => handleSwitchChange(event, device_id)}
                            />
                            <Button onClick={publicar}>Publicar</Button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Lector