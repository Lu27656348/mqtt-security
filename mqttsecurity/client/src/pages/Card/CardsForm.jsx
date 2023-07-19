// import React from 'react'

import {Form, Formik} from 'formik'
import {Link} from 'react-router-dom';
function CardsForm() {
  return (
    <>
    <div className="container m-3">
      <Link className="btn btn-secondary bg-secondary" to="/cards" >Volver</Link>


      <div>Agregar Cards</div>
      <div className="row">
        <Formik
          initialValues={{
            status : '',
      
          }}
          onSubmit={async (values,actions) => {
            console.log(values);
              try{
                await fetch('http://localhost:3000/cards',{
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
             
                {/* status */}
                <div className="m-3">
                  <label htmlFor="status" className="form-label">status</label>
                  <input type="text" className="form-control"  id="status" name="status" onChange={handleChange} placeholder="Ingrese area"/>
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

export default CardsForm