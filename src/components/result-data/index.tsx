import React, { useRef, useEffect, useState } from 'react'
import { Wrapper } from 'components'
import { select, utcParse } from 'd3'

interface IProps {}

export const ResoultData = (props: IProps) => {
  const [data, setData] = useState([25, 30, 45, 60, 20])

  const svgRef: React.RefObject<SVGSVGElement> = useRef(null)

  useEffect(() => {
    const svg = select(svgRef.current)
    svg
      .selectAll('circle')
      .data(data)
      .join(
        (enter) =>
          enter
            .append('circle')
            .attr('class', 'new')
            .attr('r', (value) => value)
            .attr('cx', (value) => value * 2)
            .attr('cy', (value) => value * 2)
            .attr('stroke', 'blue'),
        // cs -> x-coordinate
        (update) =>
          update
            .attr('class', 'updated')
            .attr('r', (value) => value)
            .attr('cx', (value) => value * 2)
            .attr('cy', (value) => value * 2),
        (exit) => exit.remove()
      )
  }, [data])

  return (
    <>
      <Wrapper ref={svgRef}>{}</Wrapper>
      <button onClick={() => setData(data.map((value) => value + 5))}>
        update data
      </button>
    </>
  )
}

export default ResoultData
