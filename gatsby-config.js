module.exports = {
  siteMetadata: {
    title: `Kółko informatyczne`,
    description: `Strona Kółka informatycznego w szkole podstawowej 49 w krakowie.`,
    author: `Szymon Brud - szymonqqaz22@gmail.com`
  },
  // pathPrefix: `/blog`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#FFC107`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'INF',
        fieldName: 'inf',
        url:
          'https://api-euwest.graphcms.com/v1/cjur48txh44wa01faool9za2w/master'
      }
    }
  ]
};
