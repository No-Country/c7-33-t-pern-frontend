import {ThemeProvider} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

import AppProvider from './context/AppProvider'
import lightTheme from './themes/light-theme'
import Routers from './routers/Routers'

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <AppProvider>
      <CssBaseline />
      <Routers />
    </AppProvider>
  </ThemeProvider>
)

export default App
