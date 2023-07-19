// import React from 'react'

import {Form, Formik} from 'formik'
import {Link} from 'react-router-dom';
function UsersTypesForm() {
  return (
    <>
    <div className="container m-3">
      <Link className="btn btn-secondary bg-secondary" to="/users" >Volver</Link>


      <div>Agregar users types </div>
      <div className="row">
        <Formik
          initialValues={{
            role_id : '',
            user_id : '',

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
                {/* User_id */}
                <div className="m-3">
                  <label htmlFor="user_id" className="form-label">User_id</label>
                  <input type="text" className="form-control"  id="user_id" name="user_id" onChange={handleChange} placeholder="Ingrese nombre"/>
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

export default UsersTypesForm