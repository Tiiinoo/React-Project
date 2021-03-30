import React, { useState } from "react";
import './itemCount.css'
import { useParams } from "react-router-dom";

export const ItemCount = ({initial, quantity }) => {
	const [items, setItems] = useState(initial)
	const [stock, setStock] = useState(quantity)
	const {id} = useParams()
	const addItem = () => {
		setItems(parseInt(items) +1)
	}
	const removeItem = () => {
		setItems(parseInt(items) -1)
	}
	const modifyStock = () => {
		setStock(stock - items)
		setItems(parseInt(initial))
	}
	
	return (
		<div id="itemCountContainer" className="container">
			<div className="row"> 
				<div className="col-lg-2 offset-lg-5 items-align-center">
					<p id="select">{id}</p>
					<p id="itemSelected">Ledger</p>
					<p id="stock">Stock {stock}</p>
				</div>
				<div className="col-lg-2 offset-lg-5 d-flex justify-content-between">	
					<input id="removing" className="btn btn-outline-success" type="button" value="-" onClick={removeItem} disabled={items == 0} />
					<p id="items">{items}</p>
					<input id="adding" className="btn btn-outline-success" type="button" value="+" onClick={addItem} disabled={items == stock} />
				</div>		
				<div className="col-lg-2 offset-lg-5">
					<input id="addToChart" className="btn btn-success" type="button" value="Add to chart" onClick={modifyStock} disabled={stock == 0} />
				</div>	
			</div>
		</div>
	)
}