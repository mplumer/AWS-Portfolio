
const { slugify } = require('./src/utils/utilityFunctions');
const path = require('path');
const _ = require('lodash');



exports.onCreateNode = ({node , actions}) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node, 
            name: 'slug',
            value: slugFromTitle,
        });
    }
}
        
exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions;
    const templates =  {
        projectDetails: path.resolve('src/template/project-details.js'),
       
    }

    return graphql(`
        {
            allProjectJson {
                edges {
                    node {
                        id
                    }
                }
            }

        }
           
    `).then( res => {
        if (res.errors) return Promise.reject(res.errors)
        const project = res.data.allProjectJson.edges
        // const posts = res.data.allMarkdownRemark.edges

         // Create Project Page
         project.forEach(({ node }) => {
            createPage({
                // path: node.fields.slug,
                path: `project/${slugify(node.id)}`,
                component: templates.projectDetails,
                context: {
                    id: node.id
                }
            })
        })

        // Create Single Blog Page 
        // posts.forEach(({ node }) => {
        //     createPage({
        //         path: `${slugify(node.fields.slug)}`,
        //         component: templates.blogDetails,
        //         context: {
        //             slug: node.fields.slug
        //         }
        //     })
        // })

       

        // For get All Categiry Pages 
        // let categories = []
        // _.each(posts , edge => {
        //     if (_.get(edge , 'node.frontmatter.category')) {
        //         categories = categories.concat(edge.node.frontmatter.category)
        //     }
        // })

        // // [design , code]
        // let categoryPostCounts = {}
        // categories.forEach( category => {
        //     categoryPostCounts[category] = (categoryPostCounts[category] || 0) + 1
        // })
        // categories = _.uniq(categories)

       
        // Create Tag Posts Pages for indivedual Tag page
        // categories.forEach(category => {
        //     createPage({
        //         path: `/category/${slugify(category)}`,
        //         component: templates.categoryPost,
        //         context: {
        //             category 
        //         }
        //     })
        // })
        // End Category Area



        // Start Tags Pages 
        // let tags = []
        // _.each(posts , edge => {
        //     if (_.get(edge , 'node.frontmatter.tags')) {
        //         tags = tags.concat(edge.node.frontmatter.tags)
        //     }
        // })
        // // Create Tag Posts Pages for indivedual Tag page
        // tags.forEach(tag => {
        //     createPage({
        //         path: `/tag/${slugify(tag)}`,
        //         component: templates.tagPost,
        //         context: {
        //             tag
        //         }
        //     })
        // })
        // End Category Area



        // Start Create Authors Page 
        // let authors = []
        // _.each(posts, edge => {
        //     if(_.get(edge, 'node.fields.authorId')){
        //         authors = authors.concat(edge.node.fields.authorId)
        //     }
        // })
        // authors = _.uniq(authors)
        // authors.forEach(author => {
        //     createPage({
        //         path: `/author/${slugify(author)}`,
        //         component: templates.authorPage,
        //         context: {
        //             author
        //         }
        //     })
        // })
        // End Create Authors Page





    })

}






