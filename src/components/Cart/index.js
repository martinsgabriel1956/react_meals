import { CartItems, Total, Actions, Button, AltButton } from './styles';

import { Modal } from '../UI/Modal';

export function Cart() {
  return (
    <Modal>
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
        <AltButton>Close</AltButton>
        <Button>Order</Button>
      </Actions>
    </Modal>
  );
};