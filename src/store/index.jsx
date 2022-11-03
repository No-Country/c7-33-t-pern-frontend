import {configureStore} from '@reduxjs/toolkit'

// eslint-disable-next-line import/no-named-as-default
import isLoadingSlice from './slices/isLoading.slice'
import isLoggedSlice from './slices/isLogged.slice'

export default configureStore({
  reducer: {
    isLoading: isLoadingSlice,
    isLogged : isLoggedSlice
  },
})
