import {Container} from '@mui/material'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

// import userDetails from '../constants/userDetails'
import ProfileCardDetails from '../components/profile/ProfileCardDetails'

const URL_API = 'http://localhost:8000/api/v1'

const Profile = () => {
  const [user, setUser] = useState({})
  const {userId} = useParams()

  useEffect(() => {
    const getUser = async () => {
      const {data: response} = await axios(`${URL_API}/profiles/${userId}`, {
        headers: {
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY2MzAxMDYyLCJleHAiOjE2Njg4OTMwNjJ9.vMSKIKyWFeSQQRSwgjUC97wOaMFo-cNnqXGZ-My3sFs`,
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
