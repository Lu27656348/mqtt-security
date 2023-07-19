// import React from 'react'

import {Form, Formik} from 'formik'
import {Link} from 'react-router-dom';
function UsersCardsForm() {
  return (
    <>
    <div className="container m-3">
      <Link className="btn btn-secondary bg-secondary" to="/users" >Volver</Link>


      <div>Agregar Role acces point  </div>
      <div className="row">
        <Formik
          initialValues={{
            user_id : '',
            card_id : '',

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
             
                {/* User_id */}
                <div className="m-3">
                  <label htmlFor="user_id" className="form-label">User_id</label>
                  <input type="text" className="form-control"  id="user_id" name="user_id" onChange={handleChange} placeholder="Ingrese user_id"/>
                </div>
                {/* Card_id */}
                <div className="m-3">
                  <label htmlFor="card_id" className="form-label">Card_id</label>
                  <input type="text" className="form-control"  id="card_id" name="card_id" onChange={handleChange} placeholder="Ingrese card_id"/>
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

export default UsersCardsForm