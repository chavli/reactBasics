import { SET_COMPLETE_GOALS } from '../constants'

export default (state = [], action) => {
    switch(action.type) {
        case SET_COMPLETE_GOALS:
            const { completeGoals } = action
            return completeGoals
        default:
            return state
    }
}
