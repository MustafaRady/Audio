import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading :false , 
    error : null,
    comments : [],
}

const commentsSlice = createSlice({
    name : "commentsSlice",
    initialState,
    reducers : {
        getCommentsRequest:(state)=>{
            state.loading = true;
        },
        getCommentsSuccess:(state,action)=>{
            state.loading = false;
            state.error = null;
            state.comments = action.payload;
        },
        getCommentsFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
            state.comments = null;
        }
}})

export const CommentsActions = commentsSlice.actions;
export default commentsSlice  ; 