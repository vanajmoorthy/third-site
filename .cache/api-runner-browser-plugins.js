module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-source-prismic-graphql/gatsby-browser.js'),
      options: {"plugins":[],"repositoryName":"vanajmoorthy"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-prismic-starter-prist","short_name":"prist","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/oscar-icon.png"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"YOUR_GOOGLE_ANALYTICS_TRACKING_ID","head":true},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
