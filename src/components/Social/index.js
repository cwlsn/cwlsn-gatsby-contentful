import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Icon from '../Icon'
import { Wrapper, Line } from '../Header'
import { theme } from '../../util/theme'

const StyledHeading = styled.h4`
  margin: 0;
  font-size: ${theme.fontSize(2)};
  font-family: ${theme.font('headings')};
  line-height: 1;
  color: ${theme.color('brand.secondary.2')};
`

const Copy = styled.div`
  & > p {
    font-size: ${theme.fontSize(1)};
    line-height: 36px;
  }
  & > p > code {
    border-radius: ${theme.radius('flat')};
    background: ${theme.color('dark.3')};
    white-space: nowrap;
    color: #fff;
    padding: 3px 8px;
    font-family: ${theme.font('mono')};
  }
`

const Item = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px;
  border-radius: ${theme.radius('flat')};
  box-sizing: border-box;
  width: 33%;
  margin: 0 20px 20px 0;
  font-size: ${theme.fontSize(1)};
  font-weight: bold;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${theme.color('light.2')};

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 630px) {
    margin: 0 0 20px 0;
    width: auto;
  }
`

const SocialName = styled.a`
  color: ${theme.color('brand.primary.1')};
  margin-top: 10px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${theme.color('brand.secondary.2')};
  }
`

const FlexRow = styled.div`
  display: flex;
  margin: 20px 0 0 0;

  @media (max-width: 630px) {
    flex-flow: column;
  }
`
const handleFromUrl = url => url.split('/').pop()

const Social = () => (
  <Wrapper>
    <StaticQuery
      query={graphql`
        query SocialContent {
          contentfulSocialMedia {
            title
            linkedinUrl
            twitterUrl
            githubUrl
            blurb {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      `}
      render={({
        contentfulSocialMedia: {
          title,
          linkedinUrl,
          twitterUrl,
          githubUrl,
          blurb: {
            childMarkdownRemark: { html },
          },
        },
      }) => (
        <>
          <Line />
          <StyledHeading>{title}</StyledHeading>
          <Copy dangerouslySetInnerHTML={{ __html: html }} />
          <FlexRow>
            <Item>
              <Icon icon="linkedin" />
              <SocialName href={linkedinUrl}>
                {handleFromUrl(linkedinUrl)}
              </SocialName>
            </Item>
            <Item>
              <Icon icon="twitter" />
              <SocialName href={twitterUrl}>
                {handleFromUrl(twitterUrl)}
              </SocialName>
            </Item>
            <Item>
              <Icon icon="github" />
              <SocialName href={githubUrl}>
                {handleFromUrl(githubUrl)}
              </SocialName>
            </Item>
          </FlexRow>
        </>
      )}
    />
  </Wrapper>
)

export default Social
