import React from 'react'

export const Item = ({ item }) => {
	return (
		<div class="card">
			<img class="card-img-top" src={item.image} alt="Card image cap" />
			<div class="card-body">
				<h4 class="card-title">{item.name}</h4>
				<p class="card-text">{item.description}
				</p>
				<a href="#!" class="btn btn-outline-success">More information</a>
			</div>
		</div>
	);
};