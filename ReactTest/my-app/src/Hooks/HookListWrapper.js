import React from "react";
import HookList from './HookList';

export default class HookListWrapper extends React.Component {
    constructor() {
        super();
        this.state = { title : 'Fruits Management',
        listItems: [
            { id: 10, label: "Apple", isDone: false},
            { id: 11, label: "Banana", isDone: false },
            { id: 12, label: "Orange", isDone: false },
          ]
        };
      }

    render() {
      return (
        <div>
            <h1>This is the hook list wrapper!</h1>
            <HookList title={this.state.title} items = {this.state.listItems}></HookList>
        </div>
      );
    }
  }