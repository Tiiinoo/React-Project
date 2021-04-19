import React, { useState, useEffect } from 'react'
import './itemListContainer.css'
import { ItemList } from '../itemList/itemList'
import { useParams } from "react-router-dom";
import {getFirestore} from '../../firebase/client'

export const ItemListContainer = (prop) => {
	const [items, setItems] = useState([])
	const {id} = useParams()
	
	useEffect(() => {
		
		const db = getFirestore()
		const itemCollection = db.collection('items')
		const prom = itemCollection.get()

		prom.then((snapshot) =>{
			console.log('se consultaron los datos')
			console.log(snapshot)
			
			if (snapshot.size > 0) {
				console.log(snapshot.docs.map(doc => doc.data()))
				setItems(snapshot.docs.map(doc => {
					return {id: doc.id, ...doc.data()}}))
			}
			// setItems(result)
		})
	},[])

	
	
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2">
					<h3 id="itemsTitle">Hola {prop.greeting}! Chequeá nuestra lista de productos {id}.</h3>
				</div>
			</div>	
			<div className="row">
			{ id == null ?
                    <ItemList items={ items } />
                        :
                        <ItemList items={ items.filter(items => items.category == id) } />

            }
			</div>	
		</div>	
	)	
}