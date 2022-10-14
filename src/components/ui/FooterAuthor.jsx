import {Box, Grid, Typography, useTheme} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const FooterAuthor = ({author}) => {
  const {palette} = useTheme()

  return (
    <Grid
      container
      mb={1}
      style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
    >
      <Grid item>
        <Typography variant="body1">{author.name}</Typography>
      </Grid>
      <Grid item>
        <div style={{flex: 1}} />
      </Grid>
      <Grid item>
        <Box style={{display: 'flex'}}>
          {author.linkedin && (
            <a
              href={author.linkedin}
              rel="noreferrer"
              style={{color: palette.background.paper}}
              target="_blank"
            >
              <LinkedInIcon className="icon" />
            </a>
          )}
          {author.github && (
            <a
              href={author.github}
              rel="noreferrer"
              style={{color: palette.background.paper}}
              target="_blank"
            >
              <GitHubIcon className="icon" />
            </a>
          )}
          {author.email && (
            <a
              href={`mailto:${author.email}`}
              rel="noreferrer"
              style={{color: palette.background.paper}}
            >
              <EmailIcon className="icon" />
            </a>
          )}
        </Box>
      </Grid>
    </Grid>
  )
}

export default FooterAuthor
