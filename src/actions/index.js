// we'll need axios
import axios from 'axios';
import thunk from 'redux-thunk';
 export const FETCH_PEOPLE = "FETCH_PEOPLE";


// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

export const fetchPeople = () => {
    const people = axios.get(`https://swapi.co/api/people/`);
    return function (dispatch) {
        people.then((response) => {
        // console.log(response);
            dispatch({type: FETCH_PEOPLE, payload: response.data });
        })
        .catch((err) => {
            console.log(err);
        })
    }
}
// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based

