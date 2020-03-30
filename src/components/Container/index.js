import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0;
  padidng: 20px;
`

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>
}

export default Container
