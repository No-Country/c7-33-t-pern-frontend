import {Grid} from '@mui/material'

import ProfileCard from './ProfileCard'

const ProfileContainer = ({users}) => (
  <Grid container justifyContent="center" mb={6} mt={1} spacing={2}>
    {users.map((user) => (
      <Grid key={user.id} item>
        <ProfileCard user={user} />
      </Grid>
    ))}
  </Grid>
)

export default ProfileContainer
