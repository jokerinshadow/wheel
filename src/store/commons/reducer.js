
import state from './state';

const reducer = (previousState = state,action) => {
        let new_state = Object.assign({},previousState);
        return new_state;
}

export default reducer;