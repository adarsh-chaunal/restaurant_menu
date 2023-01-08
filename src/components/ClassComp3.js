import React, { Component } from 'react'

export class ClassComp3 extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
       count: 0
    }
  }

  changeVal(){
    this.setState({ // setstate method has 2 parameters - state object, callback function(arrow functions)
        count: this.state.count + 1
    },
    ()=>{
        console.log('callback value', this.state.count) //asynchronous console log statement // no delay
    })
    console.log(this.state.count) // synchronous console log // 1 step delay
  }

  incrementFive(){
    this.changeVal();
    this.changeVal();
    this.changeVal();
    this.changeVal();
    this.changeVal();
  }

  render() {
    return (
      <div>
        <button onClick={()=>{this.incrementFive()}}>{this.state.count}</button>
      </div>
    )
  }
}

export default ClassComp3