import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home/Home'
import App from './App/App'
import PermanentDrawer from '@/components/PermanentDrawer'

import { Router, Route, hashHistory, IndexRedirect, Switch, Redirect } from 'react-router-dom'

const NoMatch = ({ location }) => (
  <div>
    <h3>无法匹配 <code>{location.pathname}</code></h3>
  </div>
)


export default () => (
    <Switch>
    	<PermanentDrawer>
    		<Switch>
        		<Route exact path='/app/dashboard' component={ App } />
        		<Route exact path='/app/dashboard/index' component={ Home } />
        	</Switch>
        </PermanentDrawer>
    </Switch>
)