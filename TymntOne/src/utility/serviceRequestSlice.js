import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice, isPending } from "@reduxjs/toolkit";
import axios from "axios";

export const newServiceRequest = createAsyncThunk(
    'serviceRequest',
    async(newRequestData)=>{
        const res = await axios.post(`http://10.185.63.108:3200/api/request`,newRequestData);
        // console.log(res.data.request);
        return res.data.request;
    }
)

export const getAllRequests = createAsyncThunk(
    'getRequest',
    async()=>{
        const res = await axios.get(`http://10.185.63.108:3200/api/request?status=OPEN`);
        return res.data.requests || [];
    }
)

export const deleteRequest = createAsyncThunk(
    'delete/request',
    async(id)=>{
        const res = await axios.delete(`http://10.185.63.108:3200/api/request/${id}`);
        console.log(res.data)
        return id;
    }
)

export const updateRequest = createAsyncThunk(
    'update/Request',
    async({id,newData})=>{
        const res = await axios.put(`http://10.185.63.108:3200/api/request/${id}`,newData);
        console.log(res.data.updatedRequest)
        return res.data.updatedRequest;
    }
)

export const requestFilter = createAsyncThunk(
    'filterRequest',
    async({category="", search=""})=>{
        const res = await axios.get(`http://10.185.63.108:3200/api/filteredRequest?category=${category}&search=${search}`);
        return res.data.request;
    }
)

const serviceRequestSlice = createSlice({
    name:'serviceRequests',
    initialState:{
        loading:false,
        error:null,
        allRequests:[],
        filteredRequests:[],
        isFiltering:false
    },
    reducers:{
        clearFilterRequests:(state)=>{
            state.filteredRequests = [];
            state.isFiltering = false;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(newServiceRequest.pending,(state)=>{
            state.loading = true;
        })
        .addCase(newServiceRequest.fulfilled, (state,action)=>{
            state.loading = false;
            if(!Array.isArray(state.allRequests)){
                state.allRequests = [];
            }
            if(action.payload.status === "OPEN"){
                state.allRequests.unshift(action.payload);
                if(state.isFiltering){
                    state.filteredRequests.unshift(action.payload);
                }
            }
        })
        .addCase(newServiceRequest.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(getAllRequests.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getAllRequests.fulfilled, (state,action)=>{
            state.loading = false,
            state.allRequests = Array.isArray(action.payload) ? action.payload : [];
        })
        .addCase(getAllRequests.rejected, (state,action)=>{
            state.loading = false,
            state.error = action.error.message;
        })
        .addCase(deleteRequest.pending, (state,action)=>{
            state.loading = true;
        })
        .addCase(deleteRequest.fulfilled,(state,action)=>{
            state.loading = false;
            if(!Array.isArray(state.allRequests)){
                state.allRequests = [];
                return;
            }
            state.allRequests = state.allRequests.filter((elm)=>elm._id !== action.payload);
            state.filteredRequests =
                  state.filteredRequests.filter(
                  (item)=> item._id !== action.payload
            );
        })
        .addCase(deleteRequest.rejected, (state,action)=>{
            state.loading = false
            state.error=action.payload
        })
        .addCase(updateRequest.fulfilled,(state,action)=>{
            state.loading = false;
            if(!Array.isArray(state.allRequests )){
                state.allRequests = [];
                return;
            }
            state.allRequests  = state.allRequests .map((elm)=>
                elm._id === action.payload._id ?
                action.payload : elm
            )
            state.filteredRequests = state.filteredRequests.map((elm)=>
                elm._id === action.payload._id ?
                action.payload : elm
            )
        })
        .addCase(requestFilter.pending,(state,action)=>{
                state.loading = true;
                state.isFiltering = true
        })
        .addCase(requestFilter.fulfilled,(state,action)=>{
                state.loading = false;
                state.filteredRequests =
                Array.isArray(action.payload)
                ? action.payload
                : [];
        })
        .addCase(requestFilter.rejected, (state,action)=>{
                state.loading = false;
                state.error = action.error.message;
        })
    }
})

export const {clearFilterRequests} = serviceRequestSlice.actions;
export default serviceRequestSlice.reducer;