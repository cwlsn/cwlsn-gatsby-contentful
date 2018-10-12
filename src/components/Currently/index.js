import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
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
  background: #57b3c7;
  height: 5px;
  width: 75px;
  margin: 0 0 20px 0;
`

const StyledHeading = styled.h3`
  color: #57b3c7;
  font-size: 42px;
  margin: 0;
  line-height: 1;
  font-family: ${styles.fonts.headings};
`

const StyledSubHeading = styled(StyledHeading)`
  font-size: 28px;
  margin-bottom: 30px;
  font-size: normal;
`

const Copy = styled.div`
  & > p {
    color: #333;
    font-size: 21px;
    line-height: 36px;
    margin-bottom: 30px;
  }

  & > p > a {
    color: #2fa1d4;
    transition: color 0.3s;

    &:hover {
      color: #177aa7;
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
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 20px;
  margin: 0 10px 10px 0;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const ItemTitle = styled.h3`
	margin: 0 0 10px 0;
	padding: 0;
	font-size: 18px
	font-weight: bold;
	line-height: 1;

	a {
		color: #57b3c7;
		transition: color 0.3s;

		&:hover {
			color: #0b5e83;
		}
	}
`

const ItemText = styled.div`
  & > p {
    line-height: 24px;
    font-size: 16px;
    color: #666;
    margin: 0;
    padding: 0;
  }
  &.with_slides {
    padding-bottom: 40px;
  }
`

const SlidesLink = styled.a`
  color: #fff;
  background: #57b3c7;
  border-radius: 0 0 4px 4px;
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
    background: #0b5e83;
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
