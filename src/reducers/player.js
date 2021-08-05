import { PLAYER_LIST, PLAYER_LIST_ERROR } from "../actions/types";

const INITIAL_STATE = {
  players: [],
  errorMessage: ''
}

// eslint-disable-next-line
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case PLAYER_LIST:
      return { ...state, players: action.payload }
    case PLAYER_LIST_ERROR:
      return { ...state, errorMessage: action.payload }
    default:
      return state
  }
}