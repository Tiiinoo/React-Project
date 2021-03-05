import React from 'react'

export const NavBar = () => {
	return (
		<div>
			<div className="row">
				<div id="titleGraph" class="col-lg-8 offset-lg-2">
					<h1>Grettos</h1>
					<p id="graph">Encontrá todo lo necesario para crecer en el ecosistema crypto</p>
				</div> 
				<div className="col-lg-8 offset-lg-2 offset-3 offset-sm-4 d-flex justify-content-lg-around"> 
					<nav id="mainNav" className="navbar navbar-expand-lg navbar-light bg-light dropdown">
						<a id="home"class="navbar-brand" href="#">Home</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
						</button>
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
										<a id="hardwareWallets" class="nav-link" href="#">Hardaware Wallets</a>
								</li>
								<li className="nav-item active">
										<a id="keyCards" class="nav-link" href="#">Key Cards</a>
								</li>
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
					</nav>
				</div>  
			</div>
		</div>	
	)
}