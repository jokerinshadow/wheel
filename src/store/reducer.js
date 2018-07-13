

import { combineReducers } from 'redux';
import commons from './commons/reducer';
import cities from './Cities/reducer'

const reducer = combineReducers({
    commons,
    cities
})

export default reducer;
