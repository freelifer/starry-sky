import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PermanentDrawer from './components/PermanentDrawer'
import { App, Home } from './routes/index';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
	  <Switch>
		<Route exact path="/" component={App}/>
		<PermanentDrawer>
			<Route path="/app" component={App}></Route>
		</PermanentDrawer>
	  </Switch>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
