import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading :false , 
    error : null,
    searchedItems : [],
}

const searchedItemSlice = createSlice({
    name : "searchedItemReducer",
    initialState,
    reducers : {
        getUsersRequest:(state,action)=>{
            state.loading = true;
            console.log("Requesting ...")
        },
        getUsersSuccess:(state,action)=>{
            state.loading = false;
            state.error = null;
            state.searchedItems = action.payload;
        },
        getUsersFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
            state.searchedItems = null;
        }
}})

export const SearchedItemActions = searchedItemSlice.actions;
export default searchedItemSlice  ; 