import { CartItems, Total, Actions, Button, AltButton } from './styles';

export function Cart() {
  return (
    <>
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
        <Button>Close</Button>
        <AltButton>Order</AltButton>
      </Actions>
    </>
  );
};