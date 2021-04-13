import React, { useState, useEffect } from 'react'
import './itemDetailContainer.css'
import ItemDetail  from '../itemDetail/itemDetail'
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
	const [item, setItem] = useState(null)
	const [loaded, setloaded] = useState(false);
	const {id} = useParams()
	useEffect (() => { const promesa = new Promise((resolve)=>{
		setTimeout(() => {resolve({
			name : ''
			})}, 2000)
	}, [])
	promesa.then(res => {
		setItem(res)
		setloaded(true);
		}, 
	)}, 
[])
	
	return (	<div>
							{loaded && 
							<div className="container">	
								<div className="row justify-content-center">
									<h3>{id}</h3>
								</div>
								<div className="row justify-content-center">
									<ItemDetail item={ item } />
								</div>	
							</div>}
						</div>
	)
}