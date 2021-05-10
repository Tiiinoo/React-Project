import React, { useState, useEffect } from 'react'
import './itemDetailContainer.css'
import ItemDetail  from '../itemDetail'
import { useParams } from "react-router-dom";
import {getFirestore} from '../../firebase/client'

const getItems = (id) => {
	const db = getFirestore()
	const itemCollection = db.collection('items')
	const item = itemCollection.doc(id)
	return item.get()
}


export default function ItemDetailContainer() {
	
	const [item, setItem] = useState([])
	const [loaded, setloaded] = useState(false)
	const {id} = useParams()
	
	useEffect (() => {
		getItems(id)
		.then((res) => {
			// console.log('existe?', res.exists)
			if(res.exists) {
				setItem({id:res.id, ...res.data()})
				setloaded(true)
			}			
		})
		return;
	 }, [id])
	
	return (	
						<div> 
							{ loaded && 
								<div className="container">	
									<div className="row justify-content-center">
										<h4 className="itemNAme">Your selection</h4>
									</div>
									<div className="row justify-content-center">
										<ItemDetail item={item} />
									</div>	
								</div> 
							}
						</div>
	)
}