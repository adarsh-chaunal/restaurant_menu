import React, { Component } from 'react' 


export class Restaurant extends Component {
  
  render() {
    const {imgSrc, imgAlt} = this.props
    
    return (
      <div>
        <a className="nav-link" href="/">
            <img  src={imgSrc} className="img-thumbnail border border-5" alt={imgAlt}></img>
            <p>{imgAlt}</p>
        </a>
      </div>
    )
  }
}

export default Restaurant
