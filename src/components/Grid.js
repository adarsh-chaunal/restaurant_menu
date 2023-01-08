import React, { Component } from 'react'
import Restaurant from './Restaurant'

class Grid extends Component {
    
    render() {
        // const ele = this.props
        const menuList = this.props.ele.map((ele1, index)=>(
            <div className="col" key = {index}>
                <div className="p-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                    <Restaurant imgSrc = {ele1.source} imgAlt = {ele1.altTxt}/>
                </div>
            </div>
        ))
    
        return (
            <div className="container text-center">
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    {menuList}
                </div>
            </div>
        )
    }
}

export default Grid
