import logo from "./logo.svg";

import Box from "./Box"; // Ubaceni Box component
import "./App.css";

function App() {
  //ubaciti ili ne <div className="App"> </div> ?
  return (
    <div className="App">
      <Box />;
    </div>
  );
}
export default App;

/*--------- ILI METODA RENDER -------------

import React, { Component } from "react";
import Box from "./Box";
import "./App.css";

class Box extends Component {
  render() {
    return <Box />
  }
}

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
