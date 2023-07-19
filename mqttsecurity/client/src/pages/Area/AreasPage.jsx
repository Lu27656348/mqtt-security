// import React from 'react'
import {Link} from 'react-router-dom';

function AreasPage() {
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
                <th scope="col">#</th>
                <th scope="col">Area topic</th>
                <th scope="col">level</th>
                <th scope="col">description</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
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
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
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
                <th scope="row">1</th>
                <td>Mark</td>
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
                <td>


                <button type="button" className="btn btn-warning bg-warning">Editar</button>
                  <button type="button" className="btn btn-danger bg-danger">Eliminar</button>
                </td>
              </tr>
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