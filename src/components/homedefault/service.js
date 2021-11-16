import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import ServiceOne from "../../elements/service/serviceOne";
import { ProgressBar } from 'react-bootstrap';

const Service = () => {
    const bgshapeImages = useStaticQuery(graphql`
        query BgshapeImagesQuery {
            file(relativePath: {eq: "bg/bg-image-1.jpg"}) {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                    presentationHeight
                    presentationWidth
                  }
                }
            },
            homedefaultJson(id: {eq: "skill"}) {
                title
                description
            }
        }
    `);
    const Title = bgshapeImages.homedefaultJson.title;
    const Description = bgshapeImages.homedefaultJson.description;
    return (
        <div className="service-area bg-color-extra03 rn-section-gap" id="service">
            {/* Start Service Area  */}
            <div className="rn-service-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title mb--30">
                                <span className="subtitle">SERVICES</span>
                                <h2 className="title">WHAT WE DO</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <ServiceOne column="col-lg-4 col-md-6 col-12" serviceStyle="service-style-1 mt--30" />
                    </div>
                </div>
            </div>
            {/* End Service Area  */}

            {/* Start Skill Area  */}
            <div className="rn-counterup-area counterup-style-1 rn-section-gapTop">
                <div className="container">
                    <div className="row row--30">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="left-content">
                                <h3 className="title" dangerouslySetInnerHTML={{ __html: Title }}></h3>
                                <p className="description">{Description}</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt_sm--30">
                            <div className="progressbar-area">
                                <div className="progress-bar--1">
                                    <div className="single-progress">
                                        <h6 className="title">Internet Computer will enable blockchain singularity</h6>
                                        <ProgressBar now={100} />
                                    </div>

                                    <div className="single-progress">
                                        <h6 className="title">Illuvium will be the first WEB3 product with mass adoption</h6>
                                        <ProgressBar now={100} />
                                    </div>

                                    <div className="single-progress">
                                        <h6 className="title">Token engineering is the core of a successfull WEB3 application</h6>
                                        <ProgressBar now={100} />
                                    </div>

                                    <div className="single-progress">
                                        <h6 className="title">Liquid democracy is future of DAO governance</h6>
                                        <ProgressBar now={100} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Skill Area  */}
        </div>
    )
}
export default Service;

//  <span className="label">90%</span>
//  <span className="label">95%</span>
//  <span className="label">92%</span>
//  <span className="label">92%</span>
