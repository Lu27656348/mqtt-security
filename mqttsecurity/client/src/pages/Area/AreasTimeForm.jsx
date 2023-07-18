// import React from 'react'

import {Form, Formik} from 'formik'
import {Link} from 'react-router-dom';
function AreasTimeForm() {
  return (
    <>
    <div className="container m-3">
      <Link className="btn btn-secondary bg-secondary" to="/areas" >Volver</Link>


      <div>Agregar area</div>
      <div className="row">
        <Formik
          initialValues={{
            area_id : '',
            day_value : '',
            entry_time : '',
            exit_time : ''
      
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
                {/* day_value */}
                <div className="m-3">
                  <label htmlFor="day_value" className="form-label">Day_value</label>
                  <input type="text" className="form-control"  id="day_value" name="day_value" onChange={handleChange} placeholder="Ingrese day_value"/>
                </div>
                {/* entry_time */}
                <div className="m-3">
                  <label htmlFor="entry_time" className="form-label">entry_time</label>
                  <input type="text" className="form-control"  id="entry_time" name="entry_time" onChange={handleChange} placeholder="Ingrese entry_time"/>
                </div>
                {/* exit_time */}
                <div className="m-3">
                  <label htmlFor="exit_time" className="form-label">exit_time</label>
                  <input type="text" className="form-control"  id="exit_time" name="exit_time" onChange={handleChange} placeholder="Ingrese exit_time"/>
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

export default AreasTimeForm