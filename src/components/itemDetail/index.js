import React, { useState, useContext } from 'react'
import './itemDetail.css'
import { useHistory } from 'react-router-dom'
import { ItemCount } from '../itemCount'
import { CartContext } from '../../context/cartContext'


export default function ItemDetail({item}) {
	const [count, setCount] = useState(null)
	const {addItem} = useContext(CartContext)
	const history = useHistory();

	const addHandler = (count) => {
		setCount(count)
		addItem(item, count)
		history.push("/cart")
	}

	
	return (
					<div className="container">
						<div className="row justify-content-center">
							<div className="card align-items-center col-lg-2">
								<div className="card-body">
									<h4 className="card-title">{item.name}</h4>
									<h5 className="card-title">${item.price}</h5>
									<img className="card-img-top" src={item.image} alt={item.name + " image"}  />
								</div>								
							</div>
							<div className="card align-items-center col-lg-3">
								<div className="card-body">
									<h4>Description</h4>
									<p>{item.full_description}</p>
								</div>								
							</div>
						</div>	
						<div className="row">
							<ItemCount initial="0" quantity={item.stock} onAdd={addHandler} />
						</div>
					</div>
	);
}