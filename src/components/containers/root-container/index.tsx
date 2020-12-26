import React from 'react'

import { useSelector } from 'react-redux'
import { STATUS } from 'typings'

import { InputContainer, ResoultContainer } from 'components'
import { IReducer } from 'reducers'

interface Props {}

interface IState {
  status?: STATUS
}

export const RootContainer = (props: Props) => {
  const state = useSelector<IReducer, IState>(({ status }) => ({
    status,
  }))

  return (
    <>
      {state.status === 'result' && <ResoultContainer />}
      {(state.status === 'input' || state.status === undefined) && (
        <InputContainer />
      )}
    </>
  )
}

export default RootContainer
