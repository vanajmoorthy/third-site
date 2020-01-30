module.exports = {
  siteMetadata: {
    title: `vanajmoorthy.com`,
        description: `Vanaj Moorthy's personal website`,
    author: `Vanaj Moorthy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
        resolve: 'gatsby-source-prismic-graphql',
        options: {
            repositoryName: 'vanajmoorthy', // (REQUIRED, replace with your own)
            linkResolver: () => post => `/${post.uid}`,
        }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vanaj-moorthy`,
        short_name: `vanaj`,
        start_url: `/`,
        background_color: `#5393fe`,
        theme_color: `#5393fe`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: "UA-142986613-1",
            head: true,
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
