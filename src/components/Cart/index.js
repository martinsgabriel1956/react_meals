import { useContext, useState } from 'react'

import { CartItems, Total, Actions, Button, AltButton } from './styles'

import { Modal } from '../UI/Modal'
import { CartItem } from '../Cart/CartItem'
import { Checkout } from '../Cart/Checkout'

import { CartContext } from '../../contexts/CartContext'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export function Cart(props) {
  const [isCheckOut, setIsCheckOut] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext)

  const total = `$${totalAmount.toFixed(2)}`
  const hasItems = items.length > 0

  function handleCartItemRemove(id) {
    removeItem(id)
  }

  function handleCartItemAdd(item) {
    addItem(item)
  }

  function handleOrder() {
    setIsCheckOut(true)
  }

  async function handleSubmitOrder(userData) {
    await fetch(
      'https://react-meals-bf77a-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: items,
        }),
      }
    )
    setIsSubmitting(false)
    setDidSubmit(true)
    
    if(isSubmitting) toast.warning('Sending other data...');
    if(!isSubmitting && didSubmit) toast.success('Successfully sent the order!');
  }


  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && (
        <>
          <CartItems>
            {items.map((item) => (
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
          {isCheckOut ? (
            <Checkout onConfirm={handleSubmitOrder} onCancel={props.onClose} />
          ) : (
            <Actions>
              <AltButton onClick={props.onClose}>Close</AltButton>
              {hasItems && <Button onClick={handleOrder}>Order</Button>}
            </Actions>
          )}
        </>
      )}
      {isSubmitting && <ToastContainer />}
      {!isSubmitting && didSubmit && <ToastContainer />}
    </Modal>
  )
}
