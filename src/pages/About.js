import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/main/Main'
import AboutUs from '../secondaryPage/AboutUs'
import Destination from "../components/destinations/Destination"

const About = () => {
  return (
    <>
    <div className='container-fluid'>
    <Header/>
    <Main/>
    <AboutUs/>
    <Destination/>
    <Footer/>
</div>
    </>
  )
}

export default About