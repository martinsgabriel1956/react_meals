import { Container, Control } from './styles';

export function Checkout(props) {
  function handleConfirm(e) {
    e.preventDefault();
  }

  return (
    <Container onSubmit={handleConfirm}>
      <Control>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </Control>
      <Control>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </Control>
      <Control>
        <label htmlFor="postal">Postal</label>
        <input type="text" id="postal" />
      </Control>
      <Control>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </Control>
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button>Confirm</button>
    </Container>
  );
};