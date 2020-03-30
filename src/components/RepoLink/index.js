import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { theme } from '../../util/theme'

const Wrapper = styled.footer`
  text-align: center;
  margin: 0 20px 40px;
  font-size: ${theme.fontSize(0)};
`

const Copy = styled.div`
  & > p {
    color: ${theme.color('dark.2')};
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    white-space: pre;
  }

  & > p > a {
    color: ${theme.color('brand.primary.1')};
    margin: 0;
    transition: color 0.3s;

    &:hover {
      color: ${theme.color('brand.secondary.2')};
    }
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
