import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

const ServiceOne = (props) => {
    const aboutQueryData = useStaticQuery(graphql`
        query serviceData {
            allServiceJson {
                edges {
                    node {
                        id
                        number
                        title
                        description
                        readmoreButton
                    }
                }
            }
        }
    `);
    const services = aboutQueryData.allServiceJson.edges;
    return (
        <>
            {services.map((data) => (
                <div className={props.column} key={data.node.id}>
                    <div className={`service ${props.serviceStyle}`}>
                        <div className="inner">
                            <div className="number">
                                <span>{data.node.number}</span>
                            </div>
                            <div className="content">
                                <h3 className="title">{data.node.title}</h3>
                                <p className="description">{data.node.description}</p>
                                <a className="readmore-btn" href="#service">{data.node.readmoreButton}</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default ServiceOne
