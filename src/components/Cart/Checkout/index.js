import { useRef } from 'react';
import { Container, Control, Actions } from './styles'

export function Checkout(props) {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  
  function handleConfirm(e) {
    e.preventDefault();

    const name = nameInputRef.current.value;
    const street = streetInputRef.current.value;
    const postalCode = postalCodeInputRef.current.value;
    const cityInput = cityInputRef.current.value;
  }

  return (
    <Container onSubmit={handleConfirm}>
      <Control>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' />
      </Control>
      <Control>
        <label htmlFor='street'>Street</label>
        <input ref={streetInputRef} type='text' id='street' />
      </Control>
      <Control>
        <label htmlFor='postal'>Postal</label>
        <input ref={postalCodeInputRef} type='text' id='postal' />
      </Control>
      <Control>
        <label htmlFor='city'>City</label>
        <input ref={cityInputRef} type='text' id='city' />
      </Control>
      <Actions>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className="submit">Confirm</button>
      </Actions>
    </Container>
  )
}
