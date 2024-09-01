import { combineReducers } from 'redux';
import filterReducer from './guitarReducer';
import addToCartReducer from './addToCartReducer';

const rootReducer = combineReducers({
    filter: filterReducer,
    cart: addToCartReducer
});

export default rootReducer;