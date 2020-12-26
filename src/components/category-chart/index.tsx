// BarChart.js
import React, { FC, useRef, useEffect, useState } from 'react'
import Chart from 'chart.js'
import _ from 'lodash'

import { CATEGORYS } from 'typings'

import { Wrapper, BarChartCanvas } from './styles'

interface IProps {
  data: CATEGORYS
}

const getLabel = (data: CATEGORYS) => _.map(data, 'name')
const getValue = (data: CATEGORYS) => _.map(data, 'value')

const BarChart: FC<IProps> = ({ data }: IProps) => {
  const [chart, setChart] = useState<Chart>()
  const ref: React.RefObject<HTMLCanvasElement> = useRef(null)

  useEffect(() => {
    if (ref.current instanceof HTMLCanvasElement) {
      const chart = new Chart(ref.current, {
        // The type of chart we want to create
        type: 'bar',
        // The data for our dataset
        data: {
          labels: getLabel(data),
          datasets: [
            {
              label: '카테고리',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: getValue(data),
            },
          ],
        },
        // Configuration options go here
        options: {
          responsive: false,
          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                },
                ticks: {
                  autoSkip: false,
                },
              },
            ],
            yAxes: [
              {
                display: true,
                ticks: {
                  suggestedMin: 0,
                  stepSize: 1,
                },
                scaleLabel: {
                  display: true,
                },
              },
            ],
          },
        },
      })
      setChart(chart)
    }
  }, [])

  return (
    <Wrapper data-cy="bar-chart">
      <BarChartCanvas ref={ref} />
    </Wrapper>
  )
}

BarChart.defaultProps = {
  data: [],
}

export default BarChart
