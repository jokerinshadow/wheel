


import Cookies from 'react-cookies';
import { CHANGE_USER_INFO} from './const';
import { ActionCreator } from 'redux';

const actionCreator = {
    getInitialUserInfo (){
        return {
            type:CHANGE_USER_INFO,username:Cookies.load('username') || null
          }
    },
    //登陆
    codeLogin ({username,password,success,fail}) {
        return dispatch => {
            if(username == 18188888888 && password == 1234){
                let action = {type:CHANGE_USER_INFO,username}
                dispatch(action)
                if(success) success();
            }
            else{
                if(fail) fail();
            }
        }
    }

}

export default actionCreator;