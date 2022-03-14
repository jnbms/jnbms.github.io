module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "jnbm",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
            {
              resolve: `gatsby-remark-highlight-code`,
              options: {
                terminal: "carbon"
              }
            }
          ]
      }
    },
    
    // {
    //   resolve: "gatsby-plugin-page-creator",
    //   options: {
    //     path: `${__dirname}/src/posts`,
    //   },
    // },
  ],
};
