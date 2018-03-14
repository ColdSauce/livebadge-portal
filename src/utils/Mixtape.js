import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDWAxE9lmnlWl-K_Yr7RuyFSIdqXCF2xvM",
    authDomain: "livebadge.firebaseapp.com",
    databaseURL: "https://livebadge.firebaseio.com",
    projectId: "livebadge",
    storageBucket: "livebadge.appspot.com",
    messagingSenderId: "1079512626306"
};

const firebaseApp = firebase.initializeApp(config);

export function createUser(userId, firstName, lastName) {
  const users = firebase.database().ref().child('users').push()
  users.set({
    firstName,
    lastName
  });
}

export function uploadImage(blob, name) {
  var storageRef = firebase.storage().ref();
  var nameRef = storageRef.child(name);
  console.log("doing");
  nameRef.put(blob).then((snapshot) => {
    console.log("uploaded...");
  });
}

export function getAuthenticatedUser() {
  return firebase.auth().currentUser;
}

export function addPromo(eventId, rarity, description) {
  var user = firebase.auth().currentUser;
  if(user) {
    const newPromo = firebase.database().ref('events/' + eventId).child('promos').push();
    newPromo.set({
      description,
      rarity,
    });
  }
}

export function addConcert(userId, eventId, name, description) {
  var user = firebase.auth().currentUser;
  if(user) {
    const newConcert = firebase.database().ref('users/' + user.uid).child('event/' + eventId).push();
    newConcert.set({
      name,
      description
    });
  }
}

export function authFacebook(cb) {
  var provider = new firebase.auth.FacebookAuthProvider();

  provider.addScope('email');
  provider.addScope('public_profile');
  provider.addScope('read_custom_friendlists');
  provider.addScope('user_about_me');
  provider.addScope('user_birthday');
  provider.addScope('user_education_history');
  provider.addScope('user_friends');
  provider.addScope('user_hometown');
  provider.addScope('user_location');
  provider.addScope('user_relationship_details');
  provider.addScope('user_relationships');
  provider.addScope('user_religion_politics');
  provider.addScope('user_work_history');

  firebase.auth().signInWithRedirect(provider);
  firebase.auth().getRedirectResult().then((result) => {
    if (result.credential) {
      var user = result.user;
      console.log(user);
    }
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log("ERROR: " + errorMessage);
 });
}
