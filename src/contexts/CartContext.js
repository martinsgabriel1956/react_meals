import { createContext } from 'react';

export const CartContext = createContext({ 
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export function CartContextProvider({children, ...props}) {
  function handleAddItemToCart() {
    
  };
  function handleRemoveItemFromCart() {
    
  };

  return (
    <CartContext.Provider value={{items: [], totalAmount: 0, addItem: handleAddItemToCart, removeItem: handleRemoveItemFromCart}}>
      {children}
    </CartContext.Provider>
  );
}

