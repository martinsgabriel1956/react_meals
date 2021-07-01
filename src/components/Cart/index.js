import { useContext } from 'react';

import { CartItems, Total, Actions, Button, AltButton } from './styles';

import { Modal } from '../UI/Modal';
import { CartItem } from '../Cart/CartItem';

import { CartContext } from '../../contexts/CartContext';

export function Cart(props) {
  const { items, totalAmount } = useContext(CartContext);

  const total = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  function handleCartItemRemove() {
    
  }
  function handleCartItemAdd() {

  }

  return (
    <Modal onClose={props.onClose}>
      <CartItems>
        {items.map(item => (
          <CartItem 
            key={item.id} 
            name={item.name} 
            amount={item.amount} 
            price={item.price}
            onRemove={handleCartItemRemove.bind(null, item.id)}
            onAdd={handleCartItemAdd.bind(null, item)}
          />
        ))}
      </CartItems>
      <Total>
        <span>Total Amount</span>
        <span>{total}</span>
      </Total>
      <Actions>
        <AltButton onClick={props.onClose}>Close</AltButton>
        {hasItems && <Button>Order</Button>}
      </Actions>
    </Modal>
  );
};