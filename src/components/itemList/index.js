import React from 'react'
import './itemList.css'
import { Item } from '../item'

export const ItemList = ({items=[]}) => {
	
	return (
		<div className="card-columns col-lg-8 col-sm-12 col-9">
			{items.map(items => <Item key={items.id} items={ items } /> )}
		</div>
	)
}