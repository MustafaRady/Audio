import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading :false , 
    error : null,
    cart : [],
    totalPrice:0,
    totalQuantity:0
}

const cartSlice = createSlice({
    name : "cartSlice",
    initialState,
    reducers : {
        applyToCartRequest:(state)=>{
            state.loading = true;
        },
        addToCartSuccess:(state,action)=>{
            state.loading = false;
            state.error = null;
            state.cart = action.payload;
        },
        removeFromCart:(state,action)=>{
            state.loading = false;
            state.error = null;
            state.cart = action.payload;
        }
        ,
        calculateTotal:(state,action)=>{
            state.loading = false;
            state.error = null;
            state.totalPrice = action.payload;
        },
        calculateTotalAmount:(state,action)=>{
            state.loading = false;
            state.error = null;
            state.totalQuantity = action.payload;
            console.log("Quantity : "+state.totalQuantity)
        }
        ,
        incrementItemInCart:(state,action)=>{
            state.loading = false;
            state.error = null;
        }
        ,
        applyToCartFailure:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
            state.cart = null;
        }
}})

export const cartActions = cartSlice.actions;
export default cartSlice  ; 