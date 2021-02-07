import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../../components/Header'
import Galleries from '../Galleries'
import Gallery from '../Gallery'
import Category from '../Category'
import About from '../../components/About'
import Home from '../Home'

function App () {
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/gallery" component={Galleries} exact />
        <Route path="/gallery/:id" component={Gallery} exact />
        <Route path="/category/:id" component={Category} exact />
      </Switch>
    </div>
  )
}

export default App
