import React, { useContext } from 'react'
import './cartWidget.css'
import { CartContext} from '../../context/cartContext'

export const CartWidget = () => {
	
	const {totalItems} = useContext(CartContext)

	return (<>

		{totalItems ? <a id="cart" href="#">
			<span className="icon-cart"></span>
		</a> : null
		} </>
	)
}