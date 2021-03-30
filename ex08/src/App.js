// src/App.js kopija vjezbe ex02
import React, { Component } from "react";
import Table from "./Table"; // Add this line inside te src/App.js file

class App extends Component {
  render() {
    const characters = [
      {
        firstName: "Lary",
        lastName: "Page",
      },
      {
        firstName: "Ada",
        lastName: "Lovelace",
      },
      {
        firstName: "Alan",
        lastName: "Turing",
      },
    ];

    return (
      // umjesto "App" - "container"
      <div className="container">
        <Table characterData={characters} />
      </div>
    );
  }
}

export default App;
