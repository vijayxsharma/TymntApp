import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const loadUser = createAsyncThunk('auth/loadUser', async ()=>{
    const token = await AsyncStorage.getItem('token');
    return token;
    }
);

export const signUpUser = createAsyncThunk(
    'auth/signupUser',
    async (userData) =>{
        const res = await axios.post(`http://10.185.63.108:3200/api/auth/signup`,userData);
                    await AsyncStorage.setItem('token', String(res.data.token))
        return res.data;
    }
);

export const signInUser = createAsyncThunk(
    'auth/signInUser',
    async (userData) =>{
        const res = await axios.post(`http://10.185.63.108:3200/api/auth/signin`,userData);
                    await AsyncStorage.setItem('token', String(res.data.token));
        return res.data;
    }
);

export const userLogout = createAsyncThunk(
    'auth/logout',
    async ()=>{
        await AsyncStorage.removeItem('token');
        return null;
    }
);

const authSlice = createSlice({
    name:'auth',
    initialState:{
        user:null,
        token:null,
        isAuthenticated:false,
        loading:false,
        error:null,
    },
    reducers:{

    },

    extraReducers:(builder)=>{
        builder
        .addCase(loadUser.fulfilled, (state,action)=>{
            if(action.payload){
                state.token = action.payload;
                state.isAuthenticated = true;
            }
        })
        .addCase(signUpUser.pending, (state)=>{
            state.loading=true
        })
        .addCase(signUpUser.fulfilled, (state,action)=>{
            console.log("signUp successfully");
            
            state.loading=false;
            state.token = action.payload.token;
            state.isAuthenticated=true;
        })
        .addCase(signUpUser.rejected, (state,action)=>{
            console.log("signUp error");
            state.loading=false;
            state.error=action.payload;
            state.isAuthenticated=false;
        })
        .addCase(signInUser.pending, (state)=>{
            state.loading=true;
        })
        .addCase(signInUser.fulfilled, (state,action)=>{
            console.log("signIn successfully");
            state.loading=false;
            state.token = action.payload.token;
            state.isAuthenticated=true;
        })
        .addCase(signInUser.rejected, (state,action)=>{
            console.log("signIn error");
            state.loading=false;
            state.error = action.payload;
            state.isAuthenticated=false;
        })
        .addCase(userLogout.fulfilled, (state)=>{
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;
        })
    }
});

export const {} = authSlice.actions;
export default authSlice.reducer;