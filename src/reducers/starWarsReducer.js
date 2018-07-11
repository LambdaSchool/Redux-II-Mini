import {
  FETCHING, 
  FETCHED, 
  ERROR} '../actions';
const initialState = {
  // define a few properties here.
  // Array chars, Boolean fetching, Boolean fetched, null error.
  arrayChars:[],
  fetching:true,
  fetched:true,
  error: null,
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.
    case FETCHING:
      return Object.assign({}, state, { requestPending: true });
      case FETCHED:
      return Object.assign({}, state, { requestPending: true });
      case ERROR:
      return Object.assign({}, state, { requestPending: true });
    default:
      return state;
  }
};
