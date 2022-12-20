import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Customer Paradigm Producer</title>
        <meta property="og:title" content="Customer Paradigm Producer" />
      </Helmet>
    </div>
  )
}

export default Home
