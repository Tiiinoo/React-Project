import './App.css';
import { NavBar } from './components/navBar/navBar';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "./icomoon/style.css"
import { ItemListContainer } from './components/itemListContainer/itemListContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
			<main className="App-main">
				<ItemListContainer greeting="cryptoUser" />
			</main>
    </div>
  );
}

export default App;
