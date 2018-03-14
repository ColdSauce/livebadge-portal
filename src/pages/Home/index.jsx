import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { authFacebook } from '../../utils/Mixtape';
import * as FontAwesome from 'react-icons/lib/fa'

class Home extends Component {
  loginWithFb() {
    authFacebook()
  }

	render() {
    return(
    	<div className="">
	    	<a href="/app"><FontAwesome.FaCog className="cog"/></a>
		    <div className="app">
		        <div className="container">
					<a href="manage"><div className="box" id='topleft'>
						 Manage Event 
					</div></a>
					<a href="addConcert"><div className="box" id='topright'>
						 Add Concert 
					</div></a><br /><br />
					<a href="addPromotion"><div className="box" id='bottomleft'>
						 Add Promotion 
					</div></a>
					<a href="social"><div className="box" id='bottomright'>
						 View Social Reaction 
					</div></a>
		        </div>
		    </div>
	    </div>
	  )
	};  
}

export default Home;
