import React, {createContext, useState} from 'react'

export const CartContext = React.createContext()

export const CartProvider = ({children}) => {
  
    const [state, setState] = useState(10)
    return <CartContext.Provider value={state}>{children}</CartContext.Provider>

};

export default CartContext
