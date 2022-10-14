import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Footer from '../components/ui/Footer'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Navbar from '../components/ui/Navbar'
import Profile from '../pages/Profile'
import Profiles from '../pages/Profiles'
import Register from '../pages/Register'

const Routers = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Profile />} path="/profile" />
      <Route element={<Register />} path="/register" />
      <Route element={<Profiles />} path="/profiles" />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default Routers
