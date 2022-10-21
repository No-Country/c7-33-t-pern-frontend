import {Button, CardActions, Chip, Grid, Rating, Stack, Typography, useTheme} from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import {Link} from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email'

import FooterAuthor from '../ui/FooterAuthor'

const ProfileCardDetails = ({user}) => {
  const {palette} = useTheme()

  return (
    <Grid
      container
      alignItems="center"
      bgcolor={palette.background.paper}
      justifyContent="space-between"
      my={1}
      p={1}
      sx={{borderRadius: 2}}
    >
      <Grid item m="0 auto" sm={4} xs={12}>
        <img
          alt={`${user.name} ${user.lastname}`}
          src={user.avatar}
          style={{borderRadius: 4, display: 'block', width: '100%'}}
        />
      </Grid>
      <Grid item sm={8} xs={12}>
        <Typography textAlign="center" variant="h4">
          {user.name} {user.lastname}
        </Typography>
        <Typography textAlign="center" variant="h6">
          {user.title}
        </Typography>
        <Stack
          alignItems="center"
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          mb={1}
          style={{height: 60}}
        >
          <Typography variant="overline">Rating:</Typography>
          <Rating readOnly name="read-only" precision={0.5} size="small" value={user.rating} />
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          mb={1}
          mt={1}
          style={{height: 60}}
        >
          {user?.Technologies &&
            user?.Technologies?.map((technology, idx) => {
              if (idx < 10) {
                return (
                  <Chip
                    key={crypto.randomUUID()}
                    color="success"
                    icon={<CodeIcon />}
                    label={technology.name}
                    size="small"
                    sx={{mb: 1, mr: 1}}
                  />
                )
              }

              return null
            })}
        </Stack>
      </Grid>
      <Grid item mt={3} mx={3} xs={12}>
        <Typography variant="button">{user.bio}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack alignItems="center" direction="row" flexWrap="wrap" justifyContent="center">
          <CardActions disableSpacing>
            {/* <Button
              color="primary"
              href={`mailto:${user?.User?.email}`}
              size="large"
              startIcon={<EmailIcon className="icon" />}
              style={{margin: '10px'}}
              variant="contained"
            >
              Conectar!
            </Button> */}
            <Link style={{textDecoration: 'none'}} to="/profiles">
              <Button color="primary" size="large" style={{margin: '0 auto'}} variant="contained">
                Volver
              </Button>
            </Link>
          </CardActions>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default ProfileCardDetails
