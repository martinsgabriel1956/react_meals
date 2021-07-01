import { useState } from 'react';

import { GlobalStyle } from './styles/global';

import { CartContext } from './contexts/CartContext';

import { Header } from './components/Layout/Header';
import { Meals } from './components/Meals/';
import { Cart } from './components/Cart/';

export function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function handleShowCart() {
    setCartIsShown(true)
  }
  
  function handleHideCart() {
    setCartIsShown(false)
  }

  return (
    <>
      <GlobalStyle />
      {cartIsShown && <Cart onClose={handleHideCart} />}
      <Header onShowCart={handleShowCart} />
      <main>
        <Meals />
      </main>
    </>
  );
}