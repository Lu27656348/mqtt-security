import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../login.css'
import {Form, Formik} from 'formik'
import { Link,useNavigate } from 'react-router-dom';
import {login} from '../api/auth.api';
function LoginPage() {


  return (
    
    <div>
      <div className="container">
        <div className="row justify-content-center m-3">
          <div className="col-md-4">
            <main className="form-signin w-100 m-auto">

            <Formik
          initialValues={{
            usuario : '',
            password : '',
      
          }}
          onSubmit={async (values,actions) => {
            console.log(values);
            try {
              
              const response = await login(values);
              if(response.status ==200){
                console.log("Iniciando sesion . . . (form)");
                const token =  response.data.token;
                localStorage.setItem('token', token);

                console.log(response.data.token);
                window.location.href = "/";

              }
            } catch (error) {
              console.log(error);
              
            }

            }}
        >
          {({handleChange,handleSubmit,values})=> (
            <div className="col-md-10">
              <div className="card">
              <Form onSubmit={handleSubmit}>
                          

              {/*  */}
              <h1 className="h3 mb-3 fw-normal">Inicia sesion</h1>

                <div className="form-floating">
                  <input type="text" className="form-control" id="usuario" placeholder="Oliver" name="usuario" onChange={handleChange}/>
                  <label htmlFor="usuario">Usuario</label>
                </div>
                <div className="form-floating">
                  <input type="password" className="form-control" id="password" placeholder="Ingrese contraseña" name="password" onChange={handleChange}/>
                  <label htmlFor="password">Contraseña</label>
                </div>


              <button className="btn btn-primary w-100 py-2" type="submit">Iniciar sesion</button>
              <Link to="/register" className="mt-2 mb-2 text-muted">Registrar usuario</Link>

              <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
             {/*  */}

              </Form>

              </div>

            </div>
          )}
        </Formik>

            <form>
              

            </form>
            </main>

          </div>
        </div>
      </div>

    </div>
  )
}

export default LoginPage