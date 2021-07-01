import { GlobalStyle } from './styles/global';

import { Header } from './components/Layout/Header';
import { Meals } from './components/Meals/';


export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}