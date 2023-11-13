import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading :false , 
    error : null,
    userDetails : {},
}

const userAuthSlice = createSlice({
    name : "userAuthReducer",
    initialState,
    reducers : {
        getUserRequest:(state,action)=>{
            state.loading = true;
        },
        getUserSuccess:(state,action)=>{
            state.loading = false;
            state.error = null;
            state.userDetails = action.payload;
        },
        getUserFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
            state.userDetails = null;
        }
}})

export const userAuthActions = userAuthSlice.actions;
export default userAuthSlice  ; 