import React from 'react';
import { FaBusinessTime , FaCertificate, FaSchool } from "react-icons/fa";

const Service = () => {
    return (
        <div className="rn-service-area rn-section-gapBottom">
            {/* Start Service Area  */}
            <div className="rn-service-area">
                <div className="container">
                    <div className="row">

                        {/* Start Single Service  */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="service wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                                <div className="inner">
                                    <div className="icon">
                                        <FaCertificate />
                                    </div>
                                    <div className="content">
                                    <h4 className="title">Certified Web Developer</h4>
                                    <p>Recently certified through Vanderbilt University in Full-Stack Web Development.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Service  */}

                        {/* Start Single Service  */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="service wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                                <div className="inner">
                                    <div className="icon">
                                        <FaBusinessTime />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Small Business Owner</h4>
                                        <p>Highly motivated, with a passion for using the latest web technologies to gain a competitive advantage.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Service  */}

                        {/* Start Single Service  */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="service wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1000ms">
                                <div className="inner">
                                    <div className="icon">
                                        <FaSchool />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">Pursuing B.S. in Information Technology</h4>
                                        <p>Expected to graduate in 2023, with a concentration in Programming and Software Development.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Service  */}

                    </div>
                </div>
            </div>
            {/* End Service Area  */}

        </div>
    )
}

export default Service;