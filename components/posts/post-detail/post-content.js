import React from 'react'
import ReactMarkdown from 'react-markdown'
import PostHeader from './post-header'
import classes from './post-content.module.css'

function PostContent(props) {
  console.log(props.post)
  const imagePath = `/images/posts/${props.post.slug}/${props.post.image}`
  return (
    <article className={classes.content}>
      <PostHeader title={props.post.title} image={imagePath} />
      <ReactMarkdown>{props.post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
