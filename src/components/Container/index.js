import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  padidng: 0;
  max-width: 960px;
`

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>
}

export default Container
