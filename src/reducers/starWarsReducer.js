import { FETCHING, FETCHED, ERROR } from '../actions/index'
import { Object } from 'core-js'

const initialState = {
  chars: []
}

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, {
        fetching: true
      })
    case FETCHED:
      return Object.assign({}, state, {
        chars: action.payload,
        fetching: false,
        fetched: true
      })
    case ERROR:
      return Object.assign({}, state, { error: action.payload })
    default:
      return state
  }
}
