import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PermanentDrawer from './components/PermanentDrawer'
import { App, Home } from './routes/index';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MainFrame from './routes/Router'


ReactDOM.render(
	<BrowserRouter>
        <MainFrame />
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
