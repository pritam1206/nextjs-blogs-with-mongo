import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import classes from './post-item.module.css'

export default function PostItem(props) {
  console.log(props)
  const { title, image, excerpt, date, slug } = props.post
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const Imagepath = `/images/posts/${slug}/${image}`
  const linPath = `/posts/${slug}`
  console.log(Imagepath)
  return (
    <Link href={linPath} clasName={classes.post}>
      <a>
        <div className={classes.image}>
          <Image
            src={Imagepath}
            alt="No Image"
            width={300}
            height={200}
            layout="responsive"
          ></Image>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </a>
    </Link>
  )
}
