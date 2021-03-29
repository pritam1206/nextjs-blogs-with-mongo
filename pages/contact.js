import React from 'react'
import Head from 'next/head'
import Contact from '../components/contanct/contact-form'

export default function ContactPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Contact me!</title>
        <meta name="contact" content="send me your Message" />
      </Head>
      <Contact />
    </React.Fragment>
  )
}
