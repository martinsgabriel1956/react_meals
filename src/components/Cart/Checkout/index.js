import { useRef, useState } from 'react';
import { Container, Control, Actions } from './styles';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const isEmpty = value => value.trim() === '';
const isNotFiveChars = value => value.trim().length !== 5;

export function Checkout(props) {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true
  })

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  
  function handleConfirm(e) {
    e.preventDefault();

    const name = nameInputRef.current.value;
    const street = streetInputRef.current.value;
    const postalCode = postalCodeInputRef.current.value;
    const city = cityInputRef.current.value;

    const nameIsValid = !isEmpty(name);
    const streetIsValid = !isEmpty(street);
    const postalCodeIsValid = !isEmpty(postalCode);
    const cityInputIsValid = !isEmpty(city);

    setFormInputsValidity({
      name: nameIsValid,
      street: streetIsValid,
      city: cityInputIsValid,
      postalCode: postalCodeIsValid
    })

    if(!formInputsValidity.name) toast.error("Please enter a valid name!");
    if(!formInputsValidity.street) toast.error("Please enter a valid street!");
    if(!formInputsValidity.city) toast.error("Please enter a valid city!");
    if(!formInputsValidity.postalCode) toast.error("Please enter a valid postal code!");

    const formIsValid = nameIsValid && streetIsValid && postalCodeIsValid && cityInputIsValid;

    if(formIsValid) toast.error('Preencha todos os campos');

    props.onConfirm({
      name,
      street,
      city,
      postalCode
    });
  }

  return (
    <Container onSubmit={handleConfirm}>
      <Control className={formInputsValidity.name ? '' : 'invalid'}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' />
        {!formInputsValidity.name && <ToastContainer color='#aa0b20' />}
      </Control>
      <Control className={formInputsValidity.street ? '' : 'invalid'}>
        <label htmlFor='street'>Street</label>
        <input ref={streetInputRef} type='text' id='street' />
        {!formInputsValidity.street && <ToastContainer />}
      </Control>
      <Control className={formInputsValidity.postalCode ? '' : 'invalid'}>
        <label htmlFor='postal'>Postal</label>
        <input ref={postalCodeInputRef} type='text' id='postal' />
        {!formInputsValidity.postalCode && <ToastContainer />}
      </Control>
      <Control className={formInputsValidity.city ? '' : 'invalid'}>
        <label htmlFor='city'>City</label>
        <input ref={cityInputRef} type='text' id='city' />
        {!formInputsValidity.city && <ToastContainer />}
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
