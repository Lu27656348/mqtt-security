
import {Link} from 'react-router-dom';
function NavBar() {
  return (
        <>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/devices">Devices</Link>
            </li>
            <li>
                <Link to="/devices/new">New Device</Link>
            </li>
        </ul>
        </>
    )
}

export default NavBar