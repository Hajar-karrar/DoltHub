import React from 'react'
import './NotFound.css';

export default function NotFound() {
  return (
    <div>
      <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! The page you are looking for does not exist.</p>
      <a href="/" className="not-found-link">Back to home</a>
    </div>
    </div>
  )
}
