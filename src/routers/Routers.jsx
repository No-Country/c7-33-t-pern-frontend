import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import ProfilePlusContainer from '../components/home/ProfilePlusContainer'
import Register from '../pages/Register'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import Search from '../pages/Search'

const Routers = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<ProfilePlusContainer />} path="/profile" />
      <Route element={<Register />} path="/register" />
      <Route element={<Search />} path="/search" />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default Routers
