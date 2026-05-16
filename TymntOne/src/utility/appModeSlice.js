import { createSlice } from "@reduxjs/toolkit";

const appModeSlice = createSlice({
    name:'appMode',
    initialState:{
        activeMode:'consumer',
    },
    reducers:{
        setAppMode:(state,action)=>{
            state.activeMode = action.payload;
        }
    }
});

export const {} = appModeSlice.actions;
export default appModeSlice.reducer;