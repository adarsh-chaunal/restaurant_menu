import React from 'react'

// Calling values form props without destructring  

// const SuperHeros = props => {
//     return <p>Hello {props.name} a.k.a {props.heroName}</p>
// } 

// Destructring within function body

// const SuperHeros= props => {
//     const {name, heroName} = props
//     return <p>Hello {name} a.k.a {heroName}</p>
// }

// Destructing in function input arguments

const SuperHeros = ({name, heroName}) => {
    return <p>Hello {name} a.k.a {heroName}</p>
}

export default SuperHeros

// in class components the props, states are destructured inside render() method