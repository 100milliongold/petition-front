import { AnyAction } from 'redux'
import { INDEX, STATUS } from 'typings'
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
