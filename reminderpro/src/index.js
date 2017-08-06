import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css'

// a Provider component is where the state store is saved.
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reminders from './reducers'

// a Reducer takes a state (the store) and an action and returns
// a new state(store). stores are immutable and a brand new instance
// is created for every transition. never mutate state directly

const store = createStore(reminders)

ReactDOM.render( <
        Provider store = { store } >
        <
        App / >
        <
        /Provider>, document.getElementById('root'))