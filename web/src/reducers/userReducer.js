import * as actions from '../actions/userActions'

export const initialState = {
  name: "",
  lastName: "",
  user: {},
  loading: true,
  hasErrors: false,
  redirect: null
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case actions.UPDATE_NAME:
      return { ...state, name: action.payload.name, lastName:action.payload.lastName }
    case actions.LOADING:
      return { ...state, loading: true }
    case actions.LOADED_SUCCESS:
      return { ...state, ...action.payload, loading: false, hasErrors: false }
    case actions.LOADED_FAILURE:
      return { ...state, loading: false, hasErrors: true }      
    default:
      return state
  }
}
