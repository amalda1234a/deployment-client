import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
        <h1>About</h1>
        <p>This is the about page.</p>
        <Link to="/">back to home</Link>
    </div>
  )
}

export default About