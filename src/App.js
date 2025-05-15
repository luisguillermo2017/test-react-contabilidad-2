//Comentario de Luis en linea 1
import Title from './components/Title';
import logo from './logo.svg';
import './App.css';
import { AlertHello } from "./components/alertHello"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title titulo="Hola mundo desde el componente Titulo" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <AlertHello />;
    </div>
  );
}

export default App;
