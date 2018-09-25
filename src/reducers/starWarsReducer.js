import { FETCHING, FETCHED, ERROR } from '../actions';

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
    case FETCHING:
      return Object.assign({}, state, {
        fetching: true,
        fetched: false,
        error: null
      });
    case FETCHED:
      return Object.assign({}, state, {
        fetched: true,
        fetching: false,
        chars: action.payload
      });
    case ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload
      });
    default:
      return state;
  }
};
