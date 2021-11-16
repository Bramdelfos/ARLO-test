import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from "gatsby-image";

const Timeline = () => {
    const TimelineData = useStaticQuery (graphql`
        query TimelineQuery {
            file(relativePath: {eq: "images/banner/envato.png"}) {
                childImageSharp {
                    fixed (quality: 100, width: 111, height: 21) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);
    const envatoImages = TimelineData.file.childImageSharp.fixed;
    return (
        <div className="timeline-area rn-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span className="subtitle">TIMELINE</span>
                            <h2 className="title">Evolution of WEB3 and the Metaverse</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--10 row--25">
                    {/* Start Single Timeline  */}
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="single-timeline">
                            <div className="inner">
                                <div className="time"><span>2017 - Current</span></div>
                                
                                <span className="job">Bitcoin</span>
                                <p>With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                            </div>
                        </div>
                    </div>
                    {/* End Single Timeline  */}

                    {/* Start Single Timeline  */}
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="single-timeline">
                            <div className="inner">
                                <div className="time"><span>2014 - 2017</span></div>
                               
                                <span className="job">Ethereum</span>
                                <p>With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                            </div>
                        </div>
                    </div>
                    {/* End Single Timeline  */}

                    {/* Start Single Timeline  */}
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="single-timeline">
                            <div className="inner">
                                <div className="time"><span>2021 - </span></div>
                                
                                <span className="job">Internet Computer</span>
                                <p>With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                            </div>
                        </div>
                    </div>
                    {/* End Single Timeline  */}

                    {/* Start Single Timeline  */}
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="single-timeline">
                            <div className="inner">
                                <div className="time"><span>2021 - </span></div>
                                
                                <span className="job">The Metaverse</span>
                                <p>With 20 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                            </div>
                        </div>
                    </div>
                    {/* End Single Timeline  */}

                </div>
            </div>
        </div>
    )
}

export default Timeline;


// <Img className="envato-images" fixed={envatoImages} />
// <Img className="envato-images" fixed={envatoImages} />
// <Img className="envato-images" fixed={envatoImages} />
// <Img className="envato-images" fixed={envatoImages} />

