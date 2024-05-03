import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/main/Main'
import CheapFlightO from "../secondaryPage/CheapFlightO";

const CheapFlight = () => {
  return (
    <>
     <div className='container-fluid'>
    <Header/>
    <Main/>
    <CheapFlightO/>
    <Footer/>

    </div>
    </>
  )
}

export default CheapFlight