import React from 'react'
import PostGrid from '../posts/post-grid'
import classes from './featured.module.css'

export default function FeaturedPost(props) {
  console.log('props', props)
  return (
    <section className={classes.latest}>
      <h2> FeaturedPost</h2>
      <PostGrid posts={props.posts} />
    </section>
  )
}
