// import React from 'react';
// import { graphql } from "gatsby";
// import Post from "../components/post";
// import Layout from "../components/layout";

// const categoryPostList = ({data , pageContext}) => {
//     const categoryblogs = data.allMarkdownRemark.edges;
//     const {totalCount} = data.allMarkdownRemark;
//     const {category} = pageContext;
//     const pageHeader = `${totalCount} post${(totalCount === 1) ? '':'s'} category with <span class="theme-color">${category}</span>`;

//     return (
//         <Layout>
//             <div className="rn-category-post rn-section-gapBottom pt--90 bg-color-white">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="page-top">
//                                 <h1 className="title_holder" dangerouslySetInnerHTML={{ __html: pageHeader }}></h1>
//                                 <div className="breadcrumbs-area">
//                                     <ul className="breadcrumbs">
//                                         <li><a href="/">Home</a></li>
//                                         <li className="separator"><span></span></li>
//                                         <li className="active">{category}</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row row--25">
//                         {categoryblogs.map((blog) => (
//                         <Post column="col-lg-4 col-md-6 col-12" key={blog.node.fields.slug}
//                                 content={{
//                                     ...blog.node.fields, 
//                                     ...blog.node.frontmatter,
//                                     excerpt: blog.node.excerpt
//                                 }}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     )
// }


// export const allCategoryQueryData = graphql`
//     query allCategoryQuery ($category: String){
//         allMarkdownRemark (
//             sort: {fields: frontmatter___date, order: DESC}
//             filter: {frontmatter: {category: { in: [$category]}}}
//         ){
//         totalCount
//         edges {
//             node {
//             id
//             fields {
//                 slug
//             }
//             excerpt
//             frontmatter {
//                 title
//                 tags
//                 format
//                 date(formatString: "MMM Do, YYYY")
//                 category
//                 image {
//                     childImageSharp {
//                         fluid(maxHeight: 300, maxWidth: 500, quality: 100, srcSetBreakpoints: 6) {
//                             ...GatsbyImageSharpFluid_withWebp
//                             presentationWidth
//                             presentationHeight
//                         }
//                     }
//                 }
//             }
//             }
//         }
//         }
//     }
// `



// export default categoryPostList;