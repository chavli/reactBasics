import { combineReducers } from 'redux';
import user from './user';
import goals from './goals';
import completeGoals from './completegoals'
import userList from './userlist'
import userGoals from './usergoals'

export default combineReducers({
    user,
    goals,
    completeGoals,
    userList,
    userGoals,
})
