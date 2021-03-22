import React, { useState, useEffect } from 'react'
import './itemListContainer.css'
import { ItemList } from '../itemList/itemList'

export const ItemListContainer = (prop) => {
	const [items, setItems] = useState([])
	useEffect(() => {
		let itemCharger = new Promise((resolve, reject) => {
			setTimeout(() => resolve([
				{ id:1, image:"https://cdn.alzashop.com/ImgW.ashx?fd=f3&cd=TREZBIT7d", name:"Ledger nano X", price:95, description:"The best one"},
				{ id:2, image:"https://cdn.shopify.com/s/files/1/2974/4858/products/lns-black_1239d961-b60a-428d-a61f-0a21e34586b0_768x.png?v=1578580276", name:"Ledger nano S", price:45, description:"The safest one"},
				{ id:3, image:"https://cashcoin.com.ar/wp-content/uploads/2019/09/trezor_one_negro.png", name:"Trezor 1", price:59, description:"The safest one"},
				{ id:4, image:"https://www.safepal.io/new_v2/images/s1_01.png", name:"SafePal Wallet", price:40, description:"The cheapest"},
				{ id:5, image:"https://cobo.com/_next/static/images/Pro-bdb3d48e356ce119adcaf3f6793078e0.png", name:"Cobo Wallet", price:479, description:"The expensive one"}
			]), 2000);
		})
		itemCharger.then((result) =>{
			setItems(result)
		})
	})
	
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2">
					<h3 id="itemsTitle">Hola {prop.greeting}! Chequeá nuestra lista de productos</h3>
				</div>
			</div>	
			<div className="row">
				<ItemList items={ items } />
			</div>	
		</div>	
	)	
}