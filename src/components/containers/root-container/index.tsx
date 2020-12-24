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

  switch (state.status) {
    case 'input':
    default:
      return <InputContainer />
    case 'result':
      return <ResoultContainer />
  }
}

export default RootContainer