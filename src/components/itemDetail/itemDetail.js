import React, { useState, useContext } from 'react'
import './itemDetail.css'
import { useParams, Link } from 'react-router-dom'
import { ItemCount } from '../itemCount/itemCount'
import { CartContext } from '../../context/cartContext'


export default function ItemDetail({item}) {
	const [count, setCount] = useState(null)
	const {id} = useParams()
	const {addItem, cart} = useContext(CartContext)

	const addHandler = (count) => {
		setCount(count)
		console.log(count)
	}

	const finishBuy = ( count ) => {
		addItem(item, count)
		console.log('Se agregó ' + count + 'del item ' + item.id )
	}

	
	return (
					<div className="container-fluid">
						<div className="row card-container">
							<div className="card align-items-center col-lg-2 offset-lg-5">
								<div className="card-body">
									<h4 className="card-title">Seleccionaste {count} {id}</h4>
								</div>
							</div>
						</div>	
						<div className="row">
								{ count == null ?
									<ItemCount initial="0" quantity="5" onAdd={addHandler} />
									:
										<Link to="/cart" className="btn btn-success col-lg-2 offset-lg-5">
											<input className="btn btn-success" onClick={finishBuy} type="button" value="Buy" />
										</Link>
								}
						</div>
					</div>	
	);
}