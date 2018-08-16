import {CHARS_ERROR, CHARS_FETCHED, FETCHING_CHARS} from '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  chars: [],
  fetching: false,
  fetched: false,
  error: null
};


export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING_CHARS:
    return Object.assign({}, state, {fetching: true, fetched: false, error: null});
    case CHARS_FETCHED:
    return Object.assign({},state, {fetching: false, chars: action.payload, fetched: true});
    case CHARS_ERROR:
    return Object.assign({}, state, {fetching: false, fetched: false, error: action.payload})
    default:
      return state;
  }
};
