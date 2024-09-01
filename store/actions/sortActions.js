import {
    SORT_BY_PRICE_ASC,
    SORT_BY_PRICE_DESC,
    SORT_BY_DISCOUNT,
    SORT_BY_REVIEWS,
    SORT_BY_RATING
} from './actionTypes';

export const sortByPriceAsc = () => ({
    type: SORT_BY_PRICE_ASC
});

export const sortByPriceDesc = () => ({
    type: SORT_BY_PRICE_DESC
});

export const sortByDiscount = () => ({
    type: SORT_BY_DISCOUNT
});

export const sortByReviews = () => ({
    type: SORT_BY_REVIEWS
});

export const sortByRating = () => ({
    type: SORT_BY_RATING
});