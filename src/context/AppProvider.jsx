import {useEffect, useMemo, useReducer} from 'react'

import appContext from './AppContext'
import authReducer from './reducers/authReducer'

const init = () => JSON.parse(window.localStorage.getItem('user')) || {logged: false}

const AppProvider = ({children}) => {
  const [user, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() => {
    if (!user) return
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  const value = useMemo(
    () => ({
      user,
      dispatch,
    }),
    [user]
  )

  return <appContext.Provider value={value}>{children}</appContext.Provider>
}

export default AppProvider
