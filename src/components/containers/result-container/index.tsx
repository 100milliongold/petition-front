import React, { FC } from 'react'

import { ResultContent, Card, ResoultData, Title } from 'components'

interface Props {}

const ResoultContainer: FC = ({}: Props) => {
  return (
    <ResultContent>
      <Title>결과</Title>
      <Card data-cy="card">
        <ResoultData />
      </Card>
    </ResultContent>
  )
}

export default ResoultContainer
