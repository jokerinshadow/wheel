import state from './state'
import {CHANGE_CITY_ID} from './const'

const reducer = (previousState = state,action) => {
    let new_state = Object.assign({},previousState)

    switch( action.type ) {
        case 
            CHANGE_CITY_ID: new_state.cities_id === action.cities_id?action.cities_id:new_state.cities_id;
            break;
        default: break;
    }
    return new_state
}

export default reducer;