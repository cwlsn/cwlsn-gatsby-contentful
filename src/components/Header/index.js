import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { theme } from '../../util/theme'
// import face from './face.jpg'
import label from './label.svg'

export const Wrapper = styled.section`
  padding: 40px 40px 30px;
  margin: 40px 10px 40px;
`

export const Line = styled.div`
  background: ${theme.color('brand.primary.1')};
  height: 7px;
  width: 300px;
  margin: 60px 0 60px 0;
  border-radius: ${theme.radius('flat')};
`

// const StyledFace = styled.img`
//   width: 100px;
//   height: 100px;
//   display: block;
//   border-radius: 100px;
//   box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3);
// `

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
`

const Title = styled.h1`
  font-family: ${theme.font('headings')};
  color: ${theme.color('dark.0')};
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: ${theme.fontSize(4)};
`

const SubHead = styled.h2`
  color: ${theme.color('dark.2')};
  margin: 0;
  padding: 8px 0 32px 0;
  line-height: 1;
  font-size: ${theme.fontSize(1)};
`

const Copy = styled.p`
  font-size: ${theme.fontSize(1)};
  line-height: 36px;
  color: ${theme.color('dark.1')};
`

const Tags = styled.ul`
  list-style-type: none;
  margin: 30px 0 0 0;
  padding: 0;
`

const Tag = styled.li`
  background: ${theme.color('brand.secondary.1')} url(${label}) no-repeat 16px
    11px;
  display: inline-block;
  border-radius: ${theme.radius('flat')};
  padding: 13px 16px 13px 48px;
  color: ${theme.color('light.0')};
  font-weight: bold;
  margin: 0 15px 15px 0;
`

const TagHeading = styled.h2`
  font-family: ${theme.font('headings')};
  color: ${theme.color('dark.1')};
  font-size: ${theme.fontSize(2)};
  margin: 0 0 30px 0;
  padding: 0;
  line-height: 1;
`

const Header = () => (
  <StaticQuery
    query={graphql`
      query IntroContent {
        contentfulIntroContent {
          title
          subTitle
          blurb {
            blurb
          }
          techTitle
          techList
        }
      }
    `}
    render={({
      contentfulIntroContent: {
        title,
        subTitle,
        techTitle,
        techList,
        blurb: { blurb },
      },
    }) => (
      <Wrapper>
        {/* <StyledFace src={face} alt="Connor Wilson, Front-end Developer" /> */}
        <FlexRow>
          <TextContainer>
            <Line />
            <Title>{title}</Title>
            <SubHead>{subTitle}</SubHead>
          </TextContainer>
        </FlexRow>
        <Copy>{blurb}</Copy>
        <Line />
        <TagHeading>{techTitle}</TagHeading>
        <Tags>
          {techList.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </Wrapper>
    )}
  />
)

export default Header
