import React, { Component } from 'react'
import NavBar from './NavBar'
// import Grid from './Grid'
import CuisineButtons from './CuisineButtons'

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <p className="container text-center fs-1 fw-bold">Restaurant Menu</p>
        <CuisineButtons/>
        {/* <Grid/> */}
      </div>
    )
  }
}

export default HomePage
