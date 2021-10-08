import React from 'react';
import Img from "gatsby-image";
import Image from "../elements/image";
import Layout from "../components/layout";
import { FiList, FiUser, FiInstagram } from "react-icons/fi";


const ProjectDetails = ({data}) => {
    const projectData = data.projectJson;
    const projectImage = data.projectJson.features;
    return (
        <Layout>
            <div className="rn-project-details-area rn-section-gapBottom pt--90 bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="page-top">
                                    <h1 className="title_holder">{projectData.title}</h1>
                                </div>
                                <div className="portfolio-content mt--90 mt_lg--30 mt_md--20 mt_sm--20">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12 col-12">
                                            <div className="content-left">
                                                <h3>Details</h3>
                                                <ul className="list_holder">
                                                    <li><span className="icon"><FiList />Category:</span><span className="projectinfo">{projectData.category}</span></li>
                                                    <li><span className="icon"><FiUser />Client:</span><span className="projectinfo">{projectData.client}</span></li>
                                                    <li><span className="icon"><FiInstagram />Images by:</span><span className="projectinfo">{projectData.imgesBY}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-12 mt_md--30 mt_sm--30">
                                            <div className="content-left">
                                                <p>{projectData.body}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="thumbnail mt--90 mt_md--40 mt_sm--40">
                                    <Image fluid={projectData.featured_image.childImageSharp.fluid} />
                                </div>

                                <div className="image-group">
                                    {projectImage.map((data, index) => (
                                        <div className="single-image mt--30" key={index}>
                                            <Img fluid={data.image.childImageSharp.fluid} />
                                        </div>
                                    ))}
                                </div>   

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql `
    query($id: String!) {
        projectJson(id: {eq: $id}) {
            id
            title
            body
            category
            client
            imgesBY
            featured_image {
                childImageSharp {
                    fluid(maxHeight: 1000, maxWidth: 2000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                        presentationHeight
                        presentationWidth
                    }
                }
            },
            features {
                image {
                    childImageSharp {
                      fluid(maxWidth: 1920, maxHeight: 1280, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                        presentationWidth
                        presentationHeight
                      }
                    }
                }
            }
            
        }
    }
`;
export default ProjectDetails;