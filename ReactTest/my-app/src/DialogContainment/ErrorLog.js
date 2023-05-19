import React, { Component } from "react";
import CustomMessageBox from "./CustomMessageBox";

export default class ErrorLog extends Component {
  constructor(props) {
    super();
   
    this.state = {
      errors: [
        { id: 1, name: "Error Message 1" },
        { id: 2, name: "Error Message 2" },
        { id: 3, name: "Error Message 3" }
      ]
    };
  }

  render() {
    return (
      <ul>
      {this.state.errors.map(error => (
        <li key={error.id}>
          <CustomMessageBox
            title={<ErrorTitle value={error.id}/>}
            bodyMessage={<ErrorBody value={error.name}/>}
          ></CustomMessageBox>
        </li>
      ))}
    </ul>
    );
  }
}

function ErrorTitle(props) {
  console.error(props);
  const message = 'Error ' + props.value;
  return <span>{message}</span>;
}

function ErrorBody(props) {
  const message = props.value;
  return <span>{message}</span>;
}
