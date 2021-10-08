import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Projectcard from "./projectcard";

const ProjectOne = () => {
    const ProjectData = useStaticQuery(graphql`
        query ProjectDataQuery {
            allProjectJson(limit: 6) {
                edges {
                  node {
                    id
                    title
                    category
                    featured_image {
                        childImageSharp {
                            fluid(maxWidth: 370, maxHeight: 340, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                                presentationWidth
                                presentationHeight
                            }
                        }
                    }
                  }
                }
            }
        }
    `);

    const projectsData = ProjectData.allProjectJson.edges;
    return (
        <div className="row row--25">
            {projectsData.map( data => (
                <Projectcard key={data.node.id}
                    column="col-lg-4 col-md-6 col-12"
                    portfolioStyle="portfolio-style-1"
                    key={data.node.id} 
                    id={data.node.id}
                    image={data.node.featured_image.childImageSharp}
                    title={data.node.title}
                    category={data.node.category}
                />
            ))}
        </div>
    )
}

export default ProjectOne;