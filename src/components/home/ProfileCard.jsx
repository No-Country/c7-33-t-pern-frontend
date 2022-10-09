/* eslint-disable react/no-array-index-key */
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  CircularProgress,
  Collapse,
  Divider,
  Rating,
  Stack,
  Tooltip,
  Typography,
  Zoom,
} from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import IconButton from '@mui/material/IconButton'
import {styled} from '@mui/material/styles'
import {useState} from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ExpandMore = styled((props) => {
  const {expand, ...other} = props

  return <IconButton {...other} />
})(({theme, expand}) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

const ProfileCard = ({user}) => {
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className="card-fondo" sx={{width: 300}}>
      <CardHeader subheader={user.title} title={`${user.name} ${user.lastname}`} />
      <CardMedia
        alt={`${user.name} ${user.lastname}`}
        component="img"
        height="194"
        image={user.avatar}
      />
      <CardContent>
        <div style={{alignItems: 'center', display: 'flex'}}>
          <Rating readOnly name="read-only" precision={0.5} size="small" value={user.rating} />
          <div style={{flex: 1}} />
          <Typography>ver bio</Typography>
          <ExpandMore
            aria-expanded={expanded}
            aria-label="show more"
            expand={expanded}
            onClick={handleExpandClick}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </div>
        <Collapse unmountOnExit in={expanded} timeout="auto">
          <Typography color="text.secondary" variant="body2">
            {user.bio}
          </Typography>
        </Collapse>
        <Stack
          alignItems="center"
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          mb={1}
          mt={1}
          style={{height: 60}}
        >
          {user.technologies.map((technology, idx) => {
            if (idx < 5) {
              return (
                <Chip
                  key={technology}
                  color="primary"
                  icon={<CodeIcon />}
                  label={technology}
                  size="small"
                  sx={{mb: 1, mr: 1}}
                />
              )
            }

            return null
          })}
        </Stack>
        <Stack alignItems="center" direction="row" flexWrap="wrap" justifyContent="center">
          <CardActions disableSpacing>
            <Button
              color="primary"
              size="medium"
              startIcon={<ThumbUpOutlinedIcon />}
              style={{margin: '0 auto'}}
              variant="outlined"
            >
              conectar
            </Button>
          </CardActions>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default ProfileCard
