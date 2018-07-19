

import { combineReducers } from 'redux';
import commons from './commons/reducer';
import cities from './Cities/reducer'
import car from './car/reducer'

const reducer = combineReducers({
    commons,
    car,
    cities
})

export default reducer;
