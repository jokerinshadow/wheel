import {CHANGE_CITY_ID} from './const'
const actionCreator = {
    getCityId(_id){
        return {
            type: CHANGE_CITY_ID,
            cities_id: _id || '5101'
        }
    },
    changeCityId(_id){
        return dispatch => {
            dispatch({
                type: CHANGE_CITY_ID,
                _id
            })
        }
    }
}

export default actionCreator