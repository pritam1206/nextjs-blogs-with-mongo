import React from 'react'
import Image from 'next/image'
import classes from './hero.module.css'

export default function HeroPage() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/sit/event.jpg"
          alt="No Image"
          width={300}
          height={300}
        ></Image>
      </div>
      <h1> Hi , I'm Pritam</h1>
      <p>I blog About Next js</p>
    </section>
  )
}
