// import React from 'react'

import {Form, Formik} from 'formik'
import {Link} from 'react-router-dom';
function UsersForm() {
  return (
    <>
    <div className="container m-3">
      <Link className="btn btn-secondary bg-secondary" to="/users" >Volver</Link>


      <div>Agregar User </div>
      <div className="row">
        <Formik
          initialValues={{
            name : '',
            last_name : '',
            photo : '',
            department : '',
            status : '',

          }}
          onSubmit={async (values,actions) => {
            console.log(values);
              try{
                await fetch('http://localhost:3000/devices',{
                  method : 'POST',
                  headers : {
                    'Content-Type' : 'application/json'
                  },
                  body : JSON.stringify(values)
                })
                actions.resetForm();
              }catch(err){
                console.log(err);
              }
            }}
        >
          {({handleChange,handleSubmit,values})=> (
            <div className="col-md-10">
              <div className="card">
              <Form onSubmit={handleSubmit}>
             
                {/* Nombre */}
                <div className="m-3">
                  <label htmlFor="name" className="form-label">Nombre</label>
                  <input type="text" className="form-control"  id="name" name="name" onChange={handleChange} placeholder="Ingrese nombre"/>
                </div>
                {/* Apellido */}
                <div className="m-3">
                  <label htmlFor="last_name" className="form-label">Apellido</label>
                  <input type="text" className="form-control"  id="last_name" name="last_name" onChange={handleChange} placeholder="Ingrese Apellido"/>
                </div>
                {/* Foto */}
                <div className="m-3">
                  <label htmlFor="photo" className="form-label">Foto</label>
                  <input type="text" className="form-control"  id="photo" name="photo" onChange={handleChange} placeholder="Ingrese foto"/>
                </div>
                {/* Departamento */}
                <div className="m-3">
                  <label htmlFor="department" className="form-label">Departamento</label>
                  <input type="text" className="form-control"  id="department" name="department" onChange={handleChange} placeholder="Ingrese departamento"/>
                </div>
                {/* Estatus */}
                <div className="m-3">
                  <label htmlFor="status" className="form-label">Estatus</label>
                  <input type="text" className="form-control"  id="status" name="status" onChange={handleChange} placeholder="Ingrese estatus"/>
                </div>

              
                <button className='btn btn-success m-3' type='submit'>Agregar</button>

             

              </Form>

              </div>

            </div>
          )}
        </Formik>

      </div>
    </div>
    </>
  )
}

export default UsersForm