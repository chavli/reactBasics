import { ADD_REMINDER } from '../constants';

const reminder = (action) => {
    return {
        text: action.text,
        id: Math.random()
    }
}

const reminders = (state = [], action) => {
    let reminders = null;
    switch (action.type) {
        case ADD_REMINDER:
            // ... is the spread operator. it takes the elements of the given
            // array and appends them into a new array.
            reminders = [...state, reminder(action)];
            console.log('reminders', reminders);
            return reminders;
        default:
            return state;
    }
}

export default reminders;