import React from 'react'
import styled from 'styled-components'

const CountText = styled.p`
  margin: 0;
`

const ResultsCount = ({ indexOfFirstPost, indexOfLastPost, total }) => {
  let message;
  if ((total - indexOfFirstPost) < 10) {
    message = `${indexOfFirstPost + 1} - ${total} of ${total}`

  } else {
    message = `${indexOfFirstPost + 1} - ${indexOfLastPost} of ${total}`
  }
  return <CountText>{message}</CountText>
}

export default ResultsCount;
