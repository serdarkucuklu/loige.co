import React, { Component } from 'react'
import styled, { css } from 'react-emotion'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Hero from '../components/Hero'
import PostsList from '../components/PostsList'
import tagsBg from '../components/images/tags-bg.png'

const HeroContent = styled('div')`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-weight: 700;
  color: #FFF;
  padding: 0 2em;

  color: white;
  text-shadow:
    1px 3px 0 #000,
   -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;

  @media (min-width: 780px) {
    font-size: 1.2em;
  }
`

const Content = styled('div')`
  min-height: 100vh;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  max-width: 820px;
  flex-direction: column;

  @media (min-width: 780px) {
    width: 90%;
  }
`

const heroStyle = css`
  background-size: auto;
  background-repeat: repeat;
  max-height: 400px;
  position: relative;
  z-index: -2;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom right,#46c9e5,#d26ac2);
    opacity: .6;
    z-index: -1;
  }
`

class TagIndex extends Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const { tag, posts } = this.props.pageContext

    return (
      <Layout location={this.props.location} section="blog">
        <Helmet title={siteTitle} />
        <Hero className={heroStyle} backgroundImage={tagsBg}>
          <HeroContent>
            <h1>#{tag}</h1>
            <h2>{posts.length} post{posts.length > 1 ? 's' : ''} in this collection</h2>
          </HeroContent>
        </Hero>
        <Content>
          <PostsList posts={posts}/>
        </Content>
      </Layout>
    )
  }
}

export default TagIndex

export const pageQuery = graphql`
  query TagIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`