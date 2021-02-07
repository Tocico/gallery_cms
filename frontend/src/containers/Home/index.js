import React from 'react'
import Galleries from '../Galleries'
import About from '../../components/About'
import Hero from '../../components/Hero'
import Overlay from '../../components/Overlay'

const Home = () => {
  return (
    <div className='home'>
      <Overlay />
      <Hero />
      <About />
      <Galleries />
    </div>
  )
}

export default Home
