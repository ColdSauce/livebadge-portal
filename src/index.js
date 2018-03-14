import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import registerServiceWorker from './registerServiceWorker';

import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Social from './pages/Social';
import Concert from './pages/Concert';
import EventManagement from './pages/EventManagement';
import AuthPage from './pages/AuthPage';
import Promotion from './pages/Promotion';
import CreateEvent from './pages/CreateEvent';

// Global sections:
import Header from "./sections/Header";
import Footer from "./sections/Footer";

import './index.css';
// Global page, so it also include some section
const App = () => (
	<Router basename="/">
		<div>
			<div>
				<Route exact path="/" component={AuthPage} />
				<Route exact path="/app" component={Home} />
				<Route exact path="/social" component={Social} />
				<Route exact path="/manage" component={EventManagement} />
				<Route exact path="/addPromotion" component={Promotion} />
				<Route exact path="/addConcert" component={Concert} />
				<Route exact path="/createEvent" component={CreateEvent} />
			</div>
		</div>
	</Router>
);

const rootEl = document.getElementById('root');

if (rootEl) {
	ReactDOM.render(<App />, rootEl);
	registerServiceWorker();
}

export default App;
