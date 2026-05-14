import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userProfile = createAsyncThunk(
    'user/profile',
    async()=>{
        const res = await axios.get(`http://10.185.63.108:3200/api/user/profile`);
                    await AsyncStorage.setItem('token', String(res.data.token))
        return res.data;
    }
)

const profileSlice = createSlice({
    name:'profile',
    initialState:{
        user:null,
        token:null,
        isAuthenticated:false,
        loading:false,
        error:null,
    },

    reducers:{},

    extraReducers:(builder)=>{
        builder
        .addCase(userProfile.fulfilled, (state,action)=>{
                    state.user = action.payload.user;
                    state.loading = false;
                    state.error = null;
                    state.token = action.payload.token;
                })
    }
})

export const {} = profileSlice.actions;
export default profileSlice.reducer;