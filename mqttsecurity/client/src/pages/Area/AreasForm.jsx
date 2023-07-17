// import React from 'react'

import {Form, Formik} from 'formik'
import {Link} from 'react-router-dom';
function AreasForm() {
  return (
    <>
    <div className="container m-3">
      <Link className="btn btn-secondary bg-secondary" to="/areas" >Volver</Link>


      <div>Agregar area</div>
      <div className="row">
        <Formik
          initialValues={{
            ara_topic : '',
            level : '',
            description : '',
      
          }}
          onSubmit={async (values,actions) => {
            console.log(values);
              try{
                await fetch('http://localhost:3000/areas',{
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
             
                {/* Area_topic */}
                <div className="m-3">
                  <label htmlFor="ara_topic" className="form-label">Area_topic</label>
                  <input type="text" className="form-control"  id="ara_topic" name="area_topic" onChange={handleChange} placeholder="Ingrese area"/>
                </div>
                {/* Topic res */}
                <div className="m-3">
                  <label htmlFor="level" className="form-label">Level</label>
                  <input type="text" className="form-control"  id="level" name="level" onChange={handleChange} placeholder="Ingrese level"/>
                </div>
                {/* Descripcion */}
                <div className="m-3">
                  <label htmlFor="description" className="form-label">Descripcion</label>
                  <input type="text" className="form-control"  id="description" name="description" onChange={handleChange} placeholder="Ingrese Descripcion"/>
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

export default AreasForm