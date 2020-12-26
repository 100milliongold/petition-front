import { AnyAction } from 'redux'

import { IReducer } from './interfaces'

import * as types from './types'

const initialState: IReducer = {
  status: 'input',
}

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
    case types.CHANGE_STATUS:
      return {
        ...state,
        status: action.status,
      }
    case types.SET_ANALYZER_DATA:
      return {
        ...state,
        analyzer_data: action.analyzer_data,
      }
    default:
      return state
  }
}

export default reducer
