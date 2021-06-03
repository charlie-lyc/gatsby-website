import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'


const Template= ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <Seo title="Post"></Seo>
            <Link to='/blog'>Go Back</Link>
            <hr />
            <h1>{ post.frontmatter.title }</h1>
            <h4>Posted by { post.frontmatter.author } on { post.frontmatter.date }</h4>
            <div dangerouslySetInnerHTML={{ __html: post.html}}></div>
        </Layout>
    )
}

/* path가 일치하는 markdownRemark 데이터를 찾는 query 작성 */
export const postQuery = graphql`
        query BlogPostByPath($path: String!) {
            markdownRemark(frontmatter: { path: { eq: $path } }) {
                html
                frontmatter { 
                    title
                    path
                    date
                    author
                }
            }
        }
    `


export default Template
