import { SIGNED_IN } from '../constants'

let user = {
    email: null
}

export default (state = user, action) => {
    switch(action.type){
        case SIGNED_IN:
            const { email, userid } = action
            user = {
                email,
                userid
            }
            return user;
        default:
            return state;
    }
}
