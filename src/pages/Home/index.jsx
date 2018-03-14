import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Home extends Component {
	render() {
    return(
	    <div className="app">
        <div>
          <div>
            <a href="manage"> Manage Event </a>
          </div>
          <div>
            <a href="addConcert"> Add Concert </a>
          </div>
          <div>
            <a href="addPromotion"> Add Promotion </a>
          </div>
          <div>
            <a href="social"> View Social Reaction </a>
          </div>
        </div>
	    </div>
	  )
	};  
}

export default Home;
