// import React from 'react'

import {Form, Formik} from 'formik'
import {Link} from 'react-router-dom';
function AreasTreeForm() {
  return (
    <>
    <div className="container m-3">
      <Link className="btn btn-secondary bg-secondary" to="/areas" >Volver</Link>


      <div>Agregar area</div>
      <div className="row">
        <Formik
          initialValues={{
            area_id1 : '',
            area_id2 : '',
      
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
             
                {/* Area_id1 */}
                <div className="m-3">
                  <label htmlFor="area_id1" className="form-label">area_id1</label>
                  <input type="text" className="form-control"  id="area_id1" name="area_id1" onChange={handleChange} placeholder="Ingrese area"/>
                </div>
                {/* Area_id2 */}
                <div className="m-3">
                  <label htmlFor="area_id2" className="form-label">area_id2</label>
                  <input type="text" className="form-control"  id="area_id2" name="area_id2" onChange={handleChange} placeholder="Ingrese area"/>
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

export default AreasTreeForm