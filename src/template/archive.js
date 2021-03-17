import React from 'react';
import { graphql } from "gatsby";
import Post from "../components/post";
import Layout from "../components/layout";

const Archive = ({data , pageContext}) => {
    const authorblogs = data.allMarkdownRemark.edges;
    const {totalCount} = data.allMarkdownRemark;
    const {author} = pageContext;
    const pageHeader = `${totalCount} Post${(totalCount === 1) ?'':'s'} By <span class="theme-color">${author}</span>`;
    return (
        <Layout>
            <div className="rn-post-list-page rn-section-gapBottom pt--90 bg-color-white">
                <div className="container">
                    <div className="col-lg-12">
                        <div className="page-top">
                            <h1 className="title_holder" dangerouslySetInnerHTML={{ __html: pageHeader }}></h1>
                            <div className="breadcrumbs-area">
                                <ul className="breadcrumbs">
                                    <li><a href="/">Home</a></li>
                                    <li className="separator"><span></span></li>
                                    <li className="active">Archive</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row row--25">
                        
                    </div>
                </div>
            </div>
        </Layout>
    )
}



export default Archive;
