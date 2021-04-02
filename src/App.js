import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SuperheroIndex from './pages/SuperheroIndex'
import SuperheroShow from './pages/SuperheroShow'
import SuperheroNew from './pages/SuperheroNew'
import SuperheroEdit from './pages/SuperheroEdit'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css'
import mockSuperheroes from './mockSuperheroes.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      superheroes: []
    }
  }

  componentDidMount(){
    this.superheroIndex()
  }

  superheroIndex = () => {
    fetch("http://localhost:3000/supers")
    .then(response => {
      return response.json()
    })
    .then(superheroesArray => {
      this.setState({ superheroes: superheroesArray })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  createNewSuperhero = (newSuperhero) => {
    console.log(newSuperhero)
  }

  updateSuperhero = (superhero, id) => {
    console.log("superhero:", superhero)
    console.log("superhero:", id)
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route 
            path="/superheroindex" 
            render = { () => <SuperheroIndex superheroes={this.state.superheroes}/> } 
          />
          <Route path="/Superheroshow/:id" render = {(props) => {
            const id = +props.match.params.id;
            const foundSuper = this.state.superheroes.find(superhero => superhero.id === id);
            return <SuperheroShow superhero={foundSuper}/>}
          } />
          <Route path="/superheronew" render={(props) => {
            return <SuperheroNew createNewSuperhero={ this.createNewSuperhero } />
          }}
          />
   <Route exact path={"/superheroedit/:id"} render={ (props) => {
    let id = props.match.params.id
    let superhero = this.state.superheroes.find(superhero => superhero.id === parseInt(id))
    return(
      <SuperheroEdit
        updateSuperhero={ this.updateSuperhero }
        superhero={ superhero }
      />)}
    }/>
        <Route component = { NotFound } />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
export default App