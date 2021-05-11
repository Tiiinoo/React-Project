import React, { useState, useEffect } from 'react'
import './itemListContainer.css'
import { ItemList } from '../itemList'
import { useParams } from "react-router-dom";
import {getFirestore} from '../../firebase/client'

export const ItemListContainer = () => {
	const [items, setItems] = useState([])
	const {id} = useParams()
	
	useEffect(() => {
		
		const db = getFirestore()
		const itemCollection = db.collection('items')
		const categoryFilter = itemCollection
		
		if(id) {
			categoryFilter.where('category','==', id)
		}
		const prom = categoryFilter.get()
		
		prom.then((snaptshot) =>{
	
	if(snaptshot.size > 0){

		setItems(snaptshot.docs.map(doc => {
			return {id:doc.id,  ...doc.data()}
		}
			))
	}
})

},[id])
	
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8">
					<h3 id="itemsTitle">This is our {id} product list</h3>
				</div>
			</div>	
			<div className="row justify-content-center">
			{ id == null ?
                    <ItemList items={ items } />
                        :
                        <ItemList items={ items.filter(items => items.category == id) } />

            }
			</div>	
		</div>	
	)	
}