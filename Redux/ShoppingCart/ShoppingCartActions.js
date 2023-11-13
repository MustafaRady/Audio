import { cartActions } from "./ShoppingCartReducer"

export const addToCart = (Items, Item) => (dispatch) => {
    dispatch(cartActions.applyToCartRequest());
  
    let cart = [...Items.map((item) => JSON.parse(JSON.stringify(item)))];
  
    let itemAlreadyInCart = false;
  
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].item.id === Item.id) {
        itemAlreadyInCart = true;
        break;
      }
    }
  
    if (!itemAlreadyInCart) {
      cart.push({
        item: Item,
        quantity: 1,
      });
    }
  
    dispatch(cartActions.calculateTotal(calculateTotalPrice(cart)))
    dispatch(cartActions.calculateTotalAmount(calculateTotalQuantity(cart)))
    dispatch(cartActions.addToCartSuccess(cart));
  };
  

export const removeFromCart=(Items,id)=>(dispatch)=>{
    console.log("Removing from cart")
    let cart = [...Items.map((item) => JSON.parse(JSON.stringify(item)))];
    cart = cart.filter((item)=>item.item.id!==id)
    dispatch(cartActions.calculateTotal(calculateTotalPrice(cart)))
    dispatch(cartActions.calculateTotalAmount(calculateTotalQuantity(cart)))
    dispatch(cartActions.removeFromCart(cart));
}

export const incrementItemInCart=(Items,id)=>(dispatch)=>{
    dispatch(cartActions.applyToCartRequest());
  
    let cart = [...Items.map((item) => JSON.parse(JSON.stringify(item)))];
  
   
    for (let i = 0; i < cart.length; i++) {
      
      if (cart[i].item.id === id) {
        cart[i].quantity += 1;
        break;
      }
    }
    dispatch(cartActions.calculateTotal(calculateTotalPrice(cart)))
    dispatch(cartActions.calculateTotalAmount(calculateTotalQuantity(cart)))
    dispatch(cartActions.addToCartSuccess(cart));
}

export const decrementItemInCart=(Items,id)=>(dispatch)=>{
    dispatch(cartActions.applyToCartRequest());
  
    let cart = [...Items.map((item) => JSON.parse(JSON.stringify(item)))];
  
  
    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i].item.id+"---"+id)
      if (cart[i].item.id === id && cart[i].quantity>0) {
        console.log("Incrementing item in cart")
        cart[i].quantity -= 1;
        break;
      }
    }
  
    
    dispatch(cartActions.calculateTotal(calculateTotalPrice(cart)))
    dispatch(cartActions.calculateTotalAmount(calculateTotalQuantity(cart)))
    dispatch(cartActions.addToCartSuccess(cart));
}

function calculateTotalPrice(cart){
  let totalPrice = 0 ; 
  for(let i = 0 ; i < cart.length ; i++){
    totalPrice += cart[i].item.price * cart[i].quantity;
  }
  return totalPrice;
}

function calculateTotalQuantity(cart){
  let totalQuantity = 0 ; 
  for(let i = 0 ; i < cart.length ; i++){
    totalQuantity += cart[i].quantity;
  }
  return totalQuantity;
}