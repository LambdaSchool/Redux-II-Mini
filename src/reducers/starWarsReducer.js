import { 
  FETCHING_CHARS, 
  ERROR_FETCHING_CHARS, 
  CHARS_FETCHED } from '../actions';

const initialState = {
  characters: [],
  error: null,
  fetching: false,
  fetched: false
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS;
      return Object.assign({}, state, { fetching: true });
    case ERROR_FETCHING_CHARS
      return Object.assign({}, state, { fetching: false, error: action.payload });
    case CHARS_FETCHED
      return Object.assign({}, state, { 
        fetching: false, 
        fetched: true, 
        characters: characers.concat(action.payload) });
    default:
      return state;
  }
};
