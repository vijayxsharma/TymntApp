import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const checkProfileComplete = createAsyncThunk(
    'checkProfileComplete',
    async () => {
        const res = await axios.get("http://10.185.63.108:3200/api/provider/isProfileComlete");
        console.log(res.data)
        return res.data;
    }
)

export const createServiceProvider = createAsyncThunk(
    'createProvider',
    async(providerData)=>{
        const res = await axios.post("http://10.185.63.108:3200/api/provider",providerData);
        console.log(res.data)
        return res.data;
    }
)

const providerSlice = createSlice({
    name:'providerSlice',
    initialState:{
        loading:false,
        error:null,
        isProviderProfileCompleted:false,
        provider:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(checkProfileComplete.fulfilled,(state,action)=>{
            state.isProviderProfileCompleted = action.payload.isProviderProfileCompleted;
        })
        .addCase(checkProfileComplete.rejected,(state,action)=>{
            console.log(error)
            state.error = action.payload;
        })
        .addCase(createServiceProvider.fulfilled, (state,action)=>{
            state.provider = action.payload;
        })
        .addCase(createServiceProvider.rejected,(state,action)=>{
            state.error = action.payload;
        })
    }
})

export const {} = providerSlice.actions;
export default providerSlice.reducer;