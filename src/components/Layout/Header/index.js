import { Container, MainImg } from './styles';

import mealsImage from '../../../assets/meals.jpg';

import { HeaderCartButton } from './HeaderCartButton';

export function Header(props) {
  return (
    <>
      <Container>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </Container>
      <MainImg>
        <img src={mealsImage} alt="A table full of delicious food" />
      </MainImg>
    </>
  );
};