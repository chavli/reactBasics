import { SET_USER_GOALS } from '../constants'

export default (state = [], action) => {
    switch(action.type){
        case SET_USER_GOALS:
            const { userGoals } = action
            return userGoals
        default:
            return state
    }
}
