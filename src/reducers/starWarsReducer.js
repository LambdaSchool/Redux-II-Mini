import { CHARS_FETCHED, CHARS_FETCHING, ERROR} from '../actions';

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
   case CHARS_FETCHED:
      return Object.assign({}, state, {
        chars: state.chars.concat(action.payload),
        fetching: false,
        fetched: true
      });
    case CHARS_FETCHING:
      return Object.assign({}, state, { fetching: true });
    case ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: action.payload
      });
    default:
      return state;
  }
};


 // Fill me in with the important reducers
    // action types should be FETCHING, FETCHED, and ERROR
    // your switch statement should handle all of these cases.