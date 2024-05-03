import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/main/Main'
import AirlinesO from '../secondaryPage/AirlinesO'
import AirlinesSections from '../components/airlines/AirlinesSections'

const Airlines = () => {
  return (
    <>
     <div className='container-fluid'>
    <Header/>
    <Main/>
    <AirlinesO/>
    <AirlinesSections/>
    <Footer/>
    </div>
    </>
  )
}

export default Airlines