import React from 'react'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'

const Cart = () => {

    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No Hay Items en el Carrito</h1>
                <Link to='/'>Productos</Link>
            </div>
        )
    }

  return (
    <div>
      { cart.map( p => <Item key={p.id} {...p}/>)}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()}> Limpiar Carrito</button>
      <Link to='/checkout'>Checkout</Link>
    </div>
  )
}

export default Cart
