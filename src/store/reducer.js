

import { combineReducers } from 'redux';
import commons from './commons/reducer';
import car from './car/reducer'

const reducer = combineReducers({
    commons,
    car
})

export default reducer;
