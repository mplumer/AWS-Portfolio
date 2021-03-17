
module.exports = {
  siteMetadata: {
    title: `Max Plumer Full Stack Web Developer`,
    description: `My Portfolio, built with Gatsby, React, JavaScript, CSS and SCSS. Deployed and hosted using AWS Cloudfront, S3, and Route 53.`,
    author: `Max Plumer`,
    siteUrl: "https://www.maxplumer.com/",
    getform_url: "https://getform.io/f/7a6695a7-c8e3-442c-bc2f-d46d3b9a535e",
  },
  

  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
          fonts: [
            `Montserrat ital`,
            `sans-serif\:300`, `300i`, `400`, `400i`, `500`, `600`, `700`, `900`
        ],
        fonts: [
          `Mulish`,
          `sans-serif\:300`, `400`, `500`, `600`, `700`
        ],
        display: 'swap',
      },
  },
  
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },


    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    
    {
        resolve: "gatsby-plugin-anchor-links",
        options: {
          offset: -100
        }
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    
    
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`,
  ],
}
