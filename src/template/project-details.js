import React from 'react';
import Img from "gatsby-image";
import Image from "../elements/image";
import { FiList } from "react-icons/fi";
import Layout from "../components/layout";

const ProjectDetails = ({data}) => {
    const projectData = data.projectJson;
    const projectImage = data.projectJson.features;
    return (
        <Layout>
            <div className="rn-project-details-area rn-section-gap bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="portfolio-content">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="content-left">
                                                <div className="page-top">
                                                    <h1 className="title_holder">{projectData.title}</h1>
                                                </div>
                                                <h3 className="mt--20">Details</h3>
                                                <ul className="list_holder">
                                                    <li><span className="icon"><FiList />Category:</span><span className="projectinfo">{projectData.category}</span></li>
                                                </ul>
                                                <p className="mt--20">{projectData.body}</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="thumbnail mt--90 mt_md--40 mt_sm--40">
                                    <Image fluid={projectData.featured_image.childImageSharp.fluid} />
                                </div>

                                <div className="image-group">
                                    {projectImage.map((data, index) => (
                                        <div className="single-image mt--30" key={index}>
                                            <Img fluid={data.image.childImageSharp.fluid} />
                                        </div>
                                    ))}
                                </div>   

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql `
    query($id: String!) {
        projectJson(id: {eq: $id}) {
            id
            title
            body
            category
            repo
            deployed
            featured_image {
                childImageSharp {
                    fluid(maxHeight: 1000, maxWidth: 1920, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                        presentationHeight
                        presentationWidth
                    }
                }
            },
            features {
                image {
                    childImageSharp {
                      fluid(maxWidth: 1920, maxHeight: 1280, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                        presentationWidth
                        presentationHeight
                      }
                    }
                }
            }
            
        }
    }
`;
export default ProjectDetails;