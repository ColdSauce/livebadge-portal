import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';

import Home from './pages/Home';

// Global sections:
import Header from "./sections/Header";
import Footer from "./sections/Footer";

import './index.css';


// Global page, so it also include some section
const App = () => (
	<Router basename="/goon-gate">
		<div>
			<div>
				<Route exact path="/" component={Home} />
			</div>
			<Footer />
		</div>
	</Router>
);

const rootEl = document.getElementById('root');

if (rootEl) {
	ReactDOM.render(<App />, rootEl);
	registerServiceWorker();
}

export default App;