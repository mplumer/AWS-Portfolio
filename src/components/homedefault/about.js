import React from 'react'
import {useStaticQuery, graphql} from 'gatsby';
import Img from "gatsby-image";
import { Controller, Scene } from 'react-scrollmagic';
import resume from '../../assets/documents/Resume-Maxwell-Plumer (2).pdf'

const About = ( ) => {
    const aboutQueryData = useStaticQuery(graphql`
        query AboutDefaultQuery {
            homedefaultJson (id: {eq: "about"}) {
                title
                description
                subtitle
                description2
                downloadButton
                linkBUtton
                
            },
            file(relativePath: {eq: "images/banner/person-image.jpg"}) {
                childImageSharp {
                  fixed (quality: 100, width: 518, height: 480) {
                    ...GatsbyImageSharpFixed
                  }
                }
            }
        }
    `);

    const title = aboutQueryData.homedefaultJson.title;
    const Subtitle = aboutQueryData.homedefaultJson.subtitle;
    const description = aboutQueryData.homedefaultJson.description;
    const description2 = aboutQueryData.homedefaultJson.description2;
    const downloadButton = aboutQueryData.homedefaultJson.downloadButton;
    const linkBUtton = aboutQueryData.homedefaultJson.linkBUtton;
    const PortfolioImages = aboutQueryData.file.childImageSharp.fixed;


    return (
        <div className="rb-about-area about-style rn-section-gap bg-color-white" id="about">
            <div className="container">
                <div className="row row--45 align-items-center">
                    <div className="col-lg-5">
                        <div className="thumbnail">
                            <div className="trigger" id="trigger2" />
                            <Controller>
                                <Scene classToggle="animated" triggerElement="#trigger2" triggerHook="onCenter">
                                    <div className="rn_surface story-image">
                                        <Img className="about-images" fixed={PortfolioImages} />
                                    </div>
                                </Scene>
                            </Controller>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="inner">
                            <div className="content">
                                <div className="section-title">
                                    <div className="title-wrap">
                                        <h3 className="title wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">{title}<span className="bg">About</span></h3>
                                        {title && <h4 className="subtitle wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms" dangerouslySetInnerHTML={{ __html: Subtitle }}></h4>}
                                    </div>
                                    
                                    {description && <p className="description wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms" dangerouslySetInnerHTML={{ __html: description }}></p>}
                                    {description && <p className="description wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms" dangerouslySetInnerHTML={{ __html: description2 }}></p>}
                                </div>
                                <div className="button-group mt--30">
                                    {downloadButton && <a className="rn-button wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms" href={resume}><span>{downloadButton}</span></a>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
