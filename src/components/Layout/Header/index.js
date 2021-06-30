import { Container, MainImg } from './styles';

import mealsImage from '../../../assets/meals.jpg';

export function Header(props) {
  return (
    <>
      <Container>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </Container>
      <MainImg>
        <img src={mealsImage} alt="A table full of delicious food" />
      </MainImg>
    </>
  );
};