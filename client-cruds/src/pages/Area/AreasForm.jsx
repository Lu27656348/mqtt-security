// import React from 'react'

import {Form, Formik} from 'formik'
import {Link,useParams} from 'react-router-dom';
import { createAreaRequest,updateAreaRequest } from '../../api/areas.api';
import { useEffect } from 'react';
import { getAreaRequest } from '../../api/areas.api';
import { useState } from 'react';
function AreasForm() {

  const params = useParams();
  const [Area, setArea] = useState({
    area_id : '',
    area_topic : '',
    level : '',
    description : '',
  })

  useEffect(() => {
    if(params.id){
      // cargar datos del area
      const loadArea = async () => {
        try {
          
          const response = await getAreaRequest(params.id);
          console.log(response.data);
          setArea({
            area_id : response.data.area_id,
            area_topic : response.data.area_topic,
            level : response.data.level,
            description : response.data.description,
          });
        } catch (error) {
          console.log(error);
        }
      }
      const area = loadArea();
    }
  }, [params.id])

  return (
    <>
    <div className="container m-3">
      <Link className="btn btn-secondary bg-secondary" to="/areas" >Volver</Link>


      <div>{params.id ? "Editar": "Agregar"} area</div>
      <div className="row">
        <Formik
          initialValues={Area}
          enableReinitialize={true}
          onSubmit={async (values,actions) => {
            console.log(values);
            try {
              if(params.id){
                // editar
                console.log(params.id);
                const response = await updateAreaRequest(params.id,values);
                console.log(response);
              }else{
                // agregar
                const response = await createAreaRequest(values);
                console.log(response);
              }
              actions.resetForm();
              window.location.href = '/areas';
            } catch (error) {
              console.log(error);
              
            }

            }}
        >
          {({handleChange,handleSubmit,values})=> (
            <div className="col-md-10">
              <div className="card">
              <Form onSubmit={handleSubmit}>
             
                {/* Area__id */}
                <div className="m-3">
                  {/* <label htmlFor="area_topic" className="form-label">Area__id</label> */}
                  <input type="hidden" className="form-control"  id="area_id" name="area_id" onChange={handleChange} placeholder="Ingrese area" value={params.id} />
                </div>
                {/* Area_topic */}
                <div className="m-3">
                  <label htmlFor="area_topic" className="form-label">Area_topic</label>
                  <input type="text" className="form-control"  id="area_topic" name="area_topic" onChange={handleChange} placeholder="Ingrese area" value={values.area_topic} />
                </div>
                {/* Topic res */}
                <div className="m-3">
                  <label htmlFor="level" className="form-label">Level</label>
                  <input type="number" className="form-control"  id="level" name="level" onChange={handleChange} placeholder="Ingrese level" value={values.level}/>
                </div>
                {/* Descripcion */}
                <div className="m-3">
                  <label htmlFor="description" className="form-label">Descripcion</label>
                  <input type="text" className="form-control"  id="description" name="description" onChange={handleChange} placeholder="Ingrese Descripcion" value={values.description}/>
                </div>


              
                <button className='btn btn-success m-3' type='submit'>{params.id ? "Editar": "Agregar"}</button>

             

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