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
	@import url('https://fonts.googleapis.com/css?family=Fira+Mono|Oswald:600|Vollkorn');

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
        <Helmet title="Connor Wilson | Front-end Developer" />
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
