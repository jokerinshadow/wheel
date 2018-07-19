
//在写demo的时候,仓库的数据当页面被刷新后，会自动恢复成原有state的数据;
//注意!
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const store   = createStore(reducer,applyMiddleware(thunk));

export default store;