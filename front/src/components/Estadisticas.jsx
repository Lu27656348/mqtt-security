import axios from '@/api/axios'
import { StatisticsCard } from '@/widgets/cards';
import React, { useEffect, useState } from 'react'
import {Typography,} from "@material-tailwind/react";
import {BanknotesIcon,UserIcon,} from "@heroicons/react/24/solid";

function Estadisticas() {
    const [totallector, setTotalLector] = useState("");
    const [totalusuario, setTotalUsuario] = useState("");
    const [conectados, setConectados] = useState("");
    const [ingresados, setIngresados] = useState("");

    function obtener_estadisticas(){
        const token = localStorage.getItem("token");
        axios.get('auth/get/statis',
        { headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          }
      }).then((response)=>{
        setTotalLector(response.data.total_lectores);
        setTotalUsuario(response.data.total_usuarios);
        setConectados(response.data.conectados);
        setIngresados(response.data.ingresados);
      }).catch((error)=>{

      })
    }

    useEffect(()=>{
        obtener_estadisticas()
    },[])

    return (
        <>
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-2">
            <StatisticsCard
                color="blue"
                icon={React.createElement(BanknotesIcon, {
                className: "w-6 h-6 text-white",
                })}
                title="Total Lectores"
                value={totallector ? totallector : 'cargando...'}
                footer={
                <Typography className="font-normal text-blue-gray-600">
                    <strong className="text-green-500">+{conectados ? conectados : 'cargando...'}%</strong>
                    &nbsp;lectores estan conectados
                </Typography>
                }
            />

            <StatisticsCard
                color="pink"
                icon={React.createElement(UserIcon, {
                className: "w-6 h-6 text-white ",
                })}
                title="Usuarios Ingresados Hoy"
                value={totalusuario ? totalusuario : 'cargando...'}
                footer={
                <Typography className="font-normal text-blue-gray-600">
                    <strong className="text-green-500">{ingresados ? ingresados : 'cargando...'}</strong>
                    &nbsp;usuarios han pasado hoy por almenos un lector
                </Typography>
                }
            />
        </div>
        </>
    )
}

export default Estadisticas