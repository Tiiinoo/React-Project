import React from 'react'
import './itemDetail.css'

export default function ItemDetail({ item }) {
	return (
		<div className="card align-items-center col-lg-3">
			<img className="card-img-top" src={item?.image} alt={item?.name + " image"}  />
			<div className="card-body">
				<h4 className="card-title">{item?.name}</h4>
				<h5 className="card-title">${item?.price}</h5>
				<p className="card-text">{item?.description}
				</p>
				<a href="#!" className="btn btn-outline-success">More information</a>
			</div>
		</div>	
	);
};