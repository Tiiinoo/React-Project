import React, { useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { CartContext} from '../../context/cartContext';
import './cart.css'
import { getFirestore} from '../../firebase/client'
import firebase from 'firebase/app'
import 'firebase/firestore'

export const Cart = () => {

	const {cart, removeItem, clear, totItems, totPrice} = useContext(CartContext)
	const history = useHistory();
	const {id} = useParams()
	const db = getFirestore()

	
	const goHome = () => {
		history.push('/')
	}

	const createOrder = () => {
		let order = {}

		const orderCollection = db.collection('orders')

		order.buyer = {name: 'Tino', phone:'1156450573', email:'tino@locochón.com'}
		order.date = firebase.firestore.Timestamp.fromDate(new Date())
		order.item = cart.map(cartItem=> {
			const itemId = cartItem.item.id
			const name = cartItem.item.name
			const price = cartItem.item.price * cartItem.quantity
		order.fullPrice = totPrice

			return {itemId, name, price}

		})
		orderCollection.add(order)
		.then((idDocumento)=> {
			console.log(idDocumento.id)
			})
		.catch( err => {
			console.log(err)
		})
		.finally(() => {
			console.log('terminó la promesa')
		})

		const itemsToUpdate = db.collection('items').where(
			firebase.firestore.FieldPath.documentId(), 'in', cart.map(i=> i.item.id)
	)

	const batch = db.batch();

	itemsToUpdate.get()
	.then( collection=>{
			collection.docs.forEach(docSnapshot => {
					batch.update(docSnapshot.ref,{
							stock: docSnapshot.data().stock - cart.find(item => item.item.id === docSnapshot.id).quantity
					})
			})

			batch.commit().then(res =>{
					console.log('resultado batch:', res)
			})
	})
		console.log(order)

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
												<div key={cartItem.item.name} className="col-lg-3 items">
													<h4>{cartItem.item.name} </h4>
													<p>Cantidad de items: {cartItem.quantity} </p>
													<p>Precio de {cartItem.item.name}: ${cartItem.item.price}</p>
													<img className="card-img-top" src={cartItem.item.image} />
													<button className="btn-success bts" onClick={()=> removeItem(cartItem.item.id)}>Delete {cartItem.item.name}</button>
												</div>
											)
											)}
										</div>	
										<div className="row justify-content-center">
											<div className="col-lg-3 totalItems">
												<h4>Totals</h4>
												<p>Items quantity: {totItems}</p>
												<p>Total price: ${totPrice}</p> 
												<button className="btn-outline-success bts" onClick={clear}>Delete all items</button> 
												<button className="btn-outline-success bts" onClick={createOrder}>Finish your buy</button> 
											</div>	
										</div>		
								</div>
							)
					}

				</div>
	)
}
