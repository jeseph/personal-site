module.exports = {
  siteMetadata: {
    siteUrl: `https://www.jese.ph`,
  },
  plugins: [
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://www.jese.ph`,
    }
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-WLR39P8',
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sitemap`
    },
  ]
}
