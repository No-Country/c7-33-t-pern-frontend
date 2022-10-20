import {createTheme} from '@mui/material'

const lightTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#222831',
      paper: '#393E46',
    },
    primary: {
      main: '#95E1D3',
      contrastText: '#393E46',
    },
    secondary: {
      main: '#F38181',
      contrastText: '#222831',
    },
    info: {
      main: '#EAFFD0',
    },
    success: {
      main: '#FCE38A',
    },
    error: {
      main: '#df1743',
    },
  },
  components: {
    MuiAppBar: {
      /*       defaultProps: {
        elevation: 0,
      }, */
      styleOverrides: {
        root: {
          backgroundColor: '#95E1D3',
        },
      },
    },
  },
})

export default lightTheme
