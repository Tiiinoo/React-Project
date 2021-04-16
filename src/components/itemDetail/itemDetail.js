import React, { useState, useContext } from 'react'
import './itemDetail.css'
import { useParams, Link } from 'react-router-dom'
import { ItemCount } from '../itemCount/itemCount'
import { CartContext } from '../../context/cartContext'


export default function ItemDetail({item}) {
	const [count, setCount] = useState(null)
	const {id} = useParams()
	const {addItem} = useContext(CartContext)

	const addHandler = (count) => {
		setCount(count)
		console.log(count)
	}

	const finishBuy = () => {
		addItem(item, count)
		if (count <= 1 ) {
		console.log('Se agregó el item ' + JSON.stringify(item))
		} else  {
			console.log('Se agregaron ' + JSON.stringify(item))
		}
		console.log(item)
		return item
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