import {Container} from '@mui/material'
import {useState} from 'react'

import userDetails from '../constants/userDetails'
import ProfileCardDetails from '../components/profile/ProfileCardDetails'

const Profile = () => {
  const [user, setuser] = useState(userDetails)

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
