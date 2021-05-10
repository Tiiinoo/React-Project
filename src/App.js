import './App.css';
import { NavBar } from './components/navBar/navBar';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import "./icomoon/style.css";
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import { Cart } from './components/cart/cart'
import { OrderCreator } from './components/orderCreator/orderCreator'
import { Footer } from './components/footer'


function App() {

	return (  
		<>
		<BrowserRouter>
			<CartProvider>
				<div className="App">
					<header className="App-header">
						<NavBar />
					</header>
					<main className="App-main">
						<Switch>
							<Route exact path='/'>
								<ItemListContainer greeting="cyptoUser" />
							</Route>
							<Route path="/category/:id">
								<ItemListContainer greeting="cyptoUser" />
							</Route>
							<Route path="/item/:id">
								<ItemDetailContainer />
							</Route>
							<Route path="/cart">
								<Cart />
							</Route>
							<Route path="">
								<OrderCreator />
							</Route>
						</Switch>
					</main>
					<footer>
						<Footer />
					</footer>
				</div>
			</CartProvider>
		</BrowserRouter>
		</>
  );
}

export default App;