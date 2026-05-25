import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const AcceptRequest = createAsyncThunk(
    'accept-request',
    async ({id})=>{
        const res = await axios.patch(`http://10.185.63.108:3200/api/accept-request/${id}`)
        // console.log(res)
        return res.data;
    }
)
const requestSlice = createSlice({
    name:'requestSlice',
    initialState:{
        loading:false,
        error:null,
        serviceDetail:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(AcceptRequest.fulfilled, (state,action)=>{
            state.serviceDetail=action.payload
        })
        .addCase(AcceptRequest.rejected,(state,action)=>{
            state.error=action.error.message;
        })
    }
})

export const {} = requestSlice.actions;
export default requestSlice.reducer;