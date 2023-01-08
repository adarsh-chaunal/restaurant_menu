import React, { Component } from 'react'
import Grid from './Grid'
import logo1 from './RestaurantImages/R1.jpg'
import logo2 from './RestaurantImages/R2.jpg'
import logo3 from './RestaurantImages/R3.jpg'
import logo4 from './RestaurantImages/R4.jpg'
import logo5 from './RestaurantImages/R5.jpg'
import logo6 from './RestaurantImages/R6.jpg'
import logo7 from './RestaurantImages/R7.jpg'
import logo8 from './RestaurantImages/R8.jpg'
import logo9 from './RestaurantImages/R9.jpg'
import logo10 from './RestaurantImages/R10.jpg'
import logo11 from './RestaurantImages/R11.jpg'
import logo12 from './RestaurantImages/R12.jpg'

const restMenu = [
    {
        id: 1,
        source: logo1,
        altTxt: "Foodi Point",
        vegType: true,
        vegenType: true,
        fishType: false,
        chineseType: false,
        cakesType: true,
    },
    {
        id: 2,
        source: logo2,
        altTxt: "Mapple Tree",
        vegType: false,
        vegenType: true,
        fishType: false,
        chineseType: false,
        cakesType: false,
    },
    {
        id: 3,
        source: logo3,
        altTxt: "Green Apple",
        vegType: true,
        vegenType: true,
        fishType: false,
        chineseType: false,
        cakesType: false,
    },
    {
        id: 4,
        source: logo4,
        altTxt: "Maggii Point",
        vegType: true,
        vegenType: false,
        fishType: false,
        chineseType: true,
        cakesType: false,
    },
    {
        id: 5,
        source: logo5,
        altTxt: "Hot Chillies",
        vegType: false,
        vegenType: true,
        fishType: true,
        chineseType: false,
        cakesType: false,
    },
    {
        id: 6,
        source: logo6,
        altTxt: "Throwback",
        vegType: false,
        vegenType: false,
        fishType: true,
        chineseType: false,
        cakesType: true,
    },
    {
        id: 7,
        source: logo7,
        altTxt: "Fish Day Restro",
        vegType: false,
        vegenType: false,
        fishType: true,
        chineseType: false,
        cakesType: false,
    },
    {
        id: 8,
        source: logo8,
        altTxt: "Hot Drive",
        vegType: true,
        vegenType: false,
        fishType: true,
        chineseType: false,
        cakesType: false,
    },
    {
        id: 9,
        source: logo9,
        altTxt: "Caffenia",
        vegType: false,
        vegenType: false,
        fishType: false,
        chineseType: true,
        cakesType: false,
    },
    {
        id: 10,
        source: logo10,
        altTxt: "China Town 24",
        vegType: false,
        vegenType: false,
        fishType: false,
        chineseType: true,
        cakesType: false,
    },
    {
        id: 11,
        source: logo11,
        altTxt: "Haweli",
        vegType: false,
        vegenType: false,
        fishType: true,
        chineseType: true,
        cakesType: true,
    },
    {
        id: 12,
        source: logo12,
        altTxt: "Eat and Repeat",
        vegType: false,
        vegenType: true,
        fishType: false,
        chineseType: true,
        cakesType: true,
    }
]

class CuisineButtons extends Component {
    constructor(props) {
      super(props)
      this.state = {
        ele : restMenu
      }
    }
    

    cuisineSelect1(){
        this.setState({
            ele : restMenu.filter((items) => (items.vegType===true)) 
        }) 
    }
    cuisineSelect2(){
        this.setState({
            ele : restMenu.filter((items) => (items.vegenType===true)) 
        }) 
    }

    cuisineSelect3(){
        this.setState({
            ele : restMenu.filter((items) => (items.fishType===true)) 
        }) 
    }

    cuisineSelect4(){
        this.setState({
            ele : restMenu.filter((items) => (items.chineseType===true)) 
        }) 
    }
    cuisineSelect5(){
        this.setState({
            ele : restMenu.filter((items) => (items.cakesType===true)) 
        }) 
    }
    
    shortAZ(){
        this.setState(
            {
            ele : this.state.ele.sort((a, b) => {
                let fa = a.altTxt.toLowerCase(),
                    fb = b.altTxt.toLowerCase();
            
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            }) 
        })      
    }

    shortZA(){
        this.setState(
            {
            ele : this.state.ele.sort((a, b) => {
            let fa = a.altTxt.toLowerCase(),
                fb = b.altTxt.toLowerCase();
        
            if (fa > fb) {
                return -1;
            }
            if (fa < fb) {
                return 1;
            }
            return 0;
        })
    })        
    }
    
    render() {
        
    return (
        <div> 
            <div className="container text-center">
                <button type="button" className="btn btn-primary" onClick={this.cuisineSelect1.bind(this)}>Vegan</button>
                <button type="button" className="btn btn-primary" onClick={this.cuisineSelect2.bind(this)}>Veg</button>
                <button type="button" className="btn btn-primary" onClick={this.cuisineSelect3.bind(this)}>Fish</button>
                <button type="button" className="btn btn-primary" onClick={this.cuisineSelect4.bind(this)}>Chinese</button>
                <button type="button" className="btn btn-primary" onClick={this.cuisineSelect5.bind(this)}>Cakes</button>
            </div>
            <div className="dropdown">
                <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sort
                </button>
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick = {this.shortAZ.bind(this)}>A-Z</button></li>
                    <li><button className="dropdown-item" onClick = {this.shortZA.bind(this)}>Z-A</button></li>
                </ul>
        </div>
        <Grid ele = {this.state.ele}/>
        {/* {console.log(this.state.ele)} */}
      </div>
    )
  }
}

export default CuisineButtons
