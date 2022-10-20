import {Grid} from '@mui/material'

import ProfileCardUser from './ProfileCardUser'

const ProfileContainerUser = ({users}) => (
  <Grid container justifyContent="center" mb={6} mt={1} spacing={2}>
    {users.map((user) => (
      <Grid key={user.id} item>
        <ProfileCardUser user={user} />
      </Grid>
    ))}
  </Grid>
)

export default ProfileContainerUser
