import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>El carpincho Shop</h1>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Clase 1 y 2 de React.Js de Coderhouse
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ES HORA DE ESTUDIAR
        </a>


        <p className="app-p" >Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Expedita dolorem veritatis, quam, non, aspernatur ipsam molestias sit sed quibusdam hic iusto.
            Voluptatum nemo unde, reprehenderit dignissimos inventore mollitia dolor quae!</p>
        

      </header>
    </div>
  );
}

export default App;
