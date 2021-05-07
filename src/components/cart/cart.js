import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { CartContext} from '../../context/cartContext';
import './cart.css'
import 'firebase/firestore'

export const Cart = () => {

	const {cart, removeItem, clear, totItems, totPrice} = useContext(CartContext)
	const history = useHistory();

	
	const goHome = () => {
		history.push('/')
	}
	const goOrder = () => {
		history.push('/order')
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
									<h4 className="cartTitle">Welcome to your cart!</h4>
									<div className="row justify-content-center">
										<div className="col-lg-3 totalItems">
											<h4>Totals</h4>
											<div className="justify-content-around d-flex align-items-baseline">
												<p className="cartDetails">Items quantity: {totItems}</p>
												<button className="btn-outline-success bts-items" onClick={clear}>Delete items</button> 
											</div>
											<div className="justify-content-around d-flex align-items-baseline">
												<p className="cartDetails">Total price: ${totPrice}</p> 
												<button className="btn-outline-success bts-items" onClick={goOrder}>Purchase</button> 
											</div>
										</div>	
									</div>
									<div className="row justify-content-center">
										<h4>Items list</h4>
									</div>
									<div className="row justify-content-center itemRow">
										{cart.map(cartItem => (
											<div key={cartItem.item.name} className="col-lg-3 items">
												<h4>{cartItem.item.name} </h4>
												<p>Items quantity: {cartItem.quantity} </p>
												<p>{cartItem.item.name} price: ${cartItem.item.price}</p>
												<button className="btn-outline-success bts" onClick={()=> removeItem(cartItem.item.id)}>Delete {cartItem.item.name}</button>
											</div>
										)
										)}
									</div>		
								</div>
							)
					}

				</div>
	)
}
