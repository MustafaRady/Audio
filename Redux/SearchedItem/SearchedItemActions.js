import axios from "axios";
import { SearchedItemActions } from "./SearchedItemReducer";

export const getAllPhones = ()=>async (dispatch)=>{
  
    dispatch(SearchedItemActions.getUsersRequest());
    try{
        const response = await axios.get("https://dummyjson.com/products");
        let arrayOfProducts = [];
        console.log(response)
        dispatch(SearchedItemActions.getUsersSuccess(response.data.products));
    }catch(err){
        dispatch(SearchedItemActions.getUsersFailure(err));
    }
}

export const getPhoneByCategory = (brand)=>async (dispatch)=>{
    
    dispatch(SearchedItemActions.getUsersRequest());
    try{
        const response = await axios.get("https://dummyjson.com/products");
        let arrayOfProducts = [];
        for(let i = 0 ; i < response.data.products.length ; i ++){
            if(response.data.products[i].brand == brand){
                arrayOfProducts.push(response.data.products[i])
            }
        }
        dispatch(SearchedItemActions.getUsersSuccess(arrayOfProducts));
    }catch(err){
        dispatch(SearchedItemActions.getUsersFailure(err));
    }
}