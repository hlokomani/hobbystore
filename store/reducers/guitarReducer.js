import {
    SORT_BY_PRICE_ASC,
    SORT_BY_PRICE_DESC,
    SORT_BY_DISCOUNT,
    SORT_BY_REVIEWS,
    SORT_BY_RATING,
    FILTER_BY_PRICE,
    FILTER_BY_BRAND,
    FILTER_BY_TYPE,
    FILTER_BY_COLOR,
    FILTER_BY_FEATURES,
    SEARCH_BY_TITLE,
    SEARCH_BY_NAME,
    SEARCH_BY_TITLE_OR_NAME,
    CHOOSE_CATEGORY
} from '../actions/actionTypes';
import guitars from '@/data/guitars';

const initialState = {
    guitars: guitars,
    filteredGuitars: guitars,
    sortFunction: null
};

const filterByPrice = (guitars, priceRange) => {
    const [min, max] = priceRange;
    return guitars.filter(guitar => {
        const price = parseFloat(guitar.price.replace('R', '').replace(',', ''));
        return price >= min && price <= max;
    });
};

const filterByBrand = (guitars, brand) => guitars.filter(guitar => guitar.title.includes(brand));
const filterByType = (guitars, type) => guitars.filter(guitar => guitar.title.includes(type));
const filterByColor = (guitars, color) => guitars.filter(guitar => guitar.title.includes(color));
const filterByFeatures = (guitars, features) => guitars.filter(guitar => features.every(feature => guitar.features.includes(feature)));
const filterByCategory = (guitars, category) => {
    if (category === "Electric | Solid Body") {
        return guitars.filter(guitar => guitar.category === "Electric" || guitar.category === "Solid Body");
    }
    return guitars.filter(guitar => guitar.category.includes(category));
};

const searchByTitle = (guitars, title) => guitars.filter(guitar => guitar.title.toLowerCase().includes(title.toLowerCase()));
const searchByName = (guitars, name) => guitars.filter(guitar => guitar.name.toLowerCase().includes(name.toLowerCase()));
const searchByTitleOrName = (guitars, searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    return guitars.filter(guitar => 
        guitar.title.toLowerCase().includes(lowercasedTerm) || 
        guitar.name.toLowerCase().includes(lowercasedTerm)
    );
};

const comparePriceAsc = (a, b) => parseFloat(a.price.replace('R', '').replace(',', '')) - parseFloat(b.price.replace('R', '').replace(',', ''));
const comparePriceDesc = (a, b) => parseFloat(b.price.replace('R', '').replace(',', '')) - parseFloat(a.price.replace('R', '').replace(',', ''));
const compareDiscount = (a, b) => parseFloat(b.discountedPrice.replace('R', '').replace(',', '')) - parseFloat(a.discountedPrice.replace('R', '').replace(',', ''));
const compareReviews = (a, b) => b.reviews - a.reviews;
const compareRating = (a, b) => b.rating - a.rating;

const applySort = (guitars, sortFunction) => {
    if (sortFunction) {
        return [...guitars].sort(sortFunction);
    }
    return guitars;
};

const reducer = (state = initialState, action) => {
    let filteredGuitars;
    switch (action.type) {
        case SORT_BY_PRICE_ASC:
            return {
                ...state,
                filteredGuitars: applySort(state.filteredGuitars, comparePriceAsc),
                sortFunction: comparePriceAsc
            };
        case SORT_BY_PRICE_DESC:
            return {
                ...state,
                filteredGuitars: applySort(state.filteredGuitars, comparePriceDesc),
                sortFunction: comparePriceDesc
            };
        case SORT_BY_DISCOUNT:
            return {
                ...state,
                filteredGuitars: applySort(state.filteredGuitars, compareDiscount),
                sortFunction: compareDiscount
            };
        case SORT_BY_REVIEWS:
            return {
                ...state,
                filteredGuitars: applySort(state.filteredGuitars, compareReviews),
                sortFunction: compareReviews
            };
        case SORT_BY_RATING:
            return {
                ...state,
                filteredGuitars: applySort(state.filteredGuitars, compareRating),
                sortFunction: compareRating
            };
        case FILTER_BY_PRICE:
            filteredGuitars = filterByPrice(state.guitars, action.payload);
            return {
                ...state,
                filteredGuitars: applySort(filteredGuitars, state.sortFunction)
            };
        case FILTER_BY_BRAND:
            filteredGuitars = filterByBrand(state.guitars, action.payload);
            return {
                ...state,
                filteredGuitars: applySort(filteredGuitars, state.sortFunction)
            };
        case FILTER_BY_TYPE:
            filteredGuitars = filterByType(state.guitars, action.payload);
            return {
                ...state,
                filteredGuitars: applySort(filteredGuitars, state.sortFunction)
            };
        case FILTER_BY_COLOR:
            filteredGuitars = filterByColor(state.guitars, action.payload);
            return {
                ...state,
                filteredGuitars: applySort(filteredGuitars, state.sortFunction)
            };
        case FILTER_BY_FEATURES:
            filteredGuitars = filterByFeatures(state.guitars, action.payload);
            return {
                ...state,
                filteredGuitars: applySort(filteredGuitars, state.sortFunction)
            };
        case CHOOSE_CATEGORY:
            filteredGuitars = filterByCategory(state.guitars, action.payload);
            return {
                ...state,
                filteredGuitars: applySort(filteredGuitars, state.sortFunction)
            };
        case SEARCH_BY_TITLE:
            filteredGuitars = searchByTitle(state.guitars, action.payload);
            return {
                ...state,
                filteredGuitars: applySort(filteredGuitars, state.sortFunction)
            };
        case SEARCH_BY_NAME:
            filteredGuitars = searchByName(state.guitars, action.payload);
            return {
                ...state,
                filteredGuitars: applySort(filteredGuitars, state.sortFunction)
            };
        case SEARCH_BY_TITLE_OR_NAME:
            filteredGuitars = searchByTitleOrName(state.guitars, action.payload);
            return {
                ...state,
                filteredGuitars: applySort(filteredGuitars, state.sortFunction)
            };
        default:
            return state;
    }
};

export default reducer;