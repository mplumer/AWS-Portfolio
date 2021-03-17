import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import { FiArrowRightCircle, FiLayers , FiDatabase} from "react-icons/fi";
import Img from "gatsby-image";

const chooseusdata = [
    {
        "id": "choose-us-1",
        "icon": <FiArrowRightCircle />,
        "title": "Fully Responsive",
        "description": "Nulla metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat velit class aptent taciti sociosqu."
    },
    {
        "id": "choose-us-2",
        "icon": <FiLayers />,
        "title": "Friendly Support",
        "description": "Nulla metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat velit class aptent taciti sociosqu."
    },
    {
        "id": "choose-us-3",
        "icon": <FiDatabase />,
        "title": "Cross Browsing",
        "description": "Nulla metus ullamcorper vel tincidunt sed euismod nibh Quisque volutpat velit class aptent taciti sociosqu."
    }
]

const Chooseus = () => {
    const chooseusQueryData = useStaticQuery(graphql`
        query chooseusQueryQuery {
            homedefaultJson(id: {eq: "chooseus"}) {
                imagegroup {
                    image {
                        childImageSharp {
                            fluid(maxHeight: 500, maxWidth: 600, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                                presentationHeight
                                presentationWidth
                            }
                        }
                    }
                }
            }
        }
    `)
    const ChooseusImage = chooseusQueryData.homedefaultJson.imagegroup;
    return (
        <div className="rn-choose-us-area choose-us-style-01 rn-section-gap bg-color-extra03">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="image-group">
                            {ChooseusImage.map((data, index) => (
                                <div className="single-image" key={index}>
                                    <Img fluid={data.image.childImageSharp.fluid} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt_sm--30">
                        <div className="inner">
                            <div className="feature-list-inner">
                                {chooseusdata.map((data, index) => (
                                    <div className="feature-list" key={index}>
                                        <div className="feature-icon">
                                            <i className="icon">{data.icon}</i>
                                        </div>
                                        <div className="feature-content">
                                            <h4 className="title">{data.title}</h4>
                                            <p className="description">{data.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>  
                        </div>  
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Chooseus;
