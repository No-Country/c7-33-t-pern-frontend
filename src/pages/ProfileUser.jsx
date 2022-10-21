import {Container} from '@mui/material'
import {useEffect, useState} from 'react'
import axios from 'axios'

import userDetails from '../constants/userDetails'
import ProfileCardDetailsUser from '../components/profile/ProfileCardDetailsUser'
// import ProfileCardDetails from '../components/profile/ProfileCardDetails'

const ProfileUser = () => {
  // const [user, setuser] = useState(userDetails)
  const userLogged = JSON.parse(localStorage.getItem('userInfo'))

  const URL_API = 'https://tindev-depoy.onrender.com/api/v1'
  const [user, setUser] = useState({})
  const token = localStorage.getItem('token')

  useEffect(() => {
    const getUser = async () => {
      const {data: response} = await axios(`${URL_API}/profiles/${userLogged.id}`, {
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
      <ProfileCardDetailsUser user={user} />
    </Container>
  )
}

export default ProfileUser
