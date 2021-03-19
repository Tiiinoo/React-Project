import './App.css';
import { NavBar } from './components/navBar/navBar';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import "./icomoon/style.css";
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import { ItemCount } from './components/itemCount/itemCount';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
			<main className="App-main">
				<ItemListContainer greeting="cyptoUser" />
				<ItemCount initial="0" quantity="5" />
			</main>
    </div>
  );
}

export default App;
