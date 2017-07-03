import { ADD_REMINDER } from '../constants'
// Redux provides a global store that holds the application's state.
// state is changed by listening to dispatched Actions from throughout
// the application.
// Actions are javascript objects:
/*
{
    "type": "".
    "payload": ...
}
*/
// ActionCreators are functions that return Actions

export const addReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text
    }
    console.log("action", action);
    return action;
}