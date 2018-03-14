import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

class Home extends Component {
	var config = {
		apiKey: "AIzaSyDWAxE9lmnlWl-K_Yr7RuyFSIdqXCF2xvM",

		// Only needed if using Firebase Realtime Database (which we will be in this example)
		databaseURL: "https://livebadge.firebaseio.com"",

		// Only needed if using Firebase Authentication
		authDomain: "livebadge.firebaseapp.com"
	};

	// App.js
	async login() {
	  const result = await auth().signInWithPopup(provider)
	  this.setState({user: result.user});
	}

	logout() {
	  await auth().signOut()
	  this.setState({user: null});
	}

	async componentWillMount() {
	  const user = await auth.onAuthStateChanged();
	  if(user) this.setState({user})
	}

	firebase.initializeApp(config);

	export const ref = firebase.database().ref()
	export const auth = firebase.auth
	export const provider = new firebase.auth.FacebookAuthProvider();

	render() {
	  const {user} = this.state

	  return(
	    <div className="app">
	      <p>{user ? `Hi, ${user.displayName}!` : 'Hi!'}</p>
	      <button onClick={this.login.bind(this)}>
		Login with Facebook
	      </button>

	      <button onClick={this.logout.bind(this)}>
		Logout
	      </button>
	    </div>
	  )
	};  
}

export default Home;
