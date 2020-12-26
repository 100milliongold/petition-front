import React, { FC } from 'react'

import { ResultContent, Card, ResultData, Title } from 'components'

interface Props {}

const ResoultContainer: FC = ({}: Props) => {
  return (
    <ResultContent>
      <Title>결과</Title>
      <Card data-cy="card">
        <ResultData />
      </Card>
    </ResultContent>
  )
}

export default ResoultContainer
