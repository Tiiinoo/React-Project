import React, { useState } from "react";
import './itemCount.css'

export const ItemCount = () => {
	const [items, setItems] = useState(0)
	const [stock, setStock] = useState(5)
	const addItem = () => {
		setItems(items +1)
	}
	const removeItem = () => {
		setItems(items -1)
	}
	const modifyStock = () => {
		setStock(stock - items)
		setItems(0)
	}
	return (
		<div id="itemCountContainer" className="container">
			<div className="row"> 
				<div className="col-lg-2 offset-lg-5 items-align-center">
					<p id="select">Your selection</p>
					<p id="itemSelected">Ledger</p>
					<p id="stock">Stock {stock}</p>
				</div>
				<div className="col-lg-2 offset-lg-5 d-flex justify-content-between">	
					<input id="removing" className="btn btn-outline-success" type="button" value="-" onClick={removeItem} />
					<p id="items">{items}</p>
					<input id="adding" className="btn btn-outline-success" type="button" value="+" onClick={addItem} />
				</div>		
				<div className="col-lg-2 offset-lg-5">
					<input id="addToChart" className="btn btn-success" type="button" value="Add to chart" onClick={modifyStock} />
				</div>	
			</div>
		</div>
	)
}