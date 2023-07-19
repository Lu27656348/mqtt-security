// import React from 'react'
import {Link} from 'react-router-dom';

function RolesPage() {
  return (
    <>
    <div className="container">

    <div>Pagina de Roles</div>
    <div className="row">
      <div className="col-md-8">
        <div className="m-4">
          <Link className="btn btn-success bg-success" to="/roles/new" >Agregar</Link>


          <table className="table p-1 ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">type</th>
                {/* <th scope="col">Topic_res</th> */}
          
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                {/* <td>Otto</td> */}

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

    <div>Pagina de Roles access points</div>
    <div className="row">
      <div className="col-md-8">
        <div className="m-4">
          <Link className="btn btn-success bg-success" to="/roles_access_point/new" >Agregar</Link>


          <table className="table p-1 ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">area_id</th>
                {/* <th scope="col">Topic_res</th> */}
          
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                {/* <td>Otto</td> */}

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

export default RolesPage