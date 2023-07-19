// import React from 'react'
import {Link} from 'react-router-dom';

function DevicesPage() {
  return (
    <>
    <div className="container">

    <div>Pagina de lectores</div>
    <div className="row">
      <div className="col-md-8">
        <div className="m-4">
          <Link className="btn btn-success bg-success" to="/devices/new" >Agregar</Link>


          <table className="table p-1 ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Topic_res</th>
                <th scope="col">Topic_req</th>
                <th scope="col">Type</th>
                <th scope="col">Status</th>
                <th scope="col">areas</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>

                  <button type="button" className="btn btn-warning bg-warning">Editar</button>
                  <button type="button" className="btn btn-danger bg-danger">Eliminar</button>
                  </td>
              </tr>
              <tr>
                <th >2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>Thornton</td>
                <td>Thornton</td>
                <td>Thornton</td>
                <td>Thornton</td>
                <td>


                <button type="button" className="btn btn-warning bg-warning">Editar</button>
                  <button type="button" className="btn btn-danger bg-danger">Eliminar</button>
                </td>
              </tr>
              <tr>
                <th >3</th>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
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

export default DevicesPage