import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';


const SkillTwo = () => {
    const skillTwoQueryData = useStaticQuery(graphql`
        query skillTwoQuery {
            homedefaultJson(id: {eq: "skillTwo"}) {
            title
            description
            },
            allSkilltwoJson {
                edges {
                  node {
                    description
                    number
                    title
                    id
                  }
                }
            }
        }
    `);

    const title = skillTwoQueryData.homedefaultJson.title;
    const description = skillTwoQueryData.homedefaultJson.description;
    const AllSkillData = skillTwoQueryData.allSkilltwoJson.edges;

    return (
        <div className="our-skill-area rn-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            {title && <h3 className="title" dangerouslySetInnerHTML={{ __html: title }}></h3>}
                            {description && <p className="description" dangerouslySetInnerHTML={{ __html: description }}></p>}
                        </div>
                    </div>
                </div>
                <div className="row mt--30">
                    {AllSkillData.map(data => (
                        <div className="col-lg-4 col-md-6 col-12" key={data.node.id}>
                            <div className="icon-box">
                                <div className="inner">
                                    <div className="number">{data.node.number}</div>
                                    <div className="content">
                                        <h3 className="title">{data.node.title}</h3>
                                        <p className="description">{data.node.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillTwo;
