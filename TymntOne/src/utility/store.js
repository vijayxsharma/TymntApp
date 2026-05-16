import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import profileSlice from './profileSlice'
import serviceRequestSlice from './serviceRequestSlice'
import appModeSlice from './appModeSlice'

export const store = configureStore({
  reducer: {
    authSlice,
    profileSlice,
    serviceRequestSlice,
    appModeSlice
  },
})