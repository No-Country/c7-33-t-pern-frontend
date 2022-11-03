import {Filter8Sharp} from '@mui/icons-material'
import {Container, Grid, Input} from '@mui/material'
import axios from 'axios'
import {useEffect, useState} from 'react'

import ProfileContainer from '../components/profiles/ProfileContainer'
import Filter from '../components/search/Filter'


const URL_API = 'https://tindev-depoy.onrender.com/api/v1'

const Profiles = () => {
  const [users, setUsers] = useState([])
  const [techCategory, setTechCategory] = useState([])
  const [filters, setFilters] = useState([])
  const [search, setSearch] = useState('')
  const token = localStorage.getItem('token')



  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    const getTechnologies = async () => {
      const {data: response} = await axios(`${URL_API}/technologies`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })

      const techCategories = [
        {
          id: '1',
          name: 'TECHNOLOGIES',
          tech: response.data,
        },
      ]

      setTechCategory(techCategories)
      setFilters(techCategories)
    }

    getTechnologies()
  }, [])

  useEffect(() => {
    let filterTechnologies
    let query = ''

    if (filters.length > 0) {
      if (filters[0].tech.length > 0) {
        filterTechnologies = filters[0].tech.map((technology) => technology.id)
        query = `&filterTechnologies=${JSON.stringify(filterTechnologies)}`
      }
    }

    if (search.length > 0) {
      query = `&name=${search}&title=${search}`
    }

    const getTechnologies = async () => {
      const {data: response} = await axios(`${URL_API}/profiles?${query}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      const array = []

      if (response?.status === 'success') {
        response?.data.forEach((profile) => {
          array.push({
            id: profile.id,
            name: profile.name,
            lastname: profile.lastName,
            title: profile.title,
            avatar: profile.avatar,
            rating: 5,
            bio: profile.biography,
            technologies: profile.Technologies.map((tech) => tech.name),
          })
        })
      }
      setUsers(array)
    }

    getTechnologies()
  }, [filters, search])

  return (
    <>
      <div className="search-container">
        <Input
          placeholder="Buscar por Nombre o Branch"
          sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%'}}
          type="search"
          onChange={handleSearch}
        />
      </div>

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
    </>
  )
}

export default Profiles
