import React, { useState, useEffect } from 'react'
import './itemDetailContainer.css'
import ItemDetail  from '../itemDetail/itemDetail'

export default function ItemDetailContainer() {
	const [item, setItem] = useState(null)
	const [loaded, setloaded] = useState(false);
	const promesa = new Promise((resolve)=>{
		setTimeout(() => {resolve({
			image: 'https://www.diariobitcoin.com/wp-content/uploads/2021/02/calcetines-unisocks-web.jpg',
			name : 'Uniswap socks',
			price: '10',
			description: 'Get your feet warm and full of liquidity'
			})}, 2000)
	})
	promesa.then(res => {
		setItem(res)
		setloaded(true);
	});
	return (	<div>
				{loaded && <div className="container">	
					<div className="row justify-content-center">
					<h3>Indumentary section</h3>
					</div>
					<div className="row justify-content-center">
						<ItemDetail item={ item } />
					</div>	
				</div>	}
	</div>
	)
}