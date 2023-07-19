// import React from 'react'
import axios from 'axios';

function HomePage() {
  // let token = '';
  // const credenciales = {
  //   usuario: 'Oliver',
  //   password: 'admin'
  // };
  // const cabecera = {
  //   'Accept': 'application/json',
  //   'Content-Type': 'application/json',
  //   'Custom-Header': 'Custom-Value'
  // };


  // axios.post('http://localhost:3030/login', credenciales, { headers: cabecera })
  // .then(function (response) {
  //     token = response.data.token;
  //     //obtener todos los topicos para suscribirse
  //     const headers = {
  //       'Authorization': `Bearer ${token}`,
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Custom-Header': 'Custom-Value'
  //     };
  //     console.log(token);
  // });

  console.log("Sesion iniciada con token: ")
  console.log(localStorage.getItem("token"))
  return (
    <div>HomePage</div>
  )
}

export default HomePage