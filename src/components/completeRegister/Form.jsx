import {Button, Grid, TextField, Typography, Container} from '@mui/material'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import {useDispatch} from 'react-redux'

import {setIsLoading} from '../../store/slices/isLoading.slice'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const animatedComponents = makeAnimated()
  const url = 'https://tindev-depoy.onrender.com/api/v1'
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [technologies, setTechnologies] = useState([])
  const [selectedTech, setSelectedTech] = useState(null)

  const mapTech = (technologies) => {
    const mappedTech = technologies.map((tech) => ({label: tech.name, value: tech.id}))

    setTechnologies(mappedTech)
  }

  const onSubmit = async (data) => {
    dispatch(setIsLoading(true))
    const profile = new FormData()

    profile.append('name', data.name)
    profile.append('lastName', data.lastName)
    profile.append('biography', data.biography)
    profile.append('title', data.title)
    profile.append('avatar', data.avatar[0])

    for (let i = 0; i < technologies.length; i += 1) {
      profile.append('TechIds', technologies[i].value)
    }

    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('userInfo'))

    const res = await axios
      .post(`${url}/profiles/user/${user.id}`, profile, {
        headers: {authorization: `Bearer ${token}`},
      })
      .then(async () => {
        navigate('/profiles')
        await axios
          .get(`${url}/users/${user.id}`, {
            headers: {authorization: `Bearer ${token}`},
          })
          .then((res) => {
            dispatch(setIsLoading(false))
            localStorage.setItem('userInfo', JSON.stringify(res.data.data))
          })
      })
  }

  useEffect(() => {
    axios.get(`${url}/technologies`).then((res) => {
      mapTech(res.data.data)
    })
  }, [])

  return (
    <Container className="container-form">
      <form style={{width: '100%'}} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nombre"
              type="text"
              variant="standard"
              {...register('name', {required: true})}
            />
            {errors.name && (
              <Typography color="error" variant="caption">
                El campo Nombre es obligatorio
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Apellido"
              type="text"
              variant="standard"
              {...register('lastName', {required: true})}
            />
          </Grid>
          {errors.lastName && (
            <Typography color="error" variant="caption">
              El campo Contraseña es obligatorio
            </Typography>
          )}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Titulo o Branch"
              type="text"
              variant="standard"
              {...register('title', {required: true})}
            />
            {errors.title && (
              <Typography color="error" variant="caption">
                El campo Titulo es obligatorio
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              label="Biografia"
              maxRows={3}
              type="text"
              variant="standard"
              {...register('biography', {required: true})}
            />
            {errors.biography && (
              <Typography color="error" variant="caption">
                El campo biografia es obligatorio
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="LinkedIn"
              type="text"
              variant="standard"
              {...register('linkedin', {required: true})}
            />
            {errors.email && (
              <Typography color="error" variant="caption">
                El campo LinkedIn es obligatorio
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="GitHub"
              type="text"
              variant="standard"
              {...register('github', {required: true})}
            />
            {errors.email && (
              <Typography color="error" variant="caption">
                El campo GitHub es obligatorio
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <label>
              <p>Foto de Perfil</p>
              <input label="Foto de Perfil" type="file" {...register('avatar', {required: true})} />
            </label>
            {errors.biography && (
              <Typography color="error" variant="caption">
                La foto de perfil es obligatoria
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <label>
              <p>Tecnologias que usas</p>
              <Select
                isMulti
                isSearchable
                components={animatedComponents}
                options={technologies}
                onChange={setSelectedTech}
              />
            </label>
          </Grid>
        </Grid>
        <Grid container mt={1} spacing={1}>
          <Grid item xs={6}>
            <Button fullWidth type="submit" variant="contained">
              Enviar
            </Button>
          </Grid>
          <Grid item mb={3} xs={6}>
            <Button fullWidth color="error" type="reset" variant="text">
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default Form
