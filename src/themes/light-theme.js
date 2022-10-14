import {createTheme} from '@mui/material'

const lightTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#222831',
      paper: '#393E46',
    },
    primary: {
      main: '#F38181',
      contrastText: '#f9f9f9',
    },
    secondary: {
      main: '#FCE38A',
    },
    info: {
      main: '#EAFFD0',
    },
    success: {
      main: '#95E1D3',
      contrastText: '#222831',
    },
    error: {
      main: '#e00232',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#F38181',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
  },
})

export default lightTheme
