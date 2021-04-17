import React, { useState, useEffect } from 'react'

export const CartContext = React.createContext([])

export const CartProvider = ({children}) => {
	const [cart, setCart] = useState([])
	const [totalItems, setTotalItems] = useState(0)
  const [totalPrecio, setTotalPrecio] = useState(0)

    useEffect(()=>{
        let precio= cart.reduce((acumulador,itemActual)=>{
            const p = itemActual.quantity * itemActual.item.price
            return acumulador + p
        },0);

        let totItems= cart.reduce((accumulador, ItemActual)=>{
            return accumulador + ItemActual.quantity
        },0);
        setTotalItems(totItems);
        setTotalPrecio(precio)

		},[cart])
		
	
	// agregar cierta cantidad de un ítem al carrito
		const addItem = (newItem, newQuantity)=>{

			let itemIndex = cart.findIndex((e) => e.item.id === newItem.id)
			if(itemIndex === -1) {
				setCart ([...cart, {item: newItem, quantity: newQuantity}]);
			} else {
				let modifiedCart = [...cart]
				modifiedCart[itemIndex].quantity += newQuantity;
				setCart (modifiedCart)
			}
			// console.log('Item' + item)
			// setCart([...cart, [{item: newItem, quantity: newQuantity}]])
			
	}
	// Remover un item del cart usando su id
	const removeItem = (itemId) => {
		const newCart = cart.filter(e => e.item.id !== itemId)
		setCart(newCart)
	}
	// Remover todos los items
	const clear = () => {
		setCart([])
	}
	const isInCart = (id) => {
		const currentItem = cart.find(e=> e.item.id === id)
		return currentItem ? true : false
	}
	
	return (
		<CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}} >
		{children}
		</CartContext.Provider>
	) 
} 