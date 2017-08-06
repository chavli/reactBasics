import { SET_USERS } from '../constants'

export default (state = [], action) => {
    switch(action.type){
        case SET_USERS:
            const { userlist } = action
            return userlist
        default:
            return state
    }
}
