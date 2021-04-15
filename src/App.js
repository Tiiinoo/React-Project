import './App.css';
import { NavBar } from './components/navBar/navBar';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import "./icomoon/style.css";
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartContext, CartProvider } from "./context/cartContext";


function App() {

	return (  
		<>
		<BrowserRouter>
			<CartProvider>
				<CartContext.Consumer>
					{({cart})=> JSON.stringify(cart)}	
				</CartContext.Consumer>
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
						</Switch>
					</main>
				</div>
			</CartProvider>
		</BrowserRouter>
		</>
  );
}

export default App;