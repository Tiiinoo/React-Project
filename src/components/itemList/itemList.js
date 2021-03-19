import React from 'react'
import './itemList.css'
import { Item } from '../item/item'

export const ItemList = ({items=[]}) => {
	return (
		<div>
			{items.map(items => <Item items={items} /> )}
		</div>
	)
}