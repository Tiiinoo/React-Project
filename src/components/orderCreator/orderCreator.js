import React, { useContext, useState } from 'react'
import { CartContext} from '../../context/cartContext';
import './orderCreator.css'
import { getFirestore} from '../../firebase/client'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { useHistory } from 'react-router-dom'

export const OrderCreator = () => {
	const {cart, totPrice} = useContext(CartContext)
	const db = getFirestore()
	const [buyerData, setBuyerData] = useState({
		userName: '',
		email: '',
		phone: ''
	})
	
	const gettingData = (event) => {
		setBuyerData({
			...buyerData,
			[event.target.name] : event.target.value,
			[event.target.name] : event.target.value,
			[event.target.name] : event.target.value
		})
	}
	const history = useHistory();


	const createOrder = () => {
		let order = {}

		const orderCollection = db.collection('orders')

		order.buyer = {
										name: buyerData.userName,
										email: buyerData.email,
										phone: buyerData.phone, 
									}
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
		alert('Your order was created successufully!')
		console.log(order)
		history.push('/')

	}

	return (
					<div className="container">
						<div className="row justify-content-center">
							<div className className="col-lg-4 form">
								<h4>Create your order</h4>
								<p className="formText">Name</p>
								<input 
									type="text" 
									className="form-control" 
									name="userName"
									placeholder="What's your name?"
									onChange={gettingData} 
								/>
								<p className="formText">Email</p>
								<input 
									type="email" 
									className="form-control" 
									name="email" 
									placeholder="What's your email?"
									onChange={gettingData} 
								/>
								<p className="formText">Telephone</p>
								<input 
									type="number" 
									className="form-control"
									name="phone" 
									placeholder="What's your number?" 
									onChange={gettingData} 
								/>
								<button disabled={	buyerData.phone == '' || 
																		buyerData.userName == '' || 
																		buyerData.email == ''} 
												className="btn-outline-success bts" 
												onClick={createOrder}>Create Order
								</button>	
							</div>							
						</div>
					</div>
	)
}