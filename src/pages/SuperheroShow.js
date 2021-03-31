import React, { Component } from 'react'

class SuperheroShow extends Component {
  render() {
    const superhero = this.props.superhero;
    console.log(superhero)
    return (
      <>
        <div className = "center"> 
        <h1>{superhero.name}</h1>
        <br></br>
        <img src= {superhero.image_url} alt="SuperHero Image" width="25%" height="25%"></img> 
        <div>Name: {superhero.name}</div>
        <div>Power: {superhero.power}</div>
        <div>Hobbies: {superhero.hobbies}</div>
        <div>Birthplace: {superhero.birthplace}</div>
        </div>
       
      </>
    )
  }
}
export default SuperheroShow