import React from 'react'
import {useStaticQuery, graphql} from 'gatsby';
import Img from "gatsby-image";
import { FiMapPin, FiPhoneIncoming ,FiGift, FiBookOpen , FiMail, FiCalendar, FiBook} from "react-icons/fi";

const infoList = [
    {
        "id": "1",
        "icon": <FiGift />,
        "label": "Birthday:",
        "link": "01.07.1990"
    },
    {
        "id": "2",
        "icon": <FiMapPin />,
        "label": "Location:",
        "link": "Ave 11, New York, USA"
    },
    {
        "id": "3",
        "icon": <FiBookOpen />,
        "label": "Study:",
        "link": "University of Chicago"
    },
    {
        "id": "4",
        "icon": <FiMail />,
        "label": "Mail:",
        "link": "mymail@gmail.com"
    },
    {
        "id": "4",
        "icon": <FiCalendar />,
        "label": "Age:",
        "link": "30"
    },
    {
        "id": "4",
        "icon": <FiBook />,
        "label": "Degree:",
        "link": "Master"
    },
    {
        "id": "4",
        "icon": <FiPhoneIncoming />,
        "label": "Phone:",
        "link": "+77 022 177 05 05"
    },
]


const About = ( ) => {
    const aboutQueryData = useStaticQuery(graphql`
        query AboutDefaultQuery {
            homedefaultJson (id: {eq: "about"}) {
                title
                description
                downloadButton
                linkBUtton
                aboutData {
                    iconName
                    id
                    label
                    value
                }
            },
            file(relativePath: {eq: "images/banner/person-image-2.jpg"}) {
                childImageSharp {
                  fixed (quality: 100, width: 395, height: 470) {
                    ...GatsbyImageSharpFixed
                  }
                }
            }
        }
    `);

    const PortfolioImages = aboutQueryData.file.childImageSharp.fixed;
    const title = aboutQueryData.homedefaultJson.title;
    const description = aboutQueryData.homedefaultJson.description;
    const downloadButton = aboutQueryData.homedefaultJson.downloadButton;
    const linkBUtton = aboutQueryData.homedefaultJson.linkBUtton;

    return (
        <div className="rb-about-area about-style-01 rn-section-gap bg-color-white" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <span className="subtitle">BIOGRAPHY</span>
                            <h2 className="title">ABOUT ME</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--60 mb--30 row--25">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="thumbnail">
                            <div className="image">
                                <Img className="portfolio-images" fixed={PortfolioImages} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12 mt_md--40 mt_sm--40">
                        <div className="inner">
                            <div className="content">
                                <div className="section-title">
                                    {title && <h3 className="title" dangerouslySetInnerHTML={{ __html: title }}></h3>}
                                    {description && <p className="description" dangerouslySetInnerHTML={{ __html: description }}></p>}
                                </div>
                                {infoList &&
                                    <ul className="myabout-list">
                                        {infoList.map((value, index) => (
                                            <div className="list" key={index}>
                                                <div className="icon">{value.icon}</div>
                                                <span className="label">{value.label}</span>
                                                <a className="link" href="#labelvalue">{value.link}</a>
                                            </div>
                                        ))}
                                    </ul>
                                }
                                <div className="button-group mt--20">
                                    {downloadButton && <a className="rn-button" href="#downloadbutton"><span>{downloadButton}</span></a>}
                                    {linkBUtton && <a className="rn-button" href="#linkbutton"><span>{linkBUtton}</span></a>}
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
