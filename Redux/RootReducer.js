import { combineReducers } from "redux";
import searchedItemSlice from "./SearchedItem/SearchedItemReducer";
import anotherProductSlice from "./AnotherProduct/AnotherProductReducer";
import userAuthSlice from "./UserAuthentication/UserAuthenticationReducer";
import cartSlice from "./ShoppingCart/ShoppingCartReducer";
import commentsSlice from "./Comments/CommentsReducer";

const RootReducers = combineReducers({
    searchedItems: searchedItemSlice.reducer,
    anotherProducts : anotherProductSlice.reducer,
    userAuthentication : userAuthSlice.reducer,
    shoppingCart : cartSlice.reducer,
    comments: commentsSlice.reducer,
})

export default RootReducers;