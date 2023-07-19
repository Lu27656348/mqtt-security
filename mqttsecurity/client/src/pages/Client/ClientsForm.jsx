// import React from 'react'

import {Form, Formik} from 'formik'
import {Link} from 'react-router-dom';
function ClientsForm() {
  return (
    <>
    <div className="container m-3">
      <Link className="btn btn-secondary bg-secondary" to="/clients" >Volver</Link>


      <div>Agregar cliente </div>
      <div className="row">
        <Formik
          initialValues={{
            name : '',

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

export default ClientsForm