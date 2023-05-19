import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  constructor() {
    super();
    this.state = { name: "Mark" };
  }

  componentDidMount() {
    this.ChildComponentRef.changeName("Mark");
  }

  updateState(e) {
    this.setState({ name: e.target.value });
  }

  updateName() {
    this.ChildComponentRef.changeName(this.state.name);
  }

  render() {
    return (
      <div>
        <h3>Parent Component</h3>
        <input
          value={this.state.name}
          onChange={this.updateState.bind(this)}
          ref="myInput"
        ></input>

        <button
          onClick={() => {
            this.updateName();
          }}
        >
          Update Name
        </button>
        <br />
        <ChildComponent ref={(x) => (this.ChildComponentRef = x)} />
      </div>
    );
  }
}
