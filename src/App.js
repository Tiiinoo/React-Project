import './App.css';
import { NavBar } from './components/navBarComponents/navBar';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
    </div>
  );
}

export default App;
