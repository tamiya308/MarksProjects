import React, { Component } from "react";
import { headderSubject } from "../Services/CommunicationService";

export default class RecieveRxjsMessage extends Component {
  constructor() {
    super();
    this.state = {
      greeting: "Ready to receive RxJs message",
      messagesRecieved: [],
    };
  }

  componentDidMount() {
    this.subscription = headderSubject.subscribe((res) => {
      // this.setState({ messagesRecieved:
      //   [...this.state.messagesRecieved, {id: res.id, message : res.message}] });
      
      // this.setState(function (s1) {
      //   return{
      //   messagesRecieved: [
      //     ...s1.messagesRecieved,
      //     { id: res.id, message: res.message },
      //   ]}
      // });
          this.setState((x) => ({ messagesRecieved:
            [...x.messagesRecieved, {id: res.id, message : res.message}] }));
      });
  }
  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return (
      <div>
        <div>{this.state.greeting}</div>
        {this.state.messagesRecieved.map((message) => (
          <li key={message.id}>{message.message}</li>
        ))}
      </div>
    );
  }
}
