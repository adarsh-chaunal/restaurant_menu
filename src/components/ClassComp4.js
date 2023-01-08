import React, { Component } from 'react'

export class ClassComp4 extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
       count: 0
    }
  }

  changeVal(){
    this.setState((prevState) => ({
        count: prevState.count + 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={()=>{this.changeVal()}}>{this.state.count}</button>
      </div>
    )
  }
}

export default ClassComp4