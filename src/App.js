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
      superheroes: mockSuperheroes
    }
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/superheroindex" component = { SuperheroIndex } />
          <Route path="/superheroshow" component = { SuperheroShow } />
          <Route path="/superheronew" component = { SuperheroNew } />
          <Route path="/superheroedit" component = { SuperheroEdit } />
          <Route component = { NotFound } />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
export default App