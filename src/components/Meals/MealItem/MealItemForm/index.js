import { useRef, useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import { Container } from './styles';

import { Input } from '../../../UI/Input';

export function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      toast.error("Please enter a valid amount");
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Input 
        ref={amountInputRef}
        label="Amount" 
        input={{
          id: `amount_${props.id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }} 
      />
      <button>+ Add</button>
      {!amountIsValid && <ToastContainer />}
    </Container>
  );
};