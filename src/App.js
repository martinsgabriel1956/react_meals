import { GlobalStyle } from './styles/global';

import { Header } from './components/Layout/Header';
import { Meals } from './components/Meals/';
import { Cart } from './components/Cart/';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}