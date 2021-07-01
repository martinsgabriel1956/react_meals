import { Container, Icon, Badge } from './styles';

import { CartIcon } from '../../../Cart/CartIcon.js' ;

export function HeaderCartButton(props) {
  return (
    <Container onClick={props.onClick}>
      <Icon>
        <CartIcon />
      </Icon>
      <span>Your Cart</span>
      <Badge>3</Badge>
    </Container>
  );
};


