import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Icon from '../Icon'

import styles from '../../config/styles'

const Wrapper = styled.section`
  background: #fff;
  padding: 40px 40px 30px;
  margin: 80px 10px 40px;
  border-radius: 8px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.15);
  position: relative;
`

const Line = styled.div`
  background: #c75777;
  height: 5px;
  width: 75px;
  margin: 0 0 20px 0;
`

const StyledHeading = styled.h4`
  margin: 0;
  font-size: 42px;
  font-family: ${styles.fonts.headings};
  line-height: 1;
  color: #c75777;
`

const Copy = styled.div`
  & > p {
    font-size: 21px;
    line-height: 36px;
  }
  & > p > code {
    border-radius: 8px;
    background: #c75777;
    white-space: nowrap;
    color: #fff;
    padding: 3px 8px;
    font-family: ${styles.fonts.mono};
  }
`

const Item = styled.div`
  display: flex;
  flex-flow: column;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #d8e4ed;
  box-sizing: border-box;
  width: 33%;
  margin: 0 20px 20px 0;
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #666;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 630px) {
    margin: 0 0 20px 0;
    width: auto;
  }
`

const SocialName = styled.a`
  color: #c75777;
  margin-top: 10px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #a53152;
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
