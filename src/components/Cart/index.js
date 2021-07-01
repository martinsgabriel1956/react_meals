import { CartItems, Total, Actions, Button, AltButton } from './styles';

import { Modal } from '../UI/Modal';

export function Cart(props) {
  return (
    <Modal onClose={props.onClose}>
      <CartItems>
        {[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(item => (
          <li>{item.name}</li>
        ))}
      </CartItems>
      <Total>
        <span>Total Amount</span>
        <span>35.62</span>
      </Total>
      <Actions>
        <AltButton onClick={props.onClose}>Close</AltButton>
        <Button>Order</Button>
      </Actions>
    </Modal>
  );
};