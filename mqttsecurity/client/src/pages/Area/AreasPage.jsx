// import React from 'react'
import {Link} from 'react-router-dom';
import { useEffect,useState } from 'react';
import {getAreasRequest,deleteAreaRequest} from '../../api/areas.api.js';
import { useNavigate } from 'react-router-dom';
function AreasPage() {
  const [Areas, setAreas] = useState([])

  const navigate = useNavigate();

  // Cargar areas
  useEffect(() => {

    async function loadAreas() {
      const response = await getAreasRequest();
      console.log(response.data);
      setAreas(response.data);
    }
    loadAreas();

  }, [])

  // Eliminar area 
  const handleDeleteArea = async (area_id) => {
    try {
      const response = await deleteAreaRequest(area_id);
      console.log(response.data);
      setAreas(Areas.filter(area => area.area_id !== area_id));
    } catch (error) {
        console.log(error)
    }

  }




  return (
    <>
    <div className="container">

    <div>Tabla Areas</div>
    <div className="row">
      <div className="col-md-8">
        <div className="m-4">
          <Link className="btn btn-success bg-success" to="/areas/new" >Agregar</Link>


          <table className="table p-1 ">
            <thead>
              <tr>
                <th scope="col">#Area_id</th>
                <th scope="col">Area topic</th>
                <th scope="col">Level</th>
                <th scope="col">Description</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                Areas.map((area, index) => (
                  <tr key={index}>
                    <th >{area.area_id}</th>
                    <td>{area.area_topic}</td>
                    <td>{area.level}</td>
                    <td>{area.description}</td>
                    <td>
                      <button 
                      title="Editar" type="button" className="btn btn-warning bg-warning btn-sm m-1"
                      onClick={()=> navigate(`/areas/edit/${area.area_id}`)}
                      >✎</button>
                      <button
                       title="Eliminar" type="button" className="btn btn-danger bg-danger btn-sm m-1"
                       onClick={()=> handleDeleteArea(area.area_id)}
                       >❌</button>
                    </td>
                  </tr>
                ))

              }

            </tbody>
          </table>
        </div>

      </div>
    </div>

    <div>Areas time</div>
    <div className="row">
      <div className="col-md-8">
        <div className="m-4">
          <Link className="btn btn-success bg-success" to="/areas_time/new" >Agregar</Link>


          <table className="table p-1 ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">day_value</th>
                <th scope="col">entry_time</th>
                <th scope="col">exit_time</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </div>

      </div>
    </div>

    <div>Areas tree</div>
    <div className="row">
      <div className="col-md-8">
        <div className="m-4">
          <Link className="btn btn-success bg-success" to="/areas_tree/new" >Agregar</Link>


          <table className="table p-1 ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">area_id1</th>
                <th scope="col">area_id2</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <th >3</th>
                <td>@twitter</td>
                <td>@twitter</td>

                <td>

                <button type="button" className="btn btn-warning bg-warning">Editar</button>
                  <button type="button" className="btn btn-danger bg-danger">Eliminar</button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>


    </div>

    </>

  )
}

export default AreasPage