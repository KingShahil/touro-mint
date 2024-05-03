import React from 'react'
import Header from '../components/header/Header'
import Main from "../components/main/Main"
import ContactUs from "../secondaryPage/ContactUs"
import Footer from '../components/footer/Footer'
import Airlines from '../components/airlines/AirlinesSections'

const Contact = () => {
  return (
    <>
     <div className='container-fluid'>
    <Header/>
    <Main/>
    <ContactUs/>
    <Airlines/>
    <Footer/>
    </div>
    </>
  )
}

export default Contact