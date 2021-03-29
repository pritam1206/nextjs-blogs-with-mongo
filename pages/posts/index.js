import React, { Fragment } from 'react'
import Head from 'next/head'
import AllPost from '../../components/posts/all-post'
import { getAllPosts } from '../../lib/post-utils'

export default function AllPostPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content=" All programing posts" />
      </Head>
      <AllPost posts={props.posts} />
    </Fragment>
  )
}

export function getStaticProps(params) {
  const allPost = getAllPosts()
  return {
    props: {
      posts: allPost,
    },
  }
}
