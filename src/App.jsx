import {ThemeProvider} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'

import lightTheme from './themes/light-theme'
import Routers from './routers/Routers'

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    <Routers />
  </ThemeProvider>
)

export default App
