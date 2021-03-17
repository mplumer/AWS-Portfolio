import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { FaQuoteRight } from 'react-icons/fa';

import testimonialOne from '../images/testimonial/1.jpg';
import testimonialTwo from '../images/testimonial/2.jpg';
import testimonialThree from '../images/testimonial/3.jpg';



const Testimonial = () => {
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <div className="testimonial-area testimonial-style-1 pb--110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title mb--100 mb_sm--50 mb_md--50">
                                <h3 className="title">What Clients Say <span className="bg">Testimonial</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                            <div className="testimonial-inner">
                                                <div className="icon">
                                                    <FaQuoteRight />
                                                </div>
                                                <p>Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.Awesome template, well written code and looks great on any platform. The customer support is very helpful and as huge asset to this template. Overall a good design, that I am quite happy with.</p>
                                                <div className="client-info">
                                                    <div className="thumbnail">
                                                        <img src={testimonialOne} alt="Testimonail Images" />
                                                    </div>
                                                    <div className="info">
                                                        <h3 className="title">Steve Collins</h3>
                                                        <span>Artel Corp.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPane>

                                        <TabPane tabId="2">
                                            <div className="testimonial-inner">
                                                <div className="icon">
                                                    <FaQuoteRight />
                                                </div>
                                                <p>I can't believe I got support and my problem resolved in just minutes from posting my question. Simply amazing team and amazing theme! Thank you very much guys for excellent support!I can't believe I got support and my problem resolved in just minutes from posting my question. Simply amazing team and amazing theme! Thank you very much guys for excellent support! </p>
                                                <div className="client-info">
                                                    <div className="thumbnail">
                                                        <img src={testimonialTwo} alt="Testimonail Images" />
                                                    </div>
                                                    <div className="info">
                                                        <h3 className="title">Brian Ederson</h3>
                                                        <span>Web Designer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPane>

                                        <TabPane tabId="3">
                                            <div className="testimonial-inner">
                                                <div className="icon">
                                                    <FaQuoteRight />
                                                </div>
                                                <p>Good overall template. I am getting back into coding and had a simple question for the author. They responded within 30 minutes and answered my question. Highly recommend.Good overall template. I am getting back into coding and had a simple question for the author. They responded within 30 minutes and answered my question. Highly recommend.</p>
                                                <div className="client-info">
                                                    <div className="thumbnail">
                                                        <img src={testimonialThree} alt="Testimonail Images" />
                                                    </div>
                                                    <div className="info">
                                                        <h3 className="title">Brian Ederson</h3>
                                                        <span>Web Designer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabPane>

                                    </TabContent>
                                </div>

                                <div className="col-lg-6">
                                    <Nav className="rn-nav-image-item" tabs>
                                        <NavItem className="first-item">
                                            <NavLink
                                                className={classnames({ active: activeTab === '1' })}
                                                onClick={() => { toggle('1'); }}
                                                >
                                                    <img src={testimonialOne} alt="Testimonail Images" />
                                                    
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                            className={classnames({ active: activeTab === '2' })}
                                            onClick={() => { toggle('2'); }}
                                            >
                                                <img src={testimonialTwo} alt="Testimonail Images" />
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink
                                            className={classnames({ active: activeTab === '3' })}
                                            onClick={() => { toggle('3'); }}
                                            >
                                                <img src={testimonialThree} alt="Testimonail Images" />
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
