import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCxe3Orb-RICuJPxTZeheVsfFkABpj8KDs",
    authDomain: "react-goalcoach.firebaseapp.com",
    databaseURL: "https://react-goalcoach.firebaseio.com",
    projectId: "react-goalcoach",
    storageBucket: "react-goalcoach.appspot.com",
    messagingSenderId: "944875995147"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref("goals");
export const completedGoalRef = firebase.database().ref("completedGoals");
export const onlineUsersRef = firebase.database().ref("onlineUsers");
