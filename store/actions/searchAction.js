import {
    SEARCH_BY_TITLE,
    SEARCH_BY_NAME,
    SEARCH_BY_TITLE_OR_NAME
} from './actionTypes';

export const searchByTitle = (title) => ({
    type: SEARCH_BY_TITLE,
    payload: title
});

export const searchByName = (name) => ({
    type: SEARCH_BY_NAME,
    payload: name
});

export const searchByTitleOrName = (searchTerm) => ({
    type: SEARCH_BY_TITLE_OR_NAME,
    payload: searchTerm
});