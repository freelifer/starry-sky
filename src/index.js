import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Home } from './routes/index';
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter } from 'react-router-dom';

class SliderComponent extends React.Component {
	render(){
		return(
			<div>
				{ this.props.children }
			</div>);
	}
}
ReactDOM.render(
	<BrowserRouter>
		<SliderComponent>
			<Route path="/" component={Home}></Route>
		</SliderComponent>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
