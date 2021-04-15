// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { CartContext} from '../../context/cartContext';

// export const Cart = () => {

// 	const {cart, addItem, removeItem, clear, isInCart} = useContext(CartContext)

// 	return (
// 				<div>
// 					{
// 						!cart.length ?
// 						<h2>No hay items en el carrito <Link to='/'>Home</Link></h2>
// 						: (<>
// 								{cart.map(cartItem => (
// 								<div key={carItem.item.id} >
// 									<div>Titulo: {cartItem.item.name}</div>
// 									<div>cantidad: {cartItem.quantity}</div>
// 									<button oncClick={()=> removeItem(cartITem.item)}>borrar</button>
// 								</div>)
// 								)}
// 								<div>Total</div><div>cantidad</div><button>borrar</button>
// 							 </>
// 						)
// 					}

// 				</div>
// 	)
// }
