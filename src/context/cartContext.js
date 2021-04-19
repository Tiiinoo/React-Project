import React, { useState, useEffect } from 'react'

export const CartContext = React.createContext([])

export const CartProvider = ({children}) => {
	const [cart, setCart] = useState([])
	const [totItems, setTotItems] = useState(0)
	const [price, setPrice] = useState(0)

	useEffect(() => {
		let itemsQuantity = 0
		let priceTotal = 0
		for (let cartItem of cart) {
			itemsQuantity += cartItem.quantity
			priceTotal += cartItem.quantity * cartItem.item.price
		}
		setTotItems(itemsQuantity)
		setPrice(priceTotal)
	}, 
	[cart])
	
	// agregar cierta cantidad de un ítem al carrito
		const addItem = (newItem, newQuantity)=>{

			let itemIndex = cart.findIndex((e) => e.item.name === newItem.name)
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
	const removeItem = (itemName) => {
		const newCart = cart.filter(e => e.item.name !== itemName)
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
		<CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, totItems, price}} >
		{children}
		</CartContext.Provider>
	) 
} 