import {Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import DevicesPage from './pages/Device/DevicesPage';
import DevicesForm from './pages/Area/AreasForm';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from '../components/NavBar';
import SideBar from '../components/Navbar';
import {Link} from 'react-router-dom';
import AreasPage from './pages/Area/AreasPage';
import AreasForm from './pages/Area/AreasForm';



function App() {

  return (
    <>
    {/* <div className='bg-zinc-900 h-screen'> */}
      <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/devices" element={<DevicesPage/>} />
        <Route path='/devices/new' element={<DevicesForm/>} />
        <Route path="/areas" element={<AreasPage/>} />
        <Route path="/areas/new" element={<AreasForm/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>

      </div>

    {/* </div> */}

    </>
  )
}

export default App
