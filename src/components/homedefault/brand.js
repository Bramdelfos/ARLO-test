import { graphql, useStaticQuery } from 'gatsby'
import React from 'react';
import Img from "gatsby-image";

const Brand = () => {
    const brandQueryData = useStaticQuery(graphql`
        query brandQuery {
            homedefaultJson(id: {eq: "brand"}) {
                brandGroup {
                    image {
                        childImageSharp {
                            fixed(quality: 100, width: 160, height: 65) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        }
    `)
    const BrandImage = brandQueryData.homedefaultJson.brandGroup;
    return (
        <div className="rn-brand-area ptb--70 bg-color-primary">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="brand-list-wrapper">
                            {BrandImage.map((data, index) => (
                                <div className="single-image" key={index}>
                                    <Img fixed={data.image.childImageSharp.fixed} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Brand
