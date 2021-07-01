import { useContext } from 'react';

import { Container, Icon, Badge } from './styles';

import { CartIcon } from '../../../Cart/CartIcon.js' ;
import { CartContext } from '../../../../contexts/CartContext';

export function HeaderCartButton(props) {
    const { items } = useContext(CartContext);

    const numberOfCartItems = items.reduce((curNum, item) => curNum + item.amount, 0);
  return (
    <Container onClick={props.onClick}>
      <Icon>
        <CartIcon />
      </Icon>
      <span>Your Cart</span>
      <Badge>{numberOfCartItems}</Badge>
    </Container>
  );
};


