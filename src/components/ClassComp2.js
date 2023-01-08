import React, {Component} from 'react'

class ClassComp2 extends Component{
    constructor(){ // initiallize a state object inside a 'class constructor'
        super() // within the constructor(){} we call super() method // This is required because we extend components class, and a call has to be made to the base class constructor
        this.state = { // this keyword is important in a class // state is reserved keyword in react.
            welcome: "Click below to see the menu"
        }
    }

    changeText(){
        this.setState({
            welcome: "Restraunt Menu"
        })
    }

    render(){
        return(
            <div>
                <p>{this.state.welcome}</p>
                <button onClick = {() => this.changeText()}> See Menu </button>
            </div>
        )
    }
}

export default ClassComp2