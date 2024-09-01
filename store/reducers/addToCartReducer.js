import { ADD_TO_CART } from '../actions/actionTypes';
import getGuitarById from '@/utils/getById';

const initialState = {
    cart: []
};

const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const guitar = getGuitarById(action.payload);
            if (guitar) {
                return {
                    ...state,
                    cart: [...state.cart, guitar]
                };
            }
            return state;
        default:
            return state;
    }
};

export default addToCartReducer;