import React from 'react'
import './item.css'
import { Link } from "react-router-dom"

export const Item = ({ items }) => {
	return (
		<div className="card">
			<img className="card-img-top" src={items.image} alt={items.name + " image"}  />
			<div className="card-body">
				<h4 className="card-title">{items.name}</h4>
				<h5 className="card-title">${items.price}</h5>
				<p className="card-text">{items.description}</p>
				<Link to={`/item/${items.id}`} className="btn btn-outline-success"> More information</Link>
			</div>
		</div>
	);
};