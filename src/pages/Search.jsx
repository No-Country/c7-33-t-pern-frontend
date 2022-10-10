import {useState} from 'react'

import ProfileContainer from '../components/home/ProfileContainer'
import Filter from '../components/search/Filter'
import techCategories from '../constants/technologies'
import usersMock from '../constants/users'

const Search = () => {
  const [techCategory, setTechCategory] = useState(techCategories)
  const [users, setUsers] = useState(usersMock)
  const [filters, setFilters] = useState([])

  return (
    <>
      <Filter
        filters={filters}
        setFilters={setFilters}
        setUsers={setUsers}
        techCategory={techCategory}
      />
      <ProfileContainer users={users} />
    </>
  )
}

export default Search
