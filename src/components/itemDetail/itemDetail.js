import React, { useState, useContext } from 'react'
import './itemDetail.css'
import { useParams, useHistory } from 'react-router-dom'
import { ItemCount } from '../itemCount/itemCount'
import { CartContext } from '../../context/cartContext'


export default function ItemDetail({item}) {
	const [count, setCount] = useState(null)
	const {id} = useParams()
	const {addItem} = useContext(CartContext)
	const history = useHistory();

	const addHandler = (count) => {
		setCount(count)
		console.log(count)
		console.log(item)
	}

	const finishBuy = () => {
		addItem(item, count)
		history.push("/cart")
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
											<input className="btn btn-success col-lg-2 offset-lg-5" onClick={finishBuy} type="button" value="Buy" />
								}
						</div>
					</div>	
	);
}