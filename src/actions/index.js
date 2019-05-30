// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

import axios from 'axios'
export const FETCHING_CHARS = 'FETCHING_CHARS';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';


export const getChars = () => dispatch => {
  dispatch({ type: FETCHING_CHARS });
  axios
    .get('https://swapi.co/api/people')
    .then(({ data }) => {
      dispatch({
        type: FETCHING_SUCCESS,
        data: data.results
      });
    })
    .catch(error => {
      dispatch({
        type: FETCHING_FAILURE,
        data: error
      });
    })
}
