import { Container, Summary, Price, Amount, Actions } from './styles';

export function CartItem(props) {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <Container>
      <div>
        <h2>{props.name}</h2>
        <Summary>
          <Price>{price}</Price>
          <Amount>x {props.amount}</Amount>
        </Summary>
      </div>
      <Actions>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </Actions>
    </Container>
  );
};


