import React, { useState } from 'react'
import classes from './contact-form.module.css'
import Notification from '../ui/notification'

export default function contactForm() {
  const [enteredEmail, setEmail] = useState('')
  const [enteredName, setName] = useState('')
  const [enteredMessgae, setMessage] = useState('')
  const [requeststate, setrequest] = useState('')
  const [stateErro, setError] = useState()

  async function sendContactData(contactDetails) {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contactDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.message || ' Something went wrong')
    }
  }

  async function submitHandler(event) {
    event.preventDefault()
    setrequest('pending')
    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessgae,
      })
      setrequest('success')
    } catch (error) {
      setrequest('error')
      setError(error)
    }
  }
  let notificationData
  if (requeststate === 'pending') {
    notificationData = {
      status: 'pending',
      title: 'Sending messgae',
      message: ' Your message on the way !',
    }
  }
  if (requeststate === 'success') {
    notificationData = {
      status: 'success',
      title: 'Success!',
      message: ' Your message Successfully store!',
    }
  }
  if (requeststate === 'error') {
    notificationData = {
      status: 'error',
      title: 'Error!',
      message: stateErro,
    }
  }
  return (
    <section className={classes.contact}>
      <h1>How can I Help You?</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              required
              value={enteredEmail}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setName(event.target.value)}
            ></input>
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            row="5"
            required
            value={enteredMessgae}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div className={classes.actions}>
          <button>Send message</button>
        </div>
      </form>
      {notificationData && (
        <Notification
          status={notificationData.status}
          title={notificationData.title}
          message={notificationData.message}
        />
      )}
    </section>
  )
}
