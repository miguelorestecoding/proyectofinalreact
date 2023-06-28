import React, {createContext, useState, useEffect} from 'react'

export const CartContext = createContext( {
    cart: [],
    totalQuantity: 0,
    total: 0,
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0)

    console.log(cart)

useEffect(() => {
    let quantitySum = 0;
    let priceSum = 0;

    cart.forEach(item => {
        quantitySum += item.quantitySum;
        priceSum += item.price * item.quantity
    });
    setTotalQuantity(quantitySum);
    setTotal(priceSum)
}, [cart]);


const addItem = (item, quantity) => {
    if(!isInCart(item.id)) {
setCart(prev =>[...prev, {...item, quantity}])
    } else {
        console.log("El producto ya fué agregado")
    }
}

const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
}

const clearCart = () => {
    setCart([])
}

const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
}

    return (
    <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalQuantity, total}}>
        {children}
        </CartContext.Provider>
    )
}

export default CartProvider
