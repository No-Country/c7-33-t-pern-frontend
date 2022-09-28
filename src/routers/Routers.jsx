import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import ProfileCard from '../components/home/ProfileCard'

const Routers = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Profile />} path="/profile/:id" />
      <Route element={<Register />} path="/register" />
      <Route element={<ProfileCard />} path="/profilecard" />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default Routers
