import React, { useEffect } from 'react'
import Head from 'next/head'
import Hero from '../components/homePage/hero'
import FeaturedPosts from '../components/homePage/featured-post'
import { getFeaturedPosts } from '../lib/post-utils'

function HomePage(props) {
  const { posts } = props
  return (
    <React.Fragment>
      <Head>
        <title>Pritam</title>
        <meta name="descriptions" content="web development" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </React.Fragment>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()
  return {
    props: {
      posts: featuredPosts,
    },
  }
}

export default HomePage
