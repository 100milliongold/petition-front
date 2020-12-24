import { AnyAction } from 'redux'

import { IReducer } from './interfaces'

import * as types from './types'

const initialState: IReducer = {}

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.SET_START_IDX:
      return {
        ...state,
        start: action.start,
      }
    case types.SET_END_IDX:
      return {
        ...state,
        end: action.end,
      }
    default:
      return state
  }
}

export default reducer
