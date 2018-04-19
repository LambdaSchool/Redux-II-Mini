import { FETCHING, FETCHED, ERROR } from "../actions";

const initialState = {
  chars: [],
  fetching: false,
  fetched: false,
  error: null
};
// define a few properties here.
// Array chars, Boolean fetching, Boolean fetched, null error.

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case FETCHED:
      return Object.assign({}, state, {
        chars: [...state.chars, ...action.payload],
        fetching: false,
        fetched: true
      });
    case ERROR:
      return Object.assign({}, state, {
        fetched: false,
        fetching: false,
        error: "Error fetching Chars"
      });
    default:
      return state;
  }
};
