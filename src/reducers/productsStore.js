import * as Types from '../constants/actionTypes'
import createReducer from './createReducer'

const INITIAL_STATE = {
  isFetching: false,
  isUpdated: false,
  list: [],
  errors: {}
}

const getAll = state => ({
  ...state,
  isFetching: true
})

const getAllSuccess = (state, action) => ({
  ...state,
  isFetching: false,
  isUpdated: true,
  list: action.list
})

const getError = (state, { errors }) => ({
  ...state,
  isFetching: false,
  errors
})

const ACTION_HANDLERS = {
  [Types.PRODUCTS_GET_ALL]: getAll,
  [Types.PRODUCTS_GET_ALL_SUCCESS]: getAllSuccess,
  [Types.PRODUCTS_ERROR]: getError
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
