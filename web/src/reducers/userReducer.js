import * as actions from '../actions/userActions'

export const initialState = {
  name: "",
  lastName: "",
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_NAME:
      return { ...state, name: action.payload.name, lastName:action.payload.lastName }
    default:
      return state
  }
}
