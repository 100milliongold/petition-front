import React from 'react'
import { BarChart, WordCloud } from 'components'

interface Props {}

export const ResoultData = (props: Props) => {
  return (
    <div>
      <BarChart
        data={[
          {
            value: 2,
            name: '인권/성평등',
          },
          {
            value: 1,
            name: '육아/교육',
          },
          {
            value: 2,
            name: '보건복지',
          },
          {
            value: 1,
            name: '행정',
          },
          {
            value: 1,
            name: '교통/건축/국토',
          },
        ]}
      />
      <WordCloud />
    </div>
  )
}

export default ResoultData
