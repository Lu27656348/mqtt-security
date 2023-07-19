
import {Form, Formik} from 'formik'
import {Link,useParams} from 'react-router-dom';
import { createAreaTreeRequest,updateAreaTreeRequest } from '../../api/areasTree.api';
import { useEffect } from 'react';
import { getAreaTreeRequest } from '../../api/areasTree.api';
import { useState } from 'react';

function AreasTreeForm() {

  const params = useParams();
  const [AreaTree, setAreaTree] = useState({
    area_id1:'',
    area_id2:'',
  })

  // Cargar datos del area 
  useEffect(() => {
    if(params.id){
      // cargar datos del area
      const loadAreaTree = async () => {
        try {
          
          const response = await getAreaTreeRequest(params.id);
          console.log(response.data);
          setAreaTree({
            area_id1 : response.data.area_id1,
            area_id2 : response.data.area_id2,
          });
        } catch (error) {
          console.log(error);
        }
      }
      const area = loadAreaTree();
    }
  }, [params.id])



  return (
    <>
    <div className="container m-3">
      <Link className="btn btn-secondary bg-secondary" to="/areas" >Volver</Link>


      <div>{params.id ? "Editar": "Agregar"} area tree</div>
      <div className="row">
        <Formik
          initialValues={AreaTree}
          enableReinitialize={true}
          onSubmit={async (values,actions) => {
            console.log(values);
            try {
              if(params.id){
                // editar
                console.log(params.id);
                const response = await updateAreaTreeRequest(params.id,values);
                console.log(response);
              }else{
                // agregar
                const response = await createAreaTreeRequest(values);
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
             
                {/* Area_id1 */}
                <div className="m-3">
                  <label htmlFor="area_id1" className="form-label">area_id1</label>
                  <input type="number" className="form-control"  id="area_id1" name="area_id1" onChange={handleChange} placeholder="Ingrese areaid 1"/>
                </div>
                {/* Area_id2 */}
                <div className="m-3">
                  <label htmlFor="area_id2" className="form-label">area_id2</label>
                  <input type="number" className="form-control"  id="area_id2" name="area_id2" onChange={handleChange} placeholder="Ingrese areaid 2"/>
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