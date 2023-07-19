// import React from 'react'
import axios from 'axios';
import './../login.css'
import { Link } from 'react-router-dom';
function LoginPage() {
 

  return (
    
    <div>
      <div className="container">
        <div className="row justify-content-center m-3">
          <div className="col-md-4">
            <main className="form-signin w-100 m-auto">
            <form>
              
              <h1 className="h3 mb-3 fw-normal">Registrar usuario</h1>

              <div className="form-floating">
                <input type="text" className="form-control" id="usuario" placeholder="Oliver"/>
                <label htmlFor="usuario">Usuario</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" id="password" placeholder="Ingrese contraseña"/>
                <label htmlFor="password">Contraseña</label>
              </div>
              <div className="form-floating">
                <input type="password" className="form-control" id="password" placeholder="Confirma contraseña"/>
                <label htmlFor="password">Confirma contraseña</label>
              </div>
              <div className="form-floating">
                <input type="text" className="form-control" id="tipo_usuario" placeholder="Role de usuario"/>
                <label htmlFor="tipo_usuario">Tipo de usuario</label>
              </div>


              <button className="btn btn-primary w-100 py-2" type="submit">Registrar</button>
              <Link to="/login" className="mt-2 mb-2 text-muted">Iniciar sesion</Link>
              <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
            </form>
            </main>

          </div>
        </div>
      </div>

    </div>
  )
}

export default LoginPage