import {Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import DevicesPage from './pages/Device/DevicesPage';
import DevicesForm from './pages/Device/DevicesForm';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from '../components/NavBar';
function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/devices" element={<DevicesPage/>} />
      <Route path='/devices/new' element={<DevicesForm/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Routes>

    </>
  )
}

export default App
