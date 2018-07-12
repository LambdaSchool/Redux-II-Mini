import { FETCHED, FETCHING, FETCH_ERROR } from '../actions';
const initialState = {
  // define a few properties here.
  chars: [],
  fetching: false,
  fetch: false,
  error: null,
  // Array chars, Boolean fetching, Boolean fetched, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED: 
    return console.log('fetched');
    case FETCHING:
    return console.log('fetching');
    case FETCH_ERROR:
    return console.log('fetch error');

    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
