import React, {Component} from 'react';
class Superhero extends Component {

    state = {superpower: "shape shifting is my ability"};

    attack(){
        console.log("this is referring to : ", this)
    }
    render(){
        return (
            <span>
                <button onClick={this.attack.bind(this)}>Func this Binding 1</button><br/>
                <button onClick={() => { this.attack(); }}>Func this Binding 2</button><br/>
                {/* Last one doens't bind this inside function */}
                <button onClick={this.attack}>Func this Binding 3</button>
            </span>
        )
    }
}
export default Superhero