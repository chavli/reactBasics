// {X} imports a variable (jsx?) from a library
// X imports a function from a library
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp, onlineUsersRef } from './firebase';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword'
import reducer from './reducers'
import { signedInUser } from './actions';


const store = createStore(reducer)

firebaseApp.auth().onAuthStateChanged(user => {
    console.log("auth user", user)
    if (user) {
        const { email, uid } = user
        store.dispatch(signedInUser(email, uid))
        onlineUsersRef.child(uid).set({ email })
        browserHistory.push("/app")
    } else {
        browserHistory.replace("/signin")
    }

})

// The Router allows us to define the urls and map specific components
// to each. it also gives us access to special funtions (push pop) to
// manage browsing history
ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={browserHistory}>
            <Route path="/app" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/resetpassword" component={ResetPassword} />
        </Router>
    </Provider>, document.getElementById("root")

)
