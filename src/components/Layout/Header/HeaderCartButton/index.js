import { useContext, useEffect, useState } from 'react';

import { Container, Icon, Badge } from './styles';
import { CartIcon } from '../../../Cart/CartIcon.js' ;
import { CartContext } from '../../../../contexts/CartContext';

export function HeaderCartButton(props) {
  const { items } = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  
  const numberOfCartItems = items.reduce((curNum, item) => curNum + item.amount, 0);
  
  useEffect(() => {
    if(items.length === 0) return;
    setBtnIsHighlighted(true);
    
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300)

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  
  return (
    <Container className={`${btnIsHighlighted ? 'bump' : ''}`} onClick={props.onClick}>
      <Icon>
        <CartIcon />
      </Icon>
      <span>Your Cart</span>
      <Badge>{numberOfCartItems}</Badge>
    </Container>
  );
};


