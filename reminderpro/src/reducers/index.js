import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const reminder = (action) => {
    return {
        text: action.text,
        dueDate: action.dueDate,
        id: Math.random()
    }
}

const reminders = (state = [], action) => {
    let reminders = null;
    state = read_cookie('reminders')
    switch (action.type) {
        case ADD_REMINDER:
            // ... is the spread operator. it takes the elements of the given
            // array and appends them into a new array.
            reminders = [...state, reminder(action)];
            bake_cookie('reminders', reminders)
            return reminders;
        case DELETE_REMINDER:
            reminders = state.filter(reminder => {
                return reminder.id !== action.id;
            })
            bake_cookie('reminders', reminders)
            return reminders;
        case CLEAR_REMINDERS:
            delete_cookie('reminders')
            return []
        default:
            return state;
    }
}

export default reminders;