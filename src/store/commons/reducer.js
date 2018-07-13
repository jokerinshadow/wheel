
import state from './state';
import { CHANGE_USER_INFO } from './const';

const reducer = (previousState = state,action) => {
        let new_state = Object.assign({},previousState);
        switch ( action.type ){
                case CHANGE_USER_INFO:
                        new_state.userInfo = action.username ? { username:action.username } : null
                break;
                default:break;
        }
        return new_state;
}

export default reducer;