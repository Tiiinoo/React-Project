import React, { useState, useEffect } from 'react'
import './itemDetailContainer.css'
import ItemDetail  from '../itemDetail/itemDetail'

const getItem = () => {
	return new Promise((resolve)=>{
	setTimeout(() => {resolve({
		image: 'https://www.diariobitcoin.com/wp-content/uploads/2021/02/calcetines-unisocks-web.jpg',
		name : 'Uniswap socks',
		price: '10',
		description: 'Get your feet warm and full of liquidity'
		})}, 2000)
})}

export default function ItemDetailContainer() {
	const [item, setItem] = useState(null)
	useEffect(() => {
		getItem().then((res) =>
			setItem(res))
			return;
	}, [])
	
	return (
		<div className="container">	
			<div className="row justify-content-center">
			<h3>Indumentary section</h3>
			</div>
			<div className="row justify-content-center">
				<ItemDetail item={ item } />
			</div>	
		</div>	
	)	
}
