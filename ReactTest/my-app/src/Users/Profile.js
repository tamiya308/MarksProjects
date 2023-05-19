import React, { Component } from "react"; //, {useContext}
import { Redirect  } from "react-router-dom";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectBackToUser: false
    };

    if (this.props.user == null) 
      this.state.redirectBackToUser = true;
  }

  renderRedirect = () => {
    if (this.state.redirectBackToUser) 
      return <Redirect to="/users" />;
  };

  render() {
    let htmlToRender;
    if (this.state.redirectBackToUser) {
      htmlToRender = <span>{this.renderRedirect()}; </span>
    }
    else{
      htmlToRender =  <span><h3>User Profile</h3>
      <div>Id: {this.props.user.id} </div>
      <div>Name: {this.props.user.name} </div></span>
    }
    return (
      <div>
        {htmlToRender}
      </div>
    );
  }
}
