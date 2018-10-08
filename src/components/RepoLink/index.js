import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const Wrapper = styled.footer`
  text-align: center;
  margin: 0 20px 40px;
  font-size: 18px;
  color: #999;
`

const Copy = styled.div`
  & > p {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    white-space: pre;
  }

  & > p > a {
    color: #df8f27;
    margin: 0;
  }
`

const RepoLink = () => (
  <Wrapper>
    <StaticQuery
      query={graphql`
        query FooterContent {
          contentfulFooter {
            content {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      `}
      render={({
        contentfulFooter: {
          content: {
            childMarkdownRemark: { html },
          },
        },
      }) => <Copy dangerouslySetInnerHTML={{ __html: html }} />}
    />
  </Wrapper>
)

export default RepoLink
