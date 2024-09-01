import {
    FILTER_BY_PRICE,
    FILTER_BY_BRAND,
    FILTER_BY_TYPE,
    FILTER_BY_COLOR,
    FILTER_BY_FEATURES
} from './actionTypes';

export const filterByPrice = (priceRange) => ({
    type: FILTER_BY_PRICE,
    payload: priceRange
});

export const filterByBrand = (brand) => ({
    type: FILTER_BY_BRAND,
    payload: brand
});

export const filterByType = (type) => ({
    type: FILTER_BY_TYPE,
    payload: type
});

export const filterByColor = (color) => ({
    type: FILTER_BY_COLOR,
    payload: color
});

export const filterByFeatures = (features) => ({
    type: FILTER_BY_FEATURES,
    payload: features
});