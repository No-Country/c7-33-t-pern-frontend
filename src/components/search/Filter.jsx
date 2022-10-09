/* eslint-disable dot-notation */
import {useEffect, useState} from 'react'

import {Box, Button, Checkbox, FormControlLabel, Drawer} from '@mui/material'
import techCategories from '../../constants/technologies'

const Filter = () => {
  const [state, setState] = useState(false) // DRAWER
  const [checkedCat, setCheckedCat] = useState([]) // FRONTEND - BACKEND - ETC
  const [checked, setChecked] = useState([]) // REACT - VUE - NODE - ETC
  const [techCategory, setTechCategory] = useState(techCategories) // Respuesta de la Base de Datos - techCategories.js

  useEffect(() => {
    console.log({checkedCat})
  }, [checkedCat])

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState(open)
  }

  const handleChange1 = (event, algo) => {
    /* setChecked([event.target.checked, event.target.checked]) */
    /* 
    algo = [{id: 1, name: 'React}, {id: 2, name: 'Vue}]
    */
    setCheckedCat([...checkedCat, algo])
  }

  const handleChange2 = (event) => {
    event.stopPropagation()
    /*  setChecked([event.target.checked, checked[1]]) */
  }

  const list = () => (
    <Box role="presentation" sx={{width: 250}}>
      <div>
        {techCategory.map((techCat) => (
          <div key={techCat.name}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedCat.includes((el) => el === techCat.name)} // TODO
                  /*  indeterminate={checked[0] !== checked[1]} */
                  onChange={(event) => handleChange1(event, techCat.name)}
                />
              }
              label={techCat.name}
            />
            {techCat.tech.map((tech) => (
              <Box key={tech.name} sx={{display: 'flex', flexDirection: 'column', ml: 3}}>
                <FormControlLabel
                  control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
                  label={tech.name}
                />
              </Box>
            ))}
          </div>
        ))}
      </div>
    </Box>
  )

  return (
    <>
      <Button onClick={toggleDrawer(true)}>left</Button>
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        {list('left')}
      </Drawer>
    </>
  )
}

export default Filter
