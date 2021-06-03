import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPage = ({ data }) => (
    <Layout>
        <Seo title="Blog"></Seo>
        <h1>Latest Posts</h1>
        {
            data.allMarkdownRemark.edges.map(({ node }) => 
                <div key={ node.id } style={{ marginBottom: 30}}>
                    <h3 style={{ marginBottom: 10 }}>{ node.frontmatter.title }</h3>
                    <small style={{ marginBottom: 20 }}>Posted by { node.frontmatter.author } on { node.frontmatter.date }</small>
                    <p>{ node.excerpt }</p>
                    <Link to={ node.frontmatter.path }>Read More</Link>
                    <br /><br />
                    <hr />
                </div>
            ).reverse()
        }
    </Layout>
)

export const pageQuery = graphql`
        query BlogIndexQuery {
            allMarkdownRemark {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            path
                            date
                            author
                        }
                        excerpt
                    }
                }   
            }
        }
    `

export default BlogPage
