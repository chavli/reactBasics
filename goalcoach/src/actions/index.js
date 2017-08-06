import { SIGNED_IN, SET_GOALS, SET_COMPLETE_GOALS, SET_USERS, SET_USER_GOALS } from '../constants'

export function signedInUser(email, userid) {
    const action = {
        type: SIGNED_IN,
        email,
        userid
    }
    return action
}

export function setGoals(goals) {
    const action = {
        type: SET_GOALS,
        goals
    }
    return action
}

export function setUserGoals(userGoals) {
    const action = {
        type: SET_USER_GOALS,
        userGoals
    }
    return action
}

export function setCompleteGoals(completeGoals) {
    const action = {
        type: SET_COMPLETE_GOALS,
        completeGoals
    }
    return action
}

export function setUserList(userlist) {
    const action = {
        type: SET_USERS,
        userlist
    }
    return action
}
