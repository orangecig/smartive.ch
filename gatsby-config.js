module.exports = {
  siteMetadata: {
    title: 'smartive',
    siteUrl: '',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-medium',
      options: {
        username: 'smartive',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-35082807-1',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `{
      site {
        siteMetadata {
          siteUrl
        }
      }
      allSitePage(filter: {path: {regex: "/^(?!.*?404).*/"}}) {
        edges {
          node {
            path
          }
        }
      }
    }
`,
      },
    },
  ],
};
