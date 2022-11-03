import {Container} from '@mui/material'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {setIsLoading} from '../store/slices/isLoading.slice'
import ProfileCardDetailsUser from '../components/profile/ProfileCardDetailsUser'
import { useNavigate } from 'react-router-dom'
// import ProfileCardDetails from '../components/profile/ProfileCardDetails'

const ProfileUser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userLogged = JSON.parse(localStorage.getItem('userInfo'))

  const URL_API = 'https://tindev-depoy.onrender.com/api/v1'
  const [user, setUser] = useState({})
  const token = localStorage.getItem('token')

  useEffect(() => {
    const getUser = async () => {
      dispatch(setIsLoading(true))
       await axios.get(`${URL_API}/profiles/${userLogged?.Profile?.id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }).then(res => setUser(response.data))
      .catch((error) => {
        if (error.response?.status === 404) {
          navigate('/complete-register')
          dispatch(setIsLoading(false))
          alert('Por favor complete su perfil')
        } else {
          console.log(error.response)
        }
      })
    }

    getUser()
  }, [])

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 210px - 69px)',
      }}
    >
      <ProfileCardDetailsUser user={user} />
    </Container>
  )
}

export default ProfileUser
