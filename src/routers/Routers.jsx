import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom'
import {useSelector} from 'react-redux'

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
import ProtectedRoutes from '../components/protectedRoutes/protectedRoutes'
import Spinner from '../components/ui/Spinner'

const Routers = () => {
  const isLoading = useSelector((state) => state.isLoading)

  return (
    <HashRouter>
      {isLoading && <Spinner />}
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<ProtectedRoutes />}>
          <Route element={<Edit />} path="/edit" />
          <Route element={<Profile />} path="/profile/:userId" />
          <Route element={<CompleteRegister />} path="/complete-register" />
          <Route element={<Profiles />} path="/profiles" />
          <Route element={<ProfileUser />} path="/profileuser" />
          <Route element={<Edit />} path="/edit" />
        </Route>
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default Routers
