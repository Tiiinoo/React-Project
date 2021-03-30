import React from 'react'
import './itemDetail.css'
import { useParams } from "react-router-dom";

export default function ItemDetail({item}) {
	const {id} = useParams()
	return (
					<div className="card align-items-center col-lg-3">
						<div className="card-body">
							<h4 className="card-title">{id}</h4>
							<p className="card-text">{item?.description}</p>
						</div>
					</div>				
	);
}