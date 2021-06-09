import { useState, useEffect } from 'react'
import React from 'react';
import { Header } from './header'
import {Works } from './works'
import { About } from './about'
import { Gallery } from './gallery'
import Card from './cads/Cards';
import { Learn } from './learn'
import { Team } from './Team'
import { Blog } from './blog'
import { Testimonials } from './testimonials'
import { Features } from './features'
import { Contact } from './contact';
import JsonData from '../data/data.json'
import SmoothScroll from 'smooth-scroll'



export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

export const Home = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
 
}, [] ) 
  return (
    <div>
      <Header data={landingPageData.Header} />
      <Works data={landingPageData.Works} />
      <About data={landingPageData.About} />
      <Gallery />
      <Card data={landingPageData.Card} />
      <Learn data={landingPageData.Learn} />
      <Team data={landingPageData.Team} />
      <Blog data={landingPageData.Blog} />
      <Testimonials data={landingPageData.Testimonials} />
      <Features data={landingPageData.Features} />
      <Contact data={landingPageData.Contact} />
     
    </div>
  )
}

export default Home
