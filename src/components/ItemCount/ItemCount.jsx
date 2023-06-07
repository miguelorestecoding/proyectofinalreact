import React from 'react'
import { useState } from 'react'

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
        <div>
           <h4>{quantity}</h4>
      <button onClick={decrement}></button>
      <button onClick={increment}></button> 
        </div>
      <div>
        <button onClick={() => onAdd(quantity)}>Agregar al Carrito</button>
      </div>
    </div>
  )
}

export default ItemCount
