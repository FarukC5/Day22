//import React, { Component } from "react"
import logo from "./logo.svg";
import Flower from "./Flower";
import "./App.css";

function App() {
  
  return (
    // sa div ili ne?
    <div className="App">
      <Flower color="red" />
    </div>
  );
}

export default App;

/*
import React, { Component } from "react";
import Flower from "./Flower";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Flower color="red" />
      </div>
    );
  }
}

export default App;
*/
