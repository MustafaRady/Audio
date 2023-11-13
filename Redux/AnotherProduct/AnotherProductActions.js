import axios from "axios";
import { AnotherProdcutActions } from "./AnotherProductReducer";    

export const getAnotherProducts= (brand)=>async(dispatch)=>{
    AnotherProdcutActions.getUsersRequest();
    try{
        const response = await axios.get("https://dummyjson.com/products");
        let arrayOfProducts = [];
        
        for(let i = 0 ; i<response.data.products.length ; i++){
            //response.data.products[i].brand == brand ?console.log({"Equal ":brand}):console.log("not Equal");
            if(response.data.products[i].brand == brand){
                arrayOfProducts.push(response.data.products[i]);
            }
        }
        dispatch(AnotherProdcutActions.getProductsSuccess(arrayOfProducts))
    }catch(error){
        AnotherProdcutActions.getProductsFailure(error);
    }
}