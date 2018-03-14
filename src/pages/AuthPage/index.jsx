import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { authFacebook, getAuthenticatedUser } from '../../utils/Mixtape';
import * as FontAwesome from 'react-icons/lib/fa'

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
      <div className="background">
  	    <div className="app">
          <img src={logo} />
          <p className="tagline">Create your own collectables to make any event more special</p>
  	    </div>
        <div className="footer">
          <button className="facebookButton" onClick={this.loginWithFb}> <FontAwesome.FaFacebook className="iconFace"/> Login With Facebook </button>
        </div>
      </div>
	  )
	};
}

