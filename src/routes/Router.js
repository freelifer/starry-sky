import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/Home'
import App from './App/App'
import Dashboard from './Dashboard'

import { Router, Route, hashHistory, IndexRedirect, Switch, Redirect } from 'react-router-dom'

const NoMatch = ({ location }) => (
  <div>
    <h3>无法匹配 <code>{location.pathname}</code></h3>
  </div>
)

export default () => (
    <Switch>
        <Route exact path='/' component={ () => <Redirect to='/index' component={ Home } />  } />
        <Route path='/index' component={ App } />
        <Route path='/app/dashboard' component={ Dashboard } />
        <NoMatch />
    </Switch>
)