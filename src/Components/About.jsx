import React from 'react'

export default function About() {
  return (
    <div className="container my-5">
      <h1>About TextUtils</h1>
      <p>
        TextUtils is a simple utility app built with <strong>React.js</strong> that helps
        you analyze and transform your text. You can easily convert text to uppercase,
        lowercase, remove extra spaces, copy to clipboard, and more.
      </p>

      <h2>Owner Information</h2>
      <ul>
        <li><strong>Name:</strong> Amit Singh</li>
        <li><strong>Email:</strong> <a href="mailto:amit.kushwanshi0007@gmail.com">amit.kushwanshi0007@gmail.com</a></li>
      </ul>
    </div>
  )
}
