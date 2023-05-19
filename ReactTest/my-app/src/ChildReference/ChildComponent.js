import React, {Component} from 'react'

export default class ChildComponent extends Component{
    state = {
        name:''
    };

    changeName(newName){
        this.setState({ name: newName});
    }
    render(){
        return(
            <span>
                <br/>
                <h3>Child Component</h3>
                <div>Hi this is {this.state.name}</div>
            </span>
        )
    }
}