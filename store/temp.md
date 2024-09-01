To create actions and reducers for sorting the guitars by price (ASC, DESC), discount %, reviews, and rating, you can follow these steps:

1. Define action types.
2. Create action creators.
3. Implement the reducer to handle sorting.

Here's how you can do it:

### 1. Define Action Types

Create a file `actionTypes.js` to define the action types.

```javascript
// actionTypes.js
export const SORT_BY_PRICE_ASC = 'SORT_BY_PRICE_ASC';
export const SORT_BY_PRICE_DESC = 'SORT_BY_PRICE_DESC';
export const SORT_BY_DISCOUNT = 'SORT_BY_DISCOUNT';
export const SORT_BY_REVIEWS = 'SORT_BY_REVIEWS';
export const SORT_BY_RATING = 'SORT_BY_RATING';
```

### 2. Create Action Creators

Create a file `actions.js` to define the action creators.

```javascript
// actions.js
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
```

### 3. Implement the Reducer

Create a file `reducer.js` to define the reducer.

```javascript
// reducer.js
import {
    SORT_BY_PRICE_ASC,
    SORT_BY_PRICE_DESC,
    SORT_BY_DISCOUNT,
    SORT_BY_REVIEWS,
    SORT_BY_RATING
} from './actionTypes';
import guitars from '@/data/guitars';

const initialState = {
    guitars: guitars
};

const comparePriceAsc = (a, b) => parseFloat(a.price.replace('R', '').replace(',', '')) - parseFloat(b.price.replace('R', '').replace(',', ''));
const comparePriceDesc = (a, b) => parseFloat(b.price.replace('R', '').replace(',', '')) - parseFloat(a.price.replace('R', '').replace(',', ''));
const compareDiscount = (a, b) => parseFloat(b.discountedPrice.replace('R', '').replace(',', '')) - parseFloat(a.discountedPrice.replace('R', '').replace(',', ''));
const compareReviews = (a, b) => b.reviews - a.reviews;
const compareRating = (a, b) => b.rating - a.rating;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_BY_PRICE_ASC:
            return {
                ...state,
                guitars: [...state.guitars].sort(comparePriceAsc)
            };
        case SORT_BY_PRICE_DESC:
            return {
                ...state,
                guitars: [...state.guitars].sort(comparePriceDesc)
            };
        case SORT_BY_DISCOUNT:
            return {
                ...state,
                guitars: [...state.guitars].sort(compareDiscount)
            };
        case SORT_BY_REVIEWS:
            return {
                ...state,
                guitars: [...state.guitars].sort(compareReviews)
            };
        case SORT_BY_RATING:
            return {
                ...state,
                guitars: [...state.guitars].sort(compareRating)
            };
        default:
            return state;
    }
};

export default reducer;
```

### 4. Combine Reducers (if necessary)

If you have multiple reducers, combine them using `combineReducers` from Redux.

```javascript
// rootReducer.js
import { combineReducers } from 'redux';
import guitarsReducer from './reducer';

const rootReducer = combineReducers({
    guitars: guitarsReducer
});

export default rootReducer;
```

### 5. Create the Store

Create a file `store.js` to configure the Redux store.

```javascript
// store.js
import { createStore } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export default store;
```

### 6. Use the Store in Your Application

Wrap your application with the `Provider` from `react-redux` and pass the store to it.

```javascript
// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import GuitarList from './GuitarList'; // Your component that displays the list of guitars

const App = () => (
    <Provider store={store}>
        <GuitarList />
    </Provider>
);

export default App;
```

### 7. Dispatch Actions in Your Component

In your component, you can dispatch the sorting actions based on user interaction.

```javascript
// GuitarList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortByPriceAsc, sortByPriceDesc, sortByDiscount, sortByReviews, sortByRating } from './actions';

const GuitarList = () => {
    const dispatch = useDispatch();
    const guitars = useSelector(state => state.guitars.guitars);

    return (
        <div>
            <button onClick={() => dispatch(sortByPriceAsc())}>Sort by Price Asc</button>
            <button onClick={() => dispatch(sortByPriceDesc())}>Sort by Price Desc</button>
            <button onClick={() => dispatch(sortByDiscount())}>Sort by Discount</button>
            <button onClick={() => dispatch(sortByReviews())}>Sort by Reviews</button>
            <button onClick={() => dispatch(sortByRating())}>Sort by Rating</button>
            <ul>
                {guitars.map(guitar => (
                    <li key={guitar.id}>{guitar.name} - {guitar.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default GuitarList;
```

This setup allows you to sort the guitars by price, discount, reviews, and rating using Redux actions and reducers.

To add filter actions and reducers for the guitar data, we need to define action types, create action creators, and implement the reducer to handle filtering. Let's add filters for [`price`](command:_github.copilot.openSymbolFromReferences?%5B%22price%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fapp%2F(home)%2Fproducts%2Fpage.jsx%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%2520GitHub%2520Repositories%2Fhobbystore%2Fapp%2F%2528home%2529%2Fproducts%2Fpage.jsx%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fapp%2F(home)%2Fproducts%2Fpage.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A90%2C%22character%22%3A139%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fcomponents%2FDropDown%2FDropDownSort.jsx%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%2520GitHub%2520Repositories%2Fhobbystore%2Fcomponents%2FDropDown%2FDropDownSort.jsx%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fcomponents%2FDropDown%2FDropDownSort.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A43%2C%22character%22%3A39%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fdata%2Fguitars.js%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%2520GitHub%2520Repositories%2Fhobbystore%2Fdata%2Fguitars.js%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fdata%2Fguitars.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A9%2C%22character%22%3A9%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fstore%2Freducers%2FguitarReducer.js%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%2520GitHub%2520Repositories%2Fhobbystore%2Fstore%2Freducers%2FguitarReducer.js%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fstore%2Freducers%2FguitarReducer.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A13%2C%22character%22%3A47%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fstore%2Ftemp.md%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%2520GitHub%2520Repositories%2Fhobbystore%2Fstore%2Ftemp.md%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fstore%2Ftemp.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A58%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fstore%2Ftemp.md%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%2520GitHub%2520Repositories%2Fhobbystore%2Fstore%2Ftemp.md%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fstore%2Ftemp.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A189%2C%22character%22%3A64%7D%7D%5D%5D "Go to definition"), `brand`, [`type`](command:_github.copilot.openSymbolFromReferences?%5B%22type%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fapp%2F(home)%2Fproducts%2Fpage.jsx%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%2520GitHub%2520Repositories%2Fhobbystore%2Fapp%2F%2528home%2529%2Fproducts%2Fpage.jsx%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fapp%2F(home)%2Fproducts%2Fpage.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A74%2C%22character%22%3A60%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fcomponents%2FDropDown%2FDropDownFilter.jsx%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%2520GitHub%2520Repositories%2Fhobbystore%2Fcomponents%2FDropDown%2FDropDownFilter.jsx%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fcomponents%2FDropDown%2FDropDownFilter.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A14%2C%22character%22%3A16%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fcomponents%2FDropDown%2FDropDownSort.jsx%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%2520GitHub%2520Repositories%2Fhobbystore%2Fcomponents%2FDropDown%2FDropDownSort.jsx%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fcomponents%2FDropDown%2FDropDownSort.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A22%2C%22character%22%3A16%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fstore%2Factions%2FguitarActions.js%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%2520GitHub%2520Repositories%2Fhobbystore%2Fstore%2Factions%2FguitarActions.js%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fstore%2Factions%2FguitarActions.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A9%2C%22character%22%3A4%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fstore%2Freducers%2FguitarReducer.js%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%2520GitHub%2520Repositories%2Fhobbystore%2Fstore%2Freducers%2FguitarReducer.js%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fstore%2Freducers%2FguitarReducer.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A20%2C%22character%22%3A19%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fstore%2Ftemp.md%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%2520GitHub%2520Repositories%2Fhobbystore%2Fstore%2Ftemp.md%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fstore%2Ftemp.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A17%7D%7D%5D%5D "Go to definition"), `color`, and [`special features`](command:_github.copilot.openSymbolFromReferences?%5B%22special%20features%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fdata%2Fguitars.js%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%2520GitHub%2520Repositories%2Fhobbystore%2Fdata%2Fguitars.js%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fdata%2Fguitars.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A8%2C%22character%22%3A9%7D%7D%5D%5D "Go to definition").

### 1. Define Action Types

Add the following action types to [`store/actions/actionTypes.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fstore%2Factions%2FactionTypes.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/home/tebogoyungmercykay/Documents/2. GitHub Repositories/hobbystore/store/actions/actionTypes.js"):

```javascript
export const FILTER_BY_PRICE = 'FILTER_BY_PRICE';
export const FILTER_BY_BRAND = 'FILTER_BY_BRAND';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const FILTER_BY_COLOR = 'FILTER_BY_COLOR';
export const FILTER_BY_FEATURES = 'FILTER_BY_FEATURES';
```

### 2. Create Action Creators

Create the action creators in [`store/actions/guitarActions.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fstore%2Factions%2FguitarActions.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/home/tebogoyungmercykay/Documents/2. GitHub Repositories/hobbystore/store/actions/guitarActions.js"):

```javascript
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
```

### 3. Implement the Reducer

Update the reducer in [`store/reducers/guitarReducer.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fstore%2Freducers%2FguitarReducer.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/home/tebogoyungmercykay/Documents/2. GitHub Repositories/hobbystore/store/reducers/guitarReducer.js") to handle the new filter actions:

```javascript
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
    FILTER_BY_FEATURES
} from '../actions/actionTypes';
import guitars from '@/data/guitars';

const initialState = {
    guitars: guitars,
    filteredGuitars: guitars
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_BY_PRICE_ASC:
            return {
                ...state,
                filteredGuitars: [...state.filteredGuitars].sort(comparePriceAsc)
            };
        case SORT_BY_PRICE_DESC:
            return {
                ...state,
                filteredGuitars: [...state.filteredGuitars].sort(comparePriceDesc)
            };
        case SORT_BY_DISCOUNT:
            return {
                ...state,
                filteredGuitars: [...state.filteredGuitars].sort(compareDiscount)
            };
        case SORT_BY_REVIEWS:
            return {
                ...state,
                filteredGuitars: [...state.filteredGuitars].sort(compareReviews)
            };
        case SORT_BY_RATING:
            return {
                ...state,
                filteredGuitars: [...state.filteredGuitars].sort(compareRating)
            };
        case FILTER_BY_PRICE:
            return {
                ...state,
                filteredGuitars: filterByPrice(state.guitars, action.payload)
            };
        case FILTER_BY_BRAND:
            return {
                ...state,
                filteredGuitars: filterByBrand(state.guitars, action.payload)
            };
        case FILTER_BY_TYPE:
            return {
                ...state,
                filteredGuitars: filterByType(state.guitars, action.payload)
            };
        case FILTER_BY_COLOR:
            return {
                ...state,
                filteredGuitars: filterByColor(state.guitars, action.payload)
            };
        case FILTER_BY_FEATURES:
            return {
                ...state,
                filteredGuitars: filterByFeatures(state.guitars, action.payload)
            };
        default:
            return state;
    }
};

export default reducer;
```

### 4. Update the Component

Update the [`DropDownFilter`](command:_github.copilot.openSymbolFromReferences?%5B%22DropDownFilter%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fapp%2F(home)%2Fproducts%2Fpage.jsx%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%2520GitHub%2520Repositories%2Fhobbystore%2Fapp%2F%2528home%2529%2Fproducts%2Fpage.jsx%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fapp%2F(home)%2Fproducts%2Fpage.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A6%2C%22character%22%3A7%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fcomponents%2FDropDown%2FDropDownFilter.jsx%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%2520GitHub%2520Repositories%2Fhobbystore%2Fcomponents%2FDropDown%2FDropDownFilter.jsx%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fcomponents%2FDropDown%2FDropDownFilter.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A6%7D%7D%5D%5D "Go to definition") component in [`components/DropDown/DropDownFilter.jsx`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fcomponents%2FDropDown%2FDropDownFilter.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/home/tebogoyungmercykay/Documents/2. GitHub Repositories/hobbystore/components/DropDown/DropDownFilter.jsx") to dispatch the filter actions:

```jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByPrice, filterByBrand, filterByType, filterByColor, filterByFeatures } from '@/store/actions/guitarActions';

const DropDownFilter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleFilter = (filterAction) => {
        dispatch(filterAction);
        toggleDropdown();
    };

    return (
        <div className="relative inline-block text-left">
            <button
                id="filterDropdownButton1"
                data-dropdown-toggle="dropdownFilter1"
                type="button"
                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-dark_brown hover:bg-lighter_brown hover:text-browner focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 sm:w-auto"
                onClick={toggleDropdown}
            >
                <svg className="-ms-0.5 me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z" />
                </svg>
                Filters
                <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
            </button>

            <div
                id="dropdownFilter1"
                className={`absolute z-50 ${isOpen ? 'block' : 'hidden'} w-40 mt-2 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700`}
                data-popper-placement="bottom"
            >
                <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400" aria-labelledby="filterDropdownButton1">
                    <li>
                        <button onClick={() => handleFilter(filterByPrice([0, 1000]))} className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            Price: 0 - 1000
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleFilter(filterByBrand('Fender'))} className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            Brand: Fender
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleFilter(filterByType('Stratocaster'))} className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            Type: Stratocaster
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleFilter(filterByColor('Sunburst'))} className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            Color: Sunburst
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleFilter(filterByFeatures(['Fast Delivery']))} className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                            Feature: Fast Delivery
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DropDownFilter;
```

### 5. Update the Component to Display Filtered Guitars

Update the [`ProductPage`](command:_github.copilot.openSymbolFromReferences?%5B%22ProductPage%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fapp%2F(home)%2Fproducts%2Fpage.jsx%22%2C%22external%22%3A%22file%3A%2F%2F%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%2520GitHub%2520Repositories%2Fhobbystore%2Fapp%2F%2528home%2529%2Fproducts%2Fpage.jsx%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fapp%2F(home)%2Fproducts%2Fpage.jsx%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A9%2C%22character%22%3A6%7D%7D%5D%5D "Go to definition") component in [`app/(home)/products/page.jsx`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Ftebogoyungmercykay%2FDocuments%2F2.%20GitHub%20Repositories%2Fhobbystore%2Fapp%2F(home)%2Fproducts%2Fpage.jsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/home/tebogoyungmercykay/Documents/2. GitHub Repositories/hobbystore/app/(home)/products/page.jsx") to use the `filteredGuitars` state:

```jsx
'use client';
import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import DropDownSort from '@/components/DropDown/DropDownSort';
import DropDownFilter from '@/components/DropDown/DropDownFilter';
import { useSelector } from 'react-redux';

const ProductPage = () => {
    const guitars = useSelector(state => state.guitars.filteredGuitars);
  
    return (
        <>
            <Header />
            <section className="bg-lightest_brown py-8 antialiased dark:bg-gray-900 md:py-12">
                <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
                        <div>
                            <nav className="flex" aria-label="Breadcrumb">
                                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                    <li className="inline-flex items-center">
                                        <a href="/products" className="inline-flex items-center text-sm font-medium text-dark_brown hover:text-browner dark:text-gray-400 dark:hover:text-white">
                                            <svg className="me-2.5 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                            </svg>
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <div className="flex items-center">
                                            <svg className="h-5 w-5 text-gray-400 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" />
                                            </svg>
                                            <a href="/products" className="ms-1 text-sm font-medium text-dark_brown hover:text-browner dark:text-gray-400 dark:hover:text-white md:ms-2">Guitars</a>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                            <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Guitars</h2>
                        </div>
                        <div className="flex items-center space-x-4">
                            <DropDownFilter />
                            <DropDownSort />
                        </div>
                    </div>
                    <div className="mb-4">
                            {guitars.slice(0, 8).map((guitar) => (
                                <div key={guitar.id} className="m-5 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                    <div className='flex'>
                                        <div className="h-56 w-1/2">
                                            <a href={`/product/${guitar.id}`}>
                                                <img className="mx-auto h-full dark:hidden" src={guitar.image} alt={guitar.name} />
                                                <img className="mx-auto hidden h-full dark:block" src={guitar.image} alt={guitar.name} />
                                            </a>
                                        </div>
                                        <div className="pt-6 w-1/3">
                                            <a href={`/product/${guitar.id}`} className="text-[30px] font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                                                {guitar.name}
                                            </a>
                                            {/* ... rest of your code */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProductPage;
```

This setup allows you to filter the guitars by price, brand, type, color, and special features using Redux actions and reducers.
