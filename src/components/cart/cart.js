import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext} from '../../context/cartContext';

export const Cart = () => {

	const {cart, removeItem, clear, totalItems, totalPrecio} = useContext(CartContext)

	return (
				<div>
					{/* {
					// 	!cart.length ?
					// 	<div>No hay items en el carrito <Link to='/'>Home</Link></div>
					// 	: (<>
					// 			{cart.map(cartItem => (
					// 			<div key={cartItem.item.id} >
					// 				<div>Titulo: {cartItem.item.name} </div>
					// 				<div>cantidad: {cartItem.quantity} </div>
					// 				<button onClick={()=> removeItem(cartItem.item.id)}>borrar</button>
					// 			</div>)
					// 			)}
					// 			<div>Total:{totalItems} y {totalPrecio}</div> 
          //       <button onClick={clear}>Borrar todo</button> 
					// 		 </>
					// 	)
					// } */}

				</div>
	)
}
