import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage<IProps> = ({ allFeedback }) => {
  const [email, setEmail] = React.useState("")
  const [feedback, setFeedback] = React.useState("")
  const [renderedFeedback, setRenderedFeedback] = React.useState(JSON.parse(allFeedback))
  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    try {
      // Send to an API
      const response = await fetch("/api/feedback", {
        method: "POST",
        body: JSON.stringify({
          email,
          feedback
        })
      })

      const data = await response.json()

      setEmail("")
      setFeedback("")
      const newFeedback = [...renderedFeedback]
      newFeedback.push(JSON.parse(data.feedback))
      setRenderedFeedback(newFeedback)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows={5} value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <ul>
        {renderedFeedback.map((feedback: Feedback) => <li key={feedback.id}>{feedback.feedback}</li>)}
      </ul>
    </div>
  )
}

interface Feedback {
  id: string,
  email: string,
  feedback: string
}

interface IProps {
  allFeedback: Feedback[]
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/feedback`)
  const data = await response.json()

  const { allFeedback } = data

  return {
    props: {
      allFeedback
    }
  }
}

export default Home
