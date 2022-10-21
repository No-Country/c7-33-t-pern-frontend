import {Container} from '@mui/material'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

// import userDetails from '../constants/userDetails'
import ProfileCardDetails from '../components/profile/ProfileCardDetails'

const URL_API = 'https://tindev-depoy.onrender.com/api/v1'

const Profile = () => {
  const [user, setUser] = useState({})
  const {userId} = useParams()
  const token = localStorage.getItem('token')

  useEffect(() => {
    const getUser = async () => {
      const {data: response} = await axios(`${URL_API}/profiles/${userId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })

      if (response.status === 'success') setUser(response.data)
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
      <ProfileCardDetails user={user} />
    </Container>
  )
}

export default Profile
