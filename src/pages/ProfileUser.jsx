import {Container} from '@mui/material'
import {useState} from 'react'

import userDetails from '../constants/userDetails'
import ProfileCardDetailsUser from '../components/profile/ProfileCardDetailsUser'

const ProfileUser = () => {
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
      <ProfileCardDetailsUser user={user} />
    </Container>
  )
}

export default ProfileUser
