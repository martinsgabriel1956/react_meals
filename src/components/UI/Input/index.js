import { Container } from './styles';

export function Input(props) {
  return (
    <Container>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </Container>
  );
};