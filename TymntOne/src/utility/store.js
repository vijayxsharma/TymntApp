import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import profileSlice from './profileSlice'
import serviceRequestSlice from './serviceRequestSlice'

export const store = configureStore({
  reducer: {
    authSlice,
    profileSlice,
    serviceRequestSlice
  },
})