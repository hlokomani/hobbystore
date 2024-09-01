import { combineReducers } from 'redux';
import filterReducer from './guitarReducer';

const rootReducer = combineReducers({
    filter: filterReducer
});

export default rootReducer;