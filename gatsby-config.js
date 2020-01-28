if (process.env.ENVIROMENT !== 'production') {
  require('dotenv').config()
}

const contentfulConfig = {
  spaceId: 'otcg69yadk3e',
  accessToken: '78b70adafbc928e1e8ff67f5a852b756386f9c97b85bc6d2e402142c2ac026d8',
}

module.exports = {
  siteMetadata: {
    title: 'Connor Wilson | Front-end Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'cwlsn',
        short_name: 'starter',
        start_url: '/',
        background_color: '#333333',
        theme_color: '#333333',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        pure: true,
        displayName: false,
      },
    },
  ],
}
