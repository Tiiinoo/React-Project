import React, { useState } from "react";
import './itemCount.css'

export const ItemCount = ({initial, quantity, onAdd }) => {
	const [items, setItems] = useState(initial)
	const [stock, setStock] = useState(quantity)
	const addItem = () => {
		setItems(parseInt(items) +1)
	}
	const removeItem = () => {
		setItems(parseInt(items) -1)
	}
	
	return (
		<div id="itemCountContainer" className="container">
			<div className="row"> 
				<div className="col-lg-2 offset-lg-5 items-align-center">
					<p id="stock">Stock {stock}</p>
				</div>
				<div className="col-lg-2 offset-lg-5 col-6 offset-3 col-sm-4 offset-sm-4 d-flex justify-content-between">	
					<input id="removing" className="btn btn-outline-success" type="button" value="-" onClick={removeItem} disabled={items == 0} />
					<p id="items">{items}</p>
					<input id="adding" className="btn btn-outline-success" type="button" value="+" onClick={addItem} disabled={items == stock} />
				</div>		
				<div className="col-lg-2 offset-lg-5 col-6 offset-3 col-sm-4 offset-sm-4">
					<input id="addToChart" className="btn btn-success" type="button" value="Add to chart" onClick={() => onAdd(items)} disabled={stock == 0 || items == 0} />
				</div>	
			</div>
		</div>
	)
}