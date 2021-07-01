import { Container, Description, Price } from './styles';

export function MealItem(props) {
  return (
    <Container>
      <div>
        <h3>{props.name}</h3>
        <Description>{props.description}</Description>
        <Price>{`$${props.price.toFixed(2)}`}</Price>
      </div>
      <div>

      </div>
    </Container>
  );
};