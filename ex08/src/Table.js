// src/Table.js

import React, { Component } from "react";

// TableHeader arrow function here
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>First name</th>
        <th>Last name</th>
      </tr>
    </thead>
  );
};
// TableBody arrow function here
const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.firstName}</td>
        <td>{row.lastName}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { characterData } = this.props; // Add this line odvojeno 

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    );
  }
}

export default Table;



/* ---- ORIGINALE ----- 
class Table extends Component { 
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>First name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lary</td>
            <td>Page</td>
          </tr>
          <tr>
            <td>Ada</td>
            <td>Lovelace</td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Turing</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;

*/
