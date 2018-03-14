import firebase from 'firebase/app';
import database from 'firebase/database';
import 'firebase/auth'; //pulling in the auth service here
import { createClass } from 're-base';

const config = {
	apiKey: 'AIzaSyDWAxE9lmnlWl-K_Yr7RuyFSIdqXCF2xvM',
	authDomain: 'livebadge.firebaseapp.com',
	databaseURL: 'https://livebadge.firebaseio.com',
};

const app = firebase.initializeApp(config); //the auth service gets initialized here if its present
const db = database(app);
const rebase = createClass(db);
/* there is now a reference to the auth service at 
   rebase.initializedApp.auth and firebase.auth
   we use rebase.initializedApp.auth but could also 
   export the auth service seperately 
*/
export default rebase;
