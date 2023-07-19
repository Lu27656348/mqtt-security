// import React from 'react'
import {Link} from 'react-router-dom';

function UsersPage() {
  return (
    <>
    <div className="container">

    <div>Pagina de usuarios</div>
    <div className="row">
      <div className="col-md-8">
        <div className="m-4">
          <Link className="btn btn-success bg-success" to="/users/new" >Agregar</Link>


          <table className="table p-1 ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">last_name</th>
                <th scope="col">photo</th>
                <th scope="col">department</th>
                <th scope="col">status</th>
                {/* <th scope="col">Topic_res</th> */}
          
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
                <td>Mark</td>
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

    <div>Pagina de user cards</div>
    <div className="row">
      <div className="col-md-8">
        <div className="m-4">
          <Link className="btn btn-success bg-success" to="/users_cards/new" >Agregar</Link>


          <table className="table p-1 ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">card_id</th>
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
    <div>Pagina de user types</div>
    <div className="row">
      <div className="col-md-8">
        <div className="m-4">
          <Link className="btn btn-success bg-success" to="/users_types/new" >Agregar</Link>


          <table className="table p-1 ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">user_id</th>
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

export default UsersPage