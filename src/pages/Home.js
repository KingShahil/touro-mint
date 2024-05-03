import React from 'react'
import Header from '../components/header/Header';
import About from "../components/about/AboutSection"
import Destination from "../components/destinations/Destination"
import Card from "../components/cards/Card"
import Footer from "../components/footer/Footer"
import Main from "../components/main/Main"
import Airlines from '../components/airlines/AirlinesSections';

const Home = () => {
  return (
    <>
    <Header/>
    <Main/>
    <About/>
    <Destination/>
    <Airlines/>
    <Card/>
    <Footer/>
    </>
  )
}

export default Home