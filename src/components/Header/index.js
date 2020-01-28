import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { theme } from '../../util/theme'
import face from './face.jpg'
import label from './label.svg'

export const Wrapper = styled.section`
  background: ${theme.color('dark.0')};
  padding: 40px 40px 30px;
  margin: 80px 10px 40px;
  border-radius: ${theme.radius('flat')};
  box-shadow: ${theme.shadow('soft')} ${theme.color('dark.2')};
  position: relative;
  color: ${theme.color('light.1')};
`

export const Line = styled.div`
  background: ${theme.color('brand.primary.1')};
  height: 7px;
  width: 125px;
  margin: 0 0 40px 0;
  border-radius: ${theme.radius('round')};
`

const StyledFace = styled.img`
  width: 100px;
  height: 100px;
  display: block;
  border-radius: 100px;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3);
`

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
  color: ${theme.color('light.0')};
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: ${theme.fontSize(3)};
`

const SubHead = styled.h2`
  color: ${theme.color('light.2')};
  margin: 0;
  padding: 8px 0 0 0;
  line-height: 1;
  font-size: ${theme.fontSize(0)};
  text-transform: uppercase;
`

const Copy = styled.p`
  font-size: ${theme.fontSize(1)};
  line-height: 36px;
  color: ${theme.color('light.0')};
`

const Tags = styled.ul`
  list-style-type: none;
  margin: 20px 0 0 0;
  padding: 0;
`

const Tag = styled.li`
  background: ${theme.color('dark.0')} url(${label}) no-repeat 16px 11px;
  display: inline-block;
  border-radius: 5px;
  padding: 13px 16px 13px 48px;
  color: ${theme.color('light.0')};
  margin: 0 15px 10px 0;
  box-shadow: ${theme.shadow('hard')} ${theme.color('dark.1')};
`

const TagHeading = styled.h2`
  font-family: ${theme.font('heading')};
  color: ${theme.color('light[1]')};
  font-size: 28px;
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
        <StyledFace src={face} alt="Connor Wilson, Front-end Developer" />
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
