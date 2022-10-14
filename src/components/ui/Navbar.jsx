import {Box, useTheme} from '@mui/material'
import {Link, NavLink} from 'react-router-dom'
import {useState} from 'react'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import styled from '@emotion/styled'

const pages = [
  {name: 'Ingresar', location: '/login'},
  {name: 'Registrarse', location: '/register'},
  {name: 'Perfiles', location: '/profiles'},
  {name: 'Perfil', location: '/profile'},
]
const settings = [
  {name: 'Mi Perfil', location: '/profile'},
  {name: 'Salir', location: '/'},
]

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 4px;
  color: ${(props) => (props.color ? props.color : 'white')};
`

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const {palette} = useTheme()

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
    <AppBar position="static" sx={{height: 69}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FavoriteBorderIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}} />
          <Link style={{color: 'inherit', textDecoration: 'none'}} to="/">
            <Typography
              noWrap
              sx={{
                mr: 2,
                display: {xs: 'none', md: 'flex'},
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
              variant="h6"
            >
              TINDEV
            </Typography>
          </Link>

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
                  <StyledNavLink
                    color={palette.primary.contrastText}
                    style={({isActive}) => ({
                      backgroundColor: isActive && palette.background.paper,
                    })}
                    to={page.location}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </StyledNavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <FavoriteBorderIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}} />
          <Typography
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: {xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            variant="h5"
          >
            TINDEV
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{my: 2, color: 'white', display: 'block'}}
                onClick={handleCloseNavMenu}
              >
                <StyledNavLink
                  color={palette.primary.contrastText}
                  style={({isActive}) => ({
                    backgroundColor: isActive && palette.primary.dark,
                  })}
                  to={page.location}
                >
                  {page.name}
                </StyledNavLink>
              </Button>
            ))}
          </Box>

          <Box sx={{flexGrow: 0}}>
            <Tooltip title="Menú">
              <IconButton sx={{p: 0}} onClick={handleOpenUserMenu}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://img.freepik.com/free-photo/close-up-portrait-handsome-stylish-young-man-standing-profile-turn-head-with-beaming-smile-express-satisfaction-enthusiasm-standing-white-wall-pleased_176420-33957.jpg?size=626&ext=jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              keepMounted
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              id="menu-appbar"
              open={Boolean(anchorElUser)}
              sx={{mt: '45px'}}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <Link style={{color: 'inherit', textDecoration: 'none'}} to={setting.location}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar
