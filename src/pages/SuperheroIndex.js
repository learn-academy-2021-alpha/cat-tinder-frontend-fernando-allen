import React, { Component } from 'react'
import { Card, CardTitle, Col, CardImg, CardColumns } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class SuperheroIndex extends Component {
  render() {
    return (
      <>
         <h2>Supers Looking for Love!</h2>
         <CardColumns>
        { this.props.superheroes.map((superhero, index) => {
        return (
        <Card body key={ index }>
          <NavLink
          to={`/superheroshow/${superhero.id}`}>
            {<CardImg top width="100%" src={superhero.image_url} alt="Card image cap" />}
          </NavLink>
          <CardTitle>
          <NavLink
          to={`/superheroshow/${superhero.id}`}>
          { superhero.name }
          </NavLink>
          <p>{superhero.birthplace}</p>
          </CardTitle>
          </Card>
          )
        })}
        </CardColumns>
      </>
    )
  }
}
export default SuperheroIndex