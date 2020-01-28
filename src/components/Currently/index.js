import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { theme } from '../../util/theme'
import { Wrapper, Line } from '../Header'

const StyledHeading = styled.h3`
  color: ${theme.color('brand.secondary.2')};
  font-size: ${theme.fontSize(3)};
  margin: 0;
  line-height: 1;
  font-family: ${theme.font('headings')};
`

const StyledSubHeading = styled(StyledHeading)`
  font-size: ${theme.fontSize(2)};
  margin-bottom: 30px;
  font-size: normal;
`

const Copy = styled.div`
  & > p {
    color: ${theme.color('light.0')};
    font-size: ${theme.fontSize(1)};
    line-height: 36px;
    margin-bottom: 30px;
  }

  & > p > a {
    color: ${theme.color('brand.secondary.2')};
    transition: color 0.3s;

    &:hover {
      color: ${theme.color('brand.primary.1')};
    }
  }
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const Item = styled.li`
  line-height: 1;
  width: calc(50% - 10px);
  border: ${theme.color('dark.2')};
  border-radius: ${theme.radius('flat')};
  box-sizing: border-box;
  padding: 20px 0;
  margin: 0 10px 10px 0;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const ItemTitle = styled.h3`
  margin: 0 0 10px 0;
  padding: 0;
  font-size: ${theme.fontSize(1)};
  font-weight: bold;
  line-height: 1;

  a {
    color: ${theme.color('brand.primary.1')};
    transition: color 0.3s;

    &:hover {
      color: ${theme.color('brand.secondary.2')};
    }
  }
`

const ItemText = styled.div`
  & > p {
    line-height: 24px;
    font-size: ${theme.fontSize(0)};
    color: ${theme.color('light.1')};
    margin: 0;
    padding: 0;
  }
  &.with_slides {
    padding-bottom: 40px;
  }
`

const SlidesLink = styled.a`
  color: ${theme.color('light.0')};
  background: ${theme.color('brand.primary.1')};
  border-radius: ${theme.radius('flat')};
  text-align: center;
  padding: 15px 0;
  margin: 0;
  display: inline-block;
  text-decoration: none;
  position: absolute;
  font-weight: bold;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background 0.3s;

  &:hover {
    background: ${theme.color('brand.secondary.2')};
  }
`

const Currently = () => (
  <Wrapper>
    <Line />
    <StaticQuery
      query={graphql`
        query CurrentlySection {
          contentfulCurrent {
            title
            blurb {
              childMarkdownRemark {
                html
              }
            }
          }
          allContentfulProjects(sort: { fields: order }) {
            projects: edges {
              project: node {
                order
                id
                title
                link
                content {
                  childMarkdownRemark {
                    html
                  }
                }
              }
            }
          }
          allContentfulTalks {
            talks: edges {
              talk: node {
                id
                title
                blurb {
                  childMarkdownRemark {
                    html
                  }
                }
                slides {
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={({
        contentfulCurrent,
        allContentfulProjects,
        allContentfulTalks,
      }) => (
        <>
          <StyledHeading>{contentfulCurrent.title}</StyledHeading>
          <Copy
            dangerouslySetInnerHTML={{
              __html: contentfulCurrent.blurb.childMarkdownRemark.html,
            }}
          />
          <Line />
          <StyledSubHeading>Open Source</StyledSubHeading>
          <List>
            {allContentfulProjects.projects.map(({ project }) => (
              <Item key={project.id}>
                <ItemTitle>
                  <a href={project.link}>{project.title}</a>
                </ItemTitle>
                <ItemText
                  dangerouslySetInnerHTML={{
                    __html: project.content.childMarkdownRemark.html,
                  }}
                />
              </Item>
            ))}
          </List>
          <Line />
          <StyledSubHeading>Past Talks</StyledSubHeading>
          <List>
            {allContentfulTalks.talks.map(({ talk }) => (
              <Item key={talk.id}>
                <ItemTitle>{talk.title}</ItemTitle>
                <ItemText
                  className="with_slides"
                  dangerouslySetInnerHTML={{
                    __html: talk.blurb.childMarkdownRemark.html,
                  }}
                />
                <SlidesLink href={talk.slides.file.url}>Slides</SlidesLink>
              </Item>
            ))}
          </List>
        </>
      )}
    />
  </Wrapper>
)

export default Currently
