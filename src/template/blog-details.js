import React from 'react';
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import Layout from "../components/layout";
import { slugify } from "../utils/utilityFunctions";
import { DiscussionEmbed } from 'disqus-react';


const BlogDetails = ({data, pageContext}) => {
    const {
        title , image, tags, category
    } = data.markdownRemark.frontmatter;
    const imageSrc = image.childImageSharp;
    const {html} = data.markdownRemark;
    
    const baseUrl = 'https://gatsbytutorial.co.uk/'
    const disqusShortname = 'https-gatsbytutorial-co-uk';
    const disqusConfig = {
        url: baseUrl + pageContext.slug,
        identifier: data.markdownRemark.id,
        title: title,
    };


    return (
        <Layout>
            <div className="blog-details-wrapper pt--70 pb--100 bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="post-image">
                                <Img fluid={imageSrc.fluid} alt={title}/>
                            </div>
                            <div className="post-single-title">
                                <h1 className="post-title">{title}</h1>
                            </div>
                            <div className="post-content" dangerouslySetInnerHTML={{__html: html}}/>
                            <div className="tag-list d-flex align-items-center">
                                <span>Tags:</span>
                                <div className="tags-cloud">
                                    {tags.map((tag) => (
                                        <a key={tag} href={`/tag/${slugify(tag)}`}>{tag}</a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-contact-form">
                                <div className="social-share-inner text-center pt--50">
                                    <h3>Share This Post</h3>
                                    <ul className="social-share-links liststyle d-flex justify-content-center">
                                        <li>
                                            <a className="facebook" target="_blank" rel="noopener noreferrer" href={'https://www.facebook.com/sharer.php?u=' + 
                                            baseUrl + 
                                            pageContext.slug
                                            }>
                                                <span>facebook</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a className="twitter" target="_blank" rel="noopener noreferrer" href={'https://www.twitter.com/share?url=' + 
                                            baseUrl + 
                                            pageContext.slug +
                                            '&text=' +
                                            title +
                                            '&via' +
                                            'twitterHandle'

                                            }>
                                                <span>Twitter</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a className="google" target="_blank" rel="noopener noreferrer" href={'https://plus.google.com/share?url=' + 
                                            baseUrl + 
                                            pageContext.slug

                                            }>
                                                <span>Google</span>
                                            </a>
                                        </li>

                                        <li>
                                            <a className="linkedin" target="_blank" rel="noopener noreferrer" href={'https://www.linkedin.com/shareArticle?url=' + 
                                            baseUrl + 
                                            pageContext.slug
                                            }>
                                                <span>linkedin</span>
                                            </a>
                                        </li>

                                    </ul>
                                </div>

                                <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </Layout>
    )
}

export const blogDetailsData = graphql`
query blogDetailsQuery ($slug: String!) {
    markdownRemark (fields: { slug: { eq: $slug } }) {
        id
        html
        fields {
            slug
        }
        frontmatter {
            author {
                name
            }
            category
            title
            date(formatString: "MMM Do, YYYY")
            format
            tags
            image {
                    childImageSharp {
                        fluid(quality: 100, maxHeight: 350, maxWidth: 510) {
                        ...GatsbyImageSharpFluid_withWebp
                        presentationHeight
                        presentationWidth
                    }
                }
            }
        }
    }
}
`

export default BlogDetails;
