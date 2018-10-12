import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import styles from '../../config/styles'
import face from './face.jpg'
import label from './label.svg'

const Wrapper = styled.section`
  background: #fff;
  padding: 40px 40px 30px;
  margin: 80px 10px 40px;
  border-radius: 8px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.15);
  position: relative;
`

const Line = styled.div`
  background: #43d76d;
  height: 5px;
  width: 75px;
  margin: 0 0 20px 0;
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
  font-family: ${styles.fonts.headings};
  color: #43d76d;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: 42px;
`

const SubHead = styled.h2`
  color: #bbb;
  margin: 0;
  padding: 8px 0 0 0;
  line-height: 1;
  font-size: 21px;
`

const Copy = styled.p`
  font-size: 21px;
  line-height: 36px;
`

const Tags = styled.ul`
  list-style-type: none;
  margin: 20px 0 0 0;
  padding: 0;
`

const Tag = styled.li`
  background: #9ae19d url(${label}) no-repeat 16px 11px;
  display: inline-block;
  border-radius: 999px;
  padding: 13px 16px 13px 48px;
  color: #fff;
  margin: 0 15px 10px 0;
  box-shadow: 6px 4px 0px #43d76d;
`

const TagHeading = styled.h2`
  font-family: ${styles.fonts.headings};
  color: #43d76d;
  font-size: 28px;
  margin: 0;
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
        <StyledFace src={face} />
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
