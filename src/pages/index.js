import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import Helmet from 'react-helmet'

import Container from '../components/Container'
import Header from '../components/Header'
import Currently from '../components/Currently'
import Social from '../components/Social'
import RepoLink from '../components/RepoLink'
import styles from '../config/styles'

injectGlobal`
	body {
		margin: 0;
		color: #333;
		font-family: ${styles.fonts.copy};
		background: #ecf0f1;
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
            href="https://fonts.googleapis.com/css?family=Abril+Fatface|Fira+Mono|Quicksand"
            rel="stylesheet"
          />
        </Helmet>
        <Container>
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
