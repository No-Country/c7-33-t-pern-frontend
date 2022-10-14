import {Container, Grid} from '@mui/material'
import {useState} from 'react'

import ProfileContainer from '../components/profiles/ProfileContainer'
import Filter from '../components/search/Filter'
import Spinner from '../components/ui/Spinner'
import techCategories from '../constants/technologies'
import usersMock from '../constants/users'

const Profiles = () => {
  const [users, setUsers] = useState(usersMock)
  const [techCategory, setTechCategory] = useState(techCategories)
  const [filters, setFilters] = useState(techCategories)

  /* TODO: Implementar Spinner */
  const loading = false

  if (loading) return <Spinner />

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
      <Grid container px={6}>
        <Grid item xs={12}>
          <Filter
            filters={filters}
            setFilters={setFilters}
            setUsers={setUsers}
            techCategory={techCategory}
          />
        </Grid>
        <Grid item xs={12}>
          <ProfileContainer users={users} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Profiles
