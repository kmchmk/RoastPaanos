import logo from './dish.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Main-Dish" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://roastpaanos.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          RoastPaanos Website
        </a>
      </header>
    </div>
  );
}

export default App;
