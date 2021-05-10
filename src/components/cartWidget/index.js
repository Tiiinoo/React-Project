import React, { useContext} from 'react'
import './cartWidget.css'
import { CartContext} from '../../context/cartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
	
	const {totItems} = useContext(CartContext)

	return 	<Link to="/cart" className="cart">
						<span className="icon-cart"> {totItems}</span>
					</Link>  
	
}
