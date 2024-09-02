import React from 'react'
import Hero from '../components/Hero'
import JoinUs from '../components/JoinUs'
import Social from '../components/Social'
import Services from '../components/Services'
import Update from '../components/Update'
import Follow from '../components/Follow'

const Home = () => {
  return (
    <div>
        <Hero/>
        <JoinUs/>
        <Social/>
        <Services/>
        <Update/>
        <Follow/>
    </div>
  )
}

export default Home