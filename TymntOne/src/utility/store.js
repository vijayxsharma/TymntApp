import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import profileSlice from './profileSlice'
import serviceRequestSlice from './serviceRequestSlice'
import appModeSlice from './appModeSlice'
import providerSlice from './providerSlice/serviceProviderSlice'

export const store = configureStore({
  reducer: {
    authSlice,
    profileSlice,
    serviceRequestSlice,
    appModeSlice,
    providerSlice
  },
})