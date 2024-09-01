import {
    ADD_TO_CART
} from './actionTypes';

export const addToCart = (guitarId) => ({
    type: ADD_TO_CART,
    payload: guitarId
});