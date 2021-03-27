import './App.css';
import { NavBar } from './components/navBar/navBar';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import "./icomoon/style.css";
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import { ItemCount } from './components/itemCount/itemCount';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
			<div className="App">
				<header className="App-header">
					<NavBar />
				</header>
				<main className="App-main">
					<Switch>
						<Route exact path='/'>
							<ItemListContainer greeting="cyptoUser" />
						</Route>
						<Route path="/count">
							<ItemCount initial="0" quantity="5" />
						</Route>
						<Route path='*'>
							ERROR 404!
						</Route>
					</Switch>
				</main>
			</div>
		</BrowserRouter>
  );
}

export default App;