import React from 'react'
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Distribuidos</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
 
 

                <li className="nav-item dropstart mr-4">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        CRUDS
                    </a>
                    <ul className="dropdown-menu ">
                        <li>
                            <Link className="dropdown-item" to="/areas">Areas</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/devices">Devices</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/cards">Cards</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/clients">Clientes</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/roles">Roles</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/users">Users</Link>
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
        
    
  )
}

export default Navbar