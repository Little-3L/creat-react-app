import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Search from './Search'
import Gate from './Gate'
import Discussion from './Discussion'

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Nav} />
          <Route path='/home' exact component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/gate' component={Gate} />
          <Route path="/discussion" component={Discussion} />
        </div>
      </BrowserRouter>
    )
  }
}
export default Main