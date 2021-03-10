import React from 'react'
import './itemListContainer.css'

export const ItemListContainer = (prop) => {
	return (
		<div className="row">
			<div className="col-lg-8 offset-lg-2">
				<h3 id="itemsTitle">Hola {prop.greeting} chequeá nuestra lista de productos</h3>
			</div>
		</div>	
	)	
}