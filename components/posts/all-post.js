import React from 'react'
import classes from './all-post.module.css'
import PostGrid from './post-grid'

function AllPost(props) {
  console.log('AllPost', props)
  return (
    <section className={classes.posts}>
      <h1>All Post</h1>
      <PostGrid posts={props.posts}></PostGrid>
    </section>
  )
}

export default AllPost
