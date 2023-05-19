import React, { Component } from "react";
import Tick from "./Tick";

export default class Ticks extends Component {
  constructor() {
    super();  
    this.onTickChange = this.onTickChange.bind(this);

    this.state = {
      ticks: [
        { id: 1, value: 100, initialValue: 1000 },
        { id: 2, value: 200, initialValue: 2000 }
      ],
      numberOfTicks: 2
    };
  }

  onTickChange(tickId, newValue) {
    this.state.ticks.find(x => x.id === tickId).value = newValue;
  }

  resetTicks() {
    this.state.ticks.forEach(x => {
       x.value = x.initialValue
    });
    this.setState(this.state.ticks);
    // console.log("resetTicks");
    // console.log(this.state.ticks);
    // this.setState({ ticks: ticks});

    // this.setState(
    //   { ticks: [{ id: 1, value: 50, initialValue: 1000 }, { id: 2, value: 60, initialValue: 2000 }] },
    //   () => {}
    // );
  }

  incrementNumberOfTicks(){
    this.setState(x => ({ numberOfTicks: x.numberOfTicks + 1 }));
  }

  render() {
    return (
      <div>
        <button onClick={() => { this.resetTicks(); }}>Reset All Ticks</button>
        <button onClick={() => { this.incrementNumberOfTicks(); }}>Increment Number of Ticks ({this.state.numberOfTicks})</button>
        {this.state.ticks.map(tick => (
          <Tick
            key={tick.id}
            id={tick.id}
            initialCountVal={tick.value}
            selected={true}
            onValChanged={this.onTickChange}
            numberOfTicks={this.state.numberOfTicks}
          />
        ))}
      </div>
    );
  }
}