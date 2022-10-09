import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Box} from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

const pages = [
  {name: 'Login', location: '/login'},
  {name: 'Profile', location: '/profile'},
  {name: 'Register', location: '/register'},
  {name: 'Search', location: '/search'},
]
const settings = [
  {name: 'Profile', location: '/profile'},
  {name: 'Logout', location: '/logout'},
]

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              aria-label="account of current user"
              color="inherit"
              size="large"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              keepMounted
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              id="menu-appbar"
              open={Boolean(anchorElNav)}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link style={{color: 'inherit', textDecoration: 'none'}} to={page.location}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Link
            style={{
              color: 'inherit',
              display: {xs: 'none', md: 'flex'},
              textDecoration: 'none',
            }}
            to="/"
          >
            <div className="logo">
              <img alt="logo" className="logo-img" src="images\devmatch-logo-navbar.png" />
            </div>
          </Link>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{my: 2, color: 'white', display: 'block'}}
                onClick={handleCloseNavMenu}
              >
                <Link style={{color: 'inherit', textDecoration: 'none'}} to={page.location}>
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar
