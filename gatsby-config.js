module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    siteUrl: "https://www.michaelwatchmaker.com",
    title: "Portfolio",
  },
  plugins: [
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        mode: 'render-blocking',
        preconnect: [`https://fonts.gstatic.com`],
        web: [
          {
            name: `Inter`,
            file: `https://fonts.googleapis.com/css2?family=Inter:wght@450;520;640;680&display=swap`,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.png',
      },
    },
  ]
};
