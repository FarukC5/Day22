import logo from "./logo.svg";

import Plant from "./Plant"; // ubacen Plant component
import "./App.css";

function App() {
  return (
    <div className="App">
      <Plant />
    </div>
  );
}

export default App;

/*----MOZDA OVA RENDER METODA ------

import React, { Component } from "react"
import Plant from "./Plant";
import "./App.css";

class App extends Component {  
  render() {
  return (
    <div className="App">
      <Plant />
    </div>
    );  
  }
}

export default App;

*/


/*--------- ORIGINAL FUNKCIJA -----------------------
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
    </div>
  );
}

export default App;
*/