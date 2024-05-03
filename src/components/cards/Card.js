import React from 'react'
import "./Card.css"

const Card = () => {
  return (
    <>
    <div className="container-fluid choose-us text-center bg-grey">
    <div className="container py-4">
      <h2 className="middle-heading mb-4">Choose Us to Get</h2>
      <div className="row g-2">
        <div className="col-md-3 text-center">
          <div className="py-2 p-2 bg-white br-15 box-shadow-1">
            <img src="https://www.flyngoo.com/img/why-choose-us/icon1.png" alt="Cheap Booking Fares" title="" /><br />
            <strong className="text-dark">Best Flight Fares</strong>
            <p className="text-dark mt-2 fs-14">Get the most attractive flight fares on all airlines!</p>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="py-2 p-2 bg-white br-15 box-shadow-1">
            <img src="https://www.flyngoo.com/img/why-choose-us/icon2.png" alt="Exciting Travel Deals" title="" /><br />
            <strong className="text-dark">Easy Booking </strong>
            <p className="text-dark mt-2 fs-14">With user-friendly interface, booking is One-click-away!</p>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="py-2 p-2 bg-white br-15 box-shadow-1">
            <img src="https://www.flyngoo.com/img/why-choose-us/icon4.png" alt="Effortless Bookings" title="" /><br />
            <strong className="text-dark">Top Destinations</strong>
            <p className="text-dark mt-2 fs-14">Visit all the major destinations of the world, in budget!</p>
          </div>
        </div>
        <div className="col-md-3 text-center">
          <div className="py-2 p-2 bg-white br-15 box-shadow-1">
            <img src="https://www.flyngoo.com/img/why-choose-us/icon3.png" alt="24x7 Customer Services" title="" /><br />
            <strong className="text-dark mt-1">24*7 Assistance</strong>
            <p className="text-dark mt-2 fs-14">Our Travel Experts are at your service, around-the-clock!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Card