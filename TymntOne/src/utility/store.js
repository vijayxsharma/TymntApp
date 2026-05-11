import { configureStore } from '@reduxjs/toolkit'
import authSlice from './profile/authSlice'
// import modeToggleSlice from './home/modeToggleSlice'

export const store = configureStore({
  reducer: {
    // modeToggleSlice,
    authSlice,
  },
})