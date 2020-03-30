import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet'

import Container from '../components/Container'
import Header from '../components/Header'
import Currently from '../components/Currently'
import Social from '../components/Social'
import RepoLink from '../components/RepoLink'
import styles from '../config/styles'

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		color: #333;
		font-family: ${styles.fonts.copy};
    background: #fff;
	}
`

class IndexPage extends Component {
  render() {
    return (
      <>
        <Helmet title="Connor Wilson | Front-end Developer">
          <html lang="en" />
          <meta
            name="description"
            content="Connor Wilson is a front-end developer based out of Toronto, ON."
          />
          <link
            href="https://fonts.googleapis.com/css?family=Crimson+Text:700|Fira+Code|Inter&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Container>
          <GlobalStyle />
          <Header />
          <Currently />
          <Social />
          <RepoLink />
        </Container>
      </>
    )
  }
}
export default IndexPage
