// import React from 'react'
import {Link} from 'react-router-dom';

function CardsPage() {
  return (
    <>
    <div className="container">

    <div>Tabla Cards</div>
    <div className="row">
      <div className="col-md-8">
        <div className="m-4">
          <Link className="btn btn-success bg-success" to="/cards/new" >Agregar</Link>


          <table className="table p-1 ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">status</th>
                <th scope="col">Acciones</th>
  
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>inactive</td>

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

    <div>Cards acces tabla</div>
    <div className="row">
      <div className="col-md-8">
        <div className="m-4">
          <Link className="btn btn-success bg-success" to="/cards_access/new" >Agregar</Link>


          <table className="table p-1 ">
            <thead>
              <tr>
                <th scope="col">#card_id</th>
                <th scope="col">area_id</th>
                <th scope="col">access_date</th>
                <th scope="col">access_data</th>
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


            </tbody>
          </table>
        </div>

      </div>
    </div>

    <div>Cards access points </div>
    <div className="row">
      <div className="col-md-8">
        <div className="m-4">
          <Link className="btn btn-success bg-success" to="/cards_access_point/new" >Agregar</Link>


          <table className="table p-1 ">
            <thead>
              <tr>
                <th scope="col">card_id#</th>
                <th scope="col">area_id</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
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

export default CardsPage