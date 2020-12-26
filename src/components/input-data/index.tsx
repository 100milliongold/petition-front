import React, { FC, useCallback } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { INDEX, STATUS } from 'typings'

import {
  IReducer,
  setStartIdx,
  setEndIdx,
  changeStatus,
  setAnalyzerData,
} from 'reducers'

import { getAnalyzer } from 'utils'

import { Form, Input, Button } from 'components'

interface Props {}

interface IState {
  start?: INDEX
  end?: INDEX
}

const InputData: FC = (props: Props) => {
  const state = useSelector<IReducer, IState>(({ start, end }) => ({
    start,
    end,
  }))

  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const changeStartInput = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      const start = parseInt(value)
      dispatch(setStartIdx(start))
    },
    [dispatch]
  )

  const changeEndInput = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      const end = parseInt(value)
      dispatch(setEndIdx(end))
    },
    [dispatch]
  )

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const { start, end } = state
      if (start !== undefined && end !== undefined) {
        getAnalyzer(start, end).then((res) => {
          dispatch(setAnalyzerData(res))
          const value: STATUS = 'result'
          dispatch(changeStatus(value))
        })
      }
    },
    [dispatch, state]
  )

  return (
    <Form onSubmit={onSubmit}>
      <Input
        placeholder="시작번호를 입력하세요"
        onChange={changeStartInput}
        value={state.start || ''}
      />
      <Input
        placeholder="끝번호를 입력하세요"
        onChange={changeEndInput}
        value={state.end || ''}
      />
      <Button type="submit">검색</Button>
    </Form>
  )
}

export default InputData
