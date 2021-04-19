import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { CartContext} from '../../context/cartContext';
import './cart.css'

export const Cart = () => {

	const {cart, removeItem, clear, totItems, price} = useContext(CartContext)
	const history = useHistory();

	const goHome = () => {
		history.push('/')
	}

	return (
				<div>
					{
						!cart.length ?
						<div className="container">
							<div className="row justify-content-center">
								<div className="welcomeCart col-lg-5">
									<h4>Welcome to your cart!</h4>
									<p>You don´t have any items yet... But, see our products <button 
									className='btn-outline-success goHome' onClick={goHome}>here </button><br></br>
									and make your choice.</p>
								</div>
							</div>
						</div>
						: (
								<div className="container">
										<div className="row justify-content-center itemRow">
											{cart.map(cartItem => (
												<div key={cartItem.item.id} className="col-lg-3 items">
													<h4>{cartItem.item.name} </h4>
													<p>Cantidad de items: {cartItem.quantity} </p>
													<p>Precio de {cartItem.item.name}: ${cartItem.item.price}</p>
													<img className="card-img-top" src={cartItem.item.image} />
													<button className="btn-success bts" onClick={()=> removeItem(cartItem.item.id)}>Eliminar {cartItem.item.name}</button>
												</div>
											)
											)}
										</div>	
										<div className="row justify-content-center">
											<div className="col-lg-3 totalItems">
												<h4>Totals</h4>
												<p>Items quantity: {totItems}</p>
												<p>Total price: ${price}</p> 
												<button className="btn-outline-success bts" onClick={clear}>Borrar todos los items</button> 
											</div>	
										</div>		
								</div>
							)
					}

				</div>
	)
}
