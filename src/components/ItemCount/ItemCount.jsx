import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState(0)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
        
    }

  return (
    <div>
        <span>
         <h4>{quantity}</h4>
         </span>
        <Button variant="secondary" onClick={decrement}>Restar</Button>
      <Button variant="secondary" onClick={increment}>Sumar</Button>        
      <div>
        <Button onClick={() => onAdd(quantity)} /*disable={!stock}*/>Agregar al Carrito</Button>
      </div>
    </div>
  )
}

export default ItemCount
