import { createContext, useReducer } from 'react';

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

function cartReducer(state, action) {
  if(action.type === "ADD_CART_ITEM"){
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    
    if(existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    };

    
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  return defaultCartState;
}
export const CartContext = createContext({ 
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});


export function CartContextProvider({children, ...props}) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  function handleAddItemToCart(item) {
    dispatchCartAction({
      type: "ADD_CART_ITEM",
      item,
    })
  };
  function handleRemoveItemFromCart(id) {
    dispatchCartAction({
      type: "REMOVE_CART_ITEM",
      id,
  })
  };

  const cartContext = {
    items: cartState.items, 
    totalAmount: cartState.totalAmount, 
    addItem: handleAddItemToCart, 
    removeItem: handleRemoveItemFromCart
  }

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
}

