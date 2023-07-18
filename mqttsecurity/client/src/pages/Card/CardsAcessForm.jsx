// import React from 'react'

import {Form, Formik} from 'formik'
import {Link} from 'react-router-dom';
function CardsAccessForm() {
  return (
    <>
    <div className="container m-3">
      <Link className="btn btn-secondary bg-secondary" to="/cards" >Volver</Link>


      <div>Agregar Card access</div>
      <div className="row">
        <Formik
          initialValues={{
            area_id : '',
            access_date : '',
            access_data : '',
      
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
                {/* Access_date */}
                <div className="m-3">
                  <label htmlFor="access_date" className="form-label">Access_date</label>
                  <input type="text" className="form-control"  id="access_date" name="access_date" onChange={handleChange} placeholder="Ingrese Access_date"/>
                </div>
                {/* Access_data */}
                <div className="m-3">
                  <label htmlFor="access_data" className="form-label">Access_data</label>
                  <input type="text" className="form-control"  id="access_data" name="access_data" onChange={handleChange} placeholder="Ingrese Access_date"/>
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

export default CardsAccessForm