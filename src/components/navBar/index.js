import React, { useContext } from 'react'
import './navBar.css'
import { CartWidget } from "../cartWidget"
import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {

	return (
		<div>
			<div className="row">
				<div id="titleGraph" className="col-lg-8 offset-lg-2 col-sm-6 offset-sm-3">
					<h1>Grettos</h1>
					<p className="graph">Find anything you need to complete your crypto environment</p>
				</div> 
				<div className="col-lg-8 offset-lg-2 col-sm-8 offset-sm-4  col-10 offset-1 d-flex justify-content-lg-around"> 
					<nav id="mainNav" className="navbar navbar-expand-lg navbar-light">
						<Link to="/" id="home" className="navbar-brand" >Home</Link>
							<ul className="navbar-nav mr-auto">
								<nav className="nav-item active">
										<NavLink to={`/category/hardware`} id="hardwareWallets" className="nav-link" >Hardaware Wallets</NavLink>
								</nav>
								<nav className="nav-item active">
										<NavLink to={`/category/cards`} id="keyCards" className="nav-link" href="#">Key Cards</NavLink>
								</nav>
								<nav className="nav-item active">
										<NavLink to={`/category/merchandise`} id="merchandise" className="nav-link" href="#">Merchandise</NavLink>
								</nav>
							</ul>
							<CartWidget />
					</nav>
				</div>  
			</div>
		</div>	
	)
}