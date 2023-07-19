// import React from 'react'

import {Form, Formik} from 'formik'
import {Link} from 'react-router-dom';
function DevicesForm() {
  return (
    <>
    <div className="container m-3">
      <Link className="btn btn-secondary bg-secondary" to="/devices" >Volver</Link>


      <div>Agregar Lector</div>
      <div className="row">
        <Formik
          initialValues={{
            name : '',
            topic_res : '',
            topic_req : '',
            type : '',
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
                {/* Topic res */}
                <div className="m-3">
                  <label htmlFor="topic_res" className="form-label">Topic_res</label>
                  <input type="text" className="form-control"  id="topic_res" name="topic_res" onChange={handleChange} placeholder="Ingrese topic_res"/>
                </div>
                {/* Topic req */}
                <div className="m-3">
                  <label htmlFor="topic_req" className="form-label">Topic_req</label>
                  <input type="text" className="form-control"  id="topic_req" name="topic_req" onChange={handleChange} placeholder="Ingrese topic_req"/>
                </div>
                {/* Type */}
                <div className="m-3">
                  <label htmlFor="type" className="form-label">Type</label>
                  <input type="text" className="form-control"  id="type" name="type" onChange={handleChange} placeholder="Ingrese type"/>
                </div>
                {/* Status */}
                <div className="m-3">
                  <label htmlFor="status" className="form-label">Status</label>
                  <input type="text" className="form-control"  id="status" name="status" onChange={handleChange} placeholder="Ingrese status"/>
                </div>
                {/* Area */}
                <div className="m-3">
                  <label htmlFor="area" className="form-label">Area</label>
                  <input type="text" className="form-control"  id="area" name="area" onChange={handleChange} placeholder="Ingrese area"/>
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

export default DevicesForm