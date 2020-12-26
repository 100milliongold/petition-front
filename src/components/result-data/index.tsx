import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { Button } from 'components'
import { BarChart, WordCloud } from 'components'
import { ANALYZER_DATA } from 'typings'

import { INDEX, STATUS } from 'typings'

import { changeStatus } from 'reducers'

import { IReducer } from 'reducers'

interface Props {}

interface IState {
  analyzer_data?: ANALYZER_DATA
}

export const ResoultData = (props: Props) => {
  const state = useSelector<IReducer, IState>(({ analyzer_data }) => ({
    analyzer_data,
  }))

  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const resetData = useCallback(() => {
    const value: STATUS = 'input'
    dispatch(changeStatus(value))
  }, [dispatch])

  return (
    <div>
      <BarChart data={state.analyzer_data?.category || []} />
      <WordCloud data={state.analyzer_data?.keyword || []} />
      <Button onClick={resetData}>처음으로</Button>
    </div>
  )
}

export default ResoultData
