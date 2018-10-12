import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import styles from '../../config/styles'

const Wrapper = styled.section`
  background: #fff;
  padding: 20px 20px 10px;
  margin: 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.15);
  position: relative;
`

const Line = styled.div`
  background: #57b3c7;
  height: 5px;
  width: 75px;
  margin: 0 0 20px 0;
`

const StyledHeading = styled.h3`
  color: #57b3c7;
  font-size: 28px;
  margin: 0;
  line-height: 1;
  text-transform: uppercase;
  font-family: ${styles.fonts.headings};
`

const StyledSubHeading = styled(StyledHeading)`
  font-size: 21px;
  margin-bottom: 30px;
  font-size: normal;
`

const Copy = styled.div`
  & > p {
    color: #333;
    font-size: 18px;
    line-height: 1.45;
  }

  & > p > a {
    color: #2fa1d4;
  }
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`

const Item = styled.li`
  line-height: 1;
`

const ItemTitle = styled.h3`
	margin: 0;
	padding: 0;
	font-size: 21px
	line-height: 1;

	a {
		color: #57b3c7;
	}
`

const ItemText = styled.div`
  & > p {
    padding: 0 0 0 10px;
    font-size: 18px;
  }
`

const SlidesLink = styled.a`
  color: #fff;
  background: #57b3c7;
  border-radius: 4px;
  padding: 10px 14px;
  margin: 0 10px 10px;
  display: inline-block;
  text-decoration: none;
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
						allContentfulProjects(sort: {fields: order}) {
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
          <StyledSubHeading>Past Talks</StyledSubHeading>
          <List>
            {allContentfulTalks.talks.map(({ talk }) => (
              <Item key={talk.id}>
                <ItemTitle>{talk.title}</ItemTitle>
                <ItemText
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
