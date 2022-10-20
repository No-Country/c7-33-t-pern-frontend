import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Footer from '../components/ui/Footer'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Navbar from '../components/ui/Navbar'
import Profile from '../pages/Profile'
import ProfileUser from '../pages/ProfileUser'
import Profiles from '../pages/Profiles'
import Register from '../pages/Register'
import CompleteRegister from '../pages/CompleteRegister'
import Edit from '../pages/Edit'

const Routers = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Profile />} path="/profile" />
      <Route element={<Register />} path="/register" />
      <Route element={<CompleteRegister />} path="/complete-register" />
      <Route element={<Profiles />} path="/profiles" />
      <Route element={<ProfileUser />} path="/profileuser" />
      <Route element={<Edit />} path="/edit" />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default Routers
