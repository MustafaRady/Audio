import { createStore,applyMiddleware } from "redux";
import thunk from  "redux-thunk"; 
import RootReducers from "./RootReducer.js";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = RootReducers ; 
const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store; 

