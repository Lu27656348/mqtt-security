import {Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import DevicesPage from './pages/Device/DevicesPage';
import DevicesForm from './pages/Area/AreasForm';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from '../components/Navbar';
// Areas
import AreasPage from './pages/Area/AreasPage';
import AreasForm from './pages/Area/AreasForm';
import AreasTimeForm from './pages/Area/AreasTimeForm';
import AreasTreeForm from './pages/Area/AreasTreeForm';
// Cards
import CardsPage from './pages/Card/CardsPage';
import CardsForm from './pages/Card/CardsForm';
import CardsAccessForm from './pages/Card/CardsAcessForm';
import CardsAccessPointsForm from './pages/Card/CardsAccessPointsForm';

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
        <Route path="/areas_time/new" element={<AreasTimeForm/>} />
        <Route path="/areas_tree/new" element={<AreasTreeForm/>} />
        <Route path="/cards" element={<CardsPage/>} />
        <Route path="/cards/new" element={<CardsForm/>} />
        <Route path="/cards_access/new" element={<CardsAccessForm/>} />
        <Route path="/cards_access_point/new" element={<CardsAccessPointsForm/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>

      </div>

    {/* </div> */}

    </>
  )
}

export default App
