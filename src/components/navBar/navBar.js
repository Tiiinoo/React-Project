import React, { useContext } from 'react'
import './navBar.css'
import { CartWidget } from "../cartWidget/cartWidget"
import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {

	return (
		<div>
			<div className="row">
				<div id="titleGraph" className="col-lg-8 offset-lg-2">
					<h1>Grettos</h1>
					<p className="graph">Find anything you need to complete your crypto environment</p>
				</div> 
				<div className="col-lg-8 offset-lg-2 offset-3 offset-sm-4 d-flex justify-content-lg-around"> 
					<nav id="mainNav" className="navbar navbar-expand-lg navbar-light bg-light dropdown">
						<Link to="/" id="home" className="navbar-brand" >Home</Link>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
						</button>
							<ul className="navbar-nav mr-auto">
								<nav className="nav-item active">
										<NavLink to={`/category/hardware`} id="hardwareWallets" className="nav-link" >Hardaware Wallets</NavLink>
								</nav>
								<nav className="nav-item active">
										<NavLink to={`/category/cards`} id="keyCards" className="nav-link" href="#">Key Cards</NavLink>
								</nav>
								<li className="nav-item active dropdown">
									<a className="nav-link dropdown-toggle" data-toggle="dropdown"
										href="#" role="button" aria-haspopup="true" aria-expanded="false">
										Merchandising</a>
									<div className="dropdown-menu">
										<a id="indumentaria" className="dropdown-item" href="#!">Indumentaria</a>
										<a id="medias" className="dropdown-item" href="#!">Medias</a>
										<a id="accesorios" className="dropdown-item" href="#!">Accesorios</a>
									</div>
								</li>
							</ul>
							<CartWidget />
					</nav>
				</div>  
			</div>
		</div>	
	)
}