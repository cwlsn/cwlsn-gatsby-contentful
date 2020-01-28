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
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#fc8803+0,fc036f+100 */
    background: #fc8803; /* Old browsers */
    background: -moz-radial-gradient(center, ellipse cover,  #fc8803 0%, #fc036f 100%); /* FF3.6-15 */
    background: -webkit-radial-gradient(center, ellipse cover,  #fc8803 0%,#fc036f 100%); /* Chrome10-25,Safari5.1-6 */
    background: radial-gradient(ellipse at center,  #fc8803 0%,#fc036f 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fc8803', endColorstr='#fc036f',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
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
            href="https://fonts.googleapis.com/css?family=Crimson+Text|Fira+Mono|Proxima+Nova"
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
