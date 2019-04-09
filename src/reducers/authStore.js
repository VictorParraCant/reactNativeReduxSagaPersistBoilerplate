import * as Types from '../constants/actionTypes'
import createReducer from './createReducer'

const INITIAL_STATE = {
  isFetching: false,
  name: null,
  email: null,
}

const authUpdate = (state, { update }) => ({
  ...state,
  [update.property]: update.value
})

const authReset = () => INITIAL_STATE

const ACTION_HANDLERS = {
  [Types.AUTH_UPDATE]: authUpdate,
  [Types.AUTH_RESET]: authReset
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
