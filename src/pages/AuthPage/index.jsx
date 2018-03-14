import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { authFacebook, getAuthenticatedUser } from '../../utils/Mixtape';
export default class AuthPage extends Component {

  componentDidMount() {
    var authedUser = getAuthenticatedUser()
    // super hacky but i don't care at this point - stefan at 3am
    window.setInterval(() => {
      authedUser = getAuthenticatedUser()
      if (authedUser) {
        window.location = '/createEvent';
      }
    }, 500);
  }

  loginWithFb() {
    authFacebook()
  }

	render() {
    return(
	    <div className="app">
        <button onClick={this.loginWithFb}> Login With Facebook </button>
	    </div>
	  )
	};
}

