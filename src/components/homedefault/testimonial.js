import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { FaQuoteLeft } from "react-icons/fa";


const Testimonial = () => {
    const testimonialQueryData = useStaticQuery(graphql`
        query testimonialQuery {
            homedefaultJson(id: {eq: "testimonial"}) {
                title
                subtitle
                description
                bgImage {
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 1920, maxHeight: 850) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationHeight
                            presentationWidth
                        }
                    }
                }
            }
        }
    `);

    const bgImages = testimonialQueryData.homedefaultJson.bgImage.childImageSharp.fluid;
    const title = testimonialQueryData.homedefaultJson.title;
    const subtitle = testimonialQueryData.homedefaultJson.subtitle;
    const description = testimonialQueryData.homedefaultJson.description;
    return (
        <BackgroundImage className="testimonial-bg-images" fluid={bgImages}>
            <div className="testimonial-area testimonial-style-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="content">
                                    <div className="icon">
                                        <FaQuoteLeft />
                                    </div>
                                    <p className="description">{description}</p>
                                    <div className="info">
                                        <h4 className="title">{title}</h4>
                                        <span className="subtitle">{subtitle}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BackgroundImage>
    )
}

export default Testimonial
