import {createSlice} from '@reduxjs/toolkit'

const token = localStorage.getItem('token')
console.log(token==='')
export const isLoggedSlice = createSlice({
  name: 'isLogged',
  initialState: (token ==='' ? false : true),
  reducers: {
    setIsLogged: (state, action) => {
      const isLogged = action.payload

      return isLogged
    },
  },
})

export const {setIsLogged} = isLoggedSlice.actions

export default isLoggedSlice.reducer
