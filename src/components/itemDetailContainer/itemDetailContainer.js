import React, { useState, useEffect } from 'react'
import './itemDetailContainer.css'
import ItemDetail  from '../itemDetail/itemDetail'
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
	
		
	const [item, setItem] = useState([])
	const {id} = useParams()
	useEffect (() => { const promesa = new Promise((resolve)=>{ 
		setTimeout(() => {resolve([
			{ id:1, image:"https://cdn.alzashop.com/ImgW.ashx?fd=f3&cd=TREZBIT7d", name:"Ledger nano X", price:95, description:"The best one", category:"hardware"},
			{ id:2, image:"https://cdn.shopify.com/s/files/1/2974/4858/products/lns-black_1239d961-b60a-428d-a61f-0a21e34586b0_768x.png?v=1578580276", name:"Ledger nano S", price:45, description:"The safest one", category:"hardware"},
			{ id:3, image:"https://cashcoin.com.ar/wp-content/uploads/2019/09/trezor_one_negro.png", name:"Trezor 1", price:59, description:"The safest one", category:"hardware"},
			{ id:4, image:"https://www.safepal.io/new_v2/images/s1_01.png", name:"SafePal Wallet", price:40, description:"The cheapest", category:"hardware"},
			{ id:5, image:"https://cobo.com/_next/static/images/Pro-bdb3d48e356ce119adcaf3f6793078e0.png", name:"Cobo Wallet", price:479, description:"The expensive one", category:"hardware"},
			{ id:6, image:"https://status.im/img/keycard-intro-card.png", name:"Status", price:30 , description:"The elegant one", category:"cards"},
			{ id:7, image:"https://es.crypto-economy.com/wp-content/uploads/sites/2/2019/07/nfc3.jpg", name:"NFC", price:20 , description:"The one for bitcoiners", category:"cards"},
			{ id:8, image:"https://i.pinimg.com/564x/01/44/cd/0144cdcbdac0f9367a8bc0fa5ff93106.jpg", name:"Key Wallet Touch", price:60, description:"The expensive one", category:"cards"},
			{ id:9, image:"https://keycard.tech/images/branded-cards.png", name:"Key Card", price:25, description:"The first one", category:"cards"}
			])
		}, 2000)
	}, [])
	promesa.then((res) => {
		setItem(res)
		}, 
	)}, 
[id])
	
	return (	
						<div>
							<div className="container">	
								<div className="row justify-content-center">
									<h3>{id}</h3>
								</div>
								<div className="row justify-content-center">
									<ItemDetail item={(item.filter((item) => item.name === id))} />
								</div>	
							</div>
						</div>
	)
}