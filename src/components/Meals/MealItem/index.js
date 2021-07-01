import { useContext } from 'react';
import { MealItemForm } from './MealItemForm';

import { CartContext } from '../../../contexts/CartContext';

import { Container, Description, Price } from './styles';

export function MealItem(props) {
  const {addItem} = useContext(CartContext);

  function handleAddToCart(amount) {
    addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price
    })
  }


  return (
    <Container>
      <div>
        <h3>{props.name}</h3>
        <Description>{props.description}</Description>
        <Price>{`$${props.price.toFixed(2)}`}</Price>
      </div>
      <div>
        <MealItemForm onAddToCart={handleAddToCart} id={props.id}/>
      </div>
    </Container>
  );
};