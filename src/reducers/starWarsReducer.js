import /* we need our action types here*/ '../actions';
const initialState = {
	// define a few properties here.
	// Array chars, Boolean fetching, Boolean fetched, null error.
	chars: [],
	fetching: false,
	fecthed: false,
	eorr: null
};
export const charsReducer = (state = initialState, action) => {
	switch (action.type) {
		// Fill me in with the important reducers
		// action types should be FETCHING, FETCHED, and ERROR
		// your switch statement should handle all of these cases.
		case FETCHING:
			return {};

		case FETCHED:
			return {};

		case ERROR:
			return {};

		default:
			return state;
	}
};
