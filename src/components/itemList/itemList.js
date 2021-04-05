import React from 'react'
import './itemList.css'
import { Item } from '../item/item'
import {useParams} from "react-router-dom"

export const ItemList = ({items=[]}) => {
	const {id} = useParams()
	
	return (
		<div className="card-columns col-lg-8 offset-lg-2">
			{items.map(items => <Item key={items.id} items={ items } /> )}
		</div>
	)
}