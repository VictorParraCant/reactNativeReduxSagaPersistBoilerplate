import * as Types from '../constants/actionTypes'
import createReducer from './createReducer'

const INITIAL_STATE = {
  networkInfo: {
    netType: '',
    speed: ''
  }
}

const networkStatus = (state, { netType, speed }) => ({
  ...state,
  networkInfo: { netType, speed }
})

const ACTION_HANDLERS = {
  [Types.APP_NETWORK_STATUS]: networkStatus
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
