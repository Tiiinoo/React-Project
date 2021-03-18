import React from 'react'
import './itemList.css'

export const ItemList = () => {
	return (
		<div>
			{ItemList.map(item => <Item item={item} /> )}
		</div>
	)
}