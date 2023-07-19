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
// Clients
import ClientsPage from './pages/Client/ClientsPage';
import ClientsForm from './pages/Client/ClientsForm';
// Roles
import RolesPage from './pages/Roles/RolesPage';
import RolesForm from './pages/Roles/RolesForm';
import RolesAccessPointForm from './pages/Roles/RolesAccessPointForm';
// Users
import UserPage from './pages/Users/UsersPage';
import UsersForm from './pages/Users/UsersForm';
import UsersCardsForm from './pages/Users/UsersCardsForm';
import UsersTypesForm from './pages/Users/UsersTypesForm';
// Auth
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
function App() {

  return (
    <>
    {/* <div className='bg-zinc-900 h-screen'> */}
      <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* Devices */}
        <Route path="/devices" element={<DevicesPage/>} />
        <Route path='/devices/new' element={<DevicesForm/>} />
        {/* Areas */}
        <Route path="/areas" element={<AreasPage/>} />
        <Route path="/areas/new" element={<AreasForm/>} />
        <Route path="/areas/edit/:id" element={<AreasForm/>} />
        <Route path="/areas_time/new" element={<AreasTimeForm/>} />
        <Route path="/areas_tree/new" element={<AreasTreeForm/>} />
        {/* Cards */}
        <Route path="/cards" element={<CardsPage/>} />
        <Route path="/cards/new" element={<CardsForm/>} />
        <Route path="/cards_access/new" element={<CardsAccessForm/>} />
        <Route path="/cards_access_point/new" element={<CardsAccessPointsForm/>} />
        {/* Client */}
        <Route path="/clients" element={<ClientsPage/>} />
        <Route path='/clients/new' element={<ClientsForm/>} />
        {/* Roles */}
        <Route path="/roles" element={<RolesPage/>} />
        <Route path='/roles/new' element={<RolesForm/>} />
        <Route path="/roles_access_point/new" element={<RolesAccessPointForm/>} />
        {/* Users */}
        <Route path="/users" element={<UserPage/>} />
        <Route path='/users/new' element={<UsersForm/>} />
        <Route path="/users_cards/new" element={<UsersCardsForm/>} />
        <Route path="/users_types/new" element={<UsersTypesForm/>} />
        {/* Notfound */}
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>

      </div>

    {/* </div> */}

    </>
  )
}

export default App
