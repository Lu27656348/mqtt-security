// import React from 'react'

import {Form, Formik} from 'formik'
import {Link} from 'react-router-dom';
function RolesAccessPointForm() {
  return (
    <>
    <div className="container m-3">
      <Link className="btn btn-secondary bg-secondary" to="/roles" >Volver</Link>


      <div>Agregar Role acces point  </div>
      <div className="row">
        <Formik
          initialValues={{
            role_id : '',
            area_id : '',

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
             
                {/* rol -id */}
                <div className="m-3">
                  <label htmlFor="role_id" className="form-label">rol -id</label>
                  <input type="text" className="form-control"  id="role_id" name="role_id" onChange={handleChange} placeholder="Ingrese nombre"/>
                </div>
                {/* Area_id */}
                <div className="m-3">
                  <label htmlFor="area_id" className="form-label">Area_id</label>
                  <input type="text" className="form-control"  id="area_id" name="area_id" onChange={handleChange} placeholder="Ingrese nombre"/>
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

export default RolesAccessPointForm