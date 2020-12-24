import React from 'react'
import { InputContent, Card, InputData, Title } from 'components'

interface Props {}

export const InputContainer = (props: Props) => {
  return (
    <InputContent data-cy="content">
      <Title>분석</Title>
      <Card data-cy="card">
        <InputData />
      </Card>
    </InputContent>
  )
}

export default InputContainer
