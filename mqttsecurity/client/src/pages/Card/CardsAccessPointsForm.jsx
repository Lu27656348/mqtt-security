// import React from 'react'

import {Form, Formik} from 'formik'
import {Link} from 'react-router-dom';
function CardAccessPointsForm() {
  return (
    <>
    <div className="container m-3">
      <Link className="btn btn-secondary bg-secondary" to="/cards" >Volver</Link>


      <div>Agregar area</div>
      <div className="row">
        <Formik
          initialValues={{
            area_id : '',
      
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
             
                {/* Area_id */}
                <div className="m-3">
                  <label htmlFor="area_id" className="form-label">Area_id</label>
                  <input type="text" className="form-control"  id="area_id" name="area_id" onChange={handleChange} placeholder="Ingrese area"/>
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

export default CardAccessPointsForm