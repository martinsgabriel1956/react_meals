import { useContext, useState } from 'react'

import { CartItems, Total, Actions, Button, AltButton } from './styles'

import { Modal } from '../UI/Modal'
import { CartItem } from '../Cart/CartItem'
import { Checkout } from '../Cart/Checkout'

import { CartContext } from '../../contexts/CartContext'

export function Cart(props) {
  const [isCheckOut, setIsCheckOut] = useState(false)
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

  return (
    <Modal onClose={props.onClose}>
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
        <Checkout onCancel={props.onClose} />
      ) : (
        <Actions>
          <AltButton onClick={props.onClose}>Close</AltButton>
          {hasItems && <Button onClick={handleOrder}>Order</Button>}
        </Actions>
      )}
    </Modal>
  )
}
