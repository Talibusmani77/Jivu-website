import React from 'react'
import AreaOfExcellenceSlider from './AreaOfExcellenceSlider'
import BlogNewsCarousel from './BlogNewsCarousel'
import ContactUs from './ContactUs'
import HeroSection from './HeroSection'
import TeamPage from './TeamPage'
import TestimonialsPage from './TestimonialsPage'


function Home() {
  return (
    <div>
      <HeroSection videoSource="/vdo.mp4" />
      <AreaOfExcellenceSlider/>
      <BlogNewsCarousel/>
      <TestimonialsPage/>
      <TeamPage/>
      <ContactUs/>
    </div>
  )
}

export default Home