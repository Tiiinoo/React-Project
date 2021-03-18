import React, { useState } from 'react'
import './itemListContainer.css'
import { ItemList } from '../itemList/itemList'

export const ItemListContainer = (prop) => {
	// Tengo que usar useState para manejar los items y un useEfect para crear una promesa que cargue los items mediante la llamada al componente correspondiente

	
	return (
		<div className="row">
			<div className="col-lg-8 offset-lg-2">
				<h3 id="itemsTitle">Hola {prop.greeting}! Chequeá nuestra lista de productos</h3>
			</div>
			<ItemList />
		</div>	
	)	
}