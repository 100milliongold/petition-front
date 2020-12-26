import React, { FC, useCallback, useMemo } from 'react'
// import * as d3 from 'd3-cloud'
// import * as d3 from 'd3'
import { Wrapper } from './styles'
import WordCloud from 'react-d3-cloud'
import data from './data.json'
import _ from 'lodash'

interface IProps {}

const maxFontSize = 64

const App: FC<IProps> = (props: IProps) => {
  const newData = useMemo(
    () =>
      _(data)
        .sort((a, b) => b.value - a.value)
        .take(100)
        .map(({ name, value }) => ({
          text: name,
          value,
        }))
        .value(),
    []
  )
  const minValue = _.minBy(data, (o) => o.value)?.value || 0
  const maxValue = _.maxBy(data, (o) => o.value)?.value || 0

  const fontSizeMapper = useCallback((word: any) => {
    return maxFontSize * (word.value / maxValue)
  }, [])
  const rotate = useCallback((word: any) => (word.value > 3 ? 0 : 90), [])

  return (
    <Wrapper>
      <WordCloud data={newData} fontSizeMapper={fontSizeMapper} padding={2} />
    </Wrapper>
  )
}

export default App
