import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Home extends Component {
	render() {
    return(
	    <div className="app">
	        <div className="container">
				<div className="box" id='topleft'>
					<a href="manage"> Manage Event </a>
				</div>
				<div className="box" id='topright'>
					<a href="addConcert"> Add Concert </a>
				</div><br /><br />
				<div className="box" id='bottomleft'>
					<a href="addPromotion"> Add Promotion </a>
				</div>
				<div className="box" id='bottomright'>
					<a href="social"> View Social Reaction </a>
				</div>
	        </div>
	    </div>
	  )
	};  
}

export default Home;
