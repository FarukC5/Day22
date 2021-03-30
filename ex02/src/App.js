// src/App.js
import React, { Component } from "react";
import Table from "./Table"; // Add this line inside te src/App.js file

class App extends Component {
  render() {
    return (
      // umjesto "App" - "container"
      <div className="container">
        <Table />
      </div>
    );
  }
}

export default App;
