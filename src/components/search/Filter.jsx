import {Box, Button, Checkbox, FormControlLabel, Drawer, Chip, Divider} from '@mui/material'
import {useCallback, useState} from 'react'
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings'

const Filter = ({filters, setFilters, setUsers, techCategory}) => {
  const [drawerState, setDrawerState] = useState(false)

  const chechedCategory = useCallback(
    (categoryName) => {
      const total = techCategory.filter((el) => el.name === categoryName)[0].tech.length
      const total2 = filters.filter((el) => el.name === categoryName)[0]?.tech.length

      return total !== total2 && total2 > 0
    },
    [filters]
  )

  const checkedTech = useCallback(
    (tech) => {
      const onlyTechs = filters
        .map((el) => [...el.tech])
        .flat()
        .map((el) => el.name)

      return onlyTechs.includes(tech)
    },
    [filters]
  )

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    if (!open) {
      console.log(filters)

      const onlyTechs = filters
        .map((el) => [...el.tech])
        .flat()
        .map((el) => el.id)

      console.log('categorías de tecnologías a pedir en el backend: ', onlyTechs)
      console.log('Disparar fetch al Backend, setear el nuevo estado con los perfiles filtrados')
      /* setUsers */
    }

    setDrawerState(open)
  }

  const handleChangeCategory = (_, category) => {
    const filteredCategory = filters.filter((el) => el.name === category.name)

    if (filteredCategory.length > 0) {
      const filteredCategory = filters.filter((el) => el.name !== category.name)

      return setFilters([...filteredCategory])
    }

    return setFilters([...filters, category])
  }

  const handleChangeTechnology = (_, category, tech) => {
    const filteredCategory = filters.filter((el) => el.name === category.name)

    if (filteredCategory.length === 0) {
      setFilters([
        ...filters,
        {
          id: category.id,
          name: category.name,
          tech: [tech],
        },
      ])
    } else if (filteredCategory[0].tech.includes(tech)) {
      const rest = filters.filter((el) => el.name !== category.name)
      const techFiltered = filteredCategory[0].tech.filter((el) => el.name !== tech.name)

      if (techFiltered.length === 0) {
        setFilters([...rest])
      } else {
        setFilters([...rest, {...filteredCategory[0], tech: [...techFiltered]}])
      }
    } else {
      const rest = filters.filter((el) => el.name !== category.name)

      setFilters([...rest, {...filteredCategory[0], tech: [...filteredCategory[0].tech, tech]}])
    }
  }

  return (
    <Box py={1}>
      <Button
        color="info"
        startIcon={<DisplaySettingsIcon />}
        variant="contained"
        onClick={toggleDrawer(true)}
      >
        Aplicar Filtros
      </Button>
      <Drawer anchor="left" open={drawerState} onClose={toggleDrawer(false)}>
        <Box m={2} role="presentation" sx={{width: 200}}>
          <Box mb={2} sx={{display: 'flex', justifyContent: 'center'}}>
            <Chip
              color="info"
              icon={<DisplaySettingsIcon />}
              label="FILTROS"
              size="medium"
              sx={{p: 2, borderRadius: 2}}
            />
          </Box>
          <Divider />
          {techCategory.map((techCat) => (
            <div key={techCat.name}>
              {/* TODO: Separar este map en otro componente */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={!!(filters.filter((el) => el.name === techCat.name).length > 0)}
                    indeterminate={chechedCategory(techCat.name)}
                    onChange={(event) => handleChangeCategory(event, techCat)}
                  />
                }
                label={techCat.name}
              />
              {techCat.tech.map((tech) => (
                <Box key={tech.name} sx={{display: 'flex', flexDirection: 'column', ml: 3}}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkedTech(tech.name)}
                        onChange={(event) => handleChangeTechnology(event, techCat, tech)}
                      />
                    }
                    label={tech.name}
                  />
                </Box>
              ))}
              <Divider />
            </div>
          ))}
        </Box>
      </Drawer>
    </Box>
  )
}

export default Filter
