import AppProvider from './context/AppProvider'
import Routers from './routers/Routers'

const App = () => (
  <AppProvider>
    <Routers />
  </AppProvider>
)

export default App
