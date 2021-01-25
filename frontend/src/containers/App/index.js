import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from '../../components/Nav'
import Galleries from '../Galleries'
import Gallery from '../Gallery'
import Category from '../Category'

function App () {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" component={Galleries} exact />
        <Route path="/gallery/:id" component={Gallery} exact />
        <Route path="/category/:id" component={Category} exact />
      </Switch>
    </div>
  )
}

export default App
