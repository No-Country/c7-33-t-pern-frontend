import {Grid} from '@mui/material'

import usersP from '../../constants/userPlus'

import ProfilePlus from './ProfilePlus'

const ProfilePlusContainer = () => {
  console.log('')

  return (
    <Grid container justifyContent="center" mb={6} mt={1} spacing={2}>
      {usersP.map((userP) => (
        <Grid key={userP.id} item>
          <ProfilePlus userP={userP} />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProfilePlusContainer
