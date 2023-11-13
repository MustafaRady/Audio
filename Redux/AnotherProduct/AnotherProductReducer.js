import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading :false , 
    error : null,
    anotherProducts : [],
}

const anotherProductSlice = createSlice({
    name : "anotherProductReducer",
    initialState,
    reducers : {
        getUsersRequest:(state,action)=>{
            state.loading = true;
        },
        getProductsSuccess:(state,action)=>{
            state.loading = false;
            state.error = null;
            state.anotherProducts = action.payload;
            
        },
        getProductsFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
            state.anotherProducts = null;
        }
}})

export const AnotherProdcutActions = anotherProductSlice.actions;
export default anotherProductSlice  ; 