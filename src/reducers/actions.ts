import { AnyAction } from 'redux'
import { INDEX, STATUS, ANALYZER_DATA } from 'typings'
import * as types from './types'

export const setStartIdx = (start: INDEX): AnyAction => ({
  start,
  type: types.SET_START_IDX,
})

export const setEndIdx = (end: INDEX): AnyAction => ({
  end,
  type: types.SET_END_IDX,
})

export const changeStatus = (status: STATUS): AnyAction => ({
  status,
  type: types.CHANGE_STATUS,
})

export const setAnalyzerData = (analyzer_data: ANALYZER_DATA): AnyAction => ({
  analyzer_data,
  type: types.SET_ANALYZER_DATA,
})
