import { Action, AnyAction } from 'redux'
import { INDEX } from 'typings'
import * as types from './types'

export const setStartIdx = (start: INDEX): AnyAction => ({
  start,
  type: types.SET_START_IDX,
})

export const setEndIdx = (end: INDEX): AnyAction => ({
  end,
  type: types.SET_END_IDX,
})
