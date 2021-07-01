import { forwardRef } from 'react';
import { Container } from './styles';

export const Input = forwardRef((props, ref) => {
  return (
    <Container>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </Container>
  );
});