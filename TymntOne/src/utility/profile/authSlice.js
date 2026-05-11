import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const signupuser = createAsyncThunk(
    'auth/signupUser',
    async (userData,thunkAPI) =>{
        try {
            const res = await axios.post(`http://10.185.63.108:3200/api/auth/signup`,userData);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || 'Something went wrong'
            );
        }
    }
);

export const signInUser = createAsyncThunk(
    'auth/signInUser',
    async (userData,thunkAPI) =>{
        try {
            const res = await axios.post(`http://10.185.63.108:3200/api/auth/signin`,userData);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || 'Something went wrong'
            );
        }
    }
);
const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:null,
        isAuthenticated:false,
        loading:true,
        error:null,
    },
    reducers:{

    },

    extraReducers:(builder)=>{
        builder
        .addCase(signupuser.pending, (state)=>{
            state.loading=true
        })
        .addCase(signupuser.fulfilled, (state,action)=>{
            state.loading=false;
            state.user=action.payload;
            state.isAuthenticated=true;
        })
        .addCase(signupuser.rejected, (state)=>{
            state.loading=false;
            state.user=null;
            state.isAuthenticated=false;
        })
        .addCase(signInUser.pending, (state)=>{
            state.loading=true;
        })
        .addCase(signInUser.fulfilled, (state)=>{
            state.loading=false;
            state.isAuthenticated=true;
        })
        .addCase(signInUser.rejected, (state)=>{
            state.loading=false;
            state.isAuthenticated=false;
        })
    }
});

export const {} = authSlice.actions;
export default authSlice.reducer;