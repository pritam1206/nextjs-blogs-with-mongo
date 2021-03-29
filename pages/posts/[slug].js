import React, { Fragment } from 'react'
import Head from 'next/head'
import PostContent from '../../components/posts/post-detail/post-content'

import { getPostData } from '../../lib/post-utils'

export default function PostDeatilsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="descriptions" content={props.post.excerpt}></meta>
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  )
}

export function getStaticProps(context) {
  const { params } = context
  const { slug } = params
  const postData = getPostData(slug)
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  }
}
export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
