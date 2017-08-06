import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants'
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

export const addReminder = (text, dueDate) => {
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    }
    console.log("action", action);
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log("deleting action", action)
    return action;
}

export const clearReminders = () => {
    const action = {
        type: CLEAR_REMINDERS
    }
    return action;
}