import React from 'react'
import './item.css'

export const Item = ({ items }) => {
	return (
		<div className="card">
			<img className="card-img-top" src={items.image} alt="Card image cap" />
			<div className="card-body">
				<h4 className="card-title">{items.name}</h4>
				<h5 className="card-title">${items.price}</h5>
				<p className="card-text">{items.description}
				</p>
				<a href="#!" className="btn btn-outline-success">More information</a>
			</div>
		</div>
	);
};