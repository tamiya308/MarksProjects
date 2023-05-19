import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class FruitsList extends Component {
  constructor() {
    super();

    this.state = {
      fruits: [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Orange" },
      ],
    };
  }

  render() {
    return (
      <div>
        <div>Fruits available : </div>
        <div>{this.renderFruitsList(this.state.fruits)}</div>
      </div>
    );
  }

  renderFruitsList(fruitsArray) {
    if (fruitsArray.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {fruitsArray.map(x => (
          <li key={x.id}>
            <Link to={{ pathname: "/FruitDetail", state: { fruit: x } }}>{x.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}