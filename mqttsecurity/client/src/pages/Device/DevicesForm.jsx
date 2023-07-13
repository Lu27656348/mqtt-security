// import React from 'react'

import {Form, Formik} from 'formik'

function DevicesForm() {
  return (
    <>
    <div>DevicesForm</div>
    <Formik
      initialValues={{
        title : '',
        description : '',
      }}
      onSubmit={async (values) => {
        console.log(values);
          try{
            await fetch('http://localhost:3000/devices',{
              method : 'POST',
              headers : {
                'Content-Type' : 'application/json'
              },
              body : JSON.stringify(values)
            })
          }catch(err){
            console.log(err);
          }
        }}
    >
      {({handleChange,handleSubmit,values})=> (
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">name</label>
          <input type="text" id="name" name="name" onChange={handleChange}/>
          <label htmlFor="description">description</label>
          <input type="text" id="description" name="description"   onChange={handleChange}/>
          <button type='submit'>Save</button>
        </Form>
      )}
    </Formik>
    </>
  )
}

export default DevicesForm