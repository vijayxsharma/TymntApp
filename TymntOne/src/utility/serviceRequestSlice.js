import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, isPending } from "@reduxjs/toolkit";
import axios from "axios";

export const newServiceRequest = createAsyncThunk(
    'serviceRequest',
    async(newRequestData)=>{
        const res = await axios.post(`http://10.185.63.108:3200/api/new_request`,newRequestData);
                    await AsyncStorage.setItem('token', String(res.data.token))
        return res.data;
    }
)

export const getAllRequests = createAsyncThunk(
    'getRequest',
    async()=>{
        const res = await axios.get(`http://10.185.63.108:3200/api/new_request`);
        return res.data;
    }
)

const serviceRequestSlice = createSlice({
    name:'serviceRequests',
    initialState:{
        loading:false,
        error:null,
        serviceRequest:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(newServiceRequest.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(newServiceRequest.fulfilled, (state,action)=>{
            state.loading = false,
            state.serviceRequest = action.payload;
        })
        .addCase(newServiceRequest.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getAllRequests.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(getAllRequests.fulfilled, (state,action)=>{
            state.loading = false,
            state.serviceRequest = action.payload;
        })
        .addCase(getAllRequests.rejected, (state,action)=>{
            state.loading = false,
            state.serviceRequest = action.payload;
        })
    }
})

export const {} = serviceRequestSlice.actions;
export default serviceRequestSlice.reducer;