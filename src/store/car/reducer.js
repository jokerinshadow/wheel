

import state from './state';
import { BALANCE_CAR ,CHANGE_COUNTS,DELETE_GOOD,CLEAR_CART} from './const';

const reducer = (previousState = state,action)=>{
    let new_state = Object.assign({},previousState)
    switch (action.type) {
        case BALANCE_CAR: new_state.goods = action.goods;
        break;
        case DELETE_GOOD: new_state.goods = action.goods;
        break;
        case CHANGE_COUNTS: new_state.goods = action.goods;
        break;
        case CLEAR_CART : new_state.goods = action.goods;
        break;
        default:
        break;
    }
    return new_state;
}

export default reducer;