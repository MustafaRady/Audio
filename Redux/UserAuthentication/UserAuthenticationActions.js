import axios from "axios";
import { userAuthActions } from "./UserAuthenticationReducer";

export const login = (User)=>async (dispatch)=>{
    
    dispatch(userAuthActions.getUserRequest());
    const {username , password }= User;
    console.log(username,password)
    try{
        let response = await axios.post(
            "https://dummyjson.com/auth/login",
            {
              username: "atuny0",
              password: "9uQFF1Lh",
            },
            {
            headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          
        
          dispatch(userAuthActions.getUserSuccess(response.data));
        
       
    }catch(err){
      dispatch(userAuthActions.getUserFailure("Invalid Credentials"))
        
    }
}


export const logout=()=>async (dispatch)=>{
  dispatch(userAuthActions.getUserRequest());
  dispatch(userAuthActions.getUserSuccess({}));
  
}


