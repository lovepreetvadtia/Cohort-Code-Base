import React from 'react'
import { Link, useParams } from 'react-router-dom'

const NoService = () => {
    useParams()
  return (
    <div>
        <h1>Searched... Service Not Available</h1>
        <p>You can see out availble services</p>
        <Link to='services/seo'>SEO</Link>
        <Link to='services/web-design'>Web Design</Link>
    </div>
  )
}

export default NoService