import { FETCHING_CHARS, FETCHING_CHARS_SUCCESS, FETCHING_CHARS_FAILURE } from '../actions';

const initialState = {
  characters: [],
  isFetching: false,
  error: null,
  // define a few properties here.
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARS:
      return { ...state, isFetching: true};

    case FETCHING_CHARS_SUCCESS:
      return { ...state, isFetching: false, characters: [...state.characters, ...action.payload]};

    case FETCHING_CHARS_FAILURE:
      return { ...state, isFetching: false, error: action.payload };

    default:
      return state;
  }
};
